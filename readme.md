## screeps

My code for my Screeps account- feel free to use, copy, etc. No guarantee that the code won't drive your colony into the ground though ;)

### main.js

**The _goal_ of this code-base is that all interaction with the player will be via Memory, not hard-coded... this is a work in progress!** This is the next step for this codebase, since it originally pulled all definitions from a custom "main.js"... well, now things are a bit more automated... but some advanced functions still need to be hard-coded into main.js as I work on porting them to Memory...

#### Colonies 
Rooms that you own a controller in are automatically run with a preset population of creeps adjusted based on room controller level (RCL) and whether the colony is being assisted in spawning from another, adjacent room. Colony populations are automatically spawned (so long as there is a spawn present! or a room assisting in spawning!) and creeps get to work on construction sites and upgrading the room controller.

#### In-Colony Mining (Local Mining)
Just like colonies are automatically run and populated with a preset population, so is local mining. Miners will spawn and mine based on room level (RCL)... low level colonies utilize miners (all-in-one mining creeps) and mid-level and high-level rooms utilize burrowers and carriers (seperate creeps for mining the source then carrying the energy to storage).

#### What You Need To Do
Though colonies and local mining currently run independently, **construction sites need to be placed manually, including spawns**. Higher level functions for colonies and spawning are available, such as spawning from an adjacent room (spawn_rooms), routing creeps through a complex series of rooms to assist another colony with spawning (spawn_route), and creating somewhat complex link systems in rooms that are only accessed by either miners or workers (link_definitions). For more information on this, please read the comments placed in main.js- they offer more instruction on how to set the parameters in your Memory.
... Though I aim to have colonies place construction sites automatically, that is not next on my list of automation tasks, unfortunately...

Currently, sending a creep with a "claim" part to claim another room as your colony is not currently automated in any way... When you are ready to expand to another room, you can place a line in main.js to spawn a "reserver" it looks like 

`Sites.Reservation("orig_room", "target_room")`

... once the reserver gets to the destination room controller, you can use the console to command the reserver to claim the room controller: 

`Game.getObjectById("creep_ID").claimController(Game.getObjectById("controller_ID"));`

... In the future, I will be simplifying this a lot... soon...

Although local mining is run automatically in any room you own a controller, remote mining still needs to be defined in main.js. To do that, you need to set up a line that looks like this:

`Sites.Mining("colony_room", "harvest_room");`

and it's pretty much that simple. The creep population for the remote mining is automatically chosen, but more complex operations are definitely possible and a few fields are read from Memory, including adjacent room assistance with spawning, spawning of soldiers to accompany miners in rooms that have source keepers, and custom populations for the mining operation, all set through Memory. I plan to add a how-to in the future.

### Spawning and Creep "Levels"

Using the spawn\_rooms Memory fields that can be custom set, the codebase iterates through each spawn and attempts to spawn creeps in order of priority, and within either the colony or any rooms on spawn\_rooms list. This allows a brand new colony to have its creeps spawned from an existing colony several rooms away, or allows multiple established colonies to share the burden of spawning if one colony lacks the energy.

For resource management- to save energy and spawn time- I equated a room's control level ("RCL") with creep "levels" to make sense of spawning. A room may be RCL 6 but only need a level 4 repairer to keep up with the work of repairing structures. If every creep, miner, and remote miner for an RCL 6 room (with 1 spawn) were to be at creep level 6, the spawn may not be able to keep up with the population demand!

### Population Demand

If a colony isn't doing so well- maybe its remote mine was attacked, its colony ran out of energy, or a server restart wiped out the population. Each time the codebase goes to spawn a creep, it tallies up the ideal requested population (a total of listPopulation for all Sites based in that room) and sees how much of the goal population even exists. If main.js defines that W18S43 should have 20 creeps between its colony, mining, and remote mining... but only 10 exist... which means it is at 50% of its goal, then it will spawn the next creep at 50% of its target level. So if the next creep was to have 30 body parts, then it will only spawn with 15. As a colony fills its population to 100%, the spawns will spawn at 100% of the target creep level. For this reason, without needing any adjustments to the code in main.js, a colony can die off (due to attack, lack of energy, server restart) and still revive itself. Miners and burrowers are one of the first to spawn, and they will spawn at low levels with few body parts, and work to renew the colony to its full operations.

### Task System

To save CPU and prevent 3 creeps from trying to do a job that only takes 1 creep, I implemented a task system. Every pulse cycle (see "Pulsing"- but at a full CPU bucket, this is roughly every 8 ticks), the codebase scans all active rooms and compiles a task list to memory. Every creep without a task will search through the task list and pick up a task. Some tasks have a creep limit of 1 or 2 creeps, to limit 2 creeps from picking up the same small pile of energy. Creeps will continue to run the task until it is complete or until a specified timer runs out. Tasks are also automatically sorted by priority, for example, carriers will deposit energy into the spawn before depositing excess into storage. The Sites.Industry() system also creates tasks of an "industry" type for couriers (mineral carriers) to load and unload labs, terminals, and storage.

### Pulsing

Though the task system helps creeps stay organized as a group, iterating every room and creating a new task list each tick would chew through CPU very quickly. Compiling tasks and processing terminal orders are done on a "pulse" defined by Hive.isPulse(). If the CPU bucket (Game.cpu.bucket) is full, it will pulse every ~8 ticks. If the CPU bucket is half empty, it will pulse every ~30 seconds. If you are entirely out of CPU, it will pulse every ~1 minute. By scaling its CPU usage through pulsing, the codebase won't chew through all your CPU. Depending on how efficient your code edits are, or if you overload your CPU with a massive amount of creeps, you may need to change the frequency of pulses.

### Industry

#### Labs

So you have some minerals and want your labs to process them? Or boost your creeps? ... well rooms of RCL 6 and above automatically will spawn a courier that will run minerals to labs and terminals for managing reactions. The codebase actually lets you specify in Memory what your goal minerals are, and it will automatically set up reactions in your labs. Note: this is an empire-wide process, _not_ specific to each room- couriers in all of your rooms will start shipping reagents via terminals to different rooms to fill labs to run reactions, automatically!! There is no need for you to manually move minerals except if you want to send them to your friends.

To set reaction targets: 

`Memory.labs.targets["custom_name"] = { mineral: "mineral_abbreviation", amount: ##, priority ##: };`

#### Terminals

Once you have reach RCL 6 a courier will spawn and begin to automatically do a lot of functions for you. For example, if you set up mineral reactions, the code will automatically request other rooms with terminals to load any excess minerals used for the reaction, and send it over! Also, if any rooms have an excess of energy, you can set

`Memory.resources.to_overflow] = 100000;`

and any rooms with more energy than the limit (in this example: 100,000) will start automatically loading and sending the energy to a terminal in a room with the least amount of energy, balancing out the amount of energy in your empire. 

The codebase also will automatically off-load excess minerals and energy, selling them to the market to the highest bidder, but only if you enter manually into Memory the limit at which you want excess minerals to be sold. This is great for selling excess basic minerals, and you can always manually enter market trades for minerals that you don't include in automatic sales. To set up automatic market selling, you can use the following command on the console:

`Memory.resources.to_market = { energy: 1750000, O: 250000, H: 250000, U: 200000, L: 200000, Z: 200000, K: 200000 });`

Terminals also process manually entered terminal orders, which you can use to send resources to friends, by using the following manual entries in the console:

* For internal transfers (among your own rooms or to your friends or private trades):

`Memory["terminal_orders"]["custom_name"] = { room: "sending_room", resource: "resource_name", amount: ##, from: "sending_room", priority: 1};`
	
* For manual market trading (fulfilling existing buy/sell orders from other players):

`Memory["terminal_orders"]["custom_name"] = { market_id: "the_id!", amount: ##, from: "selling_room", priority: 4};`
`Memory["terminal_orders"]["custom_name"] = { market_id: "the_id!", amount: ##, to: "buying_room", priority: 4};`

and your courier will to load/unload the terminal, and send/receive minerals and energy to fulfill all terminal orders!

### Attack & Defense

#### Allies

Don't forget to define your allies Memory, but be careful who you add! Your list of allies is a group of players whose creeps will be able to move through your rooms and interact with your creeps and structures without setting off your defenses. Allies can be set like this:

`Memory["allies"] = ["player_one", "player_two", "et_cetera"];`

#### Active Defenses

There are several basic automatic defenses built into the code. Towers will choose an enemy creep that enters your rooms and fire on them, so long as they are supplied with energy! When enemy creeps invade your rooms, including your remote mining rooms, soldiers are spawned and sent after the enemy until they are destroyed. All of these basic defenses function automatically.

#### Passive Defenses

Passive defenses (walls and ramparts) are also an integral part of your room's defenses. When you construct a wall or rampart and have a worker or repairer available with energy, it is automatically set to build and repair your walls to a minimum "critical" hitpoint level, and then- as available- repair them to a target "maintenance" hitpoint level. The amount of hitpoints that the code will automatically aim for scales depending on your room's controller level (RCL), from 10K hitpoints at RCL1 to 1M hitpoints at RCL8. 

You can also specify the target hitpoint goal for a specific tile or wall or rampart by adding a value to its memory setting at 

`Memory.rooms[rmName].structures[${s.structureType}-${s.id}].targetHits`

An example of a quick way to set a room's walls (e.g. W18S43, all walls and ramparts along x == 2) to a custom target hitpoint goal (e.g. 5M)- all via the console- would be:

```
_.each(Game.rooms.W18S43.find(FIND_STRUCTURES, { filter: (s) => { return s.pos.x == 2 && (s.structureType == "constructedWall" || s.structureType == "rampart"); } }), s => { _.set(Memory, ["rooms", s.pos.roomName, "structures", `${s.structureType}-${s.id}`, "targetHits"], 5000000); });
```

#### Invading a Room

There is code written to launch an attack on another room- simply add a Sites.Invasion() to your main.js with the proper arguments (found in sites.invasion.js) and the code will spawn the requested army, rally at a designated spot, move in once assembled, and attack a pre-defined list of targets or automatically attack enemy structures in order of importance! Useful for taking somebody elses' rooms...

#### Occupying a Room

Rarely used but useful when needed, you can keep a continuous occupation of a room by adding a Sites.Occupation() to your main.js with the proper arguments (found in sites.occupation.js). This is useful for when you want to clear out structures in a room from a previous player (before claiming it yourself!), or if you want to disrupt an enemy's supply route or remote mining operations, sieging their room in preperation for an attack!











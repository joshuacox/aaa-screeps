var utilCreep = {

    getBody: function(type, level) {
        switch (type) {
            case 'soldier': return utilCreep.getBody_Soldier(level);
            case 'worker': return utilCreep.getBody_Worker(level);
            case 'burrower': return utilCreep.getBody_Burrower(level);
            case 'carrier': return utilCreep.getBody_Carrier(level);
            case 'reserver': return utilCreep.getBody_Reserver(level);
        }
    },

    getBody_Soldier: function(level) {
        switch (level) {
            case 1:
                return [ // 190 energy, 1x TOUGH, 1x ATTACK, 2x MOVE
                        TOUGH, MOVE,   
                        MOVE, ATTACK]; 
            case 2:
                return [ // 380 energy, 2x TOUGH, 2x ATTACK, 4x MOVE
                        TOUGH, TOUGH, MOVE, MOVE,
                        MOVE, ATTACK, MOVE, ATTACK]; 
            case 3:
                return [ // 570 energy, 3x TOUGH, 3x ATTACK, 6x MOVE
                        TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, 
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK]; 
            case 4:
                return [ // 950 energy, 5x TOUGH, 5x ATTACK, 10x MOVE
                        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, 
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK];
            case 5:
                return [ // 1390 energy, 8x TOUGH, 7x ATTACK, 15x MOVE
                        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,  
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, 
                        MOVE, ATTACK, MOVE, ATTACK]; 
            case 6:
                return [ // 1720 energy, 10x TOUGH, 8x ATTACK, 18x MOVE
                        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, 
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK];
            case 7:
                return [ // 3250 energy, 25x MOVE, 25x ATTACK
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, 
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK];
            case 8:
                return [ // 3250 energy, 25x MOVE, 25x ATTACK
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, 
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK,
                        MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK];
        }
    },

    getBody_Archer: function(level) {
        switch (level) {
            case 1:
                return [ // 260 energy, 1x TOUGH, 1x RANGED_ATTACK, 2x MOVE
                        TOUGH, 
                        MOVE, MOVE, 
                        RANGED_ATTACK]; 
            case 2:
                return [ // 460 energy, 1x TOUGH, 2x RANGED_ATTACK, 3x MOVE
                        TOUGH, 
                        MOVE, MOVE, MOVE, 
                        RANGED_ATTACK, RANGED_ATTACK]; 
            case 3:
                return [ // 720 energy, 2x TOUGH, 3x RANGED_ATTACK, 5x MOVE
                        TOUGH, TOUGH, 
                        MOVE, MOVE, MOVE, MOVE, MOVE, 
                        RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]; 
            case 4:
                return [ // 1120 energy, 2x TOUGH, 5x RANGED_ATTACK, 7x MOVE
                        TOUGH, TOUGH, 
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, 
                        RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK];
            case 5:
                return [ // 1580 energy, 2x TOUGH, 5x RANGED_ATTACK, 7x MOVE
                        TOUGH, TOUGH, TOUGH,  
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK]; 
            case 6:
                return [ // 2020 energy, 7x TOUGH, 8x RANGED_ATTACK, 15x MOVE
                        TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, 
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, 
                        MOVE, MOVE, MOVE, MOVE, MOVE,
                        RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK];
            case 7:
                return [ // 4000 energy, 20x RANGED_ATTACK, 20x MOVE                                                 
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, 
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, 
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, 
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK];
            case 8:
                return [ // 5000 energy, 25x RANGED_ATTACK, 25x MOVE
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, 
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, 
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK,  
                        MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK];
        }
    },
    
    getBody_Healer: function(level) {
        switch (level) {
            case 1:
            case 2:
                return [ // 300 energy, 1x HEAL, 1x MOVE
                        MOVE, HEAL];  
            case 3:
                return [ // 600 energy, 2x HEAL, 2x MOVE
                        MOVE, MOVE, 
                        HEAL, HEAL]; 
            case 4:
                return [ // 1200 energy, 4x HEAL, 4x MOVE
                        MOVE, MOVE, MOVE, MOVE,
                        HEAL, HEAL, HEAL, HEAL]; 
            case 5:
                return [ // 1500 energy, 5x HEAL, 5x MOVE
                        MOVE, MOVE, MOVE, MOVE, MOVE,
                        HEAL, HEAL, HEAL, HEAL, HEAL]; 
            case 6:
                return [ // 2100 energy, 7x HEAL, 7x MOVE
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL]; 
            case 7:
                return [ // 4500 energy, 15x HEAL, 15x MOVE
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE,
                        HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,
                        HEAL, HEAL, HEAL, HEAL, HEAL]; 
            case 8:
                return [ // 6000 energy, 20x HEAL, 20x MOVE
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,
                        HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL]; 
        }
    },

    getBody_Worker: function(level) {
        switch (level) {
            case 1:
                return [ // 300 energy, 1x WORK, 2x CARRY, 2x MOVE
                    WORK,  
                    CARRY, CARRY, 
                    MOVE, MOVE]; 
            case 2:
                return [ // 450 energy, 1x WORK, 4x CARRY, 5x MOVE
                        WORK,  
                        CARRY, CARRY, CARRY,  
                        MOVE, MOVE, MOVE, MOVE]; 
            case 3:
                return [ // 700 energy, 2x WORK, 4x CARRY, 6x MOVE
                        WORK, WORK,  
                        CARRY, CARRY, CARRY, CARRY, 
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
            case 4:
                return [ // 1100 energy, 4x WORK, 5x CARRY, 9x MOVE
                        WORK, WORK, WORK, WORK, 
                        CARRY, CARRY, CARRY, CARRY, CARRY, 
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
            case 5:
                return [ // 1600 energy, 6x WORK, 7x CARRY, 13x MOVE
                        WORK, WORK, WORK, WORK, WORK, WORK, 
                        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, 
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE]; 
            case 6:
                return [ // 1950 energy, 7x WORK, 9x CARRY, 16x MOVE
                        WORK, WORK, WORK, WORK, WORK, WORK, WORK, 
                        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, 
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
            case 7:
                return [ // 3100 energy, 12x WORK, 13x CARRY, 25x MOVE
                        WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, 
                        WORK, WORK,  
                        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, 
                        CARRY, CARRY, CARRY,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE];
            case 8:
                return [ // 3100 energy, 12x WORK, 13x CARRY, 25x MOVE
                        WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, 
                        WORK, WORK,  
                        CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, 
                        CARRY, CARRY, CARRY,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                        MOVE, MOVE, MOVE, MOVE, MOVE];
        }
    },
    
    getBody_Burrower: function(level) {
				switch (level) {
            case 1:
                return [ // 300 energy, 2x WORK, 2x MOVE
                        WORK, MOVE, WORK, MOVE]; 
            case 2:
                return [ // 450 energy, 3x WORK, 3x MOVE
                        WORK, MOVE, WORK, MOVE, WORK, MOVE]; 
            case 3:
                return [ // 750 energy, 5x WORK, 5x MOVE
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE];
            case 4:
                return [ // 1050 energy, 7x WORK, 7x MOVE
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, 
                        WORK, MOVE, WORK, MOVE];
            case 5:
                return [ // 1500 energy, 10x WORK, 10x MOVE
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE]; 
            case 6:
                return [ // 1800 energy, 12x WORK, 12x MOVE
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE];
            case 7:
                return [ // 3750 energy, 25x WORK, 25x MOVE
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE];
            case 8:
                return [ // 3750 energy, 25x WORK, 25x MOVE
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE,
                        WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE];
        }
    },
    
    getBody_Carrier: function(level) {
        switch (level) {
            case 1:
            		return [ // 300 energy, 3x CARRY, 3x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; 
            case 2:
                return [ // 400 energy, 4x CARRY, 4x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]; 
            case 3:
                return [ // 600 energy, 6x CARRY, 6x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE];
            case 4:
                return [ // 1000 energy, 10x CARRY, 10x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
            case 5:
                return [ // 1400 energy, 14x CARRY, 14x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
            case 6:
                return [ // 1800 energy, 18x CARRY, 18x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
            case 7:
                return [ // 2500 energy, 25x CARRY, 25x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
            case 8:
                return [ // 2500 energy, 25x CARRY, 25x MOVE
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE,
                        CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE];
        }
    },

    getBody_Reserver: function(level) {
        switch (level) {
            case 1:
            case 2:
                return null; 
            case 3:
            case 4:
                return [ // 650 energy, 1x CLAIM, 1x MOVE
                        CLAIM, MOVE];
            case 5:    
            case 6:
            case 7:
            case 8:
                return [ // 1300 energy, 2x CLAIM, 2x MOVE
                        CLAIM, CLAIM, MOVE, MOVE];
        }
    },

    moveFrom: function(creep, target) {
        var tgtDir = creep.pos.getDirectionTo(target);
        var moveDir;
        
        switch (tgtDir) {
            case TOP:           moveDir = BOTTOM;       break;
            case TOP_RIGHT:     moveDir = BOTTOM_LEFT;  break;
            case RIGHT:         moveDir = LEFT;         break;
            case BOTTOM_RIGHT:  moveDir = TOP_LEFT;     break;
            case BOTTOM:        moveDir = TOP;          break;
            case BOTTOM_LEFT:   moveDir = TOP_RIGHT;    break;
            case LEFT:          moveDir = RIGHT;        break;
            case TOP_LEFT:      moveDir = BOTTOM_RIGHT; break;
        }

        return creep.move(moveDir);
    },

    moveToRoom: function(creep, tgtRoom) {
        var _ticksReusePath = 10;
        
        if (creep.room.name == tgtRoom) {
            console.log('Error: trying to move creep ' + creep.name + ' to its own room... check logic!!!');
            return;
        } 
        
        if (creep.memory.route == null || creep.memory.route.length == 0 || creep.memory.route == ERR_NO_PATH 
                || creep.memory.route[0].room == creep.room.name || creep.memory.exit == null
                || creep.memory.exit.roomName != creep.room.name) {
            
            creep.memory.route = Game.map.findRoute(creep.room, tgtRoom);
            
            if (creep.memory.route == ERR_NO_PATH) {
                delete creep.memory.route;
                return;
            }
            
            creep.memory.exit = creep.pos.findClosestByPath(creep.memory.route[0].exit);
        }

        if (creep.memory.exit) {
            var r = creep.moveTo(new RoomPosition(creep.memory.exit.x, creep.memory.exit.y, creep.memory.exit.roomName), {reusePath: _ticksReusePath});
            
            if (r == ERR_NO_PATH) {
                delete creep.memory.route;
                delete creep.memory.exit;
            }
        }
    }
};

module.exports = utilCreep;

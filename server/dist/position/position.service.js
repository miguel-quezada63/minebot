"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const position_enum_1 = require("./enums/position.enum");
class PositionService {
    // Get position difference between 2 entites on all axes
    get3dPosition(entPos1, entPos2) {
        return Math.sqrt(Math.pow((entPos1.x - entPos2.x), 2) + Math.pow((entPos1.y - entPos2.y), 2) + Math.pow(entPos1.z - entPos2.z, 2));
    }
    // Get position difference between 2 entites on 2 axes
    get2dPosition(entPos1, entPos2, vec1, vec2) {
        if (vec1 === position_enum_1.Position.X && vec2 === position_enum_1.Position.Y) {
            return Math.sqrt(((entPos1.x - entPos2.x), 2) + Math.pow((entPos1.y - entPos2.y), 2));
        }
        else if (vec1 === position_enum_1.Position.X && vec2 === position_enum_1.Position.Z) {
            return Math.sqrt(Math.pow((entPos1.x - entPos2.x), 2) + Math.pow((entPos1.z - entPos2.z), 2));
        }
        return Math.sqrt(Math.pow((entPos1.y - entPos2.y), 2) + Math.pow(entPos1.z - entPos2.z, 2));
    }
    // Get position difference between 2 entites on one axis
    get1dPosition(entPos1, entPos2, vec) {
        if (vec === position_enum_1.Position.X) {
            return Math.sqrt(Math.pow((entPos1.x - entPos2.x), 2));
        }
        else if (vec === position_enum_1.Position.Y) {
            return Math.sqrt(Math.pow((entPos1.y - entPos2.y), 2));
        }
        return Math.sqrt(Math.pow((entPos1.z - entPos2.z), 2));
    }
    getPlayerPosition(player) {
        return;
    }
}
exports.PositionService = PositionService;

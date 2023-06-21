"use strict";
// 1 - import file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
// 2 - import de variaveis
const variaveis_1 = require("./variaveis");
console.log(variaveis_1.x);

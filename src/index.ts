#!/usr/bin/env node

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import {
    Board,
    extractPosition,
    findNewPosition,
    isMoveDirection,
    parseBoardSize,
    parseRobotPosition,
    populateBoard,
    positionRobot,
} from './utils';

const rl = readline.createInterface({ input, output });

let board: Board = [];

rl.on('line', (command: string) => {
    if (!board.length) {
        const size = parseBoardSize(command);
        board = populateBoard(size);
    } else if (board.flat().every((cell) => cell === null)) {
        const position = parseRobotPosition(command);
        board = positionRobot(board, position);
    } else {
        command
            .split('')
            .filter(isMoveDirection)
            .forEach((direction) => {
                const newPosition = findNewPosition(board, direction);
                board = positionRobot(board, newPosition);
            });
        const position = extractPosition(board);
        console.log(
            `REPORT: ${position.column} ${position.row} ${position.direction}`
        );
        rl.close();
    }
});

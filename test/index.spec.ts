import assert from 'assert';
import {
    Board,
    parseBoardSize,
    parseRobotPosition,
    populateBoard,
    positionRobot,
    RobotPosition,
} from '../src/utils';

describe('Robot programming', () => {
    describe('Input processing', () => {
        it('should parse the board size', () => {
            const input = '5 3';
            const size = parseBoardSize(input);
            assert.deepEqual(size, { width: 5, height: 3 });
        });

        it('should parse the initial position', () => {
            const input = '1 2 N';
            const position = parseRobotPosition(input);
            assert.deepEqual(position, { column: 0, row: 1, direction: 'N' });
        });
    });
    describe('Board manipulation', () => {
        it('should generate an array of a given size', () => {
            const size = { width: 5, height: 3 };
            const board = populateBoard(size);

            assert.equal(board.length, size.height);
            assert.equal(
                board.every((row) => row.length === size.width),
                true
            );
        });

        it('should parse the initial position', () => {
            const position: RobotPosition = {
                column: 2,
                row: 1,
                direction: 'N',
            };

            const boardStart: Board = [
                [null, null, 'N', null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
            ];
            const boardPositioned = positionRobot(boardStart, position);

            assert.equal(boardPositioned[1][2], 'N');
            assert.equal(
                boardPositioned.flat().filter((pos) => pos !== null).length,
                1
            );
        });
    });
});

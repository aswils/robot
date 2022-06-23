import assert from 'assert';
import { BoardRow, parseBoardSize, populateBoard } from '../src/utils';

describe('Input processing', () => {
    it('should parse the board size', () => {
        const input = '5 3';
        const size = parseBoardSize(input);
        assert.deepEqual(size, { width: 5, height: 3 });
    });

    it('should generate an array of a given size', () => {
        const size = { width: 5, height: 3 };
        const board: Array<BoardRow> = [];
        populateBoard(size, board);

        assert.equal(board.length, size.height);
        assert.equal(
            board.every((row) => row.length === size.width),
            true
        );
    });
});

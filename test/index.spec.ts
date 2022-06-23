import assert from 'assert';
import { parseBoardSize } from '../src/utils';

describe('Input processing', () => {
    it('should parse the board size', () => {
        const input = '5 3';
        const size = parseBoardSize(input);
        assert.deepEqual(size, { width: 5, height: 3 });
    });
});

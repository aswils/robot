type BoardSize = {
    width: number;
    height: number;
};

export type BoardRow = Array<0 | 1>;

export const parseBoardSize = (size: string): BoardSize => {
    const [width, height] = size
        .split(' ')
        .map((int) => Number.parseInt(int, 10) ?? 0);
    return { width, height };
};

export const populateBoard = (size: BoardSize, board: Array<BoardRow>) => {
    for (let i = 0; i < size.height; i++) {
        const row: Array<0 | 1> = new Array(size.width).fill(0);
        board.push(row);
    }
};

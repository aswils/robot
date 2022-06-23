type BoardSize = {
    width: number;
    height: number;
};

type RobotDirection = 'N' | 'S' | 'E' | 'W';

const isRobotDirection = (input: string): input is RobotDirection =>
    !!/^(N|S|E|W)$/.test(input);

export type BoardRow = Array<RobotDirection | null>;

export type Board = Array<BoardRow>;

export type RobotPosition = {
    column: number;
    row: number;
    direction: RobotDirection|null;
}

export const parseBoardSize = (size: string): BoardSize => {
    const [width, height] = size
        .split(' ')
        .map((int) => Number.parseInt(int, 10) ?? 0);
    return { width, height };
};

export const populateBoard = (size: BoardSize, board: Array<BoardRow>) => {
    for (let i = 0; i < size.height; i++) {
        const row: BoardRow = new Array(size.width).fill(null);
        board.push(row);
    }
};

export const parseRobotPosition = (position: string): RobotPosition => {
    const [column, row, direction] = position.split(' ');
    return {
        column: Number.parseInt(column, 10) - 1 ?? 0,
        row: Number.parseInt(row, 10) - 1 ?? 0,
        direction: isRobotDirection(direction) ? direction : null,
    };
};

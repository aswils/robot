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
    direction: RobotDirection | null;
};

export type MoveDirection = 'R' | 'L' | 'F';
export const isMoveDirection = (input: string): input is MoveDirection =>
    !!/^(R|L|F)$/.test(input);

export const parseBoardSize = (size: string): BoardSize => {
    const [width, height] = size
        .split(' ')
        .map((int) => Number.parseInt(int, 10) ?? 0);
    return { width, height };
};

export const populateBoard = (size: BoardSize) => {
    const board: Board = [];
    for (let i = 0; i < size.height; i++) {
        const row: BoardRow = new Array(size.width).fill(null);
        board.push(row);
    }
    return board;
};

export const parseRobotPosition = (position: string): RobotPosition => {
    const [column, row, direction] = position.split(' ');
    return {
        column: Number.parseInt(column, 10) - 1 ?? 0,
        row: Number.parseInt(row, 10) - 1 ?? 0,
        direction: isRobotDirection(direction) ? direction : null,
    };
};

export const positionRobot = (board: Board, position: RobotPosition) => {
    const newBoard: Board = board.map((br) => br.map(() => null));
    newBoard[position.row][position.column] = position.direction;
    return newBoard;
};

export const extractPosition = (board: Board): RobotPosition => {
    let row = 0;
    let column = 0;
    let direction = null;

    board.forEach((boardRow, rIdx) => {
        boardRow.forEach((boardCol, cIdx) => {
            if (boardCol !== null) {
                row = rIdx;
                column = cIdx;
                direction = boardCol;
            }
        });
    });

    return { row, column, direction };
};

export const findNewPosition = (board: Board, direction: MoveDirection) => {
    const startPos = extractPosition(board);
    const newPos: RobotPosition = { ...startPos };
    if (direction === 'L') {
        switch (startPos.direction) {
            case 'N':
                newPos.direction = 'W';
                break;
            case 'E':
                newPos.direction = 'N';
                break;
            case 'S':
                newPos.direction = 'E';
                break;
            case 'W':
                newPos.direction = 'S';
                break;
            default:
                break;
        }
    } else if (direction === 'R') {
        switch (startPos.direction) {
            case 'N':
            case null:
                newPos.direction = 'E';
                break;
            case 'E':
                newPos.direction = 'S';
                break;
            case 'S':
                newPos.direction = 'W';
                break;
            case 'W':
                newPos.direction = 'N';
                break;
            default:
                break;
        }
    } else if (direction === 'F') {
        const lastRow = board.length - 1;
        const lastCol = board[0].length - 1;
        switch (startPos.direction) {
            case 'N':
                newPos.row = Math.max(startPos.row - 1, 0);
                break;
            case 'E':
                newPos.column = Math.min(startPos.column + 1, lastCol);
                break;
            case 'S':
                newPos.row = Math.min(startPos.row + 1, lastRow);
                break;
            case 'W':
                newPos.column = Math.max(startPos.column - 1, 0);
                break;
            default:
                break;
        }
    }

    return newPos;
};

type BoardSize = {
    width: number;
    height: number;
};

export const parseBoardSize = (size: string): BoardSize => {
    const [width, height] = size
        .split(' ')
        .map((int) => Number.parseInt(int, 10) ?? 0);
    return { width, height };
};


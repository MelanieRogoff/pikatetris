export const TETROMINOS = {
    0: {  //clean tetris block
        shape: [[0]], 
        color: '0, 0, 0'
    }, 
    I: { //this makes I-shaped tetris block
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230',
    },
    J: { //this makes J-shaped tetris block
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '36, 95, 223',
    },
    L: { //this makes L-shaped tetris block
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '223, 173, 36',
    },
    O: { //this makes O-shaped tetris block
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '223, 217, 36',
    },
    S: { //this makes S-shaped tetris block
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56',
    },
    T: { //this makes T-shaped tetris block
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '132, 61, 198',
    },
    Z: { //this makes Z-shaped tetris block
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227, 78, 78',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)]; //randomizes the tetromino
    return TETROMINOS[randTetromino];
}
import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

//Here we set the initial state of the player

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const rotate = (matrix, dir) => {
        //rotate the tetris block by shifting rows into columns instead and reversing those values
        const mtrx = matrix.map((_, index) => 
            matrix.map(col => col[index]),
        );
        //Reversing each row to get a rotated matrix/tetromino
        if (dir > 0 ) return mtrx.map(row => row.reverse());
        return mtrx.reverse();
    };

    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        
        while (checkCollision(clonedPlayer, stage, {x: 0, y: 0})) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1)); //creates back and forth movement
            if (offset > clonedPlayer.tetromino[0].length) {
                //rotate it back
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }
        setPlayer(clonedPlayer);
    }

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided,
        }));
    };

    const resetPlayer = useCallback(() => { //need another hook to prevent infinite loop
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 }, 
            tetromino: randomTetromino().shape,
            collided: false,
        });
    }, []);            

    return [player, updatePlayerPos, resetPlayer, playerRotate];
}
import React from 'react';
import { createStage } from '../gameHelpers';
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

//Components
import Stage from './Stage.js';
import Display from './Display.js';
import StartButton from './StartButton.js';

const Tetris = () => {
    return (

            <StyledTetrisWrapper>
                <StyledTetris>
                    <Stage stage={createStage()}/>
                    <aside>
                <div>
                    {/* aside is the sidebar */}
                    <Display text="Score"/>
                    <Display text="Rows"/>
                    <Display text="Level"/>
                    </div>
                    <StartButton/>
                    </aside>
                    </StyledTetris>
                    </StyledTetrisWrapper>
    )
};

export default Tetris;
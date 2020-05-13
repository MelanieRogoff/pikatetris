import styled from 'styled-components';
import bgImage from '../../img/pikabng.jpg';

export const StyledTetrisWrapper = styled.div`
width: 100vh;
height: 100vh;
background: url(${bgImage}) #000;
background-size: cover;
overflow: hidden;
margin: 0 auto;

`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 900px;
    position: relative;
    left: 100px;
    top: 120px;


    aside {
        width: 100%;
        position: relative;
        top: 100px;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`
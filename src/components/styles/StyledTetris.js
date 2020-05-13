import styled from 'styled-components';
import bgImage from '../../img/pikabng.jpg';

export const StyledTetrisWrapper = styled.div`
width: 100%;
height: 100vh;
background: url(${bgImage}) #000;
background-size: cover;
overflow: hidden;
margin: 0 auto;

`

export const StyledTetris = styled.div`
    display: flex;
    max-width: 900px;
    position: relative;
    left: 520px;
    top: 50px;


    aside {
        width: 40%;
        position: relative;
        top: 40px;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`
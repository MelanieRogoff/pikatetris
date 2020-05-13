import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 10px;
    border: 4px solid #333;
    width: 90px;
    border-radius: 30px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: pink;
    font-family: Georgia;
    font-size: 1.2rem;
    color: black;
`;
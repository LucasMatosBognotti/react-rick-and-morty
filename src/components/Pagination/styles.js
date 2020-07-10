import styled from 'styled-components';

export const Pages = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px; 

  width: 100%;

  li {
    text-align: center;
    padding: 8px;
    margin: 0 5px 0 5px;
    background: #F97F1F;
    border-radius: 4px;
  }

  li a {
    height: 40px;
    width: 40px;
    padding: 10px;
    text-decoration: none;
    color: #FFF;
  }

`;
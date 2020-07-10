import styled, { css } from 'styled-components';

export const ChargeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
  list-style: none;
  transition: opacity 0.3s ease-in;

  margin: 0 auto;
  max-width: 1200px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding: 20px;

    img {
      border-radius: 4px;
      align-self: center;
      max-width: 100%;
      transition: all 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
    }

    h1 {
      margin: 10px 0 10px 0;
      font-size: 26px;
      display: flex;
      position: relative;

      div {
        
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      
      margin-bottom: 10px;
      border-bottom: 1px solid #CCC;

      span {
        color: #F97F1F;
      }
    }

  }
`;

export const Status = styled.div`
  position: absolute;

  right: 15px;
  top: 10px;

  height: 10px;
  width: 10px;
  ${props => props.status === 'Alive' ? css`background: green` : css`background: red`};
  border-radius: 50%;
`;
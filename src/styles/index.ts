import { createGlobalStyle } from 'styled-components'

export const colors = {
  background: '#FFF8F2',
  rosaEscuro: '#E66767',
  rosaClaro: '#FFEBD9',
  branco: '#FFFFFF'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const StyledGlobals = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}

.container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: ${breakPoints.tablet}){
      width: 80%;
    }
}

body{
  background-color: #FFF8F2;
}

`

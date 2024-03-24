import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const ImageHeader = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  display: flex;
  position: absolute;
`
export const Title = styled.p`
  font-size: 32px;
  padding-left: 170px;
  font-weight: bold;
  color: #fff;
  top: 190px;
  left: 0px;
`
export const Menu = styled.p`
  font-size: 16px;
  padding-left: 170px;
  color: #fff;
  position: relative;
  top: 25px;
  left: 0px;
`

export const Card = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;

  column-gap: 40px;
  row-gap: 40px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Item = styled.li`
  background-color: ${colors.rosaEscuro};
  color: ${colors.rosaClaro};
  padding: 8px;
`
export const TitleItem = styled.p`
  font-size: 18px;
  padding: 8px 0;
  font-weight: bold;
`

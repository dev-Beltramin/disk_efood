import styled from 'styled-components'
import { colors } from '../../../styles'

export const GridOverlay = styled.div`
  position: absolute;
  display: none;

  &.isOpen {
    display: block;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Content = styled.div`
  height: 100%;
  width: 366px;
  background-color: ${colors.rosaEscuro};
  color: ${colors.rosaClaro};
  position: fixed;
  top: 0;
  right: 0;
  padding: 8px 16px;
  display: none;

  &.isOpen {
    display: block;
  }

  h4 {
    padding-top: 24px;
    font-weight: bold;
    text-decoration: underline;
  }
`
export const ContainerItems = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding-top: 32px;
`
export const Items = styled.li`
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  height: 100px;
  max-width: 344px;
  display: flex;
  padding: 8px;
  line-height: 22px;
  margin-bottom: 16px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const Title = styled.p`
  font-weight: 900;
  font-size: 18px;
  padding: 8px 8px 16px;
`
export const Price = styled.p`
  font-size: 16px;
  padding: 0px 8px;
  line-height: 22px;
`
export const Remove = styled.img`
  position: absolute;
  right: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  height: 18px;
  cursor: pointer;
`
export const ValueTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  font-weight: bold;
`
export const ContainerButton = styled.div`
  display: flex;
  max-width: 344px;
  width: 100%;
  text-align: center;
  margin-top: 16px;
`
export const Button = styled.button`
  width: 100%;
  padding: 4px 12px;
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  font-size: 14px;
  font-weight: bold;
  border: none;
`

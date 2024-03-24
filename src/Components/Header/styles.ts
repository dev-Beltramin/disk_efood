import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Container = styled.header`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`
export const ImageLogo = styled.img`
  width: 100%;
  height: 58px;
  margin-top: 64px;
`
export const TextLogo = styled.p`
  font-size: 36px;
  color: ${colors.rosaEscuro};
  width: 539px;
  padding-top: 138px;
  margin: 0 auto;
  padding-bottom: 40px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
    font-size: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`

import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.rosaClaro};
  text-align: center;
  height: 298px;
  margin-top: 120px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
    margin-bottom: 16px;
  }
`
export const Image = styled.img`
  height: 58px;
  margin-bottom: 32px;
  margin-top: 40px;
`
export const Icons = styled.img`
  margin-left: 8px;
`
export const Description = styled.p`
  margin-top: 80px;
  color: ${colors.rosaEscuro};
  margin: 80px auto;
  font-size: 12px;
  width: 480px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
    line-height: 16px;
  }
`

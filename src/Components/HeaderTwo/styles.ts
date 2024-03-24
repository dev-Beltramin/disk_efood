import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const ContainerHeader = styled.header`
  width: 100%;
  height: 184px;
  background-repeat: no-repeat;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    width: 80%;
    margin: 0 auto;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  padding-top: 80px;
  align-item: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.rosaEscuro};
`
export const ContentText = styled.p`
  display: flex;
  align-items: center;
`
export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-item: center;
  @media screen and (max-width: ${breakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0px;
    row-gap: 8px;
  }
`

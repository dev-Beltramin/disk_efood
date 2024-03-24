import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.background};
  height: 100%;
`
export const ContainerItems = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  column-gap: 80px;
  row-gap: 40px;
  width: 100%;

  @media screen and (max-width: ${breakPoints.desktop}) and (min-width: ${breakPoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`
export const ItemsSearch = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const ContainerInput = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: ${breakPoints.tablet}) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    margin-bottom: 32px;
  }
`

export const Input = styled.input`
  padding: 6px;
  border: 1px solid #ff00ff;
  border-radius: 10px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  &:hover {
    border: 1px solid #ffc0cb;
    background-color: rgba(0, 0, 0, 0.1);
  }
`

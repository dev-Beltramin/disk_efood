import styled from 'styled-components'
import { colors } from '../../../styles'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`
export const ContainerGeneral = styled.form`
  position: absolute;
  z-index: 1;
  display: none;

  &.visible {
    display: flex;
  }
`

export const Content = styled.div`
  height: 100%;
  width: 366px;
  background-color: ${colors.rosaEscuro};
  color: ${colors.rosaClaro};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 0 8px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding-top: 32px;
  padding-bottom: 16px;
`

export const Items = styled.div`
  display: flex;
  font-weight: bold;
`
export const Label = styled.label`
  padding: 8px 0;
  display: block;
`
export const LabelComplement = styled.label`
  padding: 8px 0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const CepAndNumber = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;
`
export const InputAddress = styled.input`
  max-width: 344px;
  width: 100%;
  padding: 8px;
`

export const InputComplement = styled.input`
  max-width: 344px;
  width: 100%;
  padding: 8px;
  margin-top: 2px;
  margin-bottom: 24px;
`
export const InputCep = styled.input`
  max-width: 155px;
  width: 100%;
  padding: 8px;
`

export const ButtonOne = styled.button`
  width: 344px;
  margin-bottom: 12px;
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  padding: 4px 12px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
export const ContainerButton = styled.div`
  display: flex;
  max-width: 344px;
  width: 100%;
  text-align: center;
`
export const ButtonTwo = styled.button`
  width: 100%;
  border: none;
  padding: 4px 12px;
  text-decoration: none;
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

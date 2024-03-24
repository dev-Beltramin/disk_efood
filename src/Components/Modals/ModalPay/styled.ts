import styled from 'styled-components'
import { colors } from '../../../styles'

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.7;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`
export const ContainerGeneral = styled.section`
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
  padding: 8px 16px;
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
  display: block;
  padding-bottom: 8px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  b {
    font-size: 14px;
    font-weight: 400;
  }
`
export const CodePay = styled.div`
  display: flex;
  column-gap: 32px;
  margin-top: 8px;
  margin-bottom: 24px;
`
export const InputPay = styled.input`
  max-width: 344px;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 8px;
`

export const InputCart = styled.input`
  max-width: 228px;
  width: 100%;
  padding: 8px 12px;
`
export const InputCvv = styled.input`
  max-width: 87px;
  width: 100%;
  padding: 8px;
`
export const ContainerCvv = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerCart = styled.div`
  max-width: 344px;
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
`

export const ButtonOne = styled.button`
  width: 344px;
  margin-bottom: 12px;
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  padding: 4px 12px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`

export const ContainerButton = styled.div`
  display: flex;
  max-width: 344px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`
export const ButtonTwo = styled.button`
  width: 100%;
  padding: 4px 12px;
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`

// confirmação do pedido

export const Confirm = styled.div`
  position: relative;
  display: none;

  &.ISvisible {
    display: flex;
  }
`

export const OverlayConfirm = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

export const ContentConfirm = styled.div`
  height: 100%;
  width: 366px;
  background-color: ${colors.rosaEscuro};
  color: ${colors.rosaClaro};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 8px 16px;
`

export const TitleConfirm = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 16px 8px;
`

export const ItemsConfirm = styled.div`
  display: flex;
  font-weight: bold;
`

export const Button = styled.button`
  width: 344px;
  margin-top: 24px;
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  padding: 4px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border: none;
`

export const ContainerButtonConfirm = styled.div`
  display: flex;
  max-width: 344px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border: none;
`

export const Description = styled.p`
  max-width: 344px;
  width: 100%;
  line-height: 22px;
  font-size: 16px;
  margin-top: 16px;
`

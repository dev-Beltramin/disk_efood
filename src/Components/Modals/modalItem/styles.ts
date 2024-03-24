import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { breakPoints, colors } from '../../../styles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  display: none;

  &.visible {
    display: flex;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export const ContainerItems = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 490px;
`
export const Items = styled.ul`
  padding: 32px;
  margin-top: 32px;
  background-color: ${colors.rosaEscuro};
  height: 344px;
  width: 80%;
  position: fixed;
  z-index: 1;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 8px;
    top: 8px;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    width: 100%;
    position: fixed;
  }

  > img {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const ItemModal = styled.li`
  display: flex;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
  }

  > img {
    width: 280px;
    height: 280px;

    @media screen and (max-width: ${breakPoints.tablet}) {
      width: 100%;
    }
  }
`
export const TitleModal = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: bold;
`
export const DescriptionModal = styled.p`
  font-size: 14px;
  line-height: 22px;
`
export const Porcoes = styled.span`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 20px;
`
export const Button = styled(Link)`
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  width: 224px;
  padding: 4px 6px;
  text-decoration: none;
`

export const Section = styled.div`
  .overlay {
    background-color: black;
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

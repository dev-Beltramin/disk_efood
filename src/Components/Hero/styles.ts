import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const Section = styled.section`
  ::before {
    background-color: rgba(0, 0, 0, 0.7);
    position: relative;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }
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
  position: relative;
  top: 190px;
  left: 0px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    font-size: 24px;
    padding-left: 24px;
    font-weight: bold;
    color: #fff;
    position: relative;
    top: 150px;
    left: 0px;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    font-size: 24px;
    padding-left: 24px;
    font-weight: bold;
    color: #fff;
    position: relative;
    top: 150px;
    left: 0px;
  }
`
export const Menu = styled.p`
  font-size: 32px;
  font-weight: 100;
  padding-left: 170px;
  color: #fff;
  position: relative;
  top: 24px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    font-size: 24px;
    padding-left: 24px;
    font-weight: bold;
    color: #fff;
    position: relative;
    top: 24px;
    left: 0px;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    font-size: 24px;
    padding-left: 24px;
    font-weight: bold;
    color: #fff;
    position: relative;
    top: 24px;
    left: 0px;
  }
`

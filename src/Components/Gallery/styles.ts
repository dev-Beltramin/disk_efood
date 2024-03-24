import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const ContainerGallery = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const ContainerDescription = styled.div``

export const Image = styled.img`
  width: 304px;
  height: 167px;
`
export const Title = styled.p`
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: bold;
  color: #fff;
`

export const Card = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  gap: 40px;
  margin-top: 335px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: 40px;
    margin-top: 335px;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    gap: 40px;
    margin-top: 335px;
  }
`

export const Item = styled.li`
  width: 320px;
  height: 100%;
  background-color: ${colors.rosaEscuro};
  color: ${colors.rosaClaro};
  padding: 8px;
`

export const Tags = styled.button`
  background-color: ${colors.rosaClaro};
  color: ${colors.rosaEscuro};
  padding: 4px 84px;
  font-size: 14px;
  font-weight: 700;
  border: 0;
  width: 304px;
  text-align: center;
  cursor: pointer;
  height: 24px;
`
export const ButtonLink = styled.div`
  display: flex;
  margin-top: 8px;
`
export const Description = styled.p`
  font-size: 16px;
  line-height: 22px;
  width: 304px;
  height: 198px;
`

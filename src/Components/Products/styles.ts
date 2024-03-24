import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  margin-top: 120px;
  border-right: 1px solid ${colors.rosaEscuro};
  border-bottom: 1px solid ${colors.rosaEscuro};
  border-left: 1px solid ${colors.rosaEscuro};
  background: #fff;
  width: 100%;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`
export const Ul = styled.ul`
  position: relative;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
}

@media screen and (min-width: ${breakPoints.tablet}) 
and (max-width: ${breakPoints.desktop}){
  width: 100%;
}

  > img {
    width: 472px;
    height: 224px;
    object-fit: cover;

    @media screen and (max-width: ${breakPoints.tablet}) {
      width: 100%;
  }

  
@media screen and (min-width: ${breakPoints.tablet}) 
and (max-width: ${breakPoints.desktop}){
  width: 100%;
}

   
`
export const Card = styled.li`
  padding-bottom: 16px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }
`
export const ContainerDescription = styled.div``
export const Title = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.rosaEscuro};
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 16px;
`
export const Description = styled.p`
  font-size: 16px;
  line-height: 22px;
  padding: 16px 8px;
  color: ${colors.rosaEscuro};
  font-weight: 400;
  width: 456px;
  padding: 8px;
  padding-bottom: 16px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 350px;
  }
`
export const ContainerStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
`
export const Note = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${colors.rosaEscuro};
  font-weight: bold;
`
export const Img = styled.img`
  width: 18px;
  margin-left: 8px;
  margin-right: 8px;
`
export const DivStar = styled.div`
  display: flex;
  align-items: center;
  padding-top: -4px;
`
export const Button = styled(Link)`
  background-color: ${colors.rosaEscuro};
  color: ${colors.branco};
  padding: 4px 6px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
`
export const Tag = styled.a`
  background-color: ${colors.rosaEscuro};
  color: ${colors.rosaClaro};
  font-weight: bold;
  padding: 6px 4px;
  font-size: 12px;
  margin-left: 8px;
`
export const DivTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

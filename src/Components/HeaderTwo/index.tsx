import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/logo.svg'
import vetor from '../../assets/Vector.png'
import { Container, ContainerHeader, ContentText, Main } from './styles'
import { RootReducer } from '../Store'
import { Open } from '../Store/Reducers/car'

const TwoHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.car)
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(Open())
  }
  return (
    <>
      <div style={{ backgroundImage: `url(${vetor})` }}>
        <ContainerHeader>
          <Container>
            <Main>
              <ContentText>Restaurante</ContentText>
              <a href="/">
                {' '}
                <img src={logo} alt="" />
              </a>
              <ContentText onClick={openModal}>
                <span>{items.length}</span>-Produto(s) no carrinho
              </ContentText>
            </Main>
          </Container>
        </ContainerHeader>
      </div>
    </>
  )
}
export default TwoHeader

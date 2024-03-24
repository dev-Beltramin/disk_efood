import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../Store'
import { add } from '../../Store/Reducers/car'
import x from '../../../assets/close 1.png'

import {
  Button,
  Container,
  ContainerItems,
  DescriptionModal,
  ItemModal,
  Items,
  Porcoes,
  TitleModal
} from './styles'
import { Close } from '../../Store/Reducers/Modal'

type Props = {
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
  id: number
}

export const FormatMoney = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ModalItem = ({ foto, nome, descricao, porcao, preco, id }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.modal)

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(Close())
  }

  const Sucess = () => {
    dispatch(Close())
  }

  const addCar = () => {
    dispatch(
      add({
        foto,
        nome,
        descricao,
        porcao,
        preco,
        id
      })
    )
  }

  return (
    <>
      <Container className={isOpen ? 'visible' : ''}>
        <ContainerItems>
          <Items>
            <img src={x} alt="" onClick={closeModal} />
            <ItemModal>
              <img src={foto} alt="prato escolhido" />

              <div>
                <TitleModal>{nome}</TitleModal>
                <DescriptionModal>{descricao}</DescriptionModal>
                <Porcoes>Serve: {porcao}</Porcoes>
                <Button
                  to={``}
                  onClick={() => {
                    addCar(), Sucess()
                  }}
                >
                  Adicionar ao carrinho - {FormatMoney(preco)}
                </Button>
              </div>
            </ItemModal>
          </Items>

          <div className="overlay" onClick={closeModal}></div>
        </ContainerItems>
      </Container>
    </>
  )
}

export default ModalItem

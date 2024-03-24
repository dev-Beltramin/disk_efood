import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../Store'
import { FormatMoney } from '../modalItem'
import { Close, remove } from '../../Store/Reducers/car'
import lixeira from '../../../assets/lixeira.png'
import { addValue } from '../../Utils'
import { OpenDelivery } from '../../Store/Reducers/modalDelivery'

import {
  Button,
  ContainerButton,
  ContainerItems,
  Content,
  GridOverlay,
  Items,
  Overlay,
  Price,
  Remove,
  Title,
  ValueTotal
} from './styled'

const Modalcar = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.car)

  const { items } = useSelector((state: RootReducer) => state.car)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(Close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const openModalDelivery = () => {
    dispatch(OpenDelivery())
  }

  return (
    <GridOverlay className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={closeModal}></Overlay>
      <Content className={isOpen ? 'isOpen' : ''}>
        <ContainerItems>
          {items.map((item) => (
            <Items key={item.id}>
              <img src={item.foto} alt="foto do produto" />

              <div>
                <Title>{item.nome}</Title>

                <Price>{FormatMoney(item.preco)}</Price>
                <Remove
                  onClick={() => removeItem(item.id)}
                  src={lixeira}
                  alt="remover item"
                />
              </div>
            </Items>
          ))}
        </ContainerItems>

        {items.length ? (
          <>
            <ValueTotal>
              <div>
                <p>Valor Total:</p>
              </div>

              <div>
                <p>{FormatMoney(addValue(items))}</p>
              </div>
            </ValueTotal>

            <ContainerButton>
              <Button
                type="button"
                onClick={() => {
                  openModalDelivery(), closeModal()
                }}
              >
                Continuar com a entrega
              </Button>
            </ContainerButton>
          </>
        ) : (
          <h4>Você não possui items no carrinho ...</h4>
        )}
      </Content>
    </GridOverlay>
  )
}

export default Modalcar

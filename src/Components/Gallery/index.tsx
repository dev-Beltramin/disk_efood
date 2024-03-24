import { useState } from 'react'
import { Cardapios } from '../../Pages/Home'
import {
  ButtonLink,
  Card,
  ContainerGallery,
  Description,
  Image,
  Item,
  Tags,
  Title
} from './styles'
import ModalItem from '../Modals/modalItem'
import { Open } from '../Store/Reducers/Modal'
import { useDispatch } from 'react-redux'

type Props = {
  prato: Cardapios[]
}

const Gallery = ({ prato }: Props) => {
  const [modalFoto, setModalFoto] = useState('')
  const [modalNome, setModalNome] = useState('')
  const [modalDescricao, setModalDescricao] = useState('')
  const [modalPorcao, setModalPorcao] = useState('')
  const [modalPrice, setModalPrice] = useState(Number)

  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(Open())
  }

  return (
    <>
      <ContainerGallery>
        <Card>
          {prato.map((list) => (
            <Item key={list.id}>
              <Image src={list.foto} alt={list.nome} />
              <Title> {list.nome}</Title>
              <Description>{list.descricao}</Description>
              <ButtonLink>
                <Tags
                  onClick={() => {
                    openModal()
                    setModalFoto(list.foto)
                    setModalNome(list.nome)
                    setModalDescricao(list.descricao)
                    setModalPorcao(list.porcao)
                    setModalPrice(list.preco)
                  }}
                >
                  Saiba mais
                </Tags>
              </ButtonLink>
            </Item>
          ))}
        </Card>

        <ModalItem
          id={modalPrice}
          foto={modalFoto}
          nome={modalNome}
          descricao={modalDescricao}
          porcao={modalPorcao}
          preco={modalPrice}
        />
      </ContainerGallery>
    </>
  )
}

export default Gallery

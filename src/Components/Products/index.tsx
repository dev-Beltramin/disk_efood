import imageStar from '../../assets/estrela.svg'
import {
  Button,
  Card,
  Container,
  ContainerDescription,
  ContainerStar,
  Description,
  DivStar,
  DivTags,
  Img,
  Note,
  Tag,
  Title,
  Ul
} from './styles'

type Props = {
  title: string
  image: string
  note: number
  description: string
  infos: string[]
  id: number
}

export const ReduzirDescricao = (text: string) => {
  if (text.length > 95) {
    return `${text.slice(0, 92)}...`
  }
}
const Products = ({ title, image, description, infos, note, id }: Props) => {
  return (
    <Container>
      <Ul>
        <img src={image} alt="imagem do prato" />
        <ContainerStar>
          <Card>
            <ContainerDescription>
              <Note>
                <Title>{title}</Title>
                <DivStar>
                  {note}

                  <Img src={imageStar} alt="estrela de avaliação" />
                </DivStar>
              </Note>
              <DivTags>
                {infos.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </DivTags>
              <Description>{ReduzirDescricao(description)}</Description>
              <Button to={`/profile/${id}`}>Saiba mais</Button>
            </ContainerDescription>
          </Card>
        </ContainerStar>
      </Ul>
    </Container>
  )
}

export default Products

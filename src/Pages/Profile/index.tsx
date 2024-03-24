import { useParams } from 'react-router-dom'
import { useGetProfileQuery } from '../../Components/Services'
import { Card, Container } from './styles'
import TwoHeader from '../../Components/HeaderTwo'
import Hero from '../../Components/Hero'
import Gallery from '../../Components/Gallery'

const Profile = () => {
  const { id } = useParams()
  const { data: item } = useGetProfileQuery(id!)

  if (!item) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <TwoHeader />
      <Hero items={item} />
      <Container>
        <Card>
          <Gallery prato={item.cardapio} />
        </Card>
      </Container>
    </>
  )
}

export default Profile

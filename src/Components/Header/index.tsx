import Logo from '../../assets/logo.svg'
import vetor from '../../assets/Vector.png'
import { Container, ImageLogo, TextLogo } from './styles'
const Header = () => {
  return (
    <Container>
      <div style={{ backgroundImage: `url(${vetor})` }}>
        <ImageLogo src={Logo} alt="logo do site" />

        <div>
          <TextLogo>
            Viva experiências gastronômicas no conforto da sua casa
          </TextLogo>
        </div>
      </div>
    </Container>
  )
}
export default Header

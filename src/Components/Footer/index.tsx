import Logo from '../../assets/logo.svg'
import Face from '../../assets/facebook-round-svgrepo-com 1.svg'
import Insta from '../../assets/instagram-round-svgrepo-com (1) 1.svg'
import Twitter from '../../assets/twitter-2-svgrepo-com 1.svg'
import { Container, Description, Icons, Image } from './styles'
const Footer = () => {
  return (
    <Container>
      <Image src={Logo} alt="logo do rodapé" />
      <div>
        <img src={Insta} alt="link instagram" />
        <Icons src={Face} alt="link facebook" />
        <Icons src={Twitter} alt="link twitter" />
      </div>

      <div>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
      </div>
    </Container>
  )
}

export default Footer

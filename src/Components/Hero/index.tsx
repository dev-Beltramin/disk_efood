import { ImageHeader, Menu, Section, Title } from './styles'
import { Options } from '../../Pages/Home'

type Props = {
  items: Options
}
const Hero = ({ items }: Props) => {
  return (
    <Section>
      <div className="overlay">
        <ImageHeader style={{ backgroundImage: `url(${items.capa})` }} />
        <Menu>{items.tipo}</Menu>
        <Title>{items.titulo}</Title>
      </div>
      ;
    </Section>
  )
}

export default Hero

import Header from '../../Components/Header'
import Products from '../../Components/Products'
import { useGetHomeQuery } from '../../Components/Services'

import * as S from './styled'

import { useState } from 'react'

export interface Cardapios {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

export type Options = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado: ''
  cardapio: Cardapios[]
}

const Home = () => {
  const { data: restaurant } = useGetHomeQuery()
  const destaque = 'Destaque da semana'

  const [item, setItem] = useState('')
  if (!restaurant) {
    return <h2>carregando</h2>
  }

  const result = restaurant.filter((value) =>
    value.titulo.toLocaleLowerCase().includes(item)
  )

  const getInfos = (options: Options) => {
    const tags = []

    if (options.destacado) {
      tags.push(destaque)
    }
    if (options.tipo) {
      tags.push(options.tipo)
    }

    return tags
  }
  if (!restaurant) {
    return <h2>Carregando...</h2>
  }
  return (
    <>
      <S.Container>
        <Header />
        <S.ContainerInput>
          <S.Input
            type="text"
            placeholder="digite aqui sua busca"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </S.ContainerInput>
        {item ? (
          <>
            <div>
              <>
                {result.map((items) => (
                  <>
                    <S.ItemsSearch>
                      <li key={items.id}>
                        <Products
                          id={items.id}
                          image={items.capa}
                          title={items.titulo}
                          note={items.avaliacao}
                          description={items.descricao}
                          infos={getInfos(items)}
                        />
                      </li>
                    </S.ItemsSearch>
                  </>
                ))}
              </>
            </div>
          </>
        ) : (
          <>
            <S.ContainerItems>
              <S.Items>
                {restaurant.map((item) => (
                  <li key={item.id}>
                    <Products
                      id={item.id}
                      image={item.capa}
                      title={item.titulo}
                      note={item.avaliacao}
                      description={item.descricao}
                      infos={getInfos(item)}
                    />
                  </li>
                ))}
              </S.Items>
            </S.ContainerItems>
          </>
        )}
      </S.Container>
    </>
  )
}

export default Home

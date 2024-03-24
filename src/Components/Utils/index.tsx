import { Cardapios } from '../../Pages/Home'

export const addValue = (items: Cardapios[]) => {
  return items.reduce((currentValue, newValue) => {
    return (currentValue += newValue.preco)
  }, 0)
}

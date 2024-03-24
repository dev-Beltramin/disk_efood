import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { closeDelivery } from '../../Store/Reducers/modalDelivery'
import { RootReducer } from '../../Store'
import { OpenPay } from '../../Store/Reducers/modalPay'
import { Open } from '../../Store/Reducers/car'

import * as S from './styled'
import { usePurchaseMutation } from '../../Services'

const ModalDelivery = () => {
  const [purchase] = usePurchaseMutation()
  const dispatch = useDispatch()

  const { isOpen: OpenDelivery } = useSelector(
    (state: RootReducer) => state.delivery
  )

  const closeModalDelivery = () => {
    dispatch(closeDelivery())
  }

  const returnCar = () => {
    dispatch(Open()), closeModalDelivery()
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: 1,
      complement: ''
    },
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            city: values.city,
            description: values.address,
            complement: values.complement,
            zipCode: values.cep,
            number: values.number
          }
        }
      })
      console.log(values)
    },

    validationSchema: yup.object({
      name: yup.string().required(' O campo nome é obrigatorio'),
      address: yup.string().required('O campo endereço é obrigatorio'),
      city: yup.string().required('O campo cidade é obrigatorio'),
      cep: yup
        .string()
        .required('O campo cep é obrigatorio')
        .min(8, 'O campo deve conter 8 digitos'),
      number: yup.string().required('O campo numero é obrigatorio'),
      complement: yup.string()
    })
  })

  const getErrors = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.touched

    if (isTouched && isInvalid) {
      return message
    }

    return ''
  }

  const Installment = () => {
    if (
      form.values.address &&
      form.values.cep &&
      form.values.city &&
      form.values.name &&
      form.values.number
    ) {
      return dispatch(OpenPay()), closeModalDelivery()
    }

    return
  }

  return (
    <>
      <S.ContainerGeneral
        className={OpenDelivery ? 'visible' : ''}
        onSubmit={form.handleSubmit}
      >
        <S.Overlay onClick={closeModalDelivery} />
        <S.Content>
          <div>
            <S.Title>Entrega</S.Title>
            <S.Items>
              <S.Container>
                <div>
                  <S.Label>Quem irá receber</S.Label>
                  <S.InputAddress
                    id="name"
                    type="text"
                    name="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <b> {getErrors('name', form.errors.name)}</b>
                </div>
                <S.Label>Endereço</S.Label>
                <S.InputAddress
                  type="adreess"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <b> {getErrors('address', form.errors.address)}</b>

                <S.Label>Cidade</S.Label>
                <S.InputAddress
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <b> {getErrors('city', form.errors.city)}</b>
                <S.CepAndNumber>
                  <div>
                    <S.Label>Cep</S.Label>
                    <S.InputCep
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <b> {getErrors('cep', form.errors.cep)}</b>
                  </div>

                  <div>
                    <S.Label>Número</S.Label>
                    <S.InputCep
                      type="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <b> {getErrors('number', form.errors.number)}</b>
                  </div>
                </S.CepAndNumber>

                <S.LabelComplement>
                  <S.Label>Complemento (opcional)</S.Label>
                  <S.InputComplement
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <b> {getErrors('complement', form.errors.complement)}</b>
                </S.LabelComplement>
              </S.Container>
            </S.Items>
            <div>
              <S.ContainerButton>
                <S.ButtonOne
                  type="submit"
                  onClick={() => {
                    Installment()
                  }}
                >
                  Continuar com o pagamento
                </S.ButtonOne>
              </S.ContainerButton>

              <S.ContainerButton>
                <S.ButtonTwo onClick={returnCar}>
                  Voltar para o carrinho
                </S.ButtonTwo>
              </S.ContainerButton>
            </div>
          </div>
        </S.Content>
      </S.ContainerGeneral>
    </>
  )
}

export default ModalDelivery

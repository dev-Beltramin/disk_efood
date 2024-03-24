import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../Store'
import { closePay } from '../../Store/Reducers/modalPay'
import { usePurchaseMutation } from '../../Services'
import { addValue } from '../../Utils'
import { FormatMoney } from '../modalItem'
import { OpenConfirm } from '../../Store/Reducers/modalConfirm'
import { closeConfirm } from '../../Store/Reducers/modalConfirm'
import { OpenDelivery } from '../../Store/Reducers/modalDelivery'

import * as S from './styled'

const Pay = () => {
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.car)
  const { isOpen: isOpenPay } = useSelector((state: RootReducer) => state.pay)
  const dispatch = useDispatch()
  const ValueTotal = addValue(items)
  const { isOpen: isOpenConfirm } = useSelector(
    (state: RootReducer) => state.confirm
  )

  const CloseConfirm = () => {
    dispatch(closeConfirm())
  }

  const returnDelivery = () => {
    dispatch(OpenDelivery()), closeModalPay()
  }

  const closeModalPay = () => {
    dispatch(closePay())
  }

  const form = useFormik({
    initialValues: {
      code: '',
      nameCard: '',
      numberCard: '',
      month: '',
      year: ''
    },
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            code: Number(values.code),
            name: values.nameCard,
            numberCard: values.numberCard,
            experies: {
              month: 10,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: Number(200)
          }
        ]
      })
    },
    validationSchema: yup.object({
      nameCard: yup.string().required('campo obrigatorio'),
      numberCard: yup.string().required('campo obrigatorio'),
      code: yup.string().required('campo obrigatorio'),
      month: yup.string().required('campo obrigatorio'),
      year: yup.string().required('campo obrigatorio')
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

  const Confirmation = () => {
    if (
      form.values.code &&
      form.values.month &&
      form.values.nameCard &&
      form.values.numberCard &&
      form.values.year
    ) {
      return dispatch(OpenConfirm()), closeModalPay()
    }
  }
  return (
    <>
      {/* Confirmação do pedido */}

      {isSuccess ? (
        <S.Confirm className={isOpenConfirm ? 'ISvisible' : ''}>
          <S.ContentConfirm>
            <div>
              <S.TitleConfirm>Pedido realizado -{data.orderId} </S.TitleConfirm>
              <S.ItemsConfirm>
                <div>
                  <S.Description>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </S.Description>
                  <S.Description>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </S.Description>
                  <S.Description>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </S.Description>
                  <S.Description>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </S.Description>
                </div>
              </S.ItemsConfirm>
              <div>
                <S.ContainerButtonConfirm>
                  <S.Button type="button" onClick={() => CloseConfirm()}>
                    Concluir
                  </S.Button>
                </S.ContainerButtonConfirm>
              </div>
            </div>
          </S.ContentConfirm>
          <S.OverlayConfirm
            onClick={() => {
              CloseConfirm()
            }}
          />
        </S.Confirm>
      ) : (
        <S.ContainerGeneral className={isOpenPay ? 'visible' : ''}>
          <S.Overlay onClick={closeModalPay} />
          <S.Content>
            <form onSubmit={form.handleSubmit}>
              <S.Title>
                Pagamento - Valor a pagar {FormatMoney(ValueTotal)}
              </S.Title>
              <S.Items>
                <S.Container>
                  <S.Label>Nome no cartão</S.Label>
                  <S.InputPay
                    id="nameCard"
                    type="text"
                    name="nameCard"
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <b>{getErrors('nameCard', form.errors.nameCard)}</b>
                  <S.ContainerCart>
                    <div>
                      <S.Label>Número do cartão</S.Label>
                      <S.InputCart
                        id="numberCard"
                        type="number"
                        name="numberCard"
                        value={form.values.numberCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <div>
                        <b>{getErrors('numberCard', form.errors.numberCard)}</b>
                      </div>
                    </div>
                    <S.ContainerCvv>
                      <S.Label>CVV</S.Label>
                      <S.InputCvv
                        id="code"
                        type="text"
                        name="code"
                        value={form.values.code}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <b>{getErrors('code', form.errors.code)}</b>
                    </S.ContainerCvv>
                  </S.ContainerCart>

                  <S.CodePay>
                    <div>
                      <S.Label>Mês de vencimento</S.Label>
                      <S.InputPay
                        id="month"
                        type="text"
                        name="month"
                        value={form.values.month}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />

                      <b>{getErrors('month', form.errors.month)}</b>
                    </div>

                    <div>
                      <S.Label>Ano de vencimento</S.Label>
                      <S.InputPay
                        id="year"
                        type="text"
                        name="year"
                        value={form.values.year}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <div>
                        <b>{getErrors('year', form.errors.year)}</b>
                      </div>
                    </div>
                  </S.CodePay>
                </S.Container>
              </S.Items>
              <div>
                <S.ContainerButton>
                  <S.ButtonOne type="submit" onClick={() => Confirmation()}>
                    Finalizar pagamento
                  </S.ButtonOne>
                </S.ContainerButton>

                <S.ContainerButton>
                  <S.ButtonTwo type="button" onClick={() => returnDelivery()}>
                    Voltar para a edição de endereço
                  </S.ButtonTwo>
                </S.ContainerButton>
              </div>
            </form>
          </S.Content>
        </S.ContainerGeneral>
      )}
    </>
  )
}

export default Pay

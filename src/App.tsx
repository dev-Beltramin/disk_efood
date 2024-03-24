import { BrowserRouter } from 'react-router-dom'
import { StyledGlobals } from './styles'
import Router from './Components/Routes'
import { Provider } from 'react-redux'
import { Store } from './Components/Store'
import Footer from './Components/Footer'
import ModalDelivery from './Components/Modals/ModalDelivery'
import Modalcar from './Components/Modals/ModalCar'
import ModalPay from './Components/Modals/ModalPay'

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <StyledGlobals />

          <Router />
        </BrowserRouter>
        <Footer />
        <Modalcar />
        <ModalDelivery />
        <ModalPay />
      </Provider>
    </>
  )
}
export default App

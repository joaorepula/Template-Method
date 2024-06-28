import PaymentSubject from './src/subjects/paymentSubject.js'
import Marketing from './src/observers/marketing.js'
import Shipment from './src/observers/shipment.js'
import Payment from './src/events/payment.js'

const subject = new PaymentSubject()
const marketing = new Marketing()

subject.subscribe(marketing)

const shipment  = new Shipment()
subject.subscribe(shipment)

const payment = new Payment(subject)

payment.creditCard( { userName: 'João', id: Date.now()} )

subject.unsubscribe(marketing)

payment.creditCard( { userName: 'Repula', id: Date.now()} )
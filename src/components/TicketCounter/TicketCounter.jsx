import "./TicketCounter.scss";
import { useState } from "react";

const TicketCounter = ({ name, role }) => {
const [counterValue, setCounterValue] = useState(0)
const handleIncrement = () => {
  setCounterValue( counterValue +1)
}

const handleDecrement = () => {
if (counterValue === 0) {
  return
} 
setCounterValue(counterValue - 1);
}
return (
<section className="ticket-card">
  <div className="ticket-card__details">
  <h3 className="ticket-card__name">Name: {name}</h3>
  <h3 className="ticket-card__role">Role: {role}</h3>
  </div>
  <div className="ticket-card__counter">
  <h3 className="ticket-card__counter-title">Counter</h3>
  <p className="ticket-card__number">{counterValue}</p>
  <div className="ticket-card__buttons">
  <button className="ticket-card__button" onClick={handleDecrement}>-</button>
  <button className="ticket-card__button" onClick={handleIncrement}>+</button>
  </div>
  </div> 
  </section>
);
};

export default TicketCounter;
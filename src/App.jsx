// Need to create folders and files to display :
// The overall box
// Name and occupation 
//COunter and display the number 
//Then maybe add some special effects instead of plain and boring 
// MUST HAVE SOME FORM OF DESIGN 
// But focus on functionality first 

import "./App.css";
import TicketCounter from './components/TicketCounter/TicketCounter.jsx';

import team from './data/team-data';

const ticketCardArray = team.map((employee) => {
  return (
    <section className="counter-container">
      <TicketCounter name={employee.name} role={employee.role} key = {employee.id}/>
    </section>
  );
})
 
const App = () => {
  return (
    <div className="app">
      <main className="app-container">
        <h1 className="app-container__title">Ticket Tracker</h1>
        <section className="app-container__ticket-container">
          {ticketCardArray}
        </section>
      </main>
    </div>
  );
}

export default App;
import Ticket from "../Ticket/Ticket";

import s from "./TicketsList.module.css";

const TicktesList = ({ tickets, onNextPage }) => {
  return (
    <section className={s.ticketsList}>
      {tickets.map((ticket, key) => {
        return <Ticket key={key} ticket={ticket} />;
      })}
      <div className={s.buttonWrapper}>
        <button className={s.loadMoreTickets} onClick={onNextPage}>
          Показать еще 5 билетов!
        </button>
      </div>
    </section>
  );
};

export default TicktesList;

import Filters from "../containers/FiltersContainer";
import Tabs from "../containers/TabsContainer";
import TicktesList from "../containers/TicketsListContainer";

const Tickets = () => {
  return (
    <div className="ticketsView">
      <Filters />
      <Tabs />
      <TicktesList />
    </div>
  );
};

export default Tickets;

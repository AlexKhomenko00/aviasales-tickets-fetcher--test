import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TicketsList from "../components/TicketsList/TicketsList";

const TicketListContainer = () => {
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [page, setPage] = useState(1);

  const tickets = useSelector((store) => store.tickets);
  const stopsFilter = useSelector((store) => store.stopsFilters);

  const filterByStops = useCallback(() => {
    const stops = stopsFilter.filter((item) => item.checked);

    if (stops.length <= 0) {
      return tickets;
    }

    const allValue = stops.find((stop) => stop.name === "all");

    if (allValue && allValue.checked) {
      return tickets;
    }

    const ticketsByStops = tickets.filter((ticket) => {
      return ticket.segments.every((segment) =>
        stops.find((stop) => +stop.name === segment.stops.length)
      );
    });

    return ticketsByStops;
  }, [stopsFilter, tickets]);

  const tabValue = useSelector((store) => store.tabValue);

  useEffect(() => {
    const ticketsByStops = filterByStops();

    let ticketsByTab = ticketsByStops;

    if (tabValue === "cheapest") {
      ticketsByTab = ticketsByStops.slice().sort((a, b) => a.price - b.price);
    }

    if (tabValue === "fastest") {
      ticketsByTab = ticketsByStops
        .slice()
        .sort(
          (a, b) =>
            a.segments.reduce((acc, segment) => acc + segment.duration, 0) -
            b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        );
    }

    if (tabValue === "optimal") {
      ticketsByTab = ticketsByStops;
    }

    setFilteredTickets(ticketsByTab.slice(0, page * 5));
  }, [filterByStops, page, tabValue]);

  const incrementPage = () => setPage((prevPage) => prevPage + 1);

  return <TicketsList tickets={filteredTickets} onNextPage={incrementPage} />;
};

export default TicketListContainer;

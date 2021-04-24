import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "./components/Container/Container";
import Logo from "./components/Logo/Logo";

import operations from "./redux/operations";

import Tickets from "./views/Tickets";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getSearchIdAndTickets());
  }, [dispatch]);

  return (
    <Container>
      <Logo />
      <Tickets />
    </Container>
  );
}

export default App;

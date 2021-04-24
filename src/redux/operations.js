import actions from "./actions";
import { fetchSearchId, fetchTickets } from "../api/avia-sales";

const getSearchID = () => async (dispatch) => {
  dispatch(actions.searchIdRequest());

  try {
    const searchId = await fetchSearchId();

    return dispatch(actions.searchIdSuccess(searchId));
  } catch (e) {
    console.log(e);
    dispatch(actions.searchIdError(e));
    return e;
  }
};

const getTickets = () => async (dispatch, getState) => {
  const { searchID } = getState();

  dispatch(actions.fetchTicketsRequest());

  try {
    let stop = false;

    while (!stop) {
      const data = await fetchTickets(searchID);

      dispatch(actions.fetchTicketsSuccess(data.tickets));

      stop = data.stop;
    }
  } catch (e) {
    console.log(e);
    dispatch(actions.fetchTicketsError);
  }
};

const getSearchIdAndTickets = () => async (dispatch) => {
  try {
    await dispatch(getSearchID());
    dispatch(getTickets());
  } catch (e) {
    console.log(e);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSearchID,
  getTickets,
  getSearchIdAndTickets,
};

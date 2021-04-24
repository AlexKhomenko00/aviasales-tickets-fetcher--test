import { createAction } from "@reduxjs/toolkit";

const searchIdRequest = createAction("AUTH/searchIdRequest");
const searchIdSuccess = createAction("AUTH/searchIdSuccess");
const searchIdError = createAction("AUTH/searchIdError");

const fetchTicketsRequest = createAction("TICKETS/fetchTicketsRequest");
const fetchTicketsSuccess = createAction("TICKETS/fetchTicketsSuccess");
const fetchTicketsError = createAction("TICKETS/fetchTicketsError");

const toggleStops = createAction("TICKETS/toggleStops");

const setTabValue = createAction("TICKETS/setTabValue");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchIdRequest,
  searchIdSuccess,
  searchIdError,
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsError,
  toggleStops,
  setTabValue,
};

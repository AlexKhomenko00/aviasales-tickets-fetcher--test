import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./actions";

const initCheckboxes = [
  {
    name: "all",
    key: "checkBox1",
    label: "Все",
    checked: true,
  },
  {
    name: "0",
    key: "checkBox2",
    label: "Без пересадок",
    checked: true,
  },
  {
    name: "1",
    key: "checkBox3",
    label: "1 Пересадка",
    checked: true,
  },
  {
    name: "2",
    key: "checkBox4",
    label: "2 Пересадки",
    checked: true,
  },
  {
    name: "3",
    key: "checkBox5",
    label: "3 Пересадки",
    checked: true,
  },
];

const searchID = createReducer(null, {
  [actions.searchIdSuccess]: (_, { payload }) => payload,
});

const tickets = createReducer([], {
  [actions.fetchTicketsSuccess]: (state, { payload }) => [...state, ...payload],
});

const stopsFilters = createReducer(initCheckboxes, {
  [actions.toggleStops]: (state, { payload: { itemName, isChecked } }) => {
    if (itemName === "all") {
      return state.map((item) => ({
        ...item,
        checked: isChecked,
      }));
    }

    const isAllValueChanged = !isChecked
      ? !state.every((item) => item.checked === isChecked)
      : state.every((item) => {
          if (item.name === "all" || item.name === itemName) return true;
          return item.checked === isChecked;
        });

    return state.map((item) => {
      if (item.name === "all" && isAllValueChanged)
        return { ...item, checked: isChecked };
      if (item.name === itemName) return { ...item, checked: isChecked };

      return item;
    });
  },
});

const tabValue = createReducer("cheapest", {
  [actions.setTabValue]: (state, { payload }) => payload.tabValue,
});

export default combineReducers({
  searchID,
  tickets,
  stopsFilters,
  tabValue,
});

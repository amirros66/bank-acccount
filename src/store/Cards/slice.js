//Set up step 6 -Set up your slice with initialState and empty actions

// Feature 2 - Block & Unblocking cards
// When we are not using the cards, it's very convenient to block them, this way you feel
// safer by knowing nobody will be able to use them, specially when talking about credit
// cards and cards you don't use a lot. Based on that, add the following functionality:
// - Block and unblock a card
// - Note! the state has to be managed by Redux

import { createSlice } from "@reduxjs/toolkit";

const cards = createSlice({
  name: "cards",
  initialState: [
    {
      id: 1,
      name: "D. Adams",
      number: "1123 5813 2134 5589",
      type: "debit",
      issuer: "",
      blocked: false,
      limit: 200,
      max: 5000,
    },
    {
      id: 2,
      name: "F. Herbert",
      number: "2357 1113 1719 2329",
      type: "debit",
      issuer: "",
      blocked: true,
      limit: 300,
      max: 2000,
    },
    {
      id: 3,
      name: "I. Asimov",
      number: "0001 0010 0011 0100",
      type: "debit",
      issuer: "",
      blocked: true,
      limit: 700,
      max: 4000,
    },
  ],
  // The names of these keys in initialState will be used in selector definitions
  reducers: {
    block: (state) => {
      //write logic here that allows user to block the 3 cards.
      //state.blocked = ...
    },
    unblock: (state) => {
      //write logic here that allows user to block the 3 cards.
      //state.blocked = ...
    },
  }, // These are the actions you can dispatch in UI components. They will always have state and
  // action parameters. The value of the state parameter is supplied by Redux
});

export const { block, unblock } = cards.actions;
export default cards;

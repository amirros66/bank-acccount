//Set up step 6 -Set up your slice with initialState and empty actions

// Feature 2 - Block & Unblocking cards
// When we are not using the cards, it's very convenient to block them, this way you feel
// safer by knowing nobody will be able to use them, specially when talking about credit
// cards and cards you don't use a lot. Based on that, add the following functionality:
// - Block and unblock a card
// - Note! the state has to be managed by Redux

import { createSlice } from "@reduxjs/toolkit";

//if I want an array in my state, make an object with one key, the value of that one
//key is the array -

const cards = createSlice({
  name: "cards",
  initialState: {
    cards: [
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
  },
  // The names of these keys in initialState will be used in selector definitions
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload;
      const cardToToggle = state.cards.find((card) => card.id === id);

      if (cardToToggle) {
        cardToToggle.blocked = !cardToToggle.blocked;
      }
      //To toggle the blocked status of a card in the initial state,
      // the toggle reducer can take an additional parameter (id) representing the id of the card you
      // want to toggle:
      // The toggle reducer now takes an additional parameter action.payload containing the
      // id of the card to toggle.
      // It uses find to locate the specific card with the given id in the state.cards array.
      // If the card is found, it toggles the blocked status of that card.
      // Now, when the toggle action is dispatched with the id of a card, it will toggle
      // the blocked property of that specific card in the Redux state.
    }, // These are the actions you can dispatch in UI components. They will always have state and
    // action parameters. The value of the state parameter is supplied by Redux
  },
});

// These actions will be imported in UI components in src/components
// They will be dispatched with useDispatch like this: useDispatch(increase())
// Always follow this exact format: export const { actionsToExport } = countSlice.actions;
export const { toggle } = cards.actions;
export default cards.reducer;

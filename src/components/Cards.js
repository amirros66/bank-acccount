import React from "react";
import { selectCards } from "../store/Cards/selectors";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store/Cards/slice";

// Feature 2 - Block & Unblocking cards
//display all cards
//block or unblock each card via a toggle / button

export default function Cards() {
  const cards = useSelector(selectCards);
  // Using the selector to access the relevant slice of the state which is store/cards/selectors.js
  // + the selectors file just maps over all of the things in the slice.js initial state
  // (which is all of the cards) and just maps through them and makes a copy of the cards.
  //
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggle({ id }));
  };

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <p>{card.name}</p>
          <p>ID: {card.id}</p>
          <p>Number: {card.number}</p>
          <p>Type: {card.type}</p>
          <p>Issuer: {card.issuer}</p>
          <button onClick={() => handleToggle(card.id)}>
            {card.blocked ? "Blocked" : "Unblocked"}
          </button>
          <p>Limit: {card.limit}</p>
          <p>Max: {card.max}</p>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}

//How this is working to use the toggle action to block / unblock card:

// Dispatching Action (handleToggle function):
// When a button is clicked, the handleToggle function is called with the id of the card.
// It dispatches the toggle action with the id as payload.

// Reducer (toggle in Cards slice):
// The toggle reducer receives the action with the id payload.
// It finds the corresponding card in the state.cards array using the id.
// It toggles the blocked property of the found card (!cardToToggle.blocked), changing it from
// true to false or vice versa.

// UI Rendering (Cards component):
// The component maps over the cards array and renders each card.
// The button's text depends on the blocked property. If blocked is true, it shows "Blocked";
// otherwise, it shows "Unblocked".
// Clicking the button triggers the handleToggle function, which dispatches the toggle action.
// In summary, this setup allows you to toggle the "Blocked"/"Unblocked" status of each card
// in your UI by clicking the corresponding buttons.

// The selector in the Redux setup serves as a bridge between the component and the state
// in the Redux store. Let's look at how it ties in with the provided code:

import React from "react";
import { selectCards } from "../store/Cards/selectors";
import { useSelector, useDispatch } from "react-redux";
//import { toggle } from ".store/Cards/slice";

// Feature 2 - Block & Unblocking cards
//display all cards
//block or unblock each card via a toggle / button

export default function BlockUnblockButtons() {
  const cards = useSelector(selectCards); //Used in UI components to access the state that is
  //stored in the slices

  //const dispatch = useDispatch(); //Equivalent to using setStateVariable from React useState hook

  // display of all the cards + data about the card
  // each card has a block button on it which can be changed according to the
  //  imported block / unblock actions

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <p>{card.name}</p>
          <p>ID: {card.id}</p>
          <p>Number: {card.number}</p>
          <p>Type: {card.type}</p>
          <p>Issuer: {card.issuer}</p>
          <p>Blocked: {card.blocked ? "Yes" : "No"}</p>
          {/* Want to add a function to this blocked bit that toggles blocked and unblocked off */}
          {/* <button onClick={() => {dispatch(toggle());}}>Block</button> */}
          <p>Limit: {card.limit}</p>
          <p>Max: {card.max}</p>
        </div>
      ))}
    </div>
  );
}

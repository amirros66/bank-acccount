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
    <>
      <p>Available Cards {cards}</p>
      {/* <button onClick={() => {dispatch(toggle());}}>Block</button> */}
    </>
  );
}

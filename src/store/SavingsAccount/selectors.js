// A selector always needs to have initial reduxState as a parameter
// And it will return something from the state that your UI is interested in
// <1> Initial redux state
// <2> Needs to match the key in the reducer object (slices) in the main store in src/store/index.js
// <3> Needs to match a key in the corresponding slice's initial state
// You can also find values <2> and <3> in the "State" section of the Redux dev tools
// Selectors can be used in UI components to access the state that is stored in the slices
// Selectors need to be accessed with the useSelector hook, like this: useSelector(select"selectorName")

//Feature 2 - transfer money from savings account to checking account and vice-versa

const selectSavingsAccount = (reduxState) => {
  //return reduxState.count.countValue;
};
export { selectSavingsAccount };

// reducers.js
const initialState = {
    // Your initial state properties go here
    counter: 0,
    loggedIn: false,
  };
  
  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return { ...state, counter: state.counter + 1 };
  
      case 'DECREMENT_COUNTER':
        return { ...state, counter: state.counter - 1 };
  
      case 'TOGGLE_LOGIN':
        return { ...state, loggedIn: !state.loggedIn };
  
      // Add more cases for other actions as needed
  
      default:
        return state;
    }
  };
  
  export default myReducer;
  
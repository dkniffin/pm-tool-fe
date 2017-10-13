import Immutable from 'immutable';
// import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = new Immutable.Map({
  isActive: false,
  isFetched: false,
  data: new Immutable.Map()
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  // case actionTypes.ACTION_TYPE:

  default:
    return state;
  }
}

export default reducer;

/* eslint-disable import/prefer-default-export */
import { RESET_STATE, UPDATE_FIELD } from '../constants';

export const initialState = {
  isLoading: false,
  data: {
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengerCount: '0',
  },
  error: null,
};

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_FIELD: {
      return {
        ...state,
        data: {
          ...state.data,
          [payload.id]: payload.updatedField,
        },
        error: null,
      };
    }

    case RESET_STATE: {
      console.log('resetting');
      return initialState;
    }

    default:
      return state;
  }
};

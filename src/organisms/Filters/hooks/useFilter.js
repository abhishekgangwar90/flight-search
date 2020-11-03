/* eslint-disable import/prefer-default-export */
// import React from 'react';
import { UPDATE_FIELD } from '../constants';

const initialState = {
  isLoading: false,
  data: {
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengerCount: 0,
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

    default:
      return state;
  }
};

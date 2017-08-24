import { combineReducers } from 'redux';

export const reducer = combineReducers({
  inputs: InputsReducer,
});

const commonItems = [
  'Schuh', 'Holz', 'Stecken'
];

const uncommonItems = [
  'Seil', 'Test', '2 Test'
];

const rareItems = [
  'Bazooka', 'Rhino', 'Boeing 777'
];

export function InputsReducer(state = [
  {
    category: 'common',
    item_amount: 0,
    items: commonItems,
    currentItems: [],
  },
  {
    category: 'uncommon',
    item_amount: 0,
    items: uncommonItems,
    currentItems: [],
  },
  {
    category: 'rare',
    item_amount: 0,
    items: rareItems,
    currentItems: [],
  }
], action) {
  switch (action.type) {
    case 'CHANGE_VALUE': {
      const inputIndex = findCategoryIndex(state, action);
      const oldInput = state[inputIndex];
      const newInput = {
        ...oldInput,
        item_amount: action.item_amount,
      }
      return [
        ...state.slice(0, inputIndex),
        newInput,
        ...state.slice(
          inputIndex + 1, state.length
        ),
      ];
    }
    case 'SHUFFLE_ITEMS': {
      const newState = schuffleItems(state, action);
      return newState;
    }
    default: {
      return state;
    }
  }
}

function findCategoryIndex(state, action) {
  switch (action.type) {
    case 'CHANGE_VALUE': {
      return state.findIndex(
        (c) => c.category === action.category
      );
    }
    default: {
      console.log('ERROR IS HAPPENING AYYYY');
      return false;
    }
  }
}

function schuffleItems(state, action) {
  switch (action.type) {
    case 'SHUFFLE_ITEMS' : {
      const newItems = state.map(i => {
        let newItemObject = {
          ...i
        }
        for (var k = 0; k < i.item_amount; k++) {
          let newItem = i.items[Math.floor(i.items.length * Math.random())];
          newItemObject.currentItems.push(newItem);
        }
        console.log(newItemObject);
        return newItemObject;
      });

      return newItems;
    }
    default: {
      console.log('ERROR IS HAPPENING AYYYY');
      return false;
    }
  }
}

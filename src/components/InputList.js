import React from 'react';
import { connect } from 'react-redux';
import { Input } from './Input';
import { ShuffleButton } from './ShuffleButton';


const InputList = (props) => (
  <div className='input'>
    {
      props.inputs.map((input, i) => (
        <Input key={i}
          category={input.category}
          item_amount={input.item_amount}
          currentItems={input.currentItems}
          onChange={props.onChange}
        />
      ))
    }
    <ShuffleButton onClick={props.onClick} />
  </div>
);

function handleChange(item_amount, category) {
  return {
    type: 'CHANGE_VALUE',
    item_amount: item_amount,
    category: category,
  };
}
function handleSchuffle() {
  return {
    type: 'SHUFFLE_ITEMS',
  }
}

const mapStateToInputProps = (state) => {
  const inputs = state.inputs.map(input => (
    {
      category: input.category,
      item_amount: input.item_amount,
      items: input.items,
      currentItems: input.currentItems,
    }
  ));

  return {
    inputs,
  };
};

const mapDispatchToInputProps = (dispatch) => (
  {
    onChange: (item_amount, category) => (
      dispatch(handleChange(item_amount, category))
    ),
    onClick: () => (
      dispatch(handleSchuffle())
    )
  }
);


export const InputListProps = connect(
  mapStateToInputProps,
  mapDispatchToInputProps
)(InputList);

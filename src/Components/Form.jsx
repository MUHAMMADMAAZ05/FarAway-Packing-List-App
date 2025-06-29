import React from 'react';

const Form = ({ setSharedList,list}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  

  
  // console.log(list,"===<> Sharedlist")


  function AddHandler() {
    const newlist=[...list] 
    newlist.push({
      item: inputValue,
      quantity,
      isCompleted:false
    }
    )
    setSharedList(newlist)
    setInputValue('')
    setQuantity(1)
  }

  return (
    <div style={{ display: 'flex' }}>

        <p>What Do You Need for Your Trip?</p>
       
       
      <select onChange={(e) => setQuantity(e.target.value)}>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={AddHandler}>Add</button>
    </div>
  );
};

export default Form;

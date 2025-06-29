import React from 'react';

export const Stats = ({list}) => {
  console.log(list,"==>stats")
  const completedItems = () => {
    const onlyCompletedItems = list?.filter((item) => item.isCompleted)
    return onlyCompletedItems?.length || 0
  }
  const packeditem=()=>{
    const onlyPackedItems = list?.filter((item) =>
      item.isCompleted
    )
    return onlyPackedItems?.length || 0
  }
  const percent = completedItems() ? (completedItems() / list?.length * 100).toFixed(2) : '0'
  let numberofpack=packeditem()
  return (
    <div>
        <p>You have {list?.length} item on your list,and you already packed {numberofpack} ( {percent}% )</p>
    </div>
  );
};


export default Stats;
import React from 'react';
import List from './list';
import '../App.css';

const Table = ({items, handleClick, state, }) => {
  let list1 = items.locations.slice(0,state).map((item) => {
    return item.consumers.map((subItem) => {
        return <List name={subItem.name} key={subItem.id} email={subItem.email} occupationDate={subItem.occupationDate} occupationEndDate={subItem.occupationEndDate} phoneNumber={subItem.phoneNumber} />
      })
  })
  
  return (
    <div>
      <ul className='tableLayOut'>
        {list1}
      </ul>
      <button className='button' onClick={handleClick}>Load more</button>
    </div>
  )
}

export default Table;
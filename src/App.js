import React, {useState, useEffect} from 'react';
import Table from './components/table';
import Select from 'react-select'
import './App.css';

//selector options. happy with labels and values?
const selectOptions = [
  { value: 'all', label: 'All' },
  { value: true, label: 'Mobile' },
  {value: false, label:'Land Line'},
]


function App() { 
  const [data, setData] = useState([])
  const [showMore, setShowMore] = useState(1);
  
  
   useEffect(() => {
     fetch('/building-location.json')
      .then(res => res.json())
      .then(apiList => {
        setData(apiList)
      })
      .catch(err => {
        console.log(err)
      })
   }, [])
  

    
  
  const handleClick = () => {
    setShowMore((preValue) => preValue + 1);
  };
  //ToDo: complete a filter to update the state to pass only truthy 
  const handleChange = (data) => {
    if (selectOptions.value === true) {
      let updateState = data.filter(data => {
        return data.location.consumer.isPhoneMoblie === true
      })
      console.log(data)
      return setData(updateState)
    }
  }
  
  let loaded = data
  if (loaded.length === 0) {
    return <div><h1>Loading..</h1></div>
  }else
  return (
    <div className='container'>
      <header className='header'></header>
      <div>
        <Select className='button' options={selectOptions} onChange={handleChange} />
        <Table items={data} handleClick={handleClick} state={showMore} />
      </div>
      <footer className='footer'></footer>
    </div>
  )
}

export default App;

import './App.css';
import Countries from './Componants/Countries/Countries';
// import { useEffect, useState } from 'react';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}




/* 


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries () {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  
  return (
    <div>
      { <h1>This is Countries Componants</h1> }
      {
        countries.map(country => <Country name={country.name}></Country>)
      }
    </div>
  )
}

function Country (props) {
  console.log(props)
  return (
    <div>
      <h2>Country Name: {props.name}</h2>
    </div>
  )
}




function Counter () {

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count Number : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


function App() {

 const movies = [{
    name: 'Monpura',
    porichalok: 'Humayoun',
    nayok: 'Chancal',
    nayika: 'Kulsum'
  },
  {
    name: 'Bjoya',
    porichalok: 'Shabbo',
    nayok: 'Jishue',
    nayika: 'Purnima'
  },
  {
    name: 'Dashomi',
    porichalok: 'Shusil',
    nayok: 'Jeet',
    nayika: 'Koyel'
  },
  {
    name: 'Nobomi',
    porichalok: 'Narayan',
    nayok: 'Shome',
    nayika: 'Sharabonty'
  }
] 
  
  return (
    <div className="App">
      <Movie name='Monpura' porichalok='Humayoun' nayok='Chancal' nayika='Kulsum'></Movie>
      {
        movies.map(movie => <Movie name= {movie.name} porichalok= {movie.porichalok} nayok= {movie.nayok} nayika= {movie.nayika}></Movie>)
      }
    </div>
  );
}

function Movie (props) {

  const moviestyle = {
    background: 'skayblue',
    border: '3px solid black',
    borderRadius: '15px',
    color: 'red'
  }

  return (
    <div style={moviestyle}>
      <h1> Movie Name: {props.name}</h1>
      <h5> Movie Name: {props.porichalok}</h5>
      <h5 >Movie Name: {props.nayok}</h5>
      <h5> Movie Name: {props.nayika}</h5>
    </div>
  );
} */



// function App() {
//   return (
//     <div className="App">
//       <Students name="Milon Roy" classs="Ten"></Students>
//       <Students name="Himu Mallic" classs="Ten"></Students>
//     </div>
//   );
// }

// function Students (props) {
//   const stustyle = {
//     background: "skyblue",
//     border: "3px solid lightsalmon",
//     borderRadiud: "20px",
//     color: "pink"
//   }
//   return (
//     <div className={stustyle}>
//       <h3>Name: {props.name}</h3>
//       <h5>Class: {props.classs}</h5>
//     </div>
//   );
// }

export default App;

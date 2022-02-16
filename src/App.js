
import './App.css';
import Card from './components/Card';
import React,{useEffect , useState } from "react";



function App() {


const [album , setAlbum]=useState([]);

useEffect(() => {


fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => res.json())
.then(data => {
  console.log(data);
  setAlbum(data);
  
})
.catch(err => alert(err));

}, [] );



  return (
  <div > 
    
   <h1 className='title1'> My Gallary </h1>
   <div id='cardRow'>
  

   { album.map((row ,id) => {
    
    return   <Card key= {id} title={row.title} thumbnailUrl={row.thumbnailUrl }  /> 
    }
  
  
  )}
   





   </div>
   

  </div>
  );
}

export default App;

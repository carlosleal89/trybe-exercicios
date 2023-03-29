import Image from "./Image";
import React from "react";
import staringCat from './staringCat.jpg';

function App() {
  
  return (
   
    <Image source={staringCat} alternativeText= 'Cute cat staring' />
   
  );
}

export default App;

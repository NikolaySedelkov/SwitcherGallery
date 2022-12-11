import './App.css';
import Fieldset from "./Fieldset.js"
import Gallery from "./Gallery.js"
import { useState } from 'react';

const url = "./imgArchiv/";
const types = ["All", "Fire","Earth","Water","Air","Buttermilk"];
const gallery = [];
for(let i = 2; i <= 34; ++i){
  gallery.push({
    id: i,
    picture: i<10?require(url+"space2_0"+i+".JPG"):require(url+"space2_"+i+".JPG"),
    type: types[Math.floor(Math.random() * 6)]
  })
}

function App() {
 
  const [curGallery, setCurFallery] = useState(gallery);
  const [curType, setCurType] = useState("All");
  
  const refreshBody = (type) => {
    setCurType(type);
    let tmp = [];
    if(type === "All"){
      setCurFallery(gallery)
    }else{
      gallery.forEach(img =>{
        if(img["type"] === type) tmp.push(img);
      })
      setCurFallery(tmp);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Fieldset data={types} change={refreshBody}/>
      </header>
      <Gallery data={curGallery}/>
    </div>
  );
}

export default App;

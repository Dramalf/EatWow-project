import React from 'react'
import MyNavBar from './components/NavBar'
import ScriptsArea from './components/ScriptsArea'
import PicArea from './components/PicArea'
import StartBtn from './components/StartBtn'
import AddMealBtn from './components/AddMealBtn'
function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ScriptsArea/>
      <PicArea />
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <StartBtn/>
        <AddMealBtn />
      </div>
    </div>
  );
}

export default App;

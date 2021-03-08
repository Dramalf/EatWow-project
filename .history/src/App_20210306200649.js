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
      <StartBtn/>
      <AddMealBtn />
    </div>
  );
}

export default App;

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
      <div className='btn-box'>
        <StartBtn/>
        <AddMealBtn />
      </div>
    </div>
  );
}

export default App;

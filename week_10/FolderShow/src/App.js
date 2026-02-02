import explorer from './Data/Datafomat';
import { useState } from 'react';
import style from "D:/intership/task/week_10/FolderShow/src/style.css";
import Folder from "./components/Folder"
function App() {
  const[explorerData,setexplorerData]=useState(explorer);
  return (
    <div className="app">
      <Folder explorer={explorerData}></Folder>
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import moment from 'moment';
import './App.css';

let App = () => {

  let time = moment().format("hh:mm:ss A");
  let [ctime,setCtime] = useState(time);

  const UpdateTime = () => {
      time = moment().format("hh:mm:ss A");
      setCtime(time);
  }

  setInterval(UpdateTime,1000)

  return(
    <>
      <div className="clock">{ctime}</div>
    </>
  )
}


export default App;

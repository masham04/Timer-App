import React, { useState } from 'react'
import './App.css'

export const Timer = () => {
    let[seconds, setseconds] = useState<number>(0);
    let[minutes, setminutes] = useState<number>(0);
    let[hours, sethours] = useState<number>(0);
    let[interv, setinterv] = useState<any>();
    let[status, setstatus] = useState<number>(0);
///////////////////////////////////////////////////////
   function timerstart(){
       if(status !== 1){
           setstatus(1);
           setinterv(setInterval(()=>{start();}, 900));
       }
   }

   function start(){
       if(seconds === 60){
          minutes++;
          setminutes(minutes);
          seconds = 0;
       }
       if(minutes === 60){
          hours++;
          sethours(hours);
          minutes = 0;
       }
       setseconds(seconds++);
   }
   //////////////////////////////////
function stop(){
    if(status !== 0){
        setstatus(2);
        clearInterval(interv);
    }
}
///////////////////////////
function reset(){
    clearInterval(interv);
    setstatus(0);
    sethours(0);
    setminutes(0);
    setseconds(0);
}
    
    return (
        <div>
            <div className='timer'>
                 <span>{hours > 9 ? hours : `0${hours}`}</span>:
                 <span>{minutes > 9 ? minutes : `0${minutes}`}</span>:
                 <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
            </div>
            <div className='btn'>
                <button id='btn1' onClick={timerstart}>Start</button>
                <button id='btn2' onClick={stop}>Stop</button>
                <button id='btn3' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
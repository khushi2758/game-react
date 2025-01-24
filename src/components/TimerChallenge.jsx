import {useRef, useState} from 'react';
import ResultModel from './ResultModel.jsx';
export default function TimerChallenge({title,targetTime}){
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted,setTimeStarted]= useState(false);
   const [timerExpired,setTimerExpired] = useState(false);
    
    function handleStart(){
        timer.current= setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        },targetTime * 1000);

        setTimeStarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current);
    }
    return (
        <>
        <ResultModel ref= {dialog} targetTime={targetTime} result="lost"/>
    <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? 's': ''}
    </p>
    <p>
    <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ?'stop':'start'} Challenge
    </button>
    </p>
     <p className={timerStarted ? 'active':undefined}>
     {timerStarted? 'Time is running...':'Timer inactive'}
     </p>
    </section>
    </>
    );
}
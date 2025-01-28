import { useState, useRef } from "react"
import ResultModal from "./ResultModal";


export default function TimerChallenge({ title, targetTime }) {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);

        setTimerStarted(true);
        // dialog.current.showModal();
    }
    function handleStop() {
        clearTimeout(timer.current);
    }
    return (
        <>
    {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>}
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>
            {timerExpired ? <p>You Lost</p> : ''}
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer Inactive'}
            </p>
        </section>
        </>
    )
}
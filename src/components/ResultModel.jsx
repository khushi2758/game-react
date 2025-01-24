export default function ResultModel({result, targetTime}){
    return (
       <dialog className = " result-model" open>
        <h2>You {result}</h2>
        <p>
            the target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
            You stop the timer with <strong>X second left.</strong>
        </p>
        <form method="dialog">
            <button>Close</button>
        </form>
       </dialog>
    );
}
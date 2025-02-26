import { forwardRef } from "react";

const ResultModal= forwardRef(function ResultModel({ result, targetTime},ref){
    return (
       <dialog ref ={ref} className = " result-model">
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
});
export default ResultModal;
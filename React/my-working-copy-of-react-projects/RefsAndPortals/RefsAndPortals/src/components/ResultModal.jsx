import { forwardRef } from 'react';

 const resultModal = forwardRef(function ResultModal({targetTime, result}, ref) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>you {result}</h2>
            <p>
                The Target time was <strong>{targetTime}</strong> seconds
            </p>
            <p>
                You stopped the timer with <strong>X seconds left</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
})

export default resultModal
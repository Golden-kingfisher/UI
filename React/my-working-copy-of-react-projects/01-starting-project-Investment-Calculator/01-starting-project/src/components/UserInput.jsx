import * as userInputConstants from '../util/userInputConstants.js';

export default function UserInput({onChange, userInput}) {
    

   

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required
                    value={userInput[userInputConstants.INITIAL_INVESTMENT]}
                    onChange={(event) => onChange(userInputConstants.INITIAL_INVESTMENT, event.target.value)}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                    value={userInput[userInputConstants.ANNUAL_INVESTMENT]}
                    onChange={(event) => onChange(userInputConstants.ANNUAL_INVESTMENT, event.target.value)}
                />
            </p>
            <p>
                <label>Expected Return</label>
                <input type="number" required
                    value={userInput[userInputConstants.EXPECTED_RETURN]}
                    onChange={(event) => onChange(userInputConstants.EXPECTED_RETURN, event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                    value={userInput[userInputConstants.DURATION]}
                    onChange={(event) => onChange(userInputConstants.DURATION, event.target.value)}
                />
            </p>
        </div>
    </section>
}
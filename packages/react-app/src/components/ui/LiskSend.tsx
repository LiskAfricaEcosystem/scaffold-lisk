import React, { useState } from "react";
import { useDebounce } from "use-debounce";


interface SendFundsProps {
    disabled?: boolean;
}

export default function SendFunds(props: SendFundsProps) {
    // declare two state variables for the recipient and the amount
    const [to, setTo] = useState("");
    const [debouncedTo] = useDebounce(to, 500); // useDebounce() hook to debounce the recipient input

    const [amount, setAmount] = useState("");
    const [debouncedAmount] = useDebounce(amount, 500); // useDebounce() hook to debounce the amount input

    return (
        <div>
            <h2>Send Funds</h2>
            <form>
                <div>
                    <label htmlFor="to">Recipient:</label>
                    <input
                        type="text"
                        id="to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        disabled={props.disabled}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount (in wei):</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        disabled={props.disabled}
                    />
                </div>
                <button type="submit">

                </button>
            </form>
        </div>
    );
}

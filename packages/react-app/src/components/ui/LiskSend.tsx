import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { usePrepareSendTransaction, useSendTransaction } from "wagmi";


// what this does is simply disable the SendFunds function if the value passed is false
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
        <>
        <form>
            
        </>
    )



}
import {useState} from 'react';

export default function Counter(props){
    const [counter, setCounter] = useState(props.startAt);

    //setTimeout(() => setCounter(counter + props.countBy), 1000);

    return (
        <>
        <p>Start At: {props.startAt}</p>
        <p>Count By: {props.countBy}</p>
        <h4>{counter}</h4>
        <button className="btn btn-primary" onClick={() => setCounter(counter + props.countBy)}>Increment</button>
        <button className="bn btn-danger" onClick={() => setCounter(counter - props.countBy)}>Decrement</button>
        </>
    );
}

Counter.defaultProps = {
    startAt: 0,
    countBy: 1
};
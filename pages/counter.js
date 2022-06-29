import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as counterActions from '../store/modules/counter';

export default function Test() {
    const dispatch = useDispatch();
    const value = useSelector(({ counter }) => counter.value);
    const name = useSelector(({counter})=> counter.name)
    const plus = useCallback(({ value, name }) => {
        dispatch(counterActions.increment({ value, name }));
    }, [dispatch]);

    const minus = useCallback(({ value,name }) => {
        dispatch(counterActions.decrement({ value, name }));
    }, [dispatch]);

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => minus({ value })}>-</button>
            <span>{value}</span>
            
            {value===0 ?
                <p>
                    버튼을 눌러보세요!
                </p>
                :
                <p>{name}</p>
                }
            <button onClick={() => plus({ value })}>+</button>
        </div>
    );
}

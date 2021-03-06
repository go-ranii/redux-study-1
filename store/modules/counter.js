import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    value: 0,
    name: ''
 }; // 초기 상태 정의

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.value += 1, state.name='증가했네요' },
        tenIncrement: state=> {state.value += 10, state.name='10점 증가했어요!'},
        decrement: state => { state.value -= 1, state.name='감소했어요' },
        tenDecrement: state=>{state.value-=10, state.name='10점 감소했네요..'}
    },
});

export const { increment, tenIncrement, decrement, tenDecrement } = counterSlice.actions; // 액션 생성함수
export default counterSlice.reducer; // 리듀서
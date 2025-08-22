import { createSlice } from "@reduxjs/toolkit";

//createSlice : store에서 관리해야할 상태(state)와, 상태변경 로직을 함께 정의하는 함수
const counterSlice = createSlice({
    name: 'counter', //action의 type에 붙는 접두어
    initialState : {
        value : 0
    },
    /*
        reducers 
         - Action을 받아서 상태값을 변경하는 함수를 등록하는 영역
         - 각 함수 등록시 액션생성함수와 액션타입을 자동으로 생성해준다.
         - 액션타입은 name/reducers키 형식으로 생성
    */
    reducers : {
        increment : (state) => {
            //return {value : state.value+1}
            state.value +=1;
        },
        decrement : (state) => {
            state.value -=1
        },
        incrementByAmount(state,action){
            state.value += action.payload;
        }
    }
})

//액션생성함수
// - rtl는 reducers의 함수명과 매칭되는 액셤함수를 자동으로 생성한다.
export const {increment,decrement,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer; // sotre등록용
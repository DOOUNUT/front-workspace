/*
    #1 Redux
     - 리액트를 통한 복잡한 전역상태 관리시 자주 사용되는 라이브러리(Redux Tool kit)
     - redux는 장바구니, 실시간 알림, 인증상태 및 권한들을 관리하며, 컴포넌트단위로 관리되어야 하는 일반
       state값들을 redux로 관리하지 않는다.
    
    #2 Redux의 구성요소
     1) Store(저장소)
      - Redux에서 관리하는 전역 상태를 보관하는 중앙 저장소
      - 어플리케이션에서 "유일" 하도록 설정해야 한다
    
     2) State(상태값)
      - Store에 저장된 상태값
      - 이 상태값은 읽기전용이며, 직접 변경할 수 없다.

     3) Action(명령 객체) / Action Creator(액션생성함수)
      - 액션은 store의 상태값을 변경하는 요청을 담은 객체
      - 액션객체의 타입 : {type : string, payload?:any}
      - 액션객체는 객체로 표현되며 반드시 type을 가져야한다.
      - 액션생성함수를 통해 액션 객체를 생성할 수 있다.

     4) Reducer(상태변경함수)
      - Action을 받아서 상태값을 변경하는 함수
      - (oldState, payload) => newState(RTK)
      - RTK에서는 Reducer와 Action Creater를 함께 정의하는 createSlice기능을 제공

     5) Dispatch(Action전송 함수)
      - Action을 Store에 전달하는 함수
      - Dispatch를 통해 Action이 전달되면 Action에 정의한 reducer가 호출된다.
    
     6) Selector(구독)
      - store에 저장된 상태값을 꺼내오는 함수
    #3 Redux의 동작흐름
     1) 사용자가 이벤트를 호출하여 Action Createor가 호출되고, 이로 인해 Action이 생성된다.
     2) 생성된 Action은 반드시 dispatch함수를 통해 store로 전달.
       ex) dispatch(actionCreateor(payload))
     3) Store에서는 action과 일치하는 reducer를 찾아, payload를 전달후 상태변경로직을 실행
     4) reducer는 상태변경로직의 결과인 새로운 state를 store에 반환한다
     5) sotre는 변경된 state를 저장하고, 이를 구독중인 컴포넌트들에게 알려준다
     6) 구독컴포넌트 들은 전역상태값이 변경시 재 랜더링 된다.
*/

import { configureStore } from "@reduxjs/toolkit";
import counter from '../features/counterSlice'
import todolist from '../features/todoSlice'

//store생성
export const store = configureStore({
    reducer : { // 스토어에 저장할 상태값을 관리하는 리듀서
        counter,
        todolist

    }
})


export type RootState = ReturnType<typeof store.getState>
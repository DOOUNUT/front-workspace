import { useRef } from 'react';
import styles from './TodoList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../features/todoSlice';
import type { RootState } from '../store/store';


// 입력창에 할 일을 입력하고 Add 버튼을 누르면 목록에 추가된다.

// 입력창이 비어있는데 Add 버튼을 누르면 → "값을 입력해주세요" 라는 경고창(alert)이 뜬다.

// 각 Todo 항목 옆의 ❌ 버튼을 누르면 해당 항목이 삭제된다.

// Todo 항목을 클릭하면 취소선(완료 처리)이 표시된다. (다시 클릭하면 취소선이 사라진다 → toggle 기능)

// Todo와 관련된 모든 상태(리스트, 완료 여부)는 todoSlice.ts에서 관리한다.

// Todo 추가, 삭제, 완료 상태 변경 로직은 전부 todoSlice 안의 reducer 함수에서 처리한다.

// 프로젝트 전체 상태 관리는 store.ts에서 한다.

// 여기서 todoSlice와 교육시  작성한 counterSlice를 함께 통합한다.

// React 컴포넌트 파일은 .tsx, Redux 로직 파일은 .ts 확장자로 관리한다.


function TodoList(){
    const inputRef = useRef<HTMLInputElement>(null);
    const todos = useSelector((state:RootState) => state.todolist.todos)

    const dispatch = useDispatch()
    const handleAddTodo = () => {
        const inputValue = inputRef.current?.value?.trim();
        if(!inputValue){
            alert("값을 입력해주세요");
            return;
        }
        dispatch(addTodos(inputValue));
        if(inputRef.current) inputRef.current.value ="";
    };

    return(
       <div className={styles.wrapper}>
          <h2 className={styles.title}>Todo List</h2>
            <input ref={inputRef} type="text" className={styles.input}
              placeholder="할 일을 입력하세요…" />
            <button onClick={handleAddTodo} className={styles.addBtn}>Add</button>    
          <ul className={styles.list}>
            {
                todos.map((todo) => {
                    return(   
                <li className={styles.item}>
                    <span                  
                    className={`${styles.text} ${styles.completed}`}>
                    {todo.text}
                    </span>
                    <button className={styles.deleteBtn}>❌</button>
                </li>

                    )
                })
            }            
          </ul>
        </div>
    )
}

export default TodoList;
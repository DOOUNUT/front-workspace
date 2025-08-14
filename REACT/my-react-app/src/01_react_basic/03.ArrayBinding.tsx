import { useState } from "react"

function ArrayDataBinding(){
    const [fruits,setFruits] = useState([{id:1, name:'apple'}, {id:2, name:'banana'}, {id:3, name:'cherry'}])

    const addFruit = () =>{
        //fruits.push({id:4,name:'orange'});
        const nextId = Math.max (...fruits.map((fruit) => fruit.id))+1;
        setFruits([...fruits,{id:nextId,name:'orange'}])
    }

    const deleteFruit = (id:number) => {
        //전달한 id값 일치하는 요소를 삭제하는 기능
        
        //filter()
        // - 배열 내부 요소에 대하여 조건에 맞는 요소만 남긴 새로운 배열을 반환하는 함수
        setFruits(fruits.filter( (fruit) => fruit.id !==id ))
    }

    //id 기준 역순 정렬
    const sortFruit = () => {
        const sortedFruit = [...fruits].sort( (a,b) => b.id - a.id)
        setFruits(sortedFruit);
    }

    return(
    <div>
        <h1>ArrayDataBinding</h1>
        <h2>FruitList</h2>
        <ul>
            {/* 
                1. 베열 데이터 바인딩
                map() 
                 - 배열의 각 요소에 대해 함수를 호출하여 새로운 요소를 만들어 반환하는 함수
                 - 리엑트에서는 배열의 각 요소를 map함수를 호출하여 jsx요소로 변경 후 바인딩
                 - jsx에서는 FOR,IF,WHILE과 같은 예약어를 사용할 수 없기 때문에 함수를 이용하여 바인딩한다
                
                 key
                 - 배열의 요소를 식별하는 유니크 값.
                 - key값을 추가하면 리엑트가 요소를 추적하여 변화를 감지할 수 있다.
                 - 효율적인 렌더링을 위해 필수로 추가해야함.
            */}
            {/* <li>{fruits[0].name}</li> */}
            {fruits.map( (fruit) => (
                <li key={fruit.id}>{fruit.id} - {fruit.name}
                <button onClick={() =>deleteFruit(fruit.id)}>삭제</button>
                </li>
            ))
        }
        </ul>
        <button onClick={addFruit}>추가</button>
        <button onClick={sortFruit}>정렬</button>
    </div>
    )
    
}
export default ArrayDataBinding
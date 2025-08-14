import { useState } from 'react';


interface UserInfoProps {
    name: string;
    age: number;
    hobby : string[];
    setName : (str:string)=>void;
    setAge : (num:number)=>void;
    setHobby:(str:string[])=>void;
}

export default function UserInfoContainer() {

    let [name,setName] = useState("홍길동")
    let [age,setAge] = useState(30)
    let [hobby,setHobby] = useState(["코딩,","게임"])

    // const setName2 = (str:string)=>{
    //     name = str;
    // }
    // const setAge2 = (num:number)=>{
    //     age = num;
    // }
    // const setHobby2 = (str:string[])=>{
    //     hobby = str;
    // }
  
  return (
    <div>      
      <UserInfo
        name={name} setName={setName}
        age={age} setAge={setAge}
        hobby={hobby} setHobby={setHobby}
      />
      
    </div>
  );
}


function UserInfo({name,age,hobby,setName,setAge,setHobby}: UserInfoProps) {
  const handleChangeName = () => {
    setName("mkm")
    setAge(22)
    setHobby(["취미1,","취미2"])
     
  }
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보</h2>
      <h3>이름:{name} </h3>
      <h3>나이:{age} </h3>
      <h3>취미:{hobby} </h3>
     <button onClick={handleChangeName}>정보 변경변경</button>
    </div>
  );
}
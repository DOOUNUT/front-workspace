import { useContext } from "react";
import { MyContext } from "./Context";

export default function Children3(){
    const {userInfo,setUserInfo} = useContext(MyContext);

    return(
        <>
            <h1>Children3</h1>
            <button onClick={() =>{
                setUserInfo({name:'경민',age:75})
            }}>
                {userInfo.name} ::: {userInfo.age}
            </button>
        </>
    )
}
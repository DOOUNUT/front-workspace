import { BrowserRouter, Link, Route, Routes } from "react-router";
import OptimizationPractice from "./practice/05.OptimizationHook";
import PokemonSearch from "./practice/06.PokemonSearch";
import UserInfoContainer from "./practice/1.PropsPractice";
import BoardContainer from "./practice/2.BoardContainer";
// import ModuleCssPractice from "./practice/03css.practice";
import AutoSaveEditor from "./practice/04.UseEffect";

function Practice() {

  return (
    <>
    <div className='App'>
      <div className='header'>
          <h1 style={{ fontWeight: "bolder" }}>KH G CLASS</h1>
      </div>
      <div>
        {/* 라우트 설정  */}     
        <Routes>

            <Route path="/" element={<div className='title'>Home</div>}/>
            <Route path="/practice">
            <Route path="1" element={<UserInfoContainer/>}/>
            <Route path="2" element={<BoardContainer/>}/>
            {/* <Route path="/css" element={<ModuleCssPractice/>}/> */}
            <Route path="4" element={<AutoSaveEditor/>}/>
            <Route path="5" element={<OptimizationPractice/>}/>
            <Route path="6">
                <Route path="id/:id" element={<PokemonSearch/>}/>
                <Route path="" element={<PokemonSearch/>}/>
            </Route>
          </Route>
        </Routes>
          <nav className='nav'>
          <li>
            {/* Link 컴포넌트를 사용하여 라우팅 설정 */}
            <Link to="/practice">메인페이지</Link>
          </li>
          <li>            
            <Link to="/practice/1">실습1</Link>
          </li>
          <li>            
            <Link to="/practice/2">실습2</Link>
          </li>
          {/* <li>            
            <Link to="/css">실습3</Link>
          </li> */}
          <li>            
            <Link to="/practice/4">실습4</Link>
          </li>
          <li>            
            <Link to="/practice/5">실습5</Link>
          </li>
          <li>            
            <Link to="/practice/6">실습6</Link>
          </li>
        </nav>
          
      </div>
    </div>
    </>
  )
}
export default Practice;
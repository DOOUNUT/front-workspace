import React, { useRef, useState } from 'react';
import { boardList } from './2.boardMockUp';  


function BoardSearch({list}: {list: typeof boardList}) {


  // - 검색어가 있으면 검색어를 포함한 게시글만 필터링하여 검색결과에 표시하세요.
  // - 검색어가 없으면 검색결과 없음을 표시하며 이 때 조건부 렌더링을 사용하세요.

  // #1. 검색어 관리
  //  - useState나 useRef를 활용하여 검색어를 관리하는 변수를 선언하세요. 
  //  - 단, 뭐가 더 효율적인지 생각한 후 작업하세요.

  const keywordRef = useRef<HTMLInputElement>(null);
  
  // #2. 검색결과 저장용 state 선언
  //  - 검색결과를 저장할 state를 선언하세요.
  //  - 이 state의 초기값은 null로 지정하세요(검색결과 없음을 의미)
  //  - 이 state는 검색결과가 있는경우 typeof boardList 타입이며, 검색결과가 없는 경우 
  //    null타입을 가지는 UnionType입니다.
  const [result, setResult] = useState<typeof boardList | null>(null);
  // #3. 검색함수 작성
  // - 이 함수는props로 전달받은 list의 데이터를 바탕으로, 게시글 제목에 검색어가 포함된
  //    게시글정보만 필터링합니다 
  // - 필터링 결과는 2번 검색결과 저장용 state의 state변경함수를 통하여 저장합니다.
  // - 검색결과가 존재하지 않거나, 입력한 검색어가 비어있는 경우 null값을 저장합니다.
  const onSearchHandler = (e:React.FormEvent) =>{
    e.preventDefault();
    const keyWord = keywordRef.current?.value?.trim();

    if(!keyWord){
        alert("입력해라");
        setResult(null);
        return;
    }
    const found = list.filter((item) => item.boardTitle.includes(keyWord));
    setResult(found.length > 0 ? found : null);
  };
  
  // #4. 
  return (
    <>
      <form>
        <h2>실습문제 4 : 게시판 검색</h2>
        <input type="text" 
        placeholder="검색어를 입력하세요."
        ref={keywordRef}
        />
        <button onClick={onSearchHandler}>검색</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>검색 결과</h3>
         {  
            result && result.length > 0 ? (
              <ul>
                {result.map((item) => (
                  <li key={item.boardNo}>
                    <strong>{item.boardTitle}</strong> - {item.boardWriter} ({item.boardDate})
                  </li>
                ))}
              </ul>
            ) : (
              <div>검색결과가 없습니다.</div>
            )
          }
      </div>
    </>
  );
}

export default BoardSearch;
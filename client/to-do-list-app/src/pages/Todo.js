import styled from 'styled-components';

export const TodoContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-x: scroll;
`;
export const Todo = styled.div`
border: 1px solid red;
    background: white;
    width: 30%;
    border: none;
    padding: 15px;
    border-radius: 30px;
    margin: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;


export default function TodoItem () {

  return (
        <TodoContainer>
              <Todo>
                <input className="my-1" type="checkbox" />
                <div className="px-2 pt-2 w-full">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-2">토이 프로젝트</h2>
                  <h1 className="title-font text-base font-medium text-gray-900 bg-yellow-100 text-center">To-do-list 컴포넌트 완성하기</h1>
                  <p className=" text-sm mb-1">  키워드 또는 카테고리로 검색 기능 추가하기 </p>
                </div>
              </Todo>

        </TodoContainer>
  )
}
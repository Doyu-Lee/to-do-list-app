import styled from 'styled-components';

export const AddBtn = styled.button`
  /* background-color: ${(props) => props.color || "var(--coz-purple-500)"}; */
    background: white;
    text-decoration: none;
    border: none;
    padding: 20px;
    font-size: 1.2rem;
    color: burlywood;
    border-radius: 30px;
    cursor: grab;
    margin-bottom: 20px;
`;

const Nav = ({idx, setIdx }) => {
    return (
        <nav className="flex flex-col justify-between items-center 
        font-hye bg-white bg-opacity-50 rounded-xl px-3">
            <ui>
                <li className={idx===0? 'selected' : ''} onClick={()=>setIdx(0)}>
                    <div style={{'fontSize' : '2rem'}}>홈</div>
                </li>
                <li className={idx===1? 'selected' : ''} onClick={()=>setIdx(1)}>
                    <div>모두 보기</div>
                </li>
                <li className={idx===2? 'selected' : ''} onClick={()=>setIdx(2)}>
                    <div>다가오는 일정</div>
                </li>
                <li className={idx===2? 'selected' : ''} onClick={()=>setIdx(2)}>
                    <div>완료된 일정</div>
                </li>
            </ui>
            <div>
            <div className="text-gray-300 text-sm text-center"> ▼  카테고리</div>
            <ui> 
                <li className={idx===2? 'selected' : ''} onClick={()=>setIdx(2)}>
                    <div>중요한 일정</div>
                </li>
                <li className={idx===2? 'selected' : ''} onClick={()=>setIdx(2)}>
                    <div className='mb-10'>토이 프로젝트</div>
                </li>
                <li className={idx===2? 'selected' : ''} onClick={()=>setIdx(2)}>
                    <div>관리</div>
                </li>
            </ui>
            </div>
            <div className="mb-30" onClick={()=>setIdx(2)}>
                <AddBtn>추가</AddBtn>
            </div>
            {/* {[1,2,3,4,5,6,7,8].map(el=> <li key={el} className={idx===el? 'selected' : ''} onClick={()=>setIdx(el)}> 문제 {el} </li>)} */}
        </nav>
    )
}

export default Nav
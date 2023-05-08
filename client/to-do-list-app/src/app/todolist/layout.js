import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBellConcierge, faBellSlash } from '@fortawesome/free-solid-svg-icons';

export default function Page({children}) {
let nickName = 'Doyu'; //나중에 데이터 받아와야 함.
let randomWord = '그거 아세요? 작심 삼일을 열 번씩 반복하면 작심 한 달이랍니다!'
return ( <>
        <div className="toDoList_nav flex justify-between font-omyu text-xl text-zinc-400 mb-7" >
            <div className="pl-10">{`${nickName} 님, ${randomWord}`}</div>
            <div className="flex">
            <input className="pl-3" placeholder="검색" />
            <div className="mx-10"><FontAwesomeIcon className="bg-yellow" icon={faBell} style={{color:"#aeaa7e"}}/></div>
            </div>
        </div>
        <section>{children}</section>
</> )
}
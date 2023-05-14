import TodoItem from "./Todo"

const Page00 = () => {
    return (
        <article className="font-hye ">
            <div className="flex justify-between pr-10">
                <h1 className="ml-10">오늘의 할 일</h1>
                <div className="flex ">
                    <h1 className="ml-10">삭제</h1>
                    <h1 className="ml-10">모두 삭제</h1>
                </div>
            </div>
            <TodoItem />
            <div className="ml-10"> 다가오는 일정 </div>
            <TodoItem />
            {/* <h2>Upcoming</h2> */}


        </article>
    )
}

export default Page00
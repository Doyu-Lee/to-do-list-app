import data from "@/app/static/staticData"

const Aside = ({idx}) => {
    const aside = data.aside[idx]
    return (
        <div className="font-omyu flex items-center">
        <iframe
        className="rounded-xl"
            allow="microphone;"
            width="350"
            height="530"
            src="https://console.dialogflow.com/api-client/demo/embedded/918b3a83-ebd8-410f-8155-dff0bf42e5d2">
        </iframe>
        </div>
        // <aside>
        //     <div className="title2">가이드</div>
        //     {aside? (
        //     <>
        //         <div className="title3">{aside.title}</div>
        //         {aside.content ? aside.content.map((el, idx)=> <li key={idx}>{el}</li>) : null}
        //     </> ) : null}
        // </aside>
    )
}

export default Aside
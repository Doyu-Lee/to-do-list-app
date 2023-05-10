import Page00 from '@/pages/Page00'
import  Page01  from '@/pages/Page01'
import  Page02  from '@/pages/Page02'
import  Page03  from '@/pages/Page03'
import  Page04  from '@/pages/Page04'
import  Page05  from '@/pages/Page05'




const Main = ({idx}) => {
    return (
        <main>
            { idx === 1 ? <Page01 />
            : idx === 2 ? <Page02 />
            : idx === 3 ? <Page03 />
            : idx === 4 ? <Page04 />
            : idx === 5 ? <Page05 />
            : <Page00 />}
        </main>
    )
}

export default Main
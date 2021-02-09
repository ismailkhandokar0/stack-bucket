import React from 'react'

const age = 'under Age 23'

class App extends React.Component{
    render(){

       let Myfollwer=()=>{
            return <b><i>I am Myfollower method </i></b>
        }

        const name = 'under Ismail'

        const obj = {
            title:'Outline Title',
            classname:'btn text-primary',
            name:'dilam akta'
        }

        return (
            <>
                <h1>Hello world</h1>
                <Myfollwer/>
                <h4>My bairer age is {age}</h4>
                <h1 title='I am inline title'>This is inline title</h1>
                <h1 {...obj}><i>This is outline title</i></h1>
            </>
        )
    }
}

export default App
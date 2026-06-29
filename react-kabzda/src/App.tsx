import './App.css'
import {OnOff} from './components/onOff/OnOff.tsx';


function App() {
    return (
        <>
            <AppTitle title="App Title"/>
            <OnOff on={true}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion title='Menu' collapsed={true}/>*/}
            {/*<Accordion title='Users' collapsed={false}/>*/}
        </>
    )
}

export default App

type PropsAppTitle = {
    title: string
}
const AppTitle = ({title}: PropsAppTitle) => {
    return (
        <h1>{title}</h1>
    )
}




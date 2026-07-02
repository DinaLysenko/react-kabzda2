import './App.css'
import {OnOff} from './components/onOff/OnOff.tsx';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion.tsx';
import {UncontrolledRating} from './components/rating/UncontrolledRating.tsx';


function App() {
    return (
        <>
            <AppTitle title="App Title"/>
            <OnOff />
            <UncontrolledAccordion />
            <UncontrolledRating/>
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




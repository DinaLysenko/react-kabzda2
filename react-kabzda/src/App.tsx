import './App.css'
import {Rating} from './components/rating/Rating.tsx';
import {Accordion} from './components/accordion/Accordion.tsx';

function App() {
    return (
        <>
            <AppTitle title='App Title'/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title='Menu' collapsed={true}/>
            <Accordion title='Users' collapsed={false}/>
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




import './App.css'
import {Accordion} from './components/accordion/Accordion.tsx';
import {useState} from 'react';
import {Rating, type RatingValuesType} from './components/rating/Rating.tsx';
import {OnOff} from './components/onOff/OnOff.tsx';


function App() {
    const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<RatingValuesType>(0)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <>
            <AppTitle title="App Title"/>
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledAccordion />*/}
            {/*<UncontrolledRating/>*/}
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <Accordion title="Menu" menuCollapsed={menuCollapsed}
                       setMenuCollapsed={() => setMenuCollapsed(!menuCollapsed)}/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

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




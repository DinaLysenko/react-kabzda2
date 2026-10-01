import {type ChangeEvent, useRef, useState} from 'react';


export default {
    component: 'input'
}
export const UncontrolledInput = () => {
    return (
        <input/>
    )
}
export const ControlledInputWithFixedValue = () => {
    return (
        <input value={'Hi'}/>
    )
}
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <input onChange={onChangeHandler}/> - {value}
        </>

    )
}
export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const refElem = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        const element = refElem.current as HTMLInputElement
        setValue(element.value)
    }
    return (
        <>
            <input ref={refElem}/>
            <button onClick={onClickHandler}> save</button>
            actual value - {value}
        </>

    )
}
export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
            <input value={value} onChange={onChangeHandler}/>
    )
}
export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const onChangeChecked=(e: ChangeEvent<HTMLInputElement>)=>{
        setChecked(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={checked} onChange={onChangeChecked}/>
    )
}
export const ControlledSelect = () => {
    const[parentValue, setParentValue] = useState<string|undefined>('2')
    const onSelectHandler=(e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onSelectHandler}>
            <option>none</option>
            <option value={'1'}>Moscow</option>
            <option value={'2'}>Paris</option>
            <option value={'3'}>London</option>
        </select>
    )
}
import {useState} from 'react';

type Props={
    items: {id: number, title:string}[]
    value: string
    onChange: (value: string) => void
}
export const Select=({items}:Props)=>{
    const[selected,setSelected]=useState(false)
    const[value,setValue]=useState('none')
    const onClickSelect=()=>{
        setSelected(!selected)
    }
    const onClickSelectTitle=(title:string)=>{
        setSelected(!selected)
        setValue(title)
    }
    const selectStyle={
        border: '1px solid blue',
        width: '10%',
        padding: '10px',
        fontWeight: 'bold',
    }
const optionStyle={
    padding: '10px',
}
    return (
        <div>
            <div style={selectStyle} onClick={onClickSelect}>{value}</div>
            {selected && <div style={selectStyle}>
                {items. map(i=><div style={optionStyle} key={i.id}  onClick={()=>onClickSelectTitle(i.title)}>{i.title}</div>)}
            </div>}

        </div>
    )
}
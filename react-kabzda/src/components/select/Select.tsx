import {useState} from 'react';

type Props={
    items: {id: number, title:string}[]
    value: string
    onChange: (value: string) => void
}
export const Select=({items}:Props)=>{
    const[selected,setSelected]=useState(false)
    const onClickSelect=()=>{
        setSelected(!selected)
    }
    return (
        <div>
            {!selected &&<div onClick={onClickSelect}>{'none'}</div>}
            {selected &&items. map(i=><div key={i.id} onClick={onClickSelect}>{i.title}</div>)}
        </div>
    )
}
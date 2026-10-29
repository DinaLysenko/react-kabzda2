import s from './Select.module.css'
import {useEffect, useState, type KeyboardEvent} from 'react';

type Items = {
    value: any
    title: string,
}
type Props = {
    items: Items[]
    value: any
    onChange: (value: any) => void
}
export const Select = ({items, onChange, value}: Props) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: string) => {
        onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]

                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return
                    }
                }

            }
            if(!selectedItem){
                onChange(items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(!active)
        }
    }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {items.map(i => <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            onClick={() => onItemClick(i.value)} key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>

    )
}
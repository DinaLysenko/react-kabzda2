
import {Select} from './Select.tsx';
import {useState} from 'react';

export default {
    component: Select,
}


export const WithValue = () => {
    const [value, setValue] = useState('2')
    return < >
        < Select
            items={[{value: '1', title: 'Moscow'},
                {
                    value: '2', title:
                        'London'
                }
                ,
                {
                    value: '3', title:
                        'Paris'
                }
            ]
            }
            onChange={setValue}
            value={value}
        />
    </>
}


export const WithOutValue = () => {
const[value, setValue] = useState(null)
   return <>
        <Select items={[{value: '1', title: 'Moscow'}, {value: '2', title: 'London'}, {value: '3', title: 'Paris'}]}
                onChange={setValue}
                value={value}
        />
    </>
}
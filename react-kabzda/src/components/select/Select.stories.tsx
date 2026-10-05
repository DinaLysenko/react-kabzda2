
import {action} from 'storybook/actions';
import {Select} from './Select.tsx';

export default {
    component: Select,
}

const onClickCallback=action('some title was clicked')
export const DefaultSelect = () => {
    return (
        <Select items={[{id:0, title: 'none'}, {id: 1, title: 'Moscow'}, {id: 2, title: 'London'},{id: 3, title: 'Paris'}]}  onChange={onClickCallback}  value={'none'}   />
    )
}
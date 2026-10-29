import {test, expect} from 'vitest';
import {reducer, type State, TOGGLE_COLLAPSED} from './reducer.tsx';

test('collapsed should be true', () => {
    const state: State = {collapsed: false};
    const newState=reducer(state, {type: TOGGLE_COLLAPSED});

    expect(newState.collapsed).toBe(true);
})
test('collapsed should be false', () => {
    const state: State = {collapsed: true};
    const newState=reducer(state, {type: TOGGLE_COLLAPSED});

    expect(newState.collapsed).toBe(false);
})
test('expect error', () => {
    const state: State = {collapsed: true};

    expect(()=>reducer(state, {type: 'FAKETYPE'})).toThrow()
})
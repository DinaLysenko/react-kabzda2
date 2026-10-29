export type Action = {
    type: string,
}
export const TOGGLE_COLLAPSED='TOGGLE-COLLAPSED'

export type State={
    collapsed: boolean
}
export const reducer = (state: State, action: Action):State => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed };
        default:
            throw new Error(`Unknown action type`);
    }
    return state
}
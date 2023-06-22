import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            state = action.payload === 'up'? copyState.sort((a, b) => a.name.localeCompare(b.name))
    :copyState.sort((a, b) => {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    });
            return  state   // need to fix
        }
        case 'check': {
        let    copyState =   state.filter(el => el.age >= action.payload)
            return copyState // need to fix
        }
        default:
            return state
    }
}

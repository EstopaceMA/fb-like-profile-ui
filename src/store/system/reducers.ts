import { 
    SystemsAction,
    SystemsState,
    SET_DARK_MODE
} from './types';


const INITIAL_STATE: SystemsState = {
    isDarkMode: true
}

const systemsReducer = (state = INITIAL_STATE, action: SystemsAction): SystemsState => {
    switch(action.type) {
        case SET_DARK_MODE: {
            return {...state, isDarkMode: action.payload };
        }
        default: {
            return state;
        }
    }
}

export default systemsReducer;
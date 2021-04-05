import {
    SystemsAction,
    SET_DARK_MODE
} from './types';

export const setDarkMode = (isDarkMode: boolean): SystemsAction => ({
    type: SET_DARK_MODE,
    payload: isDarkMode
});
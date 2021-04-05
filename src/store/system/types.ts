export interface SystemsState {
    isDarkMode: boolean;
}

export const SET_DARK_MODE = 'set_dark_mode';

export interface SetDarkModeAction {
    type: typeof SET_DARK_MODE;
    payload: boolean;
}

export type SystemsAction = SetDarkModeAction;
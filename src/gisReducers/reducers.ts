export interface InitialGisStateType {
    sun: {
        show: boolean,
        glowFactor: number
    },
    moon: {
        show: boolean
    }
}

export interface ActionType {
    type: string,
    payload: any
}

export const initialGisState: InitialGisStateType = {
    sun: {
        show: true,
        glowFactor: 1,
    },
    moon: {
        show: true,
    }
};

export function reducers(state: InitialGisStateType, {type, payload}: ActionType) {
    switch (type) {
        case 'sun-show':
            return {...state, sun: payload};
        default:
            return state;
    }
}

export interface InitialGisStateType {
    sun: {
        show: boolean
        glowFactor: number
    }
    moon: {
        show: boolean
    },
    fog: {
        enabled: boolean
        minimumBrightness: number
        density: number
    }
}

export interface ActionType {
    type: string
    payload: any
}

export const initialGisState: InitialGisStateType = {
    sun: {
        show: true,
        glowFactor: 1,
    },
    moon: {
        show: true,
    },
    fog: {
        enabled: true,
        minimumBrightness: 0.03,
        density: 0.0002,
    }
}

export function reducers(state: InitialGisStateType, {type, payload}: ActionType) {
    const keys = type.split('-');
    switch (type) {
        // case 'sun-show':
        //     return {...state, sun: payload}
        // case 'fog-enabled':
        //     return {...state, fog: payload}
        // case 'fog-minimumBrightness':
        //     return {...state, fog: payload}
        default:
            return {...state, [keys[0]]: { ...state[keys[0] as keyof typeof initialGisState], [keys[1]]: payload[keys[1]] }}
    }
}

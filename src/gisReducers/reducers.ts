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
    },
    globe: {
        showGroundAtmosphere: boolean
        lightingFadeInDistance: number
        lightingFadeOutDistance: number
        atmosphereBrightnessShift: number
        atmosphereHueShift: number
        atmosphereSaturationShift: number
        enableLighting: boolean
        dynamicAtmosphereLighting: boolean
        translucency: {
            enabled: boolean
            frontFaceAlpha: number
            backFaceAlpha: number
        }
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
    },
    globe: {
        showGroundAtmosphere: true,
        lightingFadeInDistance: 20000000,
        lightingFadeOutDistance: 10000000,
        atmosphereBrightnessShift: 0,
        atmosphereHueShift: 0,
        atmosphereSaturationShift: 0,

        enableLighting: false,
        dynamicAtmosphereLighting: true, // 超图中不生效
        translucency: {
            enabled: false,
            frontFaceAlpha: 0.1,
            backFaceAlpha: 0.1,
        }
    },
}

export function reducers(state: InitialGisStateType, {type, payload}: ActionType) {
    const keys = type.split('-');
    switch (type) {
        // case 'sun-show':
        //     return {...state, sun: payload}
        // case 'fog-enabled':
        //     return {...state, fog: payload}
        case 'globe-translucency':
            return {...state, translucency: { ...state.globe.translucency, ...payload }}
        default:
            return {
                ...state,
                [keys[0]]: {...state[keys[0] as keyof typeof initialGisState], [keys[1]]: payload[keys[1]]}
            }
    }
}

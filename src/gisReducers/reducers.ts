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
    cloud: {
        show: boolean
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
    },
    skyAtmosphere: {
        show: boolean
        brightnessShift: number
        hueShift: number
        saturationShift: number
    },
    baseMap: {
        type: 'baidu' | 'tengxun' | 'gaode' | null
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
    cloud: {
        show: false
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
    },
    skyAtmosphere: {
        show: true,
        brightnessShift: 0,
        hueShift: 0,
        saturationShift: 0,
    },
    baseMap: {
        type: null
    }
}

export function reducers(state: InitialGisStateType, {type, payload}: ActionType) {
    const keys = type.split('-');
    switch (type) {
        // case 'sun-show':
        //     return {...state, sun: payload}
        // case 'fog-enabled':
        //     return {...state, fog: payload}
        // case 'globe-translucency':
        //     return {...state, translucency: { ...state.globe.translucency, ...payload }}
        default:
            return {
                ...state,
                [keys[0]]: {...state[keys[0] as keyof typeof initialGisState], [keys[1]]: payload[keys[1]]}
            }
    }
}

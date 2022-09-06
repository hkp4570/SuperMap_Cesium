import {useEffect} from 'react'
import {InitialGisStateType} from '../gisReducers/reducers'

export const useListenGis = (viewer: any, state: InitialGisStateType) => {
    console.log(state, 'state')
    const {fog, globe} = state

    useEffect(() => {
        if (viewer) {
            viewer.scene.fog.enabled = fog.enabled
        }
    }, [viewer, fog.enabled])

    useEffect(() => {
        if (viewer) {
            viewer.scene.fog.minimumBrightness = fog.minimumBrightness;
        }
    }, [viewer, fog.minimumBrightness])

    useEffect(() => {
        if (viewer) {
            viewer.scene.fog.density = fog.density;
        }
    }, [viewer, fog.density])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.showGroundAtmosphere = globe.showGroundAtmosphere;
        }
    }, [viewer, globe.showGroundAtmosphere])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.lightingFadeInDistance = globe.lightingFadeInDistance;
        }
    }, [viewer, globe.lightingFadeInDistance])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.lightingFadeOutDistance = globe.lightingFadeOutDistance;
        }
    }, [viewer, globe.lightingFadeOutDistance])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.atmosphereBrightnessShift = globe.atmosphereBrightnessShift;
        }
    }, [viewer, globe.atmosphereBrightnessShift])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.atmosphereHueShift = globe.atmosphereHueShift;
        }
    }, [viewer, globe.atmosphereHueShift])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.atmosphereSaturationShift = globe.atmosphereSaturationShift;
        }
    }, [viewer, globe.atmosphereSaturationShift])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.enableLighting = globe.enableLighting;
        }
    }, [viewer, globe.enableLighting])

    useEffect(() => {
        if (viewer) {
            viewer.scene.globe.dynamicAtmosphereLighting = globe.dynamicAtmosphereLighting;
        }
    }, [viewer, globe.dynamicAtmosphereLighting])
}

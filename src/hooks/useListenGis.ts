import {useEffect} from 'react'
import {InitialGisStateType} from '../gisReducers/reducers'

export const useListenGis = (viewer: any, state: InitialGisStateType) => {
    console.log(state, 'state')
    const {sun, fog} = state
    useEffect(() => {
        if (viewer) {
            viewer.scene.sun.show = sun.show
        }
    }, [viewer, sun.show])

    useEffect(() => {
        if (viewer) {
            viewer.scene.fog.enabled = fog.enabled
        }
    }, [viewer, fog.enabled])

    useEffect(() => {
        if(viewer){
            viewer.scene.fog.minimumBrightness = fog.minimumBrightness;
        }
    }, [viewer, fog.minimumBrightness])

    useEffect(() => {
        if(viewer){
            viewer.scene.fog.density = fog.density;
        }
    },[viewer, fog.density])
}

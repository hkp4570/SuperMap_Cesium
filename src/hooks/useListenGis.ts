import { useEffect } from 'react'
import { InitialGisStateType } from '../gisReducers/reducers'

export const useListenGis = (viewer: any, state: InitialGisStateType) => {
    const { sun } = state
    useEffect(() => {
        if (viewer) {
            viewer.scene.sun.show = sun.show
        }
    }, [viewer, sun.show])
}

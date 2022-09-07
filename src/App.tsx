import React, { useEffect, useReducer, useRef } from 'react'
import PanelSetting from './components/PanelSetting'
import { useListenGis } from './hooks/useListenGis'
import { ActionType, initialGisState, InitialGisStateType, reducers } from './gisReducers/reducers'
import styles from './App.module.scss'

function App() {
    const [gisState, gisDispatch] = useReducer<React.Reducer<InitialGisStateType, ActionType>>(reducers, initialGisState)
    const viewerRef = useRef<any>(null)

    useListenGis(viewerRef.current, gisState)

    useEffect(() => {
        if (window.Cesium && !viewerRef.current) {
            viewerRef.current = new window.Cesium.Viewer('cesiumContainer', {
                // terrainProvider : new window.Cesium.CesiumTerrainProvider(),
            })
            window._viewer = viewerRef.current;

            // 超图设置不生效
            // const layers = viewerRef.current.scene.imageryLayers;
            // const baseLayer = layers.get(0);
            // baseLayer.colorToAlpha = new window.Cesium.Color(0.0, 0.016, 0.059);
            // baseLayer.colorToAlphaThreshold = 0.2;
            //
            // const singleTileLayer = layers.addImageryProvider(new window.Cesium.SingleTileImageryProvider({
            //     url: '/assets/earthbump1k.jpg',
            //     rectangle: window.Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0),
            // }))
            // singleTileLayer.colorToAlpha = new window.Cesium.Color(0.0,0.0,0.0,1.0);
            // singleTileLayer.colorToAlphaThreshold = 0.1;
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <div id='cesiumContainer' className={styles.cesiumContainer}></div>
            <PanelSetting gisState={gisState} gisDispatch={gisDispatch} />
        </div>
    )
}

export default App

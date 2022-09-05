import React, {useEffect, useReducer, useRef} from "react";
import PanelSetting from "./components/PanelSetting";
import {useListenGis} from "./hooks/useListenGis";
import {ActionType, initialGisState, InitialGisStateType, reducers} from "./gisReducers/reducers";
import styles from "./App.module.scss";

function App() {
    const [gisState, gisDispatch] = useReducer<React.Reducer<InitialGisStateType, ActionType>>(reducers, initialGisState);
    const viewerRef = useRef(null);

    useListenGis(viewerRef.current, gisState);

    useEffect(() => {
        if (window.Cesium && !viewerRef.current) {
            viewerRef.current = new window.Cesium.Viewer("cesiumContainer", {});
        }
    }, []);

    return <div className={styles.wrapper}>
        <div id="cesiumContainer" className={styles.cesiumContainer}></div>
        <PanelSetting gisState={gisState} gisDispatch={gisDispatch} />
    </div>;
}

export default App;

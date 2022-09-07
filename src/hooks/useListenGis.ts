import {useEffect} from 'react'
import {InitialGisStateType} from '../gisReducers/reducers'

let cloudBox: any;

export const useListenGis = (viewer: any, state: InitialGisStateType) => {
    console.log(state, 'state')
    const {fog, cloud, globe, skyAtmosphere, baseMap} = state

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
            if (cloud.show && !cloudBox) {
                cloudBox = new window.Cesium.CloudBox({
                    url: 'http://support.supermap.com.cn:8090/webgl/examples/webgl/images/clouds-supermap-sm.png'
                })
                viewer.scene.primitives.add(cloudBox);
            }
            if (!cloud.show && cloudBox) {
                cloudBox && viewer.scene.primitives.remove(cloudBox);
                cloudBox = null;
            }
        }
    }, [viewer, cloud.show])

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
            viewer.scene.skyAtmosphere.show = skyAtmosphere.show;
        }
    }, [viewer, skyAtmosphere.show])

    useEffect(() => {
        if (viewer) {
            viewer.scene.skyAtmosphere.brightnessShift = skyAtmosphere.brightnessShift;
        }
    }, [viewer, skyAtmosphere.brightnessShift])

    useEffect(() => {
        if (viewer) {
            viewer.scene.skyAtmosphere.hueShift = skyAtmosphere.hueShift;
        }
    }, [viewer, skyAtmosphere.hueShift])

    useEffect(() => {
        if (viewer) {
            viewer.scene.skyAtmosphere.saturationShift = skyAtmosphere.saturationShift;
        }
    }, [viewer, skyAtmosphere.saturationShift])

    useEffect(() => {
        if (viewer) {
            const layers = viewer.scene.imageryLayers;
            const oldBaseMap = layers.get(1);
            if (oldBaseMap) {
                layers.remove(oldBaseMap);
            }
            switch (baseMap.type) {
                case "baidu":
                    layers.addImageryProvider(
                        new window.Cesium.BaiduImageryProvider({
                            style: 'vec',
                            crs: 'WGS84',
                        }),
                    );
                    break;
                case "gaode":
                    layers.addImageryProvider(
                        new window.Cesium.AmapImageryProvider({
                            style: 'img',
                            crs: 'WGS84',
                        }),
                    );
                    break;
                case "tengxun":
                    layers.addImageryProvider(
                        new window.Cesium.TencentImageryProvider({
                            style: 1,
                        })
                    );
                    break;
                default:
                    break;
            }
        }
    }, [viewer, baseMap.type])
}

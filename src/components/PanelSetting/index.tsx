import React from 'react'
import styles from './index.module.scss'
import {ActionType, InitialGisStateType} from '../../gisReducers/reducers'

interface IProps {
    gisState: InitialGisStateType
    gisDispatch: React.Dispatch<ActionType>
}

const PanelSetting = (props: IProps) => {
    const {gisState, gisDispatch} = props

    const updateGisData = (type: string, data: any) => {
        const keys = type.split('-');
        gisDispatch({
            type: type,
            payload: {
                [keys[1]]: data
            }
        })
    }

    return (
        <div className={styles.panel}>
            <div className={styles.title}>雾设置 Fog</div>
            <div>
                雾：
                <input
                    type="checkbox"
                    checked={gisState.fog.enabled}
                    onChange={e => updateGisData('fog-enabled', e.target.checked)}
                />
            </div>
            <div>
                最低亮度：
                <input type="range" min={0} max={1} step={0.01}
                       defaultValue={gisState.fog.minimumBrightness}
                       onChange={e => updateGisData('fog-minimumBrightness', +e.target.value)}/>
                {gisState.fog.minimumBrightness}
            </div>
            <div>
                密度：
                <input type="number" step={0.0001} value={gisState.fog.density}
                       onChange={e => updateGisData('fog-density', +e.target.value)}/>
            </div>
            <div className={styles.title}>地球</div>
            <div>
                云：
                <input
                    type="checkbox"
                    checked={gisState.cloud.show}
                    onChange={e => updateGisData('cloud-show', e.target.checked)}
                />
            </div>
            <div>
                地面大气层：
                <input
                    type="checkbox"
                    checked={gisState.globe.showGroundAtmosphere}
                    onChange={e => updateGisData('globe-showGroundAtmosphere', e.target.checked)}
                />
            </div>
            <div>
                lighting Fade In Distance：
                <input
                    type="number"
                    min={0}
                    step={1000}
                    value={gisState.globe.lightingFadeInDistance}
                    onChange={e => updateGisData('globe-lightingFadeInDistance', +e.target.value)}
                />
            </div>
            <div>
                lighting Fade Out Distance：
                <input
                    type="number"
                    min={0}
                    step={1000}
                    value={gisState.globe.lightingFadeOutDistance}
                    onChange={e => updateGisData('globe-lightingFadeOutDistance', +e.target.value)}
                />
            </div>
            <div>
                亮度：
                <input
                    type="number"
                    min={-1}
                    max={1}
                    step={0.1}
                    value={gisState.globe.atmosphereBrightnessShift}
                    onChange={e => updateGisData('globe-atmosphereBrightnessShift', +e.target.value)}
                />
            </div>
            <div>
                色调：
                <input
                    type="number"
                    min={-1}
                    max={1}
                    step={0.1}
                    value={gisState.globe.atmosphereHueShift}
                    onChange={e => updateGisData('globe-atmosphereHueShift', +e.target.value)}
                />
            </div>
            <div>
                饱和度：
                <input
                    type="number"
                    min={-1}
                    max={1}
                    step={0.1}
                    value={gisState.globe.atmosphereSaturationShift}
                    onChange={e => updateGisData('globe-atmosphereSaturationShift', +e.target.value)}
                />
            </div>
            <div>
                地球照明：
                <input
                    type="checkbox"
                    checked={gisState.globe.enableLighting}
                    onChange={e => updateGisData('globe-enableLighting', e.target.checked)}
                />
            </div>
            <div>
                dynamicAtmosphereLighting：
                <input
                    type="checkbox"
                    checked={gisState.globe.dynamicAtmosphereLighting}
                    onChange={e => updateGisData('globe-dynamicAtmosphereLighting', e.target.checked)}
                />
            </div>
            <div className={styles.title}>
                天空大气层：
                <input
                    type="checkbox"
                    checked={gisState.skyAtmosphere.show}
                    onChange={e => updateGisData('skyAtmosphere-show', e.target.checked)}
                />
            </div>
            <div>
                亮度：
                <input
                    type="number"
                    min={-1}
                    max={1}
                    step={0.1}
                    value={gisState.skyAtmosphere.brightnessShift}
                    onChange={e => updateGisData('skyAtmosphere-brightnessShift', +e.target.value)}
                />
            </div>
            <div>
                色调：
                <input
                    type="number"
                    min={-1}
                    max={1}
                    step={0.1}
                    value={gisState.skyAtmosphere.hueShift}
                    onChange={e => updateGisData('skyAtmosphere-hueShift', +e.target.value)}
                />
            </div>
            <div>
                饱和度：
                <input
                    type="number"
                    min={-1}
                    max={1}
                    step={0.1}
                    value={gisState.skyAtmosphere.saturationShift}
                    onChange={e => updateGisData('skyAtmosphere-saturationShift', +e.target.value)}
                />
            </div>
            <div className={styles.title}>底图设置</div>
            <div>
                百度地图：
                <input
                    type="checkbox"
                    checked={gisState.baseMap.type === 'baidu'}
                    onChange={e => updateGisData('baseMap-type', e.target.checked ? 'baidu' : null)}
                />
                腾讯地图：
                <input
                    type="checkbox"
                    checked={gisState.baseMap.type === 'tengxun'}
                    onChange={e => updateGisData('baseMap-type', e.target.checked ? 'tengxun' : null)}
                />
                高德地图：
                <input
                    type="checkbox"
                    checked={gisState.baseMap.type === 'gaode'}
                    onChange={e => updateGisData('baseMap-type', e.target.checked ? 'gaode' : null)}
                />
            </div>

        </div>
    )
}

export default PanelSetting

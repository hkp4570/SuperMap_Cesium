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
            <div>雾设置</div>
            <div>
                雾：<input
                type="checkbox"
                checked={gisState.fog.enabled}
                onChange={e => updateGisData('fog-enabled', e.target.checked)}
            />
            </div>
            <div>
                最低亮度：<input type="range" min={0} max={1} step={0.01} defaultValue={gisState.fog.minimumBrightness} onChange={e => updateGisData('fog-minimumBrightness', +e.target.value)}/>
                {gisState.fog.minimumBrightness}
            </div>
            <div>
                密度：<input type="number" step={0.0001} value={gisState.fog.density} onChange={e => updateGisData('fog-density', +e.target.value)}/>
            </div>
        </div>
    )
}

export default PanelSetting

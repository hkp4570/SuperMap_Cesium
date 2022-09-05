import React from 'react';
import styles from './index.module.scss';
import {ActionType, InitialGisStateType} from "../../gisReducers/reducers";

interface IProps {
    gisState: InitialGisStateType,
    gisDispatch: React.Dispatch<ActionType>
}

const PanelSetting = (props:IProps) => {
    const { gisState, gisDispatch } = props;
    console.log(gisState)
    return (
        <div className={styles.panel}>
            太阳：{gisState.sun.show ? '显示' : '隐藏'}
            <button onClick={() => gisDispatch({ type: 'sun-show', payload:{ ...gisState.sun, show: !gisState.sun.show} })}>太阳显隐</button>
        </div>
    );
};

export default PanelSetting;

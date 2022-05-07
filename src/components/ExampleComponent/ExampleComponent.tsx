import React from 'react';
import style from './ExampleComponent.module.scss';
import { ExampleType } from './types/ExampleType';


const ExampleComponent: React.FunctionComponent = (props: ExampleType)  => {
    return (
        <div className={style['exampleStyle']}>
        </div>
    );
}

export default ExampleComponent;
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import getData from '../../utils/getData';
import style from '../../css/preview.module.css';

function Preview(Original) {
    return function NewComponent(props) {
        let state = useSelector(state => ( state ));
        let data = getData(props.match, state);
        if (!data) {
          return <Redirect to='/' /> 
        }
        let results = Object.entries(data)
        return (
            <div className={style.preview} >
                <Original {...props} data={data} />
                {
                    results.map((value, key) => (
                        <div key={key}>
                            <div className={style.subtopic}>{value[0]}:</div>
                            <div className={style.subcontent}>{value[1]}</div>
                            <br />
                        </div>
                    ))
                }
            </div>
        )
        
    }
}

export default Preview

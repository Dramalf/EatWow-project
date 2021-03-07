import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { Axios } from '../../axios'
import { connect } from 'react-redux'
import { meal } from '../../redux/actions/setMeal'
import qs from 'qs'
import './index.css'
const StartBtn = (props) => {
    const [tags, settags] = useState([]);
    const startChoose = () => {
        var obj = { name: 'mlf' }
        Axios.post('http://127.0.0.1:5053/randommeal', qs.stringify(obj))
            .then(res => {
                props.meal(res.data)
            })
    }
    useEffect(() => {
        settags(props.tags)
        console.log("startEF", tags)
    }, [props.tags])
    return (
        <div >
            <Button className='btn' type="primary" size="large" onClick={startChoose}>开始</Button>
        </div>

    );
}

export default connect(
    state => state,
    { meal }
)(StartBtn)

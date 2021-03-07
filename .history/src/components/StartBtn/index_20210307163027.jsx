import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';
import { Axios } from '../../axios'
import { connect } from 'react-redux'
import { meal } from '../../redux/actions/setMeal'
import qs from 'qs'
import './index.css'
const StartBtn = (props) => {
    const startChoose = () => {
        let scripts = []
        console.log("start")
        // props.meal({ name: 'mlf' })
        var obj = { name: 'mlf' }
        // var instance = axios.create({ headers: { 'content-type': 'json' } })
        Axios.post('http://127.0.0.1:5053/randommeal', qs.stringify(obj))
            .then(res => {
                props.meal(res.data)
            })
    }
    useEffect(() => {
        console.log("startEF", props)
    })
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

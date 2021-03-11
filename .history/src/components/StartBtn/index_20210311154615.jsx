import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { Axios } from '../../axios'
import { connect } from 'react-redux'
import { meal } from '../../redux/actions/setMeal'
import qs from 'qs'
import './index.css'
const StartBtn = (props) => {
    const [tags, settags] = useState([]);
    const [userid, setuserid] = useState('');
    const startChoose = () => {
        console.log("&*&", props)

        const ajaxData = { userid, tags }
        console.log("发送", ajaxData)
        Axios.post('http://localhost:5053/randommeal', qs.stringify(ajaxData))
            .then(res => {
                console.log("收到", res.data)
                props.meal(res.data)
            })
    }

    useEffect(() => {
        setuserid(props.sendId.id)
        settags(props.tags)
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

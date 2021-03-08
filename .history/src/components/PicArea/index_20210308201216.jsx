import React from 'react';
import { connect } from 'react-redux'
import './index.css'
const PicArea = (props) => {

    return (
        <div className='picArea' >
            <div className="pic">
                <img src={props.randomMeal.picUrl}></img>
            </div>

            <div className='defaultText'>今天吃{props.randomMeal.mealName ? props.randomMeal.mealName : '啥？'}</div>

        </div >
    );
}
export default connect(
    state => state
)(PicArea)

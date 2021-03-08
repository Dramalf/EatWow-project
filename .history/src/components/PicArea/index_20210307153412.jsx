import React from 'react';
import { connect } from 'react-redux'
import './index.css'
const PicArea = (props) => {

    return (
        <div className='picArea' >
            <div className="pic">
                <img src={props.randomMeal.pic}></img>
            </div>

            <div className='defaultText'>今天吃{props.randomMeal.name ? props.randomMeal.name : '啥？'}</div>

        </div >
    );
}
export default connect(
    state => state
)(PicArea)

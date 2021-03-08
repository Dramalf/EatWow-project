import React, { useState, useRef } from 'react';
import { Modal, List, Button, InputItem, Toast } from 'antd-mobile';
import { Axios } from '../../axios'
import qs from 'qs'
import './index.css'
import { connect } from 'react-redux'
import { allTags } from '../../redux/actions/allTags'
import AddMealPic from '../AddMealPic'
const AddMealBtn = (props) => {
    const [visible, setVisible] = useState(false)
    const [picUrl, setPicUrl] = useState('')
    const inputName = useRef(null)
    const inputTags = useRef(null)
    const inputDescription = useRef(null)
    const getUrl = (url) => {
        setPicUrl(url)
    }
    const showModal = (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透

        setVisible(true)
    }
    const onClose = () => {
        const mealName = inputName.current.state.value
        if (mealName) {
            const tags = inputTags.current.state.value.split(' ')
            const description = inputDescription.current.state.value
            const mealInfo = {
                username: 'mlf', userid: '916', mealName, picUrl, tags, description
            }
            Axios.post('http://localhost:5053/addmeal', qs.stringify(mealInfo))
                .then((res) => {
                    Toast.success('好耶，上传成功', 1)
                    setVisible(false)
                    //  console.log("***", res)
                    return res.data
                })
                .then((updateTags) => {
                    console.log(updateTags)
                    props.allTags(updateTags)
                })
        }
        else {
            Modal.alert('未填写名称', '客官，终止上传吗？', [
                { text: '完善一下', onPress: () => console.log('cancel') },
                {
                    text: '溜了溜了', onPress: () => {
                        Toast.info('取消上传咯', 1);
                        setVisible(false)
                    }
                },
            ])
        }
    }


    return (
        <div >
            <Button className='btn' type="primary" size="large" onClick={showModal}>添加</Button>

            <Modal
                popup
                visible={visible}
                onClose={onClose}
                animationType="slide-up"
                afterClose={() => { }}
            >
                <List renderHeader={() => <div>添加菜品</div>} className="popup-list ">
                    <List.Item>
                        <AddMealPic getUrl={getUrl} />
                    </List.Item>
                    <InputItem
                        ref={inputName}
                        autofocus
                        clear
                        placeholder="auto focus"
                    // onBlur={addInfo}
                    >名称</InputItem>
                    <InputItem
                        ref={inputTags}
                        autofocus
                        clear
                        placeholder="空格符分隔标签，可不填"
                    // onBlur={addInfo}
                    >标签</InputItem>
                    <InputItem
                        ref={inputDescription}
                        autofocus
                        clear
                        placeholder="可不填"
                    // onBlur={addInfo}
                    >描述</InputItem>
                    <List.Item>
                        <Button type="primary" onClick={onClose}>上传</Button>
                    </List.Item>
                </List>
            </Modal>
        </div>
    );
}

export default connect(
    state => state,
    { allTags }
)(AddMealBtn)
import React, { useState, useRef } from 'react';
import { Modal, List, Button, InputItem, Toast } from 'antd-mobile';
import './index.css'
import AddMealPic from '../AddMealPic'
const AddMealBtn = () => {
    const [visible, setVisible] = useState(false)

    const inputName = useRef(null)


    const showModal = (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透

        setVisible(true)
    }
    const onClose = () => {
        const mealName = inputName.current.state.value
        if (mealName) {
            Toast.success('上传成功', 1);
            setVisible(false)
        }
        else {

            Modal.alert('未填写名称', '客官，终止上传吗？', [
                { text: '完善一下', onPress: () => console.log('cancel') },
                { text: '溜了溜了', onPress: () => setVisible(false) },
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
                afterClose={() => {
                    console.log()
                    // Toast.success('上传成功', 1);
                }}
            >
                <List renderHeader={() => <div>添加菜品</div>} className="popup-list ">
                    <List.Item>
                        <AddMealPic />
                    </List.Item>
                    <InputItem
                        ref={inputName}
                        autofocus
                        clear
                        placeholder="auto focus"
                    // onBlur={addInfo}
                    >名称</InputItem>
                    <List.Item>
                        <Button type="primary" onClick={onClose}>上传</Button>
                    </List.Item>
                </List>
            </Modal>
        </div>

    );
}

export default AddMealBtn;

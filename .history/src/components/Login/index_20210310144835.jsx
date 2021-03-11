import React from 'react'
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

export default function Login() {
    return (
        <div>
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
                        // ref={inputName}
                        autofocus
                        clear
                        placeholder="必填"
                    // onBlur={addInfo}
                    >名称</InputItem>
                    <InputItem
                        // ref={inputTags}
                        type="password"
                        autofocus
                        clear
                        placeholder="******"
                    // onBlur={addInfo}
                    >密码</InputItem>

                    <List.Item>
                        <Button type="primary" onClick={onClose}>上传</Button>
                    </List.Item>
                </List>
            </Modal>
        </div>
    )
}

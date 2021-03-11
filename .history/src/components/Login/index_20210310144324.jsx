import React from 'react'

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
    )
}

import { Popover, NavBar, Icon, Modal } from 'antd-mobile';
import React from 'react'
import { Axios } from '../../axios'
import qs from 'qs'
import { connect } from 'react-redux'
import { allTags } from '../../redux/actions/allTags'
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class MyNavBar extends React.Component {
    state = {
        visible: true,
        selected: '',
        username: '',
        userid: ''
    };
    onSelect = (opt) => {
        Modal.prompt(
            '开门！迎客！',
            '客官！您来了！',
            (username, password) => {
                if (username && password) {
                    console.log(`login: ${username}, password: ${password}`)
                    let loginMsg = { username, password }
                    console.log(loginMsg)
                    Axios.post('http://127.0.0.1:5053/signin', qs.stringify(loginMsg))
                        .then(res => {
                            console.log("##", res)
                        })
                }
                else {
                    Modal.alert('哎呀', '信息填写不完整啊，小二找不到您呢')
                }

            },
            'login-password',
            null,
            ['请输入用户名', '请输入密码'],
        )
        // Axios.post('http://localhost:5053/signin', qs.stringify(userInfo))
        //     .then(res => res.data)
        //     .then(tags => {
        //         this.props.allTags(tags)
        //     })
        //console.log(opt.props.value);

        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        return (<div>
            <NavBar
                mode="light"
                rightContent={
                    <Popover
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                            (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">登录</Item>),
                            ,
                        ]}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                    </Popover>

                }
            >
                吃什么啊
      </NavBar>
        </div>);
    }
}
export default connect(
    state => state,
    { allTags }
)(MyNavBar)
import React, { Component, Fragment } from 'react';
import './index.less'
import { Menu, Icon } from 'antd';
import Login from '@components/login'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    handleClick = (e) => {
        if (e.key === 'login') {
            this.props.store.login.show()
        }

    }

    render() {
        return (
            <Fragment>
                <Menu
                    onClick={this.handleClick}
                    mode="horizontal"
                >
                    <Menu.Item key="login" className='right'>
                        <Icon type="cloud" theme="twoTone" />登录
                    </Menu.Item>
                </Menu>
                <Login></Login>
            </Fragment>
        )
    }
}

export default Index;
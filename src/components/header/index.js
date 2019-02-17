import React, { Component, Fragment } from 'react';
import './index.less'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Index extends Component {

    state = {

    }

    handleClick = (e) => {
        console.log('click ', e);

    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="login" className='right'>
                    <Icon type="cloud" theme="twoTone" />登录
                </Menu.Item>
            </Menu>
        );
    }
}

export default Index;
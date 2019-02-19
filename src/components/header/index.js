import React, { Component, Fragment } from 'react';
import './index.less'
import { Icon, Layout, Menu, Breadcrumb } from 'antd';
import Login from '@components/login'
import { observer, inject } from 'mobx-react'
import { } from 'antd';

const { Header, Content, Footer } = Layout;

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
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
                {/* <Menu
                    onClick={this.handleClick}
                    mode="horizontal"
                >
                    <Menu.Item key="login" className='right'>
                        <Icon type="cloud" theme="twoTone" />登录
                    </Menu.Item>
                </Menu>
                <Login></Login> */}
            </Fragment>
        )
    }
}

export default Index;
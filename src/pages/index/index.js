import React, { Component, Fragment } from 'react';
import './index.less'
import { Button } from 'antd'
import Header from '@components/header'
import { Provider  }  from 'mobx-react'
import login from '@stores/login'

const store = {
    login
}

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header></Header>
            </Provider>
        );
    }
}

export default Index;
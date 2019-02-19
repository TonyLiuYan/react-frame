import React, { Component, Fragment } from 'react';
import './index.less'
import Header from '@components/header'
import { Provider  }  from 'mobx-react'
import store from '@stores'



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
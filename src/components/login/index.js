import React, { Component, Fragment } from 'react';
import './index.less'
import { Modal } from 'antd';
import { observer,inject } from 'mobx-react'

@inject('store')
@observer
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    handleCancel = () => {
        this.props.store.login.close()
    }


    render() {
        return (
            <Fragment>
                <Modal
                    title="Basic Modal"
                    destroyOnClose={true}
                    visible={this.props.store.login.loginModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </Fragment>
        )
    }
}

export default Index;
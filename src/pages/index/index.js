import React, { Component, Fragment } from 'react';
import './index.less'
import { Button } from 'antd'

class Index extends Component {
    render() {
        return (
            <Fragment>
                <div className='test'>hello world</div>
                <Button>button</Button>
            </Fragment>
        );
    }
}

export default Index;
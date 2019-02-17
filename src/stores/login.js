import { observable, action } from 'mobx'

class Login {

    @observable loginModalVisible = false

    @action.bound show() {
        this.loginModalVisible = true
    }

    @action.bound close() {
        this.loginModalVisible = false
    }
}

export default new Login
import { Component } from "react";
import AuthService from "../services/AuthService";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class AuthComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    login() {
        AuthService.login(this.state).then(
            (response) => {
         
                    localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, JSON.stringify(this.state.username));
                    AuthService.setupAxiosInterceptors(this.createJWTToken(response.data.token.JSON));
                    this.props.navigate(`/home`)
               
            }
        )
        // .catch(() => {
        //     this.setState({ showSuccessMessage: false })
        //     this.setState({ hasLoginFailed: true })
        // })
    }

    render() {
        return (
            <div>
                <div>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    <input type="text" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br></br>
                    <input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }}></input><br></br>
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }

}
export default AuthComponent
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import AuthService from '../services/AuthService'


class AuthenticatedRoute extends Component {
	render() {
		if (AuthService.isUserLoggedIn()) {
			return {...this.props.children}
		} else {
			return <Navigate to="/login" />
		}
	}
}

export default AuthenticatedRoute
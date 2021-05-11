import React from 'react';
import '../css/Login.css'
import '../assets/background.jpg'
import { LoginForm } from '../components/LoginForm'
import {removeUser} from "../utils/storageUtils";

export class LoginView extends React.Component {
    componentDidMount()
    {
        removeUser();
    }
    render() {
        return(
            <div className='login-page'>
                <div className='login-content'>
                    <div className='login-card'>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        )
    }
}

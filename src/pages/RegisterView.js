import React from 'react';
import '../css/style.css';
import '../css/table.css';

import  RegisterForm  from '../components/RegisterForm'

export class RegisterView extends React.Component {
    render() {
        return (
            <div className='login-page'>
                <div className='login-content'>
                    <div className='login-card'>
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        )
    }
}

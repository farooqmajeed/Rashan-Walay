import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUp';
import Dashboard from './components/dashboard';
import ForgotPassword from './components/ForgotPassword';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
           
            <Scene key="main">
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} initial />
            </Scene>

        </Router>
    );
};

export default RouterComponent;
//  <Scene key="auth">
//                 <Scene key="login" component={LoginForm} hideNavBar={true} />
//                 <Scene key="signup" component={SignupForm} hideNavBar={true} />
//                 <Scene key="forgotPassword" component={ForgotPassword} hideNavBar={true} />
//             </Scene>

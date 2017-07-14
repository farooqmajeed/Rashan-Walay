import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUp';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm}  hideNavBar={true}  />
                <Scene key="signup" component={SignupForm} title="Register" />

            </Scene>

        </Router>
    );
};

export default RouterComponent;

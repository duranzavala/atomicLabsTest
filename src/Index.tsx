import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@Store/index';
import LoadingComponent from '@Loading/screens/loadingComponent';
import SignUpComponent from '@Auth/screens/signUpComponent';
import HomeComponent from '@Home/screens/homeComponent';
import PhoneVerificationComponent from '@Auth/screens/phoneVerificationComponent';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={Styles.safeAreaViewContainer}>
                <PhoneVerificationComponent />
            </SafeAreaView>
            <LoadingComponent />
        </Provider>
    );
}

const Styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
    },
});

export default App;

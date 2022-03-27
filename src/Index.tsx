import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@Store/index';
import LoadingComponent from '@Loading/screens/loadingComponent';
import AppNavigator from '@Navigation/root';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <LoadingComponent />
            <SafeAreaView style={Styles.safeAreaViewContainer}>
                <AppNavigator />
            </SafeAreaView>
        </Provider>
    );
}

const Styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
    },
});

export default App;

import React from 'react';
import { Text, View } from 'react-native';

class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Helow World</Text>
            </View>
        );
    }
}

export default App;

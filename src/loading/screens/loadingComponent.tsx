import LoadingObservable from '@Loading/observables/loadingObservable';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Styles from '@Loading/styles/loadingStyles';
import { ILoadingObservableResponse } from '@Loading/interfaces/index';
import Colors from '@Utils/colors';

const LoadingComponent: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const subscription = LoadingObservable.subscribe((state: ILoadingObservableResponse) => {
            setIsLoading(() => state.open);
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <>
        {isLoading && (
            <View style={Styles.mainContainer}>
                <ActivityIndicator
                    animating={isLoading}
                    size='large'
                    color={Colors.PrimaryColor}
                    style={Styles.activityIndicator}
                />
            </View>
        )}
        </>
    );
};

export default LoadingComponent;

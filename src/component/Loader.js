import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Spinner from './Spinner';

const Loader = () => {
    return (
        <View >
            <Spinner size="large"  color="#0000ff"/>
        </View>
    );
};

export default Loader;
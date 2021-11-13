import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Divider, Layout, Text} from '@ui-kitten/components';

function Homescreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Divider/>
            <Layout style={styles.container}>
                <Text category={'h1'}>Homescreen</Text>
                <Button onPress={() => navigation.navigate('Settings')}>
                    Settings
                </Button>
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Homescreen;

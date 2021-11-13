import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Divider, Layout, Text} from "@ui-kitten/components";

function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <Divider/>
            <Layout style={styles.container}>
                <Text category={'h1'}>Settings</Text>
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

export default Settings;

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Divider, Icon, Layout, Text} from '@ui-kitten/components';

function Overview() {
    return (
        <SafeAreaView style={styles.container}>
            <Divider/>
            <Layout style={styles.container}>
                <Text category={'h1'}>Overview</Text>
                <Icon style={{width: 32, height: 32}} fill={'#fff'} name='activity-outline'/>
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

export default Overview;

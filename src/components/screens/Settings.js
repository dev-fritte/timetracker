import React, {useState} from 'react';
import {Keyboard, SafeAreaView, StyleSheet} from 'react-native';

import {useDispatch, useSelector} from "react-redux";

import {Button, Divider, Icon, Input, Layout, Text} from "@ui-kitten/components";

import {createCustomer} from "../../redux/actions";

function Settings() {

    const [customerName, setCustomerName] = useState('');

    const customers = useSelector(state => state.projects.customers)
    const dispatch = useDispatch()

    const onCreateClicked = () => {

        if (customerName === '')
            return

        console.log('create customer <' + customerName + '>')

        dispatch(createCustomer(customerName))

        setCustomerName('')

        Keyboard.dismiss()

    }

    return (
        <SafeAreaView style={styles.container}>
            <Layout style={{...styles.container, paddingHorizontal: 10}}>

                <Layout style={styles.projectsContainer}>
                    <Text category={'h6'}>Cutomers</Text>
                    <Layout style={styles.customerHeader}>

                        <Input placeholder={'Customer Name'} value={customerName}
                               onChangeText={value => setCustomerName(value)}
                               style={styles.input}
                        />

                        <Button accessoryLeft={<Icon name={'plus-outline'}/>}
                                onPress={() => onCreateClicked()}>
                            Create
                        </Button>
                    </Layout>

                    {
                        customers.map(customer => {
                            return <Button key={customer.id}>{customer.name}</Button>
                        })
                    }

                </Layout>

                <Divider/>

            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    customerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    projectsContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        width: '60%',
    }

});

export default Settings;

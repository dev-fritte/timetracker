export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const createCustomer = (name) => {
    return {
        type: CREATE_CUSTOMER,
        payload: name
    }
}

import {CREATE_CUSTOMER, REMOVE_CUSTOMER} from "./actions";


const initialState = {
    customers: [],
    projects: [],
}

function projectsReducer(state = initialState, action) {

    let customerList

    switch (action.type) {
        case CREATE_CUSTOMER: {
            customerList = [...state.customers, {id: state.customers.length, name: action.payload}]

            return {
                ...state,
                customers: customerList,
            }
        }

        case REMOVE_CUSTOMER: {
            customerList = [...state.customers].filter(customer => customer.id !== action.payload)

            return {
                ...state,
                customers: customerList,
            }
        }

        default:
            return {...state}
    }
}

export default projectsReducer;

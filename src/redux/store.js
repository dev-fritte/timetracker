import {combineReducers, createStore} from "redux";

import projectsReducer from "./reducers";

const rootReducer = combineReducers({
        projects: projectsReducer
    }
);

export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";

import { authReducer, action } from "./action/authAction";

/**
 * STEPS for State Management
 * Submit Action
 * Handle action in it's reducer
 * Register Here -> Reducer
 * 
 */



 export const store= configureStore({
    reducer: {
        auth: authReducer,
    }

});


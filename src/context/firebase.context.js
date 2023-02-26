import React, { createContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
/* import { getAnalytics } from "firebase/analytics"; */

const FirebaseContext = createContext({})

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };
const initialize = () => {
/*     console.log("🚀 ~ file: firebase.context.js:17 ~ firebaseConfig:", firebaseConfig)*/
    return initializeApp(firebaseConfig);
}

const FirebaseProvider = ({ children }) => {

// Initialize Firebase
const app = initialize()
const analytics = getAnalytics(app)


    return (
        <FirebaseContext.Provider value={{app, analytics }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router'


class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyC-MMuHktuSjGTx2iohX5VC8vsRq0Ao7AA",
            authDomain: "manager-2b202.firebaseapp.com",
            databaseURL: "https://manager-2b202.firebaseio.com",
            projectId: "manager-2b202",
            storageBucket: "manager-2b202.appspot.com",
            messagingSenderId: "10111701927"
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        );
    }
}

export default App;
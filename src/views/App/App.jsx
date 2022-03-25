import React from "react";

import styles from './App.module.css'

// Redux
import {Provider} from 'react-redux'
import store from '../../redux/redux-store'

import Content from "../Content/Content";
import Menu from "../Menu/Menu";

function App() {
    return (<Provider store={store}>
        <div className={styles.container}>
            <div className={styles.content}>
                <Content
                    className={styles.content}
                    store={store}
                    dispatch={store
                        .dispatch
                        .bind(store)}/>
                <Menu className={styles.menu}/>
            </div>
        </div>
    </Provider>)
}

export default App
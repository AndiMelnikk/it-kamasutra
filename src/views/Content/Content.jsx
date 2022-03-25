import React from "react";
import {Route, Routes} from "react-router-dom";

import styles from './Content.module.css'

import ProfileContainer from "./Profile/ProfileContainer";
import PostContainer from "./Post/PostContainer";
import NewsContainer from "./News/NewsContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Messages from "./Messages/Messages";
import Settings from "./Settings/Settings";
import WorkerContainer from "./Worker/WorkerContainer";
import FoodContainer from "./Food/FoodContainer";

function Content(props) {

    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={< ProfileContainer/>}/>
                <Route path="/posts/*" element={< PostContainer/>}/>
                <Route path="/messages/*" element={< Messages/>}/>
                <Route path="/dialogs/*" element={< DialogsContainer/>}/>
                <Route path="/worker/*" element={< WorkerContainer/>}/>
                <Route path="/settings/*" element={< Settings/>}/>
                <Route path="/food/*" element={< FoodContainer/>}/>
                <Route path="/news/*" element={< NewsContainer/>}/>
            </Routes>
        </div>
    )
}

export default Content
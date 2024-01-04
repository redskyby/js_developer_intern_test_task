import React from "react";
import style from "./App.module.scss";
import ClientDetails from "../clientDetails/ClientDetails";
import JobDetails from "../jobDetails/JobDetails";
import ServiceLocation from "../serviceLocation/ServiceLocation";
import Scheduled from "../Scheduled/Scheduled";

function App() {
    return (
        <div className={style.content}>
            <div>
                <ClientDetails />
                <JobDetails />
            </div>
            <div>
                <ServiceLocation />
                <Scheduled />
            </div>
        </div>
    );
}

export default App;

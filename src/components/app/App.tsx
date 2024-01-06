import React, { useState } from "react";
import style from "./App.module.scss";
import ClientDetails from "../clientDetails/ClientDetails";
import JobDetails from "../jobDetails/JobDetails";
import ServiceLocation from "../serviceLocation/ServiceLocation";
import Scheduled from "../Scheduled/Scheduled";

function App() {
    const [showClientDetails, setClientDetails] = useState<boolean>(false);
    const [showJob, setJob] = useState<boolean>(false);

    return (
        <div className={style.content}>
            <div className={style.content_row}>
                <ClientDetails setClientDetails={setClientDetails} />
                <JobDetails setJob={setJob} />
            </div>
            <div>
                <ServiceLocation />
                <Scheduled />
            </div>
        </div>
    );
}

export default App;

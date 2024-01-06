import React, { useState } from "react";
import style from "./JobDetails.module.scss";
const JobDetails = ({ setJob }: { setJob: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [jobs, setJobs] = useState<string>("");
    const [josSource, setJobSource] = useState<string>("");
    const [comment, setComment] = useState<string>("");

    if (jobs !== "" && josSource !== "" && comment !== "") {
        setJob(true);
    }

    return (
        <div className={style.content}>
            <div className={style.main_title}>
                <h1>Job details</h1>
            </div>
            <form className={style.content_form}>
                <select
                    id="jobs"
                    name="jobs"
                    className={style.content_form_select}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setJobs(e.target.value);
                    }}
                >
                    <option value="">Select job type:</option>
                    <option value="value1">value1</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                    <option value="value4">value4</option>
                </select>
                <select
                    id="jobSource"
                    name="jobSource"
                    className={style.content_form_select}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setJobSource(e.target.value);
                    }}
                >
                    <option value="">Select job type:</option>
                    <option value="value1">value1</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                    <option value="value4">value4</option>
                </select>
                <textarea
                    id="comment"
                    name="comment"
                    className={style.content_form_select}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setComment(e.target.value);
                    }}
                ></textarea>
            </form>
        </div>
    );
};

export default JobDetails;

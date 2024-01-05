import React from "react";
import style from "./JobDetails.module.scss";
const JobDetails = () => {
    return (
        <div className={style.content}>
            <div className={style.main_title}>
                <h1>Job details</h1>
            </div>
            <form>
                <select id="jobs" name="jobs">
                    <option value="">Select job type:</option>
                    <option value="value1">value1</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                    <option value="value4">value4</option>
                </select>
                <select id="josSource" name="josSource">
                    <option value="">Select job type:</option>
                    <option value="value1">value1</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                    <option value="value4">value4</option>
                </select>
                <textarea id="comment" name="comment"></textarea>
            </form>
        </div>
    );
};

export default JobDetails;

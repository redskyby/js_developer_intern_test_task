import React from "react";
import style from "./ClientDetails.module.scss";

const ClientDetails = () => {
    return (
        <div className={style.content}>
            <div>
                <h1>Client details</h1>
            </div>
            <form>
                <div>
                    <input type="text" placeholder={"first name"} />
                    <input type="text" placeholder={"Last name"} />
                </div>
                <div>
                    <input type="tel" placeholder={"Phone"} />
                    <input type="email" placeholder={"Email (optional)"} />
                </div>
            </form>
        </div>
    );
};

export default ClientDetails;

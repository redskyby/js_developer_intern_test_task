import React, { useState } from "react";
import style from "./ClientDetails.module.scss";

const ClientDetails = () => {
    const [firstName , setFirstName] = useState<string>("")
    const [lastName , setLastName] = useState<string>("")
    const [phone , setPhone] = useState<string>();
  const [email , setEmail] = useState<string>("")


    return (
        <div className={style.content}>
            <div>
                <h1>Client details</h1>
            </div>
            <form>
                <div>
                    <input className={style.input}
                      type="text"
                      placeholder={"first name"}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      className={style.input}
                      type="text" placeholder={"Last name"}
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           required
                    />
                </div>
                <div>
                    <input
                      className={style.input}
                      type="tel" placeholder={"Phone"}
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           required
                    />
                    <input
                      className={style.input}
                      type="email" placeholder={"Email (optional)"}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                    />
                </div>
            </form>
        </div>
    );
};

export default ClientDetails;

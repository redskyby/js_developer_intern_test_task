import React, { useState } from "react";
import style from "./ClientDetails.module.scss";

const ClientDetails = ({ setClientDetails }: { setClientDetails: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const phoneRegex: RegExp = /^[+]?[(]?[0-9]*[)]?[-\s./0-9]*$/;

    if (firstName !== "" && lastName !== "" && phone !== "" && email !== "") {
        setClientDetails(true);
    }

    const handlePhoneChange = (value: string) => {
        if (phoneRegex.test(value) || value === "") {
            setPhone(value);
        }
    };

    return (
        <div className={style.content}>
            <div className={style.main_title}>
                <h1>Client details</h1>
            </div>
            <form className={style.form}>
                <div className={style.div_with_inputs}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder={"first name"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        className={style.input}
                        type="text"
                        placeholder={"Last name"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className={style.form_input_column}>
                    <input
                        className={style.input}
                        type="tel"
                        placeholder={"Phone"}
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        required
                    />
                    <input
                        className={style.input}
                        type="email"
                        placeholder={"Email (optional)"}
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

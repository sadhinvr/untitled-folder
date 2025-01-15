import React, { useState } from "react";
import ApiField from "./components/ApiField";

function Settings() {
    const [keys, setKeys] = useState([
        "VnYoIzQ1gfs0shKCrAAwnpsGhWOoacHq",
        "mMtt03On0jlQWTzHjslHre8Dq4GiZiyl",
        "fYUU7RGSA0kkg8nYLdHHK8oi8mdVVQan",
        "oLd9LDqNxoV0ikuRxaV2M0xX4FDuTL02",
    ]);

    const generateApiKey = (l = 32) =>
        Array.from(
            { length: l },
            () =>
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[
                    Math.floor(Math.random() * 62)
                ]
        ).join("");

    const changeKey = (i) => {
        const k = [...keys];
        k[i] = generateApiKey();
        setKeys(k);
    };

    return (
        <div className='p-5 xl:p-8 3xl:p-12'>
            <h1 className='font-bold text-lg'>Manage API Keys</h1>
            <div className='mt-8'>
                <div className='grid  lg:grid-cols-2 grid-cols-1 gap-7 xl:gap-8 2xl:gap-12'>
                    {keys.map((cur, i) => (
                        <ApiField i={i} id={cur} key={i} changeKey={changeKey} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Settings;

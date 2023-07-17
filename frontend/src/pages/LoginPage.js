import React, { useState, useRef } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
    const queryParams = new URLSearchParams(window.location.search);
    const signupSuccess = queryParams.get("signup");
    const [isAlertOn, setIsAlertOn] = useState(signupSuccess === "success");
    const isAlertOnRef = useRef(isAlertOn);

    const closeAlert = () => {
        setIsAlertOn(false);
        isAlertOnRef.current = false;
    };

    const handleAlertTimer = () => {
        setTimeout(() => {
            closeAlert();
        }, 3250);
    };

    if (isAlertOnRef.current) {
        handleAlertTimer();
    }

    return (
        <main>
            {isAlertOnRef.current && (
                <div className="alert alert-success alert-dismissible" role="alert">
                    Account was successfully created!
                </div>
            )}
            <LoginForm />
        </main>
    );
};

export default LoginPage;

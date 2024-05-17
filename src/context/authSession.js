// authSession.js
import React from "react";
import AuthContext from "./authContext";

export const AuthSession = ({ children }) => { // Changed the function name to start with uppercase, following React conventions
    const session = {
        token: "authrr0123",
        id: "8745",
    };

    return (
        <AuthContext.Provider value={session}>
            {children} {/* Render children components */}
        </AuthContext.Provider>
    );
};


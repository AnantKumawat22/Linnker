import authContext from "./authContext";
import { useState } from "react";

const UserState = (props) => {

    const [checktoken, setCheckToken] = useState(false);
    return (
        <authContext.Provider value={{checktoken, setCheckToken}}>
            {props.children}
        </authContext.Provider>
    );
}

export default UserState;
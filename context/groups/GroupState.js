import groupContext from "./groupContext";
import { useState } from "react";

const GroupState = (props) => {

    const [checktoken, setCheckToken] = useState(false);
    return (
        <authContext.Provider value={{checktoken, setCheckToken}}>
            {props.children}
        </authContext.Provider>
    );
}

export default GroupState;
import groupContext from "./groupContext";
import { useState } from "react";

const GroupState = (props) => {

    // My Groups State.
    const [mygroups, setMyGroups] = useState(null);

    // All Groups State.
    const [allgroups, setAllGroups] = useState(null);
    
    return (
        <authContext.Provider value={{mygroups, setMyGroups, allgroups, setAllGroups}}>
            {props.children}
        </authContext.Provider>
    );
}

export default GroupState;
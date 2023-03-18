import groupContext from "./groupContext";
import { useState } from "react";

const GroupState = (props) => {

    // Create a Group.
    const creategroup = async (data) => {
        const { name, description, link, tags } = data;
        console.log(name, description, tags, link);
    }
    
    return (
        <authContext.Provider value={{creategroup}}>
            {props.children}
        </authContext.Provider>
    );
}

export default GroupState;
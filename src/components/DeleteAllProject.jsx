import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/actions";

const DeleteAllProject = () => {
    const disp = useDispatch()
    const delall = () => {
        disp(deleteUser())
    }
    return (
        <>
            <button onClick={()=>delall()}>Clear all</button>
        </>
    )
}

export default DeleteAllProject;
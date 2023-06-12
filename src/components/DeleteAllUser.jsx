import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/actions";

const DeleteAllUser = () => {
    const disp = useDispatch()
    const deleteall = () => {
        disp(deleteUser())
    }
    return (
        <>
            <button className="btn" onClick={()=>deleteall()}>Clear data</button>
        </>
    )
}

export default DeleteAllUser;
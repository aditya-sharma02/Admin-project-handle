import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";

const DisplayAllUsers = () => {
    const disp = useDispatch()
    const removethatUser = (payload) => {
        disp(removeUser(payload))
    }
    const data = useSelector((state) => state.users)
    return (
        <>
            {
                data.map((user, id) => {
                    return (
                        <>
                            <li key={id}>
                                {user}
                                <span>  </span>
                                <button className="btn-delete" onClick={()=>removethatUser(id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        </>
                    )
                })
            }

        </>
    )
}

export default DisplayAllUsers;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProject } from "../store/slice/ProjectSlice";
const DisplayAllProject = () => {
    const disp = useDispatch()
    const removethatProject = (id) => {
        disp(removeProject(id))
    }
    const data = useSelector((state) => state.projects)
    return (
        <>
            {data.map((elem, ind) => {
                return <li key={ind}>{elem}<span>  </span>
                    <button className="btn-delete" onClick={() => removethatProject(ind)}>
                        <i className="fa-solid fa-trash"></i>
                    </button></li>
            })}

        </>
    )
}

export default DisplayAllProject;
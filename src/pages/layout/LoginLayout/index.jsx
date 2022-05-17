import { Outlet, Link } from "react-router-dom";
import './style.css'


export default function LoginLayout(){
    return (
        <div className="center">
            <fieldset className="card center">
                <Outlet />
            </fieldset>
        </div>
    )
}
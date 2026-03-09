import { Link } from "react-router-dom";

function MenuButtom (){
    return(
        <>
        <div className="Menu">
                <div className="menu-item">
                    <Link to={"/"}>
                    <i className="fa-solid fa-house"></i>
                    </Link>
                </div>
                <div className="menu-item">
                   <Link to={"/SP"}>
                    <i className="fa-solid fa-calendar"></i>

                   </Link>
                </div>
                <div className="menu-item">
                    <i className="fa-solid fa-circle-user"></i>
                </div>
        </div>
        </>
    )
}
export default MenuButtom;
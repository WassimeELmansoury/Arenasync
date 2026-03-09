import { useParams, useNavigate } from "react-router-dom"; 
import { tournamentData } from "../data/tournamentDB";

function SecondPage() {
    const {id}=useParams();
    const navigate = useNavigate();
    const tournament = tournamentData.find((t) => t.id === id);
    if (!tournament){
        return <div>Tournament not found!</div>
    }
    return(
        <>
        <div className="second-page">
            <header className="tournament-header">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <h2 className="tournament-title">Tournament</h2>
            </header>
         </div>
        </>
    )
}
export default SecondPage;
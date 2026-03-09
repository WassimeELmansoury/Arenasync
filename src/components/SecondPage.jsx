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
        <div>
            <img src={tournament.image} alt={tournament.title} />
            <h1>{tournament.title}</h1>
            <span className={`status ${tournament.status}`}>{tournament.status}</span>
        </div>
        </>
    )
}
export default SecondPage;
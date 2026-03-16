import { useParams, useNavigate } from "react-router-dom"; 
import { tournamentData } from "../data/tournamentDB";
import ParticipantRow from "./ParticipantRow";

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
                <h2 className="tournament-title"></h2>
            </header>
        </div>
          <div className="card" id="card-detail">
            <div className="top-face">
              <div className="card-img">
                <img src={tournament.image} alt={tournament.title} />
              </div>
              <div className="card-info">
                <h3>{tournament.title}</h3>
                <button className={`status ${tournament.status}`}>
                  {tournament.status}
                </button>
              </div>
            </div>

            <div className="card-description">
            </div>

            <div className="card-details" id="card-second">
              <div className="detail-item">
                <i className="fa-solid fa-users"></i>{tournament.participantsCount} • {tournament.type}
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-trophy"></i> {tournament.format}
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-calendar"></i> {tournament.date}
              </div>
              <div className="detail-item">
                <i className="fa-solid fa-location-dot"></i> {tournament.location}
              </div>
            </div>
          </div>
          <div className="categore">

          </div>
          <div className="bg-white rounded-t-[30px] p-4 mt-[-20px]">
            <h3 className="text-gray-800 font-bold mb-4 ml-2">Participants List</h3>
            
            <div className="grid grid-cols-1 gap-3 mb-8 ">
              {tournament.participants.map((player, index) => (
                <ParticipantRow key={index} player={player} />
              ))}
            </div>
          </div>
        </>
    )
}

export default SecondPage; 
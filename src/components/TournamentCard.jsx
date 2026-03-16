import { Link } from "react-router-dom";
import { tournamentData } from "../data/tournamentDB";
import BtnInscription from './BtnInsccription'
import { useState } from "react";
import SignupForm from "./SignupForm";
import GetstatusBadg from "./StatusBadge";

function DisplayCard() {
const [activatformid,setactiveformid]= useState(null)
  return (
    <div className="cards">
      {tournamentData.map((it) => (
        <div key={it.id} className="card">
          
          <Link to={`/SP/${it.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="top-face">
              <div className="card-img">
                <img src={it.image} alt={it.title} />
              </div>
              <div className="card-info">
                <h3>{it.title}</h3>
                <span className={`${GetstatusBadg(it.status)}`}>
                  {it.status}
                </span>
              </div>
            </div>

            <div className="card-description">
              <p>{it.description}</p>
            </div>

            <div className="card-details flex flex-col gap-2">
              <div className="detail-item flex items-center gap-2">
                <i className="fa-solid fa-users"></i>{it.participantsCount} • {it.type}
              </div>
              <div className="detail-item flex items-center gap-2">
                <i className="fa-solid fa-trophy"></i> {it.format}
              </div>
              <div className="detail-item flex items-center gap-2">
                <i className="fa-solid fa-calendar"></i> {it.date}
              </div>
              <div className="detail-item flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i> {it.location}
              </div>
            </div>
          </Link>

          {/* BtnInscription */}
            <div className="flex justify-start mt-2">
              <BtnInscription onClick={()=>setactiveformid(it.id)}/>
            </div>
            {/*form*/}
            {activatformid ===it.id && (
            <SignupForm tournmentid={it.id} />)}

        </div>
      ))}
    </div>
  );
}

export default DisplayCard;
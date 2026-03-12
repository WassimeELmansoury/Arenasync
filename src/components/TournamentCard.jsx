import { Link } from 'react-router-dom'; // Zidi had l-import
import { tournamentData } from "../data/tournamentDB";
import BtnInscription from './ButtonInscription';

function DisplayCard() {
  return (
    <div className="cards">
      {tournamentData.map((it) => (
        <Link to={`/SP/${it.id}`} key={it.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <div className="top-face">
              <div className="card-img">
                <img src={it.image} alt={it.title} />
              </div>
              <div className="card-info">
                <h3>{it.title}</h3>
                <button className={`status ${it.status}`}>
                  {it.status}
                </button>
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

  {/* BtnInscription */}
  <div className="flex justify-start mt-2">
    <BtnInscription />
  </div>
</div>

          </div>
        
        </Link>
      ))}
    </div>
    
  );
}

export default DisplayCard;
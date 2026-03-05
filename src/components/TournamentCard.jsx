import { tournamentData } from "../data/tournamentDB";

function DisplayCard() {
  return (
    <div className="cards">
      {tournamentData.map((it) => (
        <div className="card" key={it.id}>
          <div className="top-face">
            <div className="card-img">
                <img src={it.image} alt={it.title} />
            </div>
            <div className="card-info">
                <h3>{it.title}</h3>
                <span className={`status ${it.status.toLowerCase().replace(" ", "-")}`}>
                    {it.status}
                </span>
            </div>
          </div>

          
          <div className="card-description">
            <p>{it.description}</p>
          </div>

          <div className="card-details">
            <div className="detail-item">
              <i className="fa-solid fa-users" ></i> {it.participantsCount} • {it.type}
            </div>
            <div className="detail-item">
                <i className="fa-solid fa-trophy"></i> {it.format}
            </div>
            <div className="detail-item">
                <i className="fa-solid fa-calendar"></i> {it.date}
            </div>
            <div className="detail-item">
                <i className="fa-solid fa-location-dot"></i> {it.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayCard;
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

          {/* Description Section */}
          <div className="card-description">
            <p>{it.description}</p>
          </div>

          {/* Details Section (Icons) */}
          <div className="card-details">
            <div className="detail-item">
              <span>👥</span> {it.participantsCount} • {it.type}
            </div>
            <div className="detail-item">
              <span>🏆</span> {it.format}
            </div>
            <div className="detail-item">
              <span>📅</span> {it.date}
            </div>
            <div className="detail-item">
              <span>📍</span> {it.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayCard;
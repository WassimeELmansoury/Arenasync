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
              <i className="fa-solid fa-users" style="color: #000000;"></i>{it.participantsCount} • {it.type}
            </div>
            <div className="detail-item">
                <i className="fa-solid fa-trophy" style="color: #000000;"></i> {it.format}
            </div>
            <div className="detail-item">
                <i class="fa-solid fa-calendar" style="color: #000000;"></i> {it.date}
            </div>
            <div className="detail-item">
                <i class="fa-solid fa-location-dot" style="color: #000000;"></i> {it.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayCard;
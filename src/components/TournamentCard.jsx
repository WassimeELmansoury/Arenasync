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

      ))}
    </div>
  );
}

export default DisplayCard;
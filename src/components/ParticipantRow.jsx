function ParticipantRow({ player }) {

  if (!player) {
    return <h1 className="text-red-500 font-bold">Player not found</h1>;
  }

  // Déterminer la couleur du status
  const statusColor =
    player.status.toLowerCase() === "confirmed"
      ? "bg-green-200 text-green-800"
      : "bg-yellow-200 text-yellow-800";

  return (
    <div className="border rounded-2xl p-3 bg-gray-100 w-full shadow-sm">
      {/* Nom du participant en haut */}
      <h1 className="text-lg font-bold mb-2 text-gray-800">{player.name}</h1>

      <div className="flex items-center gap-4 border p-2 bg-white rounded-lg">
        {/* Avatar */}
        <img
          src={player.avatar}
          alt={player.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        {/* Infos */}
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold text-gray-700">{player.name}</h2>

          {/* Status coloré */}
          <span
            className={`mt-1 px-2 py-1 rounded-full text-sm font-medium ${statusColor}`}
          >
            {player.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ParticipantRow;
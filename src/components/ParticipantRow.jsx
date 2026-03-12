function ParticipantRow({ player }) {
  if(!player){
    return <h1 className="text-red-500">Player not found</h1>;
  }
  return (
    <div className="border rounded-2xl p-3 bg-gray-100 w-100 shadow-sm">
      <h1 className="Title-participants mb-2">{player.name}</h1>

      <div className="flex items-center gap-4 border p-2 bg-white rounded">
        <img src={player.avatar} alt={player.name} className="w-16 h-16 rounded-full object-cover"/>
        
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold text-gray-700">{player.name}</h2>
          
          <div className="flex items-center gap-2 mt-1 bg-gre-800">
            <span className="status-text capitalize">{player.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantRow;
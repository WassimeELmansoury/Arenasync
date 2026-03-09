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

    )
}
export default SecondPage;
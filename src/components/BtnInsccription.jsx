


function BtnInscription ({onClick}){
   
    return (
    <>

    <button
    onClick={onClick}
     className="bg-blue-600 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
        S'inscrire maintenant
        </button>
    </>)
}
export default BtnInscription;
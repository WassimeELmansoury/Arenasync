import { useState } from "react";
import { tournamentData } from "../data/tournamentDB";

function SignupForm({tournmentid}) {
  const [formValue,SetFormValue]=useState({
    id:"W20",
    name:"",
    status:"",
    avatar:"",
  })
  function AddUser(){
    if( (formValue.name=="") || (formValue.status=="") || (formValue.avatar=="")){
            alert("remplir tout les champs")
    }else{
      console.log(tournmentid)
      console.log(tournamentData)
      let tourn=tournamentData.find((it)=>it.id==tournmentid)
      if(tourn!=undefined){
        tourn.participants.push(formValue)
      }
    }
  }
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-[350px]">
        
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
          S'inscrire maintenant
        </h1>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <input
            type="file" accept="image/*" className="text-sm" onChange={(ev) => {
            const file = ev.target.files[0];
            if (file) {
               SetFormValue({...formValue,avatar:URL.createObjectURL(file)})
              }
            }}
          />

          {formValue.avatar && (
            <img
              src={formValue.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover border"
            />
          )}
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <input
            type="text" placeholder="Nom" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#524FF4]"
            onChange={(e)=>{SetFormValue({...formValue,name:e.target.value})}}
          />


          <input
            type="text" placeholder="Status" className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#524FF4]"
             onChange={(e)=>{SetFormValue({...formValue,status:e.target.value})}}
            
          />
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-[#524FF4] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition" onClick={()=>AddUser()}>
          Valider l'inscription
        </button>
        <button className="w-full bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 transition">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
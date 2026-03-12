import { Activity, useState } from "react";
function SignupForm(){
    let [avatar,setAvatar]=useState("")
    return(<>
    <div>
        <h1>S'inscrire maintenant</h1>
        <div>
            <input type="file" accept="image/*" onChange={(ev)=>{
                const file=ev.target.files[0]
                if (file){
                    setAvatar(URL.createObjectURL(file))
                }
            }}/>
            <img src={avatar} width="50px" height="50px"/>
        </div>
    </div>
    </>
    )
}
export default SignupForm;
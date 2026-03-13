import { useState } from "react";

function SignupForm() {
  const [avatar, setAvatar] = useState("");

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-[350px]">
        
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
          S'inscrire maintenant
        </h1>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <input
            type="file"
            accept="image/*"
            className="text-sm"
            onChange={(ev) => {
              const file = ev.target.files[0];
              if (file) {
                setAvatar(URL.createObjectURL(file));
              }
            }}
          />

          {avatar && (
            <img
              src={avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover border"
            />
          )}
        </div>


      </div>
    </div>
  );
}

export default SignupForm;
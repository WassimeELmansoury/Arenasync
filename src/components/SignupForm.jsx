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

        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Nom"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#524FF4]"
          />

          <input
            type="text"
            placeholder="Prénom"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#524FF4]"
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#524FF4]"
          />
        </div>

      </div>
    </div>
  );
}

export default SignupForm;
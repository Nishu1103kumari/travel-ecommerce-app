import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-start p-8">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <div className="flex flex-col items-center mb-4">
          <img
            src={user.profileImage}
            alt="User Profile"
            className="w-24 h-24 rounded-full mb-2 border-4 border-amber-500"
          />
          <h2 className="text-2xl font-bold text-amber-700">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">Joined: {user.joined}</p>
        </div>

        <div className="mt-6 text-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

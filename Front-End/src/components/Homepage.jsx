import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-pink-300 py-12 px-6 sm:px-12 transition-all duration-500 flex justify-center items-center" >
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
        {user ? (
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center animate__animated animate__fadeIn">
              Welcome, {user.firstName} {user.lastName}!
            </h2>
            <p className="text-xl text-gray-600 text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
              <span className="font-medium text-gray-700">Email:</span> {user.email}
            </p>
            <div className="mt-8 flex justify-center">
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

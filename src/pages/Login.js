import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login({ setStoredToken }) {
  const [national_id, setNationalId] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          national_id,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Invalid username or password", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });

    setNationalId("");

    setPassword("");
  };
  return (
    <>
      <div className="flex flex-col kulim-park  items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  border-2 md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="flex flex-col  items-center justify-center px-6 py-4"></div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  text-[#3B841F] md:text-3xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm   text-black font-semibold">
                  National ID Number
                </label>
                <input
                  type="text"
                  value={national_id}
                  onChange={(e) => setNationalId(e.target.value)}
                  className="bg-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="123456789"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm  text-black font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  className="bg-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="******"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white  text-xl bg-[#3B841F]  border border-transparent rounded-lg py-2.5 px-4 hover:scale-105   
                  transition duration-500 ease-in-out"
              >
                Sign in
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

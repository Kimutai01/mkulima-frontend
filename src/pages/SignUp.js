import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ setStoredToken }) => {
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [national_id, setNationalId] = useState("");
  const [role, setRole] = useState("");

  const signUpFunctionality = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          first_name,
          last_name,
          password,
          password_confirmation,
          national_id,
          role,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          console.log(data);
          setStoredToken(data.jwt);
          navigate("/");
        } else {
          data.error.forEach((error) => {
            toast.error(error, {
              position: "top-center",
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
        }
      });
  };

  return (
    <>
      <div className="pt-24">
        <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={signUpFunctionality}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        type={"text"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="John"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        type={"text"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder=" Doe"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      National Id Number
                    </label>
                    <div className="mt-1">
                      <input
                        type={"number"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="123456"
                        value={national_id}
                        onChange={(e) => setNationalId(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <div className="mt-1">
                      <select
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="">Select a role</option>

                        <option value="farmer">Farmer</option>
                        <option value="supplier">Supplier</option>
                        <option value="produce buyer">Produce Buyer</option>
                        <option value="animal feeds buyer">
                          Animal Feeds Buyer
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium te/xt-gray-700">
                      Password Confirmation
                    </label>
                    <div className="mt-1">
                      <input
                        type={"password"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="********"
                        value={password_confirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className=" text-center rounded-md border border-transparent  bg-blue-700 py-2 px-4  font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

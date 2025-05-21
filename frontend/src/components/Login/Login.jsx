"use client";

import { React, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { signInUser } from "../../redux/reducers/authSlice";
import { loginUser } from "../../redux/actions/authAction";
import { toast } from "react-toastify";


const Login = () => {
  const dispatch = useDispatch();
  // const { user, loading } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(observeAuthState());
  // }, [dispatch, user]);

  
  // States
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");


  // Handle Click/change
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    // Always Clear Messages
    setSuccessMsg("");
    setErrMsg("");

    try{
      await dispatch(loginUser({email, password})).unwrap();
      console.log("Logint succesfull");
      navigate('/profile');
      // window.location.reload();

    }catch(err){
      //  console.error("Login failed:", err);
       toast.error("Login Fail")
    }

    // dispatch(loginUser({ email, password }));
    // navigate('/');


    // const result = await dispatch(signInUser({ email, password }));

    // if (signInUser.fulfilled.match(result)) {
    //   // success
    //   console.log("Login success!", result.payload);
    //   navigate('/');
    // } else {
    //   // error
    //   console.error("Login error:", result.payload || result.error.message);
    // }

    // Check User Login
    // signInUser(email, password)
    //   .then(() => {
    //     setSuccessMsg("SuccessFully Login");
    //   })
    //   .catch((err) => {
    //     setErrMsg(err.message);
    //   });
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {showPass ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowPass(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setShowPass(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>


               {/* Success or Error Msg  */}
               {successMsg && (
                <div
                  style={{ fontWeight: "500" }}
                  className="flex items-center gap-2 text-green-600 mt-2"
                >
                  {/* <FaCheck />  */}
                  <p>{successMsg}</p>
                </div>
              )}
              {errMsg && (
                <div
                  style={{ fontWeight: "500" }}
                  className="flex items-center gap-2 text-red-600 mt-2"
                >
                  {/* <MdOutlineErrorOutline />  */}
                  <p>{errMsg}</p>
                </div>
              )}

            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Not have any account?</h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
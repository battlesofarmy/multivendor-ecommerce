import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from '../../redux/actions/authAction'
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/axiosCongif";

const Singup = () => {
  const { user } = useSelector((state)=> state.auth);
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("")

  //  const newUser = { 
  //   "uid" : "InQvT0PFhocAW9zUeMtZGjtgrAZ2",
  //   "name" : "Muntasir Ahmed",
  //   "email": "maf107714@gmail.com",
  //   "profileImage" : "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A",
  //   "role" : "user",
  //  }

 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phoneNumber = form.number.value;
    // const photoURL = form.photoURL?.value || "https://avatars.githubusercontent.com/u/155252694?v=4"; // optional if you have a field for it
    const photoURL = "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"; // optional if you have a field for it
    
    setErrorMessage("");
    
    try {
      await dispatch(
        // registerUser({ email, password, displayName: name, photoURL, phoneNumber })
        registerUser({ email, password })
      ).unwrap();
      setSuccessMessage("Registration Successful");
       const newUser =   {
    "avatar": {
      "publicId": "avatar123",
      "url": "https://example.com/uploads/avatar123.jpg"
    },
    "uid": user?.uid,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phoneNumber": 1234567890,
    "address": [
      {
        "country": "USA",
        "city": "New York",
        "address1": "123 5th Avenue",
        "address2": "Apt 4B",
        "zipCode": 10001,
        "addressType": "Home",
      }
    ],
    "role": "seller",
  }
      await api.post('/user', newUser);

      
      // setTimeout(() => {
      //     navigate('/profile')
      // }, 1500);
    } catch (err) {
      setErrorMessage(err.message || "Registration Fail");
    }
  };
  
  return (
    <div className="bg-gray-50 flex flex-col justify-center py-10 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a new user
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
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

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
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>


            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1 relative">
                <input
                  name="number"
                  type="number"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              {/* <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label> */}
              {/* <div className="mt-2 flex items-center"> */}
                {/* <span className="inline-block h-8 w-8 rounded-full overflow-hidden"> */}
                  {/* {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )} */}
                {/* </span> */}
                {/* <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    className="sr-only"
                  />
                </label> */}
              {/* </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            {
              errorMessage && <h2 className="text-red-500 mt-2">{errorMessage}</h2>
            }
            {
              successMessage && <h2 className="text-green-500 mt-2">{successMessage}</h2>
            }
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
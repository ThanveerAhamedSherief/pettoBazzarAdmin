import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../../public/logo.png'

const Login = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login data ==>", {
      email,
      password,
    });
    let payload = {
      email,
      password
    }
   let loginResponse = await fetch('https://petshop-m0x2.onrender.com/api/v1/admin/login',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload)
    });
    let response = await loginResponse.json();
    if(response.Status === 'SUCCESS') {
      localStorage.setItem('isLoggedSuccess',true)
      navigate('/adminHomePage')
      toast.success('Login Successful..')
    } else {
      toast.error(response.Description)
    }
  };
  return (
    // <div className="flex items-center justify-center flex-row min-h-screen">
    //   <div className="bg-white w-[50%] h-full shadow p-5">
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-8">
    //         <label
    //           htmlFor="Email"
    //           className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
    //         >
    //           Email
    //         </label>
    //         <input
    //           name="Email"
    //           type="email"
    //           className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
    //           placeholder="Enter your email.."
    //           value={email}
    //           onChange={(e) => setMail(e.target.value)}
    //         />
    //       </div>
    //       <div className="mb-8">
    //         <label
    //           htmlFor="Password"
    //           className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
    //         >
    //           Password
    //         </label>
    //         <input
    //           name="Password"
    //           type="password"
    //           className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
    //           placeholder="Enter your password.."
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <input type="submit" className="bg-indigo-700 m-3 p-3 text-white"/>
    //     </form>
    //   </div>
    // </div>
    <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-indigo-700">
          <img className="w-80 h-80 " src={logo} alt="logo"/>
          {/* PetoBazaar     */}
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-700 md:text-2xl ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-700">Your email</label>
                      <input type="email" name="email" id="email" value={email} onChange={(e) => setMail(e.target.value)} className="bg-gray-50 border border-gray-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-700 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div>
                  {/* <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div> */}
                  <button type="submit" className="w-full text-white bg-indigo-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline">Sign up</a>
                  </p> */}
              </form>
          </div>
      </div>
  </div>
</section>
  );
};

export default Login;

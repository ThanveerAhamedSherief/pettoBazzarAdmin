import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../assets/logo.png';

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
   let loginResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/admin/login`,{
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
                 
                  <button type="submit" className="w-full text-white bg-indigo-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  );
};

export default Login;

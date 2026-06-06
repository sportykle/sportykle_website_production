import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import gym from "../assets/login/gym-logo.png";
import { AuthLogo } from "../components/ui/AuthLogo";
import useMutationApi from "../hooks/useMutationApi";
import { ADMINISTRATOR_API_ENDPOINTS } from "../api/endpoints";
import Loader from "../widgets/Loader";
import { useNotification } from "../widgets/NotificationProvider";
import LoaderContainer from "../widgets/LoaderContainer";
import { handleCustomErrorNotification } from "../utils/handleError";

function ForgotPassword() {
  const notification = useNotification();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { mutate: forgotPassword, isLoading, error, isSuccess } = useMutationApi(
    'post',
    ADMINISTRATOR_API_ENDPOINTS.RESET_PASSWORD,
    {
      onSuccess: () => {
        notification.success('If the email address is associated with an account, a password reset link will be sent.');
        navigate('/select-organization');
      },
      onError: (err) => handleCustomErrorNotification("An error occured ", notification)
    },
    { timeout: 10000 }
  );

  const onSubmit = (data) => {
    notification.showLoading('Sending reset link...');
    forgotPassword({data:{
      email: data.email,
    }});
    notification.hideLoading();
  };

  return (
    <LoaderContainer isLoading={isLoading} spinner={<Loader/>}>
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/seamless-pattern-with-sport-theme_103032-15.jpg?w=740')",
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 lg:w-8/12  ">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block w-1/2">
            <h1 className="text-4xl font-bold text-blue-800 mb-6 relative inline-block">
              Forgot Password
              <span className="mt-2 w-full flex justify-leftx">
                <svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20,10 Q100,0 150,20"
                    fill="transparent"
                    stroke="#1e3a8a"
                    strokeWidth="3"
                  />
                  <path
                    d="M10,15 Q100,0 150,10"
                    fill="transparent"
                    stroke="#1e3a8a"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h1>
            <div className=" ">
              <img src={gym} alt="Illustration" className="h-full object-fit" />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <form className="h-full flex flex-col justify-evenly" onSubmit={handleSubmit(onSubmit)}>
              <AuthLogo />
              <div className="my-auto h-fit space-y-4 items-center">
                <div className="my-auto">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-3 text-gray-500">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="email@services.com"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg"
                >
                  Send Reset Link
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Remember your password?{" "}
                  <Link to="/select-organization" className="text-blue-500 hover:underline">
                    Login
                  </Link>
                </p>
             </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    </LoaderContainer>
  );
}

export default ForgotPassword;

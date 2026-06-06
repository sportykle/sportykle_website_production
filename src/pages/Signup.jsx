import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import gym from "../assets/login/gym-logo.png";
import { AuthLogo } from "../components/ui/AuthLogo";
import useMutationApi from "../hooks/useMutationApi";
import { ADMINISTRATOR_API_ENDPOINTS } from "../api/endpoints";
// import Loader from "../widgets/Loader";
import { useNotification } from "../widgets/NotificationProvider";
// import LoaderContainer from "../widgets/LoaderContainer";
import { handleErrorNotification } from "../utils/handleError";

const Loader = () => (
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
);

const LoaderContainer = ({ isLoading, children, spinner }) => (
  <div className="relative max-h-[100vh] overflow-y-auto">
    {children}
    {isLoading && (
      <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50 rounded-2xl">
        {spinner}
      </div>
    )}
  </div>
);


function Signup() {
  const notification = useNotification();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCouponField, setShowCouponField] = useState(false);
  const [disabled, setIsDisabled] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleReferralChange = (e) => {
    setShowCouponField(e.target.checked);
  };

  const {
    mutate: signUp,
    isLoading,
    error,
    isSuccess,
  } = useMutationApi(
    "post",
    ADMINISTRATOR_API_ENDPOINTS.SIGNUP,
    {
      onSuccess: () => {
        notification.success("registration success!");
        notification.info(
          "Email verification link has been sent to your email address."
        );

        setTimeout(() => {
          navigate("/select-organization");
        }, 3000);
      },
      onError: (err) => handleErrorNotification(err, notification),
    },
    { timeout: 10000 }
  );

  const onSubmit = (data) => {
    notification.showLoading("Saving data...");
    signUp({
      data: {
        username: `${data.firstName}_${data.lastName}`,
        password1: data.password,
        password2: data.confirmPassword,
        mobile_no: data.mobile,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        referral_code: data.referral ? data.couponCode : null,
      },
    });
    notification.hideLoading();
  };

  return (
    <LoaderContainer isLoading={isLoading} spinner={<Loader />}>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/seamless-pattern-with-sport-theme_103032-15.jpg?w=740')",
        }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 lg:w-8/12 m-4">
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:block w-1/2">
              <h1 className="text-4xl font-bold text-blue-800 mb-6 relative inline-block">
                Sign Up To Sportykle
                <span className="mt-2 w-full flex justify-left">
                  <svg
                    width="200"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
              <div>
                <img
                  src={gym}
                  alt="Illustration"
                  className="h-full object-fit"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <form
                className="space-y-4 items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <AuthLogo />
                <div className="flex justify-between gap-2">
                  <div className="w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-600"
                    >
                      First Name
                    </label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-3 text-gray-500">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="First Name"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Last Name
                    </label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-3 text-gray-500">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Last Name"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Mobile Number
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-3 text-gray-500">
                      <i className="fas fa-phone"></i>
                    </span>
                    <input
                      type="text"
                      id="mobile"
                      className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Mobile Number"
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid mobile number. Must be 10 digits.",
                        },
                        minLength: {
                          value: 10,
                          message: "Mobile number must be at least 10 digits.",
                        },
                        maxLength: {
                          value: 10,
                          message: "Mobile number cannot exceed 10 digits.",
                        },
                      })}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
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
                      placeholder="Email"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-3 text-gray-500">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      onCopy={(e) => e.preventDefault()} // Prevent copying
                    />
                    <span
                      className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      <i
                        className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                      ></i>
                    </span>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Confirm Password
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-3 text-gray-500">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                      onPaste={(e) => e.preventDefault()} // Prevent pasting
                    />
                    <span
                      className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      <i
                        className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                      ></i>
                    </span>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="referral"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    {...register("referral")}
                    onChange={handleReferralChange}
                  />
                  <label
                    htmlFor="referral"
                    className="ml-2 text-gray-600 text-sm"
                  >
                    Apply Referral Codes
                  </label>
                </div>
                {showCouponField && (
                  <div className="mt-4">
                    <label
                      htmlFor="couponCode"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Coupon Code
                    </label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-3 text-gray-500">
                        <i className="fas fa-tag"></i>
                      </span>
                      <input
                        type="text"
                        id="couponCode"
                        className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Coupon Code"
                        {...register("couponCode")}
                      />
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading || disabled}
                  className="w-full bg-blue-800 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg"
                >
                  Register
                </button>
              </form>
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/select-organization" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </LoaderContainer>
  );
}

export default Signup;

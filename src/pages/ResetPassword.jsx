import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthLogo } from "../components/ui/AuthLogo";
import useMutationApi from '../hooks/useMutationApi';
import { ADMINISTRATOR_API_ENDPOINTS } from '../api/endpoints';
import { useNotification } from "../widgets/NotificationProvider";
import LoaderContainer from "../widgets/LoaderContainer";
import Loader from '../widgets/Loader';
import { handleCustomErrorNotification } from "../utils/handleError";

const ResetPassword = () => {
  // Updated to match URL pattern: app/password/reset/confirm/:uid/:token
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const notification = useNotification();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("new_password1", "");

  const { mutate: resetPassword, isLoading } = useMutationApi(
    'post',
    ADMINISTRATOR_API_ENDPOINTS.CONFIRM_RESET_PASSWORD,
    {
      onSuccess: () => {
        notification.hideLoading();
        notification.success('Password successfully reset!');
        setTimeout(() => {
          navigate('/select-organization');
        }, 2000);
      },
      onError: (err) => {
        notification.hideLoading();
        handleCustomErrorNotification("Failed to reset password", notification)
      }
    },
    { timeout: 10000 }
  );

  const onSubmit = (data) => {
    notification.showLoading('Resetting password...');
    resetPassword({
      data: {
        new_password1: data.new_password1,
        new_password2: data.new_password2,
        uid: uid,
        token: token
      }
    });
  };

  return (
    <LoaderContainer isLoading={isLoading} spinner={<Loader />}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Wave Design Header */}
            <div className="h-32 bg-gradient-to-r from-blue-400 to-blue-600 relative flex items-center justify-center">
              <AuthLogo linkTo={false} className="h-20 relative z-10" />
              <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-12">
                  <path
                    fill="#ffffff"
                    d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                  />
                </svg>
              </div>
            </div>

            <div className="px-8 py-8">
              <h2 className="text-2xl font-bold text-center mb-8">Reset Your Password</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="new_password1" className="block text-sm font-medium text-gray-600">
                    New Password
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-3 text-gray-500">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      id="new_password1"
                      className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter new password"
                      {...register("new_password1", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters"
                        }
                      })}
                    />
                    {errors.new_password1 && (
                      <p className="text-red-500 text-xs mt-1">{errors.new_password1.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="new_password2" className="block text-sm font-medium text-gray-600">
                    Confirm Password
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-3 text-gray-500">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      id="new_password2"
                      className="w-full px-8 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Confirm new password"
                      {...register("new_password2", {
                        required: "Please confirm your password",
                        validate: value => value === password || "Passwords do not match"
                      })}
                    />
                    {errors.new_password2 && (
                      <p className="text-red-500 text-xs mt-1">{errors.new_password2.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 text-gray-500 text-sm">
          Powered by Sportykle
        </div>
      </div>
    </LoaderContainer>
  );
};

export default ResetPassword;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthLogo } from "../components/ui/AuthLogo";
import Loader from '../widgets/Loader';
import useMutationApi from '../hooks/useMutationApi';
import { ADMINISTRATOR_API_ENDPOINTS } from '../api/endpoints';

const VerifyEmail = () => {
  const { key } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  const { mutate: verifyEmail, isLoading, error, isSuccess } = useMutationApi(
    'post', 
    ADMINISTRATOR_API_ENDPOINTS.VERIFY_EMAIL, // Endpoint 
    {           // React Query Config
      onSuccess: () => {
        setStatus('success');
        setMessage('Your email has been successfully verified.');
        setTimeout(() => {
          navigate('/select-organization');
        }, 3000);
      },
      onError: (err) => {
        setStatus('error');
        setMessage(err.response.data.message);
      },
    },
    { timeout: 10000 } // Axios Config: Timeout for the request
  );

  useEffect(() => {
    try {
      verifyEmail({
        data: {
          key
        },
        params: { notify: true }, // Query string parameters (optional)
        customConfig: { headers: { 'X-Custom-Header': 'Value' } }, // Additional Axios config
      });
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
      console.error(error);
    }
  }, [key, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4 relative">
      <div className="max-w-md w-full">
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Wave Design */}
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

          <div className="px-8 pb-8 pt-2 text-center">
            <div className="mb-6">
              {isLoading && (
                <Loader />
              )}
              {isSuccess && (
                <svg className="h-16 w-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {status === 'error' && (
                <svg className="h-16 w-16 mx-auto text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            <h2 className="text-2xl font-bold mb-2">
              {isLoading ? 'Verifying Email...' :
               isSuccess ? 'Email Verified!' : 'Verification Failed'}
            </h2>

            <p className="text-gray-600 mb-6">
              {message}
            </p>

            {isSuccess && (
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Redirecting to login page...</p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full animate-progress"></div>
                </div>
              </div>
            )}

            {error && (
              <button
                onClick={() => navigate('/select-organization')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Go to Login
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 text-gray-500 text-sm">
        Powered by Sportykle
      </div>
    </div>
  );
};

export default VerifyEmail;

import { useState, useCallback } from "react";
import { Mail, ArrowLeft, HelpCircle, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useFetchOrg } from "../hooks/useFetchOrg";
import { AuthLogo } from "../components/ui/AuthLogo";
import { useNotification } from "../widgets/NotificationProvider";
import { useLogin } from "../hooks/useLogin";
import CustomSelect from "../components/CustomSelect";
import { useNavigate } from "react-router-dom";

const Loader = () => (
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
);

const LoaderContainer = ({ isLoading, children, spinner }) => (
  <div className="relative max-h-[100vh] overflow-y-auto">
    {children}
    {isLoading && (
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 flex items-center justify-center z-50 rounded-2xl">
        {spinner}
      </div>
    )}
  </div>
);

// Constants
const FORM_STEPS = {
  EMAIL: 'email',
  ORGANIZATION: 'organization',
  LOGIN: 'login'
};

const VALIDATION_RULES = {
  email: {
    required: 'Email is required',
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  }
};

function SelectOrganization() {
  const notification = useNotification();
  const { fetchOrganizations } = useFetchOrg();
  const { handleLogin, isLoading:isLoginLoading, isSuccess, error } = useLogin();
  const navigate = useNavigate()

  // State management
  const [isLoading, setIsLoading] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [currentStep, setCurrentStep] = useState(FORM_STEPS.EMAIL);
  const [userEmail, setUserEmail] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');
  const [formData, setFormData] = useState({ email: '', organization: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Mock notification function
  const showNotification = useCallback((message, type = 'info') => {
    // In a real app, this would show a toast notification
    alert(`${type.toUpperCase()}: ${message}`);
  }, []);

  // Validation functions
  const validateEmail = (email) => {
    if (!email?.trim()) return 'Email is required';
    if (!VALIDATION_RULES.email.pattern.test(email)) return 'Please enter a valid email address';
    return null;
  };

  const validateOrganization = (org) => {
    if (!org) return 'Please select an organization';
    return null;
  };

  const validatePassword = (password) => {
    if (!password?.trim()) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return null;
  };

  // Mock API call to fetch organizations
  const fetchOrganizations_ = useCallback(async (email) => {
    localStorage.clear(); // Clear any previous session data
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      const fetchOrgsResponse = await fetchOrganizations(email)

      if (fetchOrganizations.error) {
        throw new Error(fetchOrganizations.error)
      }

      const results = fetchOrgsResponse.organizations

      if (results.length > 1) {
        setOrganizations(results);
        setUserEmail(email);
        setCurrentStep(FORM_STEPS.ORGANIZATION);
      } else if (results.length === 1) {
        // Only one organization found - redirect to its login page
        const redirectUrl = results[0].login_url;
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
        else {
          notification.error("Failed to redirect to organization login page.");
          setErrors(prev => ({ ...prev, organization: 'Failed to redirect to organization login page.' }));
        }
      } else {
        // No organizations found - go to direct login
        setUserEmail(email);
        setCurrentStep(FORM_STEPS.LOGIN);
      }
    } catch (error) {
      setErrors(prev => ({ ...prev, organization: error.message || 'Failed to fetch organizations!.'}))
      console.error(error.message)
      notification.error('Failed to fetch organizations. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [showNotification]);

  // Event handlers
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData(prev => ({ ...prev, email }));
    if (errors.email) {
      const emailError = validateEmail(email);
      setErrors(prev => ({ ...prev, email: emailError }));
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    fetchOrganizations_(formData.email);
  };

  const handleOrgChange = (e) => {
    const organization = e.target.value;
    setSelectedOrg(organization);
    setFormData(prev => ({ ...prev, organization }));
    if (errors.organization) {
      const orgError = validateOrganization(organization);
      setErrors(prev => ({ ...prev, organization: orgError }));
    }
  };

  const handleOrgSubmit = (e) => {
    e.preventDefault();
    const orgError = validateOrganization(selectedOrg);
    if (orgError) {
      setErrors({ organization: orgError });
      return;
    }
    const redirectUrl = organizations.find((org) => selectedOrg === org.id).login_url
    if(redirectUrl) {
      window.location.href = redirectUrl 
    }
    else {
      notification.error("Failed to redirect!.")
    }
  };

  const handleBackToEmail = () => {
    setCurrentStep(FORM_STEPS.EMAIL);
    setOrganizations([]);
    setSelectedOrg('');
    setFormData(prev => ({ ...prev, organization: '', password: '' }));
    setErrors({});
    setShowPassword(false);
  };

  const handleSupportClick = () => {
    navigate("/signup")
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormData(prev => ({ ...prev, password }));
    if (errors.password) {
      const passwordError = validatePassword(password);
      setErrors(prev => ({ ...prev, password: passwordError }));
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setErrors({ password: passwordError });
      return;
    }

    // localStorage.setItem('token', ); // Store email for later use
    localStorage.clear(); // Clear any previous session data
    setIsLoading(true);
    // Simulate login process
    await handleLogin(
      {
        email: formData.email,
        password: formData.password,
      },
      notification
    );
    // setTimeout(() => {
      setIsLoading(false);
    //   showNotification(`Successfully logged in as ${userEmail}`, 'success');
    // }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgetPassword = () => {
    navigate("/accounts/reset-password")
  }

  const handleHomeClick = () => {
    navigate("/")
  }

  // Render email step
  const renderEmailForm = () => (
    <div className="w-full space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleEmailChange}
            disabled={isLoading}
            className={`w-full pl-10 pr-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 disabled:bg-gray-50 dark:disabled:bg-slate-800/50 disabled:cursor-not-allowed ${
              errors.email ? 'border-red-300' : 'border-gray-300 dark:border-slate-600'
            }`}
            placeholder="Enter your email address"
            autoComplete="email"
          />
        </div>
        {errors.email && (
          <p className="text-red-600 text-sm mt-2 font-medium">{errors.email}</p>
        )}
      </div>
      
      <button
        onClick={handleEmailSubmit}
        disabled={isLoading || !formData.email.trim()}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Searching...' : 'Continue'}
      </button>
    </div>
  );

  // Render login step (when no organizations found)
  const renderLoginForm = () => (
    <div className="w-full space-y-5">
      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          No organizations found for this email. Please login and create organization.
        </p>
      </div>

      <div>
        <label htmlFor="login-email" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            id="login-email"
            value={userEmail}
            disabled
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl shadow-sm bg-gray-50 dark:bg-slate-800/50 text-gray-600 dark:text-slate-400 cursor-not-allowed"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handlePasswordChange}
            disabled={isLoading}
            className={`w-full pl-10 pr-12 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 disabled:bg-gray-50 dark:disabled:bg-slate-800/50 disabled:cursor-not-allowed ${
              errors.password ? 'border-red-300' : 'border-gray-300 dark:border-slate-600'
            }`}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none disabled:cursor-not-allowed"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-600 text-sm mt-2 font-medium">{errors.password}</p>
        )}
      </div>

      <div className="flex space-x-3">
        <button
          onClick={handleBackToEmail}
          disabled={isLoading}
          className="flex-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          onClick={handleLoginSubmit}
          disabled={isLoading || !formData.password.trim()}
          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={handleForgetPassword}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium focus:outline-none focus:underline"
        >
          Forgot your password?
        </button>
      </div>
    </div>
  );

  // Render organization step
  const renderOrganizationForm = () => (
    <div className="w-full space-y-5">
      <div>
        <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
          Select Your Organization
        </label>
        <div className="relative mt-2">
          <CustomSelect
            id="organization"
            value={selectedOrg}
            onChange={handleOrgChange}
            disabled={isLoading}
            options={organizations}
            error={errors.organization}
            placeholder="Choose an organization"
          />
        </div>
        {errors.organization && (
          <p className="text-red-600 text-sm mt-2 font-medium">{errors.organization}</p>
        )}
      </div>

      <div className="flex space-x-3">
        <button
          onClick={handleBackToEmail}
          disabled={isLoading}
          className="flex-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          onClick={handleOrgSubmit}
          disabled={isLoading || !selectedOrg}
          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : 'Continue'}
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-slate-400">
          Using email: <span className="font-medium text-gray-800 dark:text-slate-200">{userEmail}</span>
        </p>
      </div>
    </div>
  );

  return (
    <LoaderContainer isLoading={isLoading | isLoginLoading} spinner={<Loader />}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100 dark:border-slate-700">
          <div className="flex flex-col items-center space-y-6">
            <AuthLogo />

            {/* Title */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {currentStep === FORM_STEPS.EMAIL ? 'Login to Sportykle' : 
                  currentStep === FORM_STEPS.LOGIN ? 'Create Organization' : 'Select Organization'
                }
              </h1>
              <p className="text-gray-600 dark:text-slate-400 text-sm">
                {currentStep === FORM_STEPS.EMAIL 
                  ? 'Enter your email to login to your organizations':
                 ( currentStep === FORM_STEPS.ORGANIZATION ?
                  'Choose the organization you want to access' : '')
                }
              </p>
            </div>

            {/* Forms */}
            {currentStep === FORM_STEPS.EMAIL && renderEmailForm() }
            {currentStep !== FORM_STEPS.EMAIL && (currentStep === FORM_STEPS.ORGANIZATION ? renderOrganizationForm():renderLoginForm())}

            <div>
              {/* Support Link */}
            <div className="text-center mt-4">
              <p className="flex items-center text-sm text-gray-600 dark:text-slate-400">
                Don't have account!{''}
                <button
                  onClick={handleSupportClick}
                  className="px-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium focus:outline-none focus:underline inline-flex items-center space-x-1"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>SignUp</span>
                </button>
              </p>
            </div>
              <div className="text-center">
                <button
                    onClick={handleHomeClick}
                    className="px-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium focus:outline-none focus:underline inline-flex items-center space-x-1"
                  >
                    <span>Back to home</span>
                    <LogIn className="w-4 h-4" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoaderContainer>
  );
}

export default SelectOrganization;
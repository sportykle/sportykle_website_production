import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Tag,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import gym from "../assets/login/gym-logo.png";
import logoMark from "../assets/images/logo-mark.svg";
import useMutationApi from "../hooks/useMutationApi";
import { ADMINISTRATOR_API_ENDPOINTS } from "../api/endpoints";
import { useNotification } from "../widgets/NotificationProvider";
import { handleErrorNotification } from "../utils/handleError";

const Loader = () => (
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600" />
);

const LoaderContainer = ({ isLoading, children, spinner }) => (
  <div className="relative h-dvh overflow-hidden">
    {children}
    {isLoading && (
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    )}
  </div>
);

const inputClass =
  "w-full pl-9 pr-3 py-2 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border-slate-200 dark:border-slate-600";

const labelClass = "block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1";

function Field({ id, label, icon: Icon, error, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        {children}
      </div>
      {error && <p className="text-red-500 text-[11px] mt-0.5">{error.message}</p>}
    </div>
  );
}

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
  const [disabled] = useState(false);

  const handleReferralChange = (e) => {
    setShowCouponField(e.target.checked);
  };

  const { mutate: signUp, isLoading } = useMutationApi(
    "post",
    ADMINISTRATOR_API_ENDPOINTS.SIGNUP,
    {
      onSuccess: () => {
        notification.success("registration success!");
        notification.info(
          "Email verification link has been sent to your email address."
        );
        setTimeout(() => navigate("/select-organization"), 3000);
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
      <div className="h-dvh overflow-hidden bg-gradient-to-br from-brand-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="h-full max-w-6xl mx-auto px-4 py-4 lg:py-6 flex items-center">
          <div className="w-full grid lg:grid-cols-[1fr_1.15fr] gap-4 lg:gap-8 items-center h-full max-h-[calc(100dvh-2rem)]">
            {/* Brand panel */}
            <div className="hidden lg:flex flex-col justify-center h-full min-h-0 pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-emerald-500 p-8 text-white shadow-2xl h-full max-h-[640px]">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={logoMark}
                      alt=""
                      aria-hidden="true"
                      className="h-11 w-11 object-contain drop-shadow-md"
                    />
                    <span className="text-2xl font-bold tracking-tight">Sportykle</span>
                  </div>

                  <h1 className="text-3xl xl:text-4xl font-bold leading-tight mb-3">
                    Build your sports empire
                  </h1>
                  <p className="text-brand-50/90 text-sm leading-relaxed max-w-sm mb-6">
                    Join thousands of academies managing members, payments, and
                    growth — all in one powerful platform.
                  </p>

                  <ul className="space-y-2.5 text-sm text-brand-50/95 mb-6">
                    {[
                      "Free trial — no credit card required",
                      "Setup in under 5 minutes",
                      "24/7 support when you need it",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 shrink-0 text-emerald-200" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex justify-center">
                    <img
                      src={gym}
                      alt="Sportykle dashboard preview"
                      className="max-h-[220px] w-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="flex flex-col justify-center h-full min-h-0">
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700/80 px-5 py-5 sm:px-6 sm:py-6 max-h-full overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    to="/select-organization"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to login
                  </Link>
                </div>

                <div className="flex items-center gap-3 mb-4 lg:hidden">
                  <img
                    src={logoMark}
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                      Sportykle
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Create your account
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block text-center mb-4">
                  <div className="inline-flex items-center justify-center mb-2">
                    <img
                      src={logoMark}
                      alt=""
                      aria-hidden="true"
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Create your account
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Get started with Sportykle in minutes
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-2.5"
                >
                  <div className="grid grid-cols-2 gap-2.5">
                    <Field id="firstName" label="First Name" icon={User} error={errors.firstName}>
                      <input
                        type="text"
                        id="firstName"
                        className={inputClass}
                        placeholder="First name"
                        {...register("firstName", { required: "Required" })}
                      />
                    </Field>
                    <Field id="lastName" label="Last Name" icon={User} error={errors.lastName}>
                      <input
                        type="text"
                        id="lastName"
                        className={inputClass}
                        placeholder="Last name"
                        {...register("lastName", { required: "Required" })}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <Field id="mobile" label="Mobile" icon={Phone} error={errors.mobile}>
                      <input
                        type="text"
                        id="mobile"
                        className={inputClass}
                        placeholder="10-digit number"
                        {...register("mobile", {
                          required: "Required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Must be 10 digits",
                          },
                        })}
                      />
                    </Field>
                    <Field id="email" label="Email" icon={Mail} error={errors.email}>
                      <input
                        type="email"
                        id="email"
                        className={inputClass}
                        placeholder="you@email.com"
                        {...register("email", { required: "Required" })}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <Field id="password" label="Password" icon={Lock} error={errors.password}>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className={`${inputClass} pr-9`}
                        placeholder="Password"
                        {...register("password", { required: "Required" })}
                        onCopy={(e) => e.preventDefault()}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </Field>
                    <Field
                      id="confirmPassword"
                      label="Confirm"
                      icon={Lock}
                      error={errors.confirmPassword}
                    >
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        className={`${inputClass} pr-9`}
                        placeholder="Confirm"
                        {...register("confirmPassword", {
                          required: "Required",
                          validate: (value) =>
                            value === watch("password") || "No match",
                        })}
                        onPaste={(e) => e.preventDefault()}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </Field>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-0.5">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-3.5 w-3.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                        {...register("referral")}
                        onChange={handleReferralChange}
                      />
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Have a referral code?
                      </span>
                    </label>
                    {showCouponField && (
                      <div className="relative flex-1 min-w-[140px]">
                        <Tag className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Coupon code"
                          {...register("couponCode")}
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || disabled}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white py-2.5 rounded-xl text-sm font-semibold transition shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </button>
                </form>

                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
                  Already have an account?{" "}
                  <Link
                    to="/select-organization"
                    className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoaderContainer>
  );
}

export default Signup;

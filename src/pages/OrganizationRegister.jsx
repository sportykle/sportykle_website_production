import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import ImageUploader from "../components/ImageUpload";
import { fields } from "./fields";
import { AuthLogo } from "../components/ui/AuthLogo";
import useMutationApi from "../hooks/useMutationApi";
import { ADMINISTRATOR_API_ENDPOINTS } from "../api/endpoints";
import { useNotification } from "../widgets/NotificationProvider";
import { Baseline } from "lucide-react";
import {handleError} from "../utils/handleError";

function OrganizationRegister() {
  const notification = useNotification()
  const TOKEN = localStorage.getItem("token"); // Get the token from sessionStorage
  const [isSuccess, setIsSuccess] = useState(false) 

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate: updateProfile, isLoading } = useMutationApi(
    "post",
    ADMINISTRATOR_API_ENDPOINTS.ORGANISATION,
    {
      onSuccess: (response) => {
        notification.hideLoading();
        setIsSuccess(true)
        notification.success("Organisation updated successfully!");
        localStorage.clear(); // Clear sessionStorage after successful update
        setTimeout(() => {
          window.location.href = response.redirect_url; // Redirect to login page after successful update
        }, 2000);
      },
      onError: (err) => {
        notification.hideLoading();
        // Handle error notification properly
        if (err.response) {
          console.log(err);
          handleError(err?.response.data, notification);
          // notification.error(err.response.data.message || "An error occurred");
        } else {
          notification.error("Network error or server timeout");
        }
      },
      onSettled: () => {
        // Additional settled logic if needed
      },
    },
    { timeout: 10000 }
  );

  const [imageError, setImageError] = useState(false);

  const onSubmit = (formData) => {
    if (!formData.display_picture || !formData.banner) {
      setImageError(true);
      return;
    }
    setImageError(false);

    const formDataObject = new FormData();

    // Process all form fields
    for (const key in formData) { 
        formDataObject.append(key, formData[key]);
    }

    notification.showLoading("Registering organization...");

    updateProfile({
      data: formDataObject,
      customConfig: {
        headers: {
          "X-Custom-Header": "Value",
          "Content-Type": "multipart/form-data",
          "Authorization": `Token ${TOKEN}`, // This will remove it
        },
        method: "post",
        url: ADMINISTRATOR_API_ENDPOINTS.ORGANISATION,
      },
    });
  };

  useEffect(() => {
    // Reset form fields when component mounts
    reset({
      display_picture: null,
      banner: null,
      subdomain: "",
      ...fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}),
    });
  }, [reset]);

  if(!TOKEN && !isSuccess) {
    // Redirect to login if no token is found
    window.location.href = "/login";
    return null; // Prevent rendering if no token is found
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/seamless-pattern-with-sport-theme_103032-15.jpg?w=740')",
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 lg:w-8/12">
        <div className="flex flex-col items-center mb-6">
          <AuthLogo className="mb-4" />
          <h1 className="text-4xl font-bold text-blue-800 relative inline-block text-center">
            Register Organization<span className="mt-2 w-full flex justify-leftx">
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
        </div>
        <div className="flex md:flex-row">
          <div className="w-full px-4">
            <form
              className="space-y-4 items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex justify-between items-center p-6 pr-20 gap-2">
                <div className="w-32 h-32 border-2 border-blue-100 rounded-lg flex justify-center items-center relative">
                  <div className="flex gap-1 flex-col items-center">
                    <ImageUploader
                      id="profileImageUploader"
                      onImageUpload={(image) =>
                        setValue("display_picture", image)
                      }
                      customClass="w-24 h-24 rounded-full"
                      // imageUrl={paymentModeData?.display_picture}
                    />
                    <p className="font-bold text-sm">Profile</p>
                  </div>
                </div>
                
                <div className="w-9/12 h-32 bg-gray-400 border-2 border-blue-100 rounded-lg relative flex justify-center items-center overflow-hidden">
                  {/* Banner image background */}
                  {watch("banner") && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
                      style={{
                        backgroundImage: `url(${typeof watch("banner") === 'string' ? watch("banner") : URL.createObjectURL(watch("banner"))})`
                      }}
                    />
                  )}
                  
                  {/* Overlay content */}
                  <div className="flex gap-2 flex-col items-center relative z-10">
                    <ImageUploader
                      id="bannerImageUploader"
                      onImageUpload={(image) => setValue("banner", image)}
                    />
                    {!watch("banner") && <p className="font-bold text-sm">Banner</p>}
                  </div>
                </div>
              </div>
              {imageError && (
                <div className="text-red-600 text-sm text-center mb-4">
                  Both profile and banner images are required.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Original Fields */}
                {fields.map((field) => (
                  <div key={field.name} className="">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-600"
                    >
                      {field.label}
                    </label>
                    <div className="relative mt-1 gap-2">
                      <span className="absolute left-3 top-3 text-gray-500 gap-2">
                        <img
                          src={field.icon}
                          alt={field.label}
                          className="w-5 h-5"
                        />
                      </span>
                      <input
                        disabled={isLoading}
                        type="text"
                        id={field.name}
                        className="w-full px-12 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder={field.placeholder}
                        {...register(field.name, { 
                          required: field.required,
                          pattern: field.pattern, 
                        })}
                      />
                      {errors[field.name] && (
                        <p className="text-red-500 text-xs mt-1">
                          {field.required
                            ? "This field is required"
                            : errors[field.name].message}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                {/* Webspace Field with Rules */}
                <div className="">
                  <span className="text-xs text-amber-400 italic align-super">Please enter the name you'd like to use as your subdomain (e.g., yourname.sportykle.com). This will be the personalized web address for your account</span>
                  <label
                    htmlFor="webspace"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Webspace 
                  </label>
                  <div className="relative mt-1 gap-2">
                    <span className="absolute left-3 top-3 text-gray-500 gap-2">
                      <Baseline className="w-5 h-5" />
                    </span>
                    <input
                      disabled={isLoading}
                      type="text"
                      id="webspace"
                      className="w-full px-12 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your webspace name"
                      {...register("subdomain", {
                        required: true,
                        pattern: {
                          value: /^[a-z0-9-]+$/,
                          message:
                            "No capital letters, underscores, or special characters allowed (except hyphens)",
                        },
                      })}
                    />
                    {errors.webspace && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.webspace.type === "required"
                          ? "Webspace is required"
                          : errors.webspace.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-2 p-2 bg-gray-50 border border-gray-200 rounded-md text-gray-600 text-xs">
                  <p className="font-semibold mb-1">Rules:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Only lowercase letters(a-z), numbers(0-9) and hyphens(-)
                      are allowed.
                    </li>
                    <li className="text-red-400">
                      No spaces or special characters(@, #, !, etc)
                    </li>
                    <li>Must start and end with letter or number</li>
                  </ul>
                </div>
                <div></div>

                <div className="flex justify-end gap-4 my-4 items-end">
                  <button
                    type="reset"
                    className="h-10 bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full"
                    onClick={() => reset()}
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="h-10 bg-blue-800 text-white font-semibold py-2 px-6 rounded-full"
                    disabled={isLoading}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationRegister;

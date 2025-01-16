import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Validation Schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
      "Password must include uppercase, lowercase, and a number"
    )
    .required("Password is required"),
});

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: Record<string, string>) => {
    console.log("Form Data:", data);
    // toast.success("Signup Successful!");
    // navigate("/dashboard"); // Redirect to the dashboard after successful signup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-uber text-slate-800 text-center">
          User Registration
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-uber_text text-slate-600"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className={`mt-1 block w-full p-2 border-b focus:ring-0 focus:outline-none ${
                errors.firstName ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-sm font-uber_text text-red-500 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-uber_text text-slate-600"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className={`mt-1 block w-full p-2 border-b focus:ring-0 focus:outline-none ${
                errors.lastName ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-sm font-uber_text text-red-500 mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-uber_text text-slate-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`mt-1 block w-full p-2 border-b focus:ring-0 focus:outline-none ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm font-uber_text text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-uber_text text-slate-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className={`mt-1 block w-full p-2 border-b focus:ring-0 focus:outline-none ${
                errors.password ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-sm font-uber_text text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2 px-4 bg-slate-800 text-white font-uber rounded-md hover:bg-slate-900 transition"
            >
              Register
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UserRegistration;

// import { useRegisterUserMutation } from "@/redux/featuresApi/auth/authApi";
// import  { useState } from "react";
// import { useForm } from "react-hook-form";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// const Register = () => {

//   const navigate = useNavigate();
//   const [registerUser, { isLoading, error }] = useRegisterUserMutation();

//   const [message, setMessage] = useState(null);







//   const [showPassword, setShowPassword] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async(data) => {
//      console.log("Registration Data:", data);

//     try {
//       await registerUser(data).unwrap();
//       toast.success('Congratulations! Registration successful');
//       navigate('/login');

  
      
//     } catch (error) {
//       setMessage(error.data.message);
      
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Create Your Account
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Name Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               {...register("name", { required: "Name is required" })}
//               type="text"
//               placeholder="Enter your name"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//             />
//             {errors.name && (
//               <span className="text-red-500 text-sm">
//                 {errors.name.message}
//               </span>
//             )}
//           </div>

//           {/* Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: "Invalid email format",
//                 },
//               })}
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//             />
//             {errors.email && (
//               <span className="text-red-500 text-sm">
//                 {errors.email.message}
//               </span>
//             )}
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters",
//                   },
//                 })}
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//               />
//               <span
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? (
//                   <AiOutlineEyeInvisible size={20} />
//                 ) : (
//                   <AiOutlineEye size={20} />
//                 )}
//               </span>
//             </div>
//             {errors.password && (
//               <span className="text-red-500 text-sm">
//                 {errors.password.message}
//               </span>
//             )}
//           </div>

//           {/* Submit Button */}

//           {
//             message && (
//               <span className="text-red-500 text-sm">{message}</span>
//             )
//           }
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <p className="text-center text-gray-500 text-sm mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-green-600 font-medium hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

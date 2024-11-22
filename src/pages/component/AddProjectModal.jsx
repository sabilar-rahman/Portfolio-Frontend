

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaImage, FaTrash, FaTimes, FaPlus, FaPlusCircle } from "react-icons/fa";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "sonner";
import { useAddProjectMutation } from "@/redux/featuresApi/project/projectApi";

const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [currentTech, setCurrentTech] = useState("");
  const [features, setFeatures] = useState([]);
  const [currentFeature, setCurrentFeature] = useState("");
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    reset();
    setThumbnail(null);
    setThumbnailPreview("");
    setTechnologies([]);
    setFeatures([]);
    setCurrentTech("");
    setCurrentFeature("");
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTechnology = () => {
    if (currentTech.trim() && !technologies.includes(currentTech.trim())) {
      setTechnologies([...technologies, currentTech.trim()]);
      setCurrentTech("");
    }
  };

  const removeTechnology = (tech) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const addFeature = () => {
    if (currentFeature.trim() && !features.includes(currentFeature.trim())) {
      setFeatures([...features, currentFeature.trim()]);
      setCurrentFeature("");
    }
  };

  const removeFeature = (feature) => {
    setFeatures(features.filter((f) => f !== feature));
  };

  const [handleAddProject, { isLoading }] = useAddProjectMutation();

  const onSubmit = async (data) => {
    const formData = new FormData();

    const projectData = {
      ...data,
      technologies,
      features,
    };

    formData.append("payload", JSON.stringify(projectData));

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      const res = await handleAddProject(formData);

      if ("error" in res) {
        toast.error("Failed to create project", { duration: 2000 });
      } else {
        toast.success("Project created successfully", { duration: 2000 });
        closeModal();
      }
    } catch (error) {
      toast.error("Something went wrong", { duration: 2000 });
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="btn btn-primary flex items-center gap-2 rounded-lg px-4 py-2 shadow-lg transition-transform transform hover:scale-105"
      >
        <FaPlusCircle className="text-xl" />
        <span className="ml-2">Add Project</span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl mx-4 md:mx-6">
            <div className="px-6 py-4 border-b">
              <h3 className="font-bold text-2xl">Add New Project</h3>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 space-y-6 text-sm md:text-base"
            >
              {/* Project Title */}
              <div>
                <label className="block mb-1 font-medium">Project Title</label>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className="w-full px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                />
                {errors.title && (
                  <span className="text-error text-sm">
                    {errors.title.message}
                  </span>
                )}
              </div>
















              {/* Short Description */}
              <div>
                <label className="block mb-1 font-medium">
                  Short Description
                </label>
                <input
                  type="text"
                  {...register("shortDescription", {
                    required: "Short description is required",
                  })}
                  className="w-full px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                />
                {errors.shortDescription && (
                  <span className="text-error text-sm">
                    {errors.shortDescription.message}
                  </span>
                )}
              </div>

              {/* Long Description */}
              <div>
                <label className="block mb-1 font-medium">
                  Long Description
                </label>
                <textarea
                  {...register("longDescription", {
                    required: "Long description is required",
                  })}
                  className="w-full px-3 py-2 border rounded focus:ring focus:ring-primary-light h-32"
                ></textarea>
                {errors.longDescription && (
                  <span className="text-error text-sm">
                    {errors.longDescription.message}
                  </span>
                )}
              </div>

              {/* Technologies */}
              <div>
                <label className="block mb-1 font-medium">
                  Technologies Used
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-1 bg-primary-light text-green-400 rounded-full shadow-sm"
                    >
                      {tech}
                      <button
                        type="button"
                        className="ml-2 text-red hover:text-red-200"
                        onClick={() => removeTechnology(tech)}
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={currentTech}
                    onChange={(e) => setCurrentTech(e.target.value)}
                    className="flex-grow px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                    placeholder="e.g., React"
                  />
                  <button
                    type="button"
                    onClick={addTechnology}
                    className="px-3 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block mb-1 font-medium">Features</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-1 bg-secondary-light  rounded-full shadow-sm"
                    >
                      {feature}
                      <button
                        type="button"
                        className="ml-2  hover:text-red-200"
                        onClick={() => removeFeature(feature)}
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={currentFeature}
                    onChange={(e) => setCurrentFeature(e.target.value)}
                    className="flex-grow px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                    placeholder="e.g., Real-time updates"
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="px-3 py-2 bg-secondary  rounded hover:bg-secondary-dark"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Thumbnail */}
              <div>
                <label className="block mb-1 font-medium">
                  Thumbnail Image
                </label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer  ">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaImage className="w-8 h-8 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />
                </label>
                {thumbnailPreview && (
                  <div className="relative w-full h-48 mt-4">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setThumbnail(null);
                        setThumbnailPreview("");
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                )}
              </div>

              {/* GitHub Link */}
              <div>
                <label className="block mb-1 font-medium">GitHub Link</label>
                <input
                  type="url"
                  {...register("githubLink", {
                    required: "GitHub link is required",
                  })}
                  className="w-full px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                />
                {errors.githubLink && (
                  <span className="text-error text-sm">
                    {errors.githubLink.message}
                  </span>
                )}
              </div>

              {/* Live Link */}
              <div>
                <label className="block mb-1 font-medium">Live Link</label>
                <input
                  type="url"
                  {...register("liveLink", {
                    required: "Live link is required",
                  })}
                  className="w-full px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                />
                {errors.liveLink && (
                  <span className="text-error text-sm">
                    {errors.liveLink.message}
                  </span>
                )}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Start Date</label>
                  <Controller
                    name="startDate"
                    control={control}
                    rules={{ required: "Start date is required" }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        className="w-full px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                        dateFormat="yyyy-MM-dd"
                      />
                    )}
                  />
                  {errors.startDate && (
                    <span className="text-error text-sm">
                      {errors.startDate.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium">End Date</label>
                  <Controller
                    name="endDate"
                    control={control}
                    rules={{ required: "End date is required" }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        className="w-full px-3 py-2 border rounded focus:ring focus:ring-primary-light"
                        dateFormat="yyyy-MM-dd"
                      />
                    )}
                  />
                  {errors.endDate && (
                    <span className="text-error text-sm">
                      {errors.endDate.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="submit"
                  className={`btn bg-primary text-white hover:bg-primary-dark focus:ring focus:ring-primary-light transition-all ${
                    isLoading && "loading loading-spinner"
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="btn bg-white border border-gray-400 text-gray-600 hover:text-white hover:bg-red-500 hover:border-red-500 focus:ring focus:ring-red-300 transition-all"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProjectModal;


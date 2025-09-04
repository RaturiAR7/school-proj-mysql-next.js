"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";

export default function AddSchool() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "image" && data[key][0]) {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await fetch("/api/school", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage("School added successfully!");
        reset();
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(error.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Add School - School Management</title>
        <meta name='description' content='Add a new school to the database' />
      </Head>

      <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-black'>
        <div className='max-w-2xl mx-auto'>
          <div className='bg-white rounded-lg shadow-md p-8'>
            <div className='mb-8'>
              <h1 className='text-3xl font-bold text-gray-900 text-center'>
                Add New School
              </h1>
              <p className='mt-2 text-gray-600 text-center'>
                Fill in the details to add a new school to the database
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* School Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  School Name *
                </label>
                <input
                  type='text'
                  id='name'
                  {...register("name", {
                    required: "School name is required",
                    minLength: {
                      value: 2,
                      message: "School name must be at least 2 characters",
                    },
                  })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter school name'
                />
                {errors.name && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Address *
                </label>
                <textarea
                  id='address'
                  rows={3}
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 10,
                      message: "Address must be at least 10 characters",
                    },
                  })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter school address'
                />
                {errors.address && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* City and State */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    City *
                  </label>
                  <input
                    type='text'
                    id='city'
                    {...register("city", {
                      required: "City is required",
                      minLength: {
                        value: 2,
                        message: "City must be at least 2 characters",
                      },
                    })}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter city'
                  />
                  {errors.city && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='state'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    State *
                  </label>
                  <input
                    type='text'
                    id='state'
                    {...register("state", {
                      required: "State is required",
                      minLength: {
                        value: 2,
                        message: "State must be at least 2 characters",
                      },
                    })}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter state'
                  />
                  {errors.state && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact */}
              <div>
                <label
                  htmlFor='contact'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Contact Number *
                </label>
                <input
                  type='tel'
                  id='contact'
                  {...register("contact", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Contact number must be exactly 10 digits",
                    },
                  })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter 10-digit contact number'
                />
                {errors.contact && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.contact.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email_id'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email ID *
                </label>
                <input
                  type='email'
                  id='email_id'
                  {...register("email_id", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter email address'
                />
                {errors.email_id && (
                  <p className='mt-1 text-sm text-red-600'>
                    {errors.email_id.message}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor='image'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  School Image
                </label>
                <input
                  type='file'
                  id='image'
                  accept='image/*'
                  {...register("image")}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                />
                <p className='mt-1 text-sm text-gray-500'>
                  Upload an image of the school (optional)
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? "Adding School..." : "Add School"}
                </button>
              </div>
            </form>

            {/* Success/Error Message */}
            {submitMessage && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  submitMessage.includes("Error")
                    ? "bg-red-50 text-red-800"
                    : "bg-green-50 text-green-800"
                }`}
              >
                {submitMessage}
              </div>
            )}

            {/* Navigation */}
            <div className='mt-6 text-center'>
              <Link href='/schools'>View Schools</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

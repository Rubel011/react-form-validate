"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const YouTubeForm = () => {
  const schema = z
    .object({
      firstName: z
        .string()
        .min(2, { message: "firstName should be minimum 2 character" })
        .max(30, { message: "firstName can not exceed 30 character" }),
      lastName: z
        .string()
        .min(2, { message: "lastName should be minimum 2 character" })
        .max(30, { message: "lastName can not exceed 30 character" }),
      email: z.string().email({ message: "Enter a valid email Id" }),
      age: z.number(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "password does not matched",
      path: ["confirmPassword"],
    });

  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    password: string;
    confirmPassword: string;
  };
  type formSchemaFromZod = z.infer<typeof schema>;

  const form = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: any) => {
    console.log("Submitted Data:-", data);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto  mt-8"
      >
        <div className="mb-6">
          <label htmlFor="firstName" className="block mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="lastName" className="block mb-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email_id" className="block mb-2">
            Email Id:
          </label>
          <input
            type="text"
            id="email_id"
            placeholder="Enter your email id"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("email", { required: "Email field is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="age_id" className="block mb-2">
            Age:
          </label>
          <input
            type="number"
            id="age_id"
            placeholder="Enter your age"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("age")}
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password_id" className="block mb-2">
            Password :
          </label>
          <input
            type="password"
            id="password_id"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="confirm_password" className="block mb-2">
            Confirm Password :
          </label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Enter your password again"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default YouTubeForm;

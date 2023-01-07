import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/input";
import TextArea from "../components/TextArea";
import SubmitButton from "../components/Submit";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful, errors, isDirty },
  } = useForm<FormValues>();

  const [lastUser, setLastUser] = useState<string | undefined>();
  const userName = watch("name", "your");
  const onSubmit: SubmitHandler<FormValues> = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    setLastUser(userName);
    await axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_FORM_SPREE,
      data: {
        data,
      },
    }).then((responce) => {
      responce.status === 200 && reset();
      reset();
    });
  };

  const inputStyle = `relative block w-full border-0 p-1.5 text-stone-900 placeholder-stone-500 focus:ring-0 sm:text-sm`;
  const errorStyle = `absolute bottom-1 right-1 bg-rose-100 px-2.5 py-0.5 rounded-full inline-block text-xs text-rose-800 italic text-right`;
  return (
    <Layout title="Contact">
      <div className="text-center">
        <h1 className="text-2xl text-stone-700 font-black mb-8">
          Want to start a conversation?
        </h1>
        {isSubmitSuccessful && !isDirty && (
          <p className="bg-lime-50 text-lime-600 border border-lime-300 shadow-sm text-xs text-center rounded-md px-4 py-3 mb-10">
            {`Thanks for contacing me ${lastUser}, I'll be in touch soon!`}
          </p>
        )}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <Input id="name" label="What's your name?">
              <input
                type="text"
                id="name"
                className={inputStyle}
                placeholder="Who you?"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <span className={errorStyle} role="alert">
                  Gotta know who I'm talking to.
                </span>
              )}
            </Input>

            <Input id="email" label="What's your email?">
              <input
                type="email"
                id="email"
                className={inputStyle}
                placeholder={`${userName}@email.com`}
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <span className={errorStyle} role="alert">
                  Have to know how to contact you.
                </span>
              )}
            </Input>

            <TextArea id="message" label="What's on your mind?">
              <textarea
                rows={4}
                id="message"
                className="block w-full border-0 p-1.5 text-stone-900 placeholder-stone-500 focus:ring-0 sm:text-sm"
                placeholder={`Suggestion: How's it going Dan, this is ${userName}...`}
                {...register("message", { required: true })}
              />
              {errors.message?.type === "required" && (
                <span className={errorStyle} role="alert">
                  Would like to know what this is about.
                </span>
              )}
            </TextArea>
            <div className="mt-4 mb-8 xl:mt-12">
              <SubmitButton value="Start Conversation" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

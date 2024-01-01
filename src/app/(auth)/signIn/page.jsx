"use client";

import React, { useState } from "react";
import SignInForm from "@/app/_components/SignInForm";
import useAppContext from "@/app/_hooks/useAppContext";
import Link from "next/link";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import FormControl from "@/app/_components/FormControl";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const contactForm = z.object({
  info: z.object({
    email: z
      .string({ required_error: "Bạn chưa nhập email" })
      .min(8, { message: "Email phải có ít nhất 8 ký tự" })
      .email({ message: "Bạn chưa nhập email" })
      .trim(),
    password: z
      .string({ required_error: "Bạn chưa nhập password" })
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" })
      .trim(),
    confirm_password: z
      .string()
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
  }),
});

const SignIn = () => {
  
  const methods = useForm({
    resolver: zodResolver(contactForm),
    defaultValues: {
      info: {
        email: "",
        password: "",
        confirm_password: "",
      },
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const { onShowSignIn, onTakeInfoUser } = useAppContext();

  const handleTakeData = (data) => {
    onTakeInfoUser(data);
  };

  return (
    <>
      <section className="section--signUp">
        <div className="container">
          <div className="section--signUp__wrapper row">
            <div className="signUp--form l-6 m-6 c-12">
              <div className="signUp--form__wrapper">
                <div className="header--logo">
                  <Link href="/">
                    <img src="https://i.ibb.co/5251mQc/logo.png" alt="" />
                  </Link>
                </div>
                <h2>Get Started</h2>
                <h3>Create your account now</h3>
                <FormProvider {...methods}>
                  <form
                    className="form-wrapper"
                    onSubmit={methods.handleSubmit((data) => {
                      handleTakeData(data);
                    })}
                  >
                    <div className="sign--up__form">
                      <FormControl
                        label="Email"
                        name="info.email"
                        type="text"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="sign--up__form">
                      <FormControl
                        label="Password"
                        name="info.password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                      />
                      <div
                        className="show--password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                    </div>
                    <div className="sign--up__form">
                      <FormControl
                        label="Confirm Password"
                        name="info.confirm_password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                      />
                      <div
                        className="show--password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                    </div>
                    <div className="sign--up__form--button">
                      <button type="submit" className="btn btn--signUp">
                        SignUp
                      </button>
                    </div>
                  </form>
                </FormProvider>
                <div className="sign--up__form--login">
                  <h5>Have an account</h5>
                  <p onClick={onShowSignIn}>Sign In</p>
                </div>
              </div>
            </div>

            <div className="signUp--decorate l-6 m-6">
              <div
                className="signUp--image"
                style={{
                  background: `url(
                    "https://i.ibb.co/TMyNt19/wallpaperflare-com-wallpaper-1.jpg"
                  )`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <SignInForm />
    </>
  );
};

export default SignIn;

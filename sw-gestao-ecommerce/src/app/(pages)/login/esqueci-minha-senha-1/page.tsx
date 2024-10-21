"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginLayout from "@/app/components/LoginLayout"; // Importando o componente do background
import { Field, Formik, Form, ErrorMessage, useFormik, useFormikContext } from "formik";
import * as Yup from 'yup';

const ForgotPassword: React.FC = () => {
  const router = useRouter(); // Ir pra outra página
  const isSubmiting = useFormikContext();

  // handleSubmit = (e: React.FormEvent) => {
    //e.preventDefault();
    //router.push("/login/esqueci-minha-senha-2");
  //};

  return (
    // Layout do esqueci minha senha 1
    <LoginLayout>
      <div
        className="absolute w-[500px] h-[60px] left-[85px] top-[280px] text-black text-[50px] font-semibold leading-[1.2] break-words"
      >
        Esqueci<br /> minha senha
      </div>
      
      <div className="absolute flex flex-col items-start p-8 left-[55px] top-[400px] w-[calc(100%-70px)] max-w-[500px]">
        <p className="text-left mb-6 text-lg">
          Insira seu e-mail para enviarmos um código de verificação para que você possa alterar a senha
        </p>
      </div>
      
      <Formik
         initialValues={{email: ''}}
         validationSchema={Yup.object({
           email: Yup.string().email('Email inválido').required('Bota o email, mano!'),
         })}
         onSubmit={(values, { setSubmitting }) => {
           console.log(values);
           console.log(isSubmiting);
           router.push('/login/esqueci-minha-senha-2');
           setSubmitting(false);
         }}>
          
        <Form className="absolute flex flex-col items-center justify-center p-8 left-[55px] top-[480px] w-[calc(100%-70px)] max-w-[500px]">
          <div className="mb-4 w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">E-mail</label>
            <Field
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Digite seu email"
            />
            <ErrorMessage name = "email" component="div" className="text-red-500 text-sm"/>
          </div>

          <button
            type="submit"
            className="absolute left-[200px] top-[150px] w-[150px] px-12 py-3.5 text-lg font-bold text-center whitespace-nowrap bg-black rounded-3xl text-neutral-100 hover:bg-slate-100 hover:text-black"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </LoginLayout>
  );
};

export default ForgotPassword;



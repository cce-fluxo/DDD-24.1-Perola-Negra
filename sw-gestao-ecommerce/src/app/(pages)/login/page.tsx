"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginLayout from "@/app/components/LoginLayout"; // Importando o componente do background
import { Field, Formik, Form, ErrorMessage, useFormik, useFormikContext } from "formik";
import * as Yup from 'yup';

const LoginForm: React.FC = () => {

  const router = useRouter();
  const isSubmiting = useFormikContext();
  return (
    // Layout do formulário de login
    <LoginLayout>
      <div
        className="absolute w-[300px] h-[60px] left-[85px] top-[280px] text-black text-[52px] font-semibold break-words"
      >
        Entrar
      </div>

      <Formik
         initialValues={{email: '', password: ''}}
         validationSchema={Yup.object({
           email: Yup.string().email('Email inválido').required('Bota o email, mano!'),
           password: Yup.string().min(6, 'a senha deve ter no minimo 6 caracteres').required('bota a senha, mano!'),
         })}
         onSubmit={(values, { setSubmitting }) => {
           console.log(values);
           console.log(isSubmiting);
           router.push('/home');
           setSubmitting(false);
         }}>
          
        <Form className="flex flex-col items-center justify-center p-8 left-[55px] top-[360px] w-[calc(100%-70px)] max-w-[500px]">
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
          <div className="mb-4 w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="password">Senha</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Digite sua senha"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm"/>
            
            <a href="/login/esqueci-minha-senha-1" className="block text-sm text-gray-500 mt-2 hover:underline text-right">
              Esqueci minha senha
            </a>
          </div>
          <button
            type="submit"
            className="absolute left-[200px] top-[270px] w-[150px] px-12 py-3.5 text-lg font-bold text-center whitespace-nowrap bg-black rounded-3xl text-neutral-100 hover:bg-slate-100 hover:text-black"
          >
            Entrar
          </button>
        </Form>
      </Formik>
    </LoginLayout>
  );
};

export default LoginForm;

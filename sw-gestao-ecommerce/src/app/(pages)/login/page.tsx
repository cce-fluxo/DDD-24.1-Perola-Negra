"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginFormato from "@/app/components/LoginFormato"; // Importando o componente do background
import { Field, Formik, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from 'yup';

const LoginForm: React.FC = () => {

  const router = useRouter();
  const isSubmitting = useFormikContext();
  
  return (
    // Layout do formulário de login
    <LoginFormato>
      <div className="flex flex-col ml-12">
        <div className="text-black text-[68px] font-semibold mb-8 ml-4"> {/* Adicionando margem esquerda */}
          Entrar
        </div>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Email inválido').required('Bota o email, mano!'),
            password: Yup.string().min(6, 'a senha deve ter no minimo 6 caracteres').required('bota a senha, mano!'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            console.log(isSubmitting);
            router.push('/home');
            setSubmitting(false);
          }}
        >
          <Form className="flex flex-col w-[calc(100%-70px)] max-w-[500px] items-center ml-4">
            <div className="mb-4 w-full flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-2" htmlFor="email">E-mail</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Digite seu email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4 w-full flex flex-col">
              <label className="text-sm font-bold text-gray-700 mb-2" htmlFor="password">Senha</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Digite sua senha"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              
              <a href="/login/esqueci-minha-senha-1" className="text-sm text-gray-500 mt-2 hover:underline text-right">
                Esqueci minha senha
              </a>
            </div>

            <button
              type="submit"
              className="px-12 py-3.5 text-lg font-bold bg-black rounded-3xl text-neutral-100 mt-4"
            >
              Entrar
            </button>
          </Form>
        </Formik>
      </div>
    </LoginFormato>
  );
};

export default LoginForm;

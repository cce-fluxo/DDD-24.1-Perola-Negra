"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginFormato from "@/app/components/LoginFormato";
import { Field, Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from 'yup';
import { useAuth } from "@/app/contexts/authContext";
import api from "@/services/axios"; // Importando a instância do Axios

interface LoginFormValues {
  email: string;
  hash_senha: string;
}

interface LoginResponse {
  acess_token?: string;
  token?: string;  // Adicionando possível alternativa
  jwt?: string;    // Adicionando possível alternativa
}

const LoginForm: React.FC = () => {
  const router = useRouter(); // Hook para navegar entre páginas
  const { signIn } = useAuth(); // Função para autenticar o usuário
  const [errorDetails, setErrorDetails] = useState<string>(""); // Estado para armazenar detalhes do erro

  const extractToken = (responseData: any): string | null => {
    console.log('Estrutura completa da resposta:', responseData);
    
    // Tentando extrair o token de diferentes formas da resposta
    if (responseData.acess_token) return responseData.acess_token; // Verifica se há acess_token
    if (responseData.token) return responseData.token; // Verifica se há token
    if (responseData.jwt) return responseData.jwt; // Verifica se há jwt
    
    // Se o token estiver em uma estrutura aninhada
    if (responseData.data?.token) return responseData.data.token;
    if (responseData.data?.acess_token) return responseData.data.acess_token;
    
    return null; // Retorna null se não encontrar nenhum token
  };

  return (
    <LoginFormato>
      <div className="flex flex-col ml-12">
        <div className="text-black text-[68px] font-semibold mb-8 ml-4">
          Entrar
        </div>
        <Formik
          initialValues={{ email: '', hash_senha: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Email inválido')
              .required('Email é obrigatório'),
            hash_senha: Yup.string()
              .min(6, 'A senha deve ter no mínimo 6 caracteres')
              .required('Senha é obrigatória'),
          })}
          onSubmit={async (
            values: LoginFormValues,
            { setSubmitting, setStatus }: FormikHelpers<LoginFormValues>
          ) => {
            try {
              const response = await api.post('/auth/login', {
                email: values.email,
                hash_senha: values.hash_senha
              });
              
              // Log detalhado da resposta
              console.log('Resposta completa do servidor:', {
                status: response.status,
                headers: response.headers,
                data: response.data,
                dataType: typeof response.data
              });

              if (!response.data) {
                throw new Error('Resposta vazia do servidor');
              }

              const token = extractToken(response.data);
              
              if (!token) {
                console.error('Estrutura da resposta:', response.data);
                throw new Error(`Token não encontrado na resposta. Formato recebido: ${JSON.stringify(response.data)}`);
              }

              await signIn(token);
              console.log("Login realizado com sucesso!");
              router.push('/home');
              
            } catch (error: any) {
              let errorMessage = 'Erro desconhecido ao fazer login';
              
              if (error.response) {
                // Erro com resposta do servidor
                const serverError = error.response.data;
                errorMessage = serverError.message || 'Erro no servidor';
                setErrorDetails(`Status: ${error.response.status}\nResposta: ${JSON.stringify(error.response.data, null, 2)}`);
                
                if (error.response.status === 401) {
                  errorMessage = 'Email ou senha incorretos';
                } else if (error.response.status === 422) {
                  errorMessage = 'Dados inválidos fornecidos';
                }
              } else if (error.request) {
                // Erro de rede
                errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
                setErrorDetails('Erro de rede: Sem resposta do servidor');
              } else {
                // Erro de código
                errorMessage = error.message || 'Erro ao processar o login';
                setErrorDetails(`Erro interno: ${error.message}\nDados recebidos: ${JSON.stringify(error, null, 2)}`);
              }

              console.error("Detalhes completos do erro:", {
                message: errorMessage,
                details: errorDetails,
                error: error
              });
              
              setStatus(errorMessage);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, status }) => (
            <Form className="flex flex-col w-[calc(100%-70px)] max-w-[500px] items-center ml-4">
              {status && (
                <div className="text-red-500 text-sm mb-4">
                  {status}
                  {errorDetails && (
                    <details className="mt-1 text-xs">
                      <summary>Detalhes técnicos</summary>
                      <pre className="mt-1 p-2 bg-gray-100 rounded overflow-auto max-h-40">
                        {errorDetails}
                      </pre>
                    </details>
                  )}
                </div>
              )}
              
              <div className="mb-4 w-full flex flex-col">
                <label className="text-sm font-bold text-gray-700 mb-2" htmlFor="email">
                  E-mail
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Digite seu email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4 w-full flex flex-col">
                <label className="text-sm font-bold text-gray-700 mb-2" htmlFor="hash_senha">
                  Senha
                </label>
                <Field
                  type="password"
                  name="hash_senha"
                  id="hash_senha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Digite sua senha"
                />
                <ErrorMessage name="hash_senha" component="div" className="text-red-500 text-sm mt-1" />
                <a href="/login/esqueci-minha-senha-1" className="text-sm text-gray-500 mt-2 hover:underline text-right">
                  Esqueci minha senha
                </a>
              </div>

              <button
                type="submit"
                className="px-12 py-3.5 text-lg font-bold bg-black rounded-3xl text-neutral-100 mt-4 hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Entrando...' : 'Entrar'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </LoginFormato>
  );
};


export default LoginForm;
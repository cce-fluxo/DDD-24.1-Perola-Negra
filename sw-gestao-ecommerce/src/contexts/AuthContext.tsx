// context/authContext.js
import { createContext, useState, useEffect, useCallback, Children } from 'react';
import axios from 'axios';
import Router from 'next/router';
import api from '@/services/axios';

// Criamos o contexto
const AuthContext = createContext({Children});

// Função para prover o contexto
export const AuthProvider = ({ Children}) => {
  const [token, setToken] = useState(null); // Guarda o token
  const [user, setUser] = useState(null);   // Guarda as infos do usuário

  // Função para fazer login
  const signIn = useCallback(async (email: string, password: string) => {
    try {
      // Envia o email e senha para a API
      const response = await api.post('/auth/login', { email, password });
      
      // Pega o token do retorno da API
      const accessToken = response.data.access_token;

      // Armazena o token no estado e no localStorage
      setToken(accessToken);
      localStorage.setItem('token', accessToken);
      
      // Configura o axios para enviar o token automaticamente em cada requisição
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      
      // Redireciona o usuário após o login (exemplo: dashboard)
      Router.push('/dashboard');
    } catch (err) {
      console.error("Erro no login:", err);
    }
  }, []);

  // Função para deslogar
  const signOut = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    Router.push('/login'); // Redireciona para a página de login
  }, []);

  // Carregar o token do localStorage ao iniciar a aplicação
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, signIn, signOut }}>
      {Children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

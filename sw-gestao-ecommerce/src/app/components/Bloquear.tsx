// src/app/components/withAuth.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/authContext';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const { token } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        router.push('/login'); // Redireciona para a página de login se não houver token
      }
    }, [token, router]);

    return token ? <WrappedComponent {...props} /> : null; // Renderiza o componente se o token estiver presente
  };

  return AuthenticatedComponent;
};

export default withAuth;

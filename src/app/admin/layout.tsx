'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Verificação simples de autenticação
  // Em produção, use um sistema de autenticação adequado
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha simples para demonstração - em produção, use um sistema seguro
    if (password === process.env.SENHA_ADMINISTRADOR) {
      setIsAuthenticated(true);
      // Armazenar no sessionStorage para manter o login durante a sessão
      sessionStorage.setItem('adminAuthenticated', 'true');
      setError('');
    } else {
      setError('Senha incorreta');
    }
  };

  useEffect(() => {
    // Verificar se já está autenticado no sessionStorage
    const isAuth = sessionStorage.getItem('adminAuthenticated') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/90 p-4">
        <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
          <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Área Administrativa
          </h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-primary focus:border-primary text-white"
                placeholder="Digite a senha de administrador"
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-white p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <nav className="bg-gray-800/70 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Admin
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/admin"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Inscrições
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Voltar ao Site
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  sessionStorage.removeItem('adminAuthenticated');
                  setIsAuthenticated(false);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
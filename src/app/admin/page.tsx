'use client';

import { useState, useEffect } from 'react';
import { RegistrationEntry } from '@/lib/types';
import { FaSearch, FaFileExport, FaEye } from 'react-icons/fa';

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<RegistrationEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPayment, setFilterPayment] = useState('all');
  const [selectedRegistration, setSelectedRegistration] = useState<RegistrationEntry | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const response = await fetch('/api/admin/registrations');
        if (!response.ok) {
          throw new Error('Falha ao carregar inscrições');
        }
        const data = await response.json();
        setRegistrations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }

    fetchRegistrations();
  }, []);

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = 
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPayment = filterPayment === 'all' || reg.payment === filterPayment;
    
    return matchesSearch && matchesPayment;
  });

  const handleViewDetails = (registration: RegistrationEntry) => {
    setSelectedRegistration(registration);
    setShowModal(true);
  };

  const exportToCSV = () => {
    const headers = ['Nome', 'Email', 'Telefone', 'Formação', 'Experiência', 'Pagamento', 'Indicação', 'Mensagem', 'Data de Inscrição'];
    
    const csvRows = [
      headers.join(','),
      ...filteredRegistrations.map(reg => {
        const values = [
          `"${reg.name}"`,
          `"${reg.email}"`,
          `"${reg.phone}"`,
          `"${reg.education}"`,
          `"${reg.experience}"`,
          `"${reg.payment}"`,
          `"${reg.referral}"`,
          `"${reg.message || ''}"`,
          `"${reg.created_at ? new Date(reg.created_at).toLocaleString('pt-BR') : ''}"`
        ];
        return values.join(',');
      })
    ];
    
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `inscricoes_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Painel Administrativo
          </h1>
          <p className="text-gray-300 mt-2">Gerencie as inscrições do curso de programação</p>
        </header>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nome ou email..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-primary focus:border-primary text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <select
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-primary focus:border-primary text-white"
                value={filterPayment}
                onChange={(e) => setFilterPayment(e.target.value)}
              >
                <option value="all">Todos os pagamentos</option>
                <option value="Pix">Pix</option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="Boleto">Boleto</option>
                <option value="Pendente">Pendente</option>
              </select>
              
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FaFileExport /> Exportar
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-lg">
              <p>{error}</p>
            </div>
          ) : filteredRegistrations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Nenhuma inscrição encontrada</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Telefone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Pagamento</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredRegistrations.map((registration) => (
                    <tr key={registration.id} className="hover:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{registration.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{registration.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{registration.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${registration.payment === 'Pendente' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'}`}>
                          {registration.payment}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {registration.created_at ? new Date(registration.created_at).toLocaleDateString('pt-BR') : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        <button
                          onClick={() => handleViewDetails(registration)}
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          <FaEye className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalhes */}
      {showModal && selectedRegistration && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Detalhes da Inscrição
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  &times;
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-gray-400 text-sm">Nome</h3>
                    <p className="text-white">{selectedRegistration.name}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Email</h3>
                    <p className="text-white">{selectedRegistration.email}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Telefone</h3>
                    <p className="text-white">{selectedRegistration.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Data de Inscrição</h3>
                    <p className="text-white">
                      {selectedRegistration.created_at 
                        ? new Date(selectedRegistration.created_at).toLocaleString('pt-BR') 
                        : '-'}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm">Formação</h3>
                  <p className="text-white">{selectedRegistration.education}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm">Experiência</h3>
                  <p className="text-white">{selectedRegistration.experience}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm">Método de Pagamento</h3>
                  <p className="text-white">{selectedRegistration.payment}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm">Como conheceu o curso</h3>
                  <p className="text-white">{selectedRegistration.referral}</p>
                </div>
                
                {selectedRegistration.message && (
                  <div>
                    <h3 className="text-gray-400 text-sm">Mensagem</h3>
                    <p className="text-white">{selectedRegistration.message}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
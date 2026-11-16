import { useState, useEffect } from 'react';
import { api } from './services/api';
import { ShoppingBasket, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    api.get('/')
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center max-w-xl mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-[#1F3D2B] text-[#F3E9D2] flex items-center justify-center mb-6 shadow-md">
        <ShoppingBasket className="w-9 h-9" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2 text-[#1F3D2B]">
        🧺 Feira & Cia
      </h1>
      <p className="text-sm italic text-[#6b5f4e] mb-8">
        Projeto de Engenharia Full-Stack & Mentoria
      </p>

      <div className="w-full bg-[#fffdf7] border border-[rgba(43,33,24,0.14)] rounded-2xl p-6 shadow-sm mb-6 text-left">
        <h2 className="text-base font-bold text-[#1F3D2B] mb-3 flex items-center gap-2">
          <Server className="w-5 h-5 text-[#2C5940]" />
          Status do Ambiente
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-[rgba(43,33,24,0.08)]">
            <span className="text-[#6b5f4e]">Frontend React + Vite</span>
            <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4" /> Pronto (Porta 5173)
            </span>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-[rgba(43,33,24,0.08)]">
            <span className="text-[#6b5f4e]">Backend NestJS API</span>
            <span className="flex items-center gap-1.5 font-semibold">
              {apiStatus === 'checking' && <span className="text-amber-600">Verificando...</span>}
              {apiStatus === 'online' && <span className="text-emerald-700 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Online (Porta 3000)</span>}
              {apiStatus === 'offline' && <span className="text-rose-600 font-medium">Aguardando start (`npm run dev:api`)</span>}
            </span>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-[#6b5f4e]">Banco de Dados PostgreSQL</span>
            <span className="font-semibold text-[#1F3D2B]">Docker (`docker compose up -d`)</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#EADFC4]/40 border border-[#2C5940]/20 rounded-xl p-4 text-xs text-[#2B2118] text-left">
        <p className="font-bold flex items-center gap-1 mb-1 text-[#1F3D2B]">
          <ShieldCheck className="w-4 h-4" /> Próximo Passo:
        </p>
        <p className="text-[#6b5f4e]">
          Consulte o backlog de tarefas e comece pelas issues da <strong>Milestone 1</strong> (Modelagem Prisma & Autenticação JWT).
        </p>
      </div>
    </div>
  );
}

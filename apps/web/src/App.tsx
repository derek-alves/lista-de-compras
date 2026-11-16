import { useState, useEffect } from 'react';
import { api } from './services/api';
import { formatBRL, CATEGORIES_THEME } from './constants/theme';
import { ShoppingBasket, Server, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function App() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    api.get('/')
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center max-w-[520px] mx-auto font-sans">
      {/* Ícone e Cabeçalho Oficial */}
      <div className="w-16 h-16 rounded-2xl bg-awning text-paper flex items-center justify-center mb-4 shadow-md">
        <ShoppingBasket className="w-9 h-9" />
      </div>

      <h1 className="font-serif text-3xl font-bold tracking-tight mb-1 text-awning">
        🧺 Feira &amp; Cia
      </h1>
      <p className="font-sans text-xs italic text-ink-soft mb-6">
        nunca mais esquece nada no mercado
      </p>

      {/* Demonstração das Cores e Tipografias Configuradas */}
      <div className="w-full bg-[#fffdf7] border border-line rounded-2xl p-5 shadow-sm mb-5 text-left">
        <h2 className="font-serif text-base font-semibold text-awning mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-awning-light" />
          Tipografia &amp; Cores do Tema Prontas
        </h2>

        <div className="space-y-2 text-xs mb-4">
          <div className="flex justify-between items-center py-1 border-b border-line">
            <span className="text-ink-soft">Fonte dos Títulos (Fraunces):</span>
            <span className="font-serif font-bold text-sm text-awning">Texto em Serif</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-line">
            <span className="text-ink-soft">Fonte do Corpo (DM Sans):</span>
            <span className="font-sans text-ink">Texto em Sans-Serif</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-line">
            <span className="text-ink-soft">Fonte de Preços/Datas (Space Mono):</span>
            <span className="font-mono font-bold text-accent">{formatBRL(48.90)}</span>
          </div>
        </div>

        <p className="text-[11px] uppercase tracking-wider text-ink-soft font-bold mb-2">Exemplo das 10 Categorias:</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.values(CATEGORIES_THEME).map((cat) => (
            <span
              key={cat.name}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-paper"
              style={{ backgroundColor: cat.colorVar }}
            >
              <span>{cat.icon}</span> {cat.name}
            </span>
          ))}
        </div>
      </div>

      {/* Card de Status do Ambiente */}
      <div className="w-full bg-[#fffdf7] border border-line rounded-2xl p-5 shadow-sm mb-5 text-left">
        <h2 className="font-serif text-base font-semibold text-awning mb-2 flex items-center gap-2">
          <Server className="w-4 h-4 text-awning-light" />
          Status do Ambiente
        </h2>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between py-1.5 border-b border-line">
            <span className="text-ink-soft">Frontend React + Vite</span>
            <span className="flex items-center gap-1 font-semibold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" /> Pronto (5173)
            </span>
          </div>

          <div className="flex items-center justify-between py-1.5">
            <span className="text-ink-soft">Backend NestJS API</span>
            <span className="font-semibold">
              {apiStatus === 'checking' && <span className="text-amber-600">Verificando...</span>}
              {apiStatus === 'online' && <span className="text-emerald-700 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Online (3000)</span>}
              {apiStatus === 'offline' && <span className="text-rose-600">Inicie com `npm run dev:api`</span>}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#EADFC4]/40 border border-awning-light/20 rounded-xl p-3.5 text-xs text-left">
        <p className="font-bold flex items-center gap-1 mb-1 text-awning">
          <ShieldCheck className="w-4 h-4" /> Próximo Passo da Dupla:
        </p>
        <p className="text-ink-soft text-[11.5px] leading-relaxed">
          Iniciar a <strong>Milestone 0</strong>: criar os 14 componentes reutilizáveis em <code>apps/web/src/components/ui/</code> usando as classes prontas (<code>font-serif</code>, <code>font-mono</code>, <code>bg-awning</code>, etc.).
        </p>
      </div>
    </div>
  );
}

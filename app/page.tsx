import React from 'react';
import { ChevronRight, Play, Zap, Shield, Gauge, Trophy } from 'lucide-react';

export default function AstonMartinAMR26B() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] font-sans antialiased selection:bg-green-500 selection:text-black">
      
      {/* --- NAV MINIMALISTA STYLE APPLE --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between text-xs tracking-tight">
          <span className="font-semibold uppercase tracking-widest text-emerald-500">
            Aston Martin Aramco
          </span>
          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#overview" className="hover:text-white transition-colors">Visão Geral</a>
            <a href="#specs" className="hover:text-white transition-colors">Especificações</a>
            <button className="bg-[#00594f] hover:bg-[#007063] text-white px-3 py-1 rounded-full text-xs font-medium transition-all">
              Reservar
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Glow de fundo no tom verde Racing */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />

        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold mb-3">
          Engenharia Extrema
        </p>
        
        <h1 className="text-5xl md:text-8xl font-semibold tracking-tight max-w-4xl bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          AMR26B.
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-neutral-400 font-normal max-w-2xl tracking-tight">
          Velocidade reimaginada. O ápice do aerodesign na Fórmula 1.
        </p>

        <div className="mt-8 flex items-center gap-6">
          <button className="bg-white text-black hover:bg-neutral-200 px-6 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-1">
            Garantir no Grid <ChevronRight className="w-4 h-4" />
          </button>
          <button className="text-emerald-400 hover:text-emerald-300 font-medium text-sm flex items-center gap-1 transition-colors">
            Assista ao Teaser <Play className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

        {/* Hero Banner / Silhouette Placeholder */}
        <div className="mt-16 w-full max-w-5xl h-[350px] md:h-[500px] rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-950/30 via-transparent to-transparent" />
          <span className="text-neutral-700 font-mono text-sm tracking-widest uppercase">
            [ Imagem do AMR26B em Alta Resolução ]
          </span>
        </div>
      </section>

      {/* --- GRID HIGHLIGHTS (APPLE STYLE BENTO) --- */}
      <section id="overview" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Bento Card 1 */}
          <div className="bg-neutral-900/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-[380px] hover:border-emerald-500/30 transition-all">
            <div>
              <Zap className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Unidade de Potência Híbrida.
              </h3>
              <p className="text-neutral-400 mt-2 text-sm leading-relaxed">
                Eficiência térmica sem precedentes. Mais de 1.000 cavalos de potência entregues com torque instantâneo.
              </p>
            </div>
            <div className="text-4xl font-light tracking-tight text-emerald-400">
              1.000+ HP
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-neutral-900/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-[380px] hover:border-emerald-500/30 transition-all">
            <div>
              <Gauge className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Aerodinâmica Ativa B.
              </h3>
              <p className="text-neutral-400 mt-2 text-sm leading-relaxed">
                O chassi B introduz asas flexíveis inteligentes que reduzem o arrasto nas retas sem perder pressão aerodinâmica.
              </p>
            </div>
            <div className="text-4xl font-light tracking-tight text-emerald-400">
              -18% Drag
            </div>
          </div>

        </div>
      </section>

      {/* --- SPEC COMPARISON TABLE --- */}
      <section id="specs" className="max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl md:text-5xl font-semibold text-center tracking-tight mb-16">
          Em números.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-2">Chassi</p>
            <p className="text-3xl font-semibold text-white">Monocoque</p>
            <p className="text-sm text-neutral-400 mt-1">Fibra de carbono superleve</p>
          </div>

          <div className="p-6 border-y md:border-y-0 md:border-x border-white/10">
            <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-2">Peso Mínimo</p>
            <p className="text-3xl font-semibold text-emerald-400">798 kg</p>
            <p className="text-sm text-neutral-400 mt-1">Regulamento FIA 2026</p>
          </div>

          <div className="p-6">
            <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-2">Transmissão</p>
            <p className="text-3xl font-semibold text-white">8 Marchas</p>
            <p className="text-sm text-neutral-400 mt-1">Semiautomática com paddle shift</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-28 text-center border-t border-white/10 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6">
          <Trophy className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
            Projetado para vencer.
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Acompanhe a estreia na pré-temporada.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full text-sm transition-all shadow-lg shadow-emerald-500/20">
            Configurar Notificações
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-white/5 text-center text-xs text-neutral-600">
        <p>© 2026 Aston Martin Aramco F1 Team. Inspirado no design Apple Inc.</p>
      </footer>

    </div>
  );
}
import { useRef } from "react";
import imagemCarona from "./assets/imagem-carona.png";

export default function LandingPageCaronaUniversitaria() {

  // REFERÊNCIA DO TOPO
  const topoRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* EFEITOS DE FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.30),transparent_35%)]"></div>

      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO */}
      <section
        ref={topoRef}
        className="relative px-6 py-20 md:px-16 lg:px-28"
      >

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>

            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow border border-white/20">
              Projeto Universitário • Pesquisa de Interesse
            </span>

            <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
              Você usaria um app de{" "}
              <span className="text-purple-200">
                carona universitária
              </span>
              ?
            </h1>

            <p className="text-lg text-gray-300 mt-6 leading-relaxed max-w-2xl">
              Estamos desenvolvendo uma plataforma para conectar alunos que desejam dar ou receber caronas de forma prática, econômica e segura.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              {/* BOTÃO PESQUISA */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVrCn4sX8uMV6TSP5HJ1MeqRAtFMN6-PAx-8y8ctRXDMV3oQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 transition duration-300 text-purple-700 font-bold px-6 py-4 rounded-2xl shadow-lg hover:scale-105"
              >
                Participar da pesquisa
              </a>

              {/* BOTÃO BENEFÍCIOS */}
              <a
                href="#beneficios"
                className="border-2 border-gray-300 hover:border-purple-400 transition duration-300 px-6 py-4 rounded-2xl font-semibold hover:scale-105"
              >
                Ver benefícios
              </a>

            </div>

            {/* INDICADORES */}
            <div className="flex flex-wrap gap-8 mt-10 text-sm text-gray-300">

              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
                <p className="text-3xl font-black text-purple-200">+500</p>
                <p>Alunos esperados</p>
              </div>

              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
                <p className="text-3xl font-black text-purple-200">100%</p>
                <p>Gratuito</p>
              </div>

            </div>

          </div>

          {/* IMAGEM */}
          <div className="relative flex justify-center">

            <div className="bg-white/10 backdrop-blur-xl rounded-[32px] shadow-[0_0_60px_rgba(99,102,241,0.35)] p-5 border border-white/10 relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

              <img
                src={imagemCarona}
                alt="Carona universitária inteligente"
                className="rounded-3xl max-h-[520px] object-contain w-full relative z-10"
              />

            </div>

          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="relative px-6 py-24 md:px-16 lg:px-28"
      >

        <div className="max-w-6xl mx-auto text-center mb-14">

          <h2 className="text-4xl font-black">
            Por que usar uma carona universitária?
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Nosso objetivo é facilitar a vida dos estudantes.
          </p>

        </div>

        {/* GRID DOS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

          {/* CARD 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl text-center hover:scale-105 transition duration-300 h-full flex flex-col justify-between">

            <div>
              <div className="text-5xl mb-4">💰</div>

              <h3 className="text-2xl font-bold mb-3">
                Economia
              </h3>

              <p className="text-gray-300">
                Divida gastos de combustível e reduza custos.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl text-center hover:scale-105 transition duration-300 h-full flex flex-col justify-between">

            <div>
              <div className="text-5xl mb-4">⏰</div>

              <h3 className="text-2xl font-bold mb-3">
                Praticidade
              </h3>

              <p className="text-gray-300">
                Encontre colegas com rotas parecidas.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl text-center hover:scale-105 transition duration-300 h-full flex flex-col justify-between">

            <div>
              <div className="text-5xl mb-4">🌱</div>

              <h3 className="text-2xl font-bold mb-3">
                Sustentabilidade
              </h3>

              <p className="text-gray-300">
                Menos carros = menos poluição.
              </p>
            </div>

          </div>

          {/* CARD 4 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl text-center hover:scale-105 transition duration-300 h-full flex flex-col justify-between">

            <div>
              <div className="text-5xl mb-4">⏱️</div>

              <h3 className="text-2xl font-bold mb-3">
                Economize tempo
              </h3>

              <p className="text-gray-300 mb-4">
                Rotas diretas ajudam você a chegar mais rápido e evitar longas esperas.
              </p>

              <ul className="text-sm text-gray-400 space-y-2">
                <li>✔ Menos tempo no trânsito</li>
                <li>✔ Mais tempo para estudar</li>
                <li>✔ Mais conforto e segurança</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* TODO MUNDO GANHA */}
      <div className="max-w-4xl mx-auto mt-16 text-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl relative z-10">

        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Todo mundo ganha 🚗
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          Quem oferece carona reduz seus custos do dia a dia, e quem pega economiza pagando bem menos que em apps tradicionais.
        </p>

        <p className="text-gray-400 mt-4">
          O valor é dividido entre os estudantes, com pagamento simples e seguro direto pela plataforma.
        </p>

      </div>

      {/* CTA FINAL */}
      <div className="py-24 px-6 relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl font-black">
            Participe da pesquisa 🚀
          </h2>

          <p className="text-gray-300 mt-4">
            Leva menos de 1 minuto e ajuda a construir uma solução real para estudantes.
          </p>

          {/* BOTÃO VOLTAR AO TOPO */}
          <button
            onClick={() => {
              topoRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="inline-block mt-8 bg-purple-600 hover:bg-purple-500 transition duration-300 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:scale-105"
          >
            Voltar para o início ↑
          </button>

        </div>

      </div>

    </div>
  );
}
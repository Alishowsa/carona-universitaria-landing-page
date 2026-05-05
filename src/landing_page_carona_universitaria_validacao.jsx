// Importa a imagem que será usada na página (arquivo local)
import imagemCarona from "./assets/imagem-carona.png";

// Componente principal da landing page
export default function LandingPageCaronaUniversitaria() {
  return (
    // Container principal da página
    // min-h-screen = ocupa altura inteira da tela
    // bg-[#050816] = cor de fundo escura
    // overflow-hidden = evita scroll indesejado
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      
      {/* Efeito de fundo com gradientes (efeito glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.30),transparent_35%)]"></div>

      {/* Grid decorativo no fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* HERO (primeira seção da página) */}
      <section className="relative px-6 py-20 md:px-16 lg:px-28">
        
        {/* Container central com grid (2 colunas em telas grandes) */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO (texto) */}
          <div>
            {/* Badge no topo */}
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow border border-white/20">
              Projeto Universitário • Pesquisa de Interesse
            </span>

            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
              Você usaria um app de <span className="text-purple-200">carona universitária</span>?
            </h1>

            {/* Descrição */}
            <p className="text-lg text-gray-300 mt-6 leading-relaxed max-w-2xl">
              Estamos desenvolvendo uma plataforma para conectar alunos que desejam dar ou receber caronas de forma prática, econômica e segura.
            </p>

            {/* Botões */}
            <div className="flex flex-wrap gap-4 mt-8">
              
              {/* Botão que abre o Google Forms */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVrCn4sX8uMV6TSP5HJ1MeqRAtFMN6-PAx-8y8ctRXDMV3oQ/viewform"
                target="_blank" // abre em nova aba
                rel="noopener noreferrer" // segurança
                className="bg-white hover:bg-gray-100 transition text-purple-700 font-bold px-6 py-4 rounded-2xl shadow-lg"
              >
                Participar da pesquisa
              </a>

              {/* Botão que leva para a seção de benefícios */}
              <a
                href="#beneficios"
                className="border-2 border-gray-300 hover:border-purple-400 transition px-6 py-4 rounded-2xl font-semibold"
              >
                Ver benefícios
              </a>
            </div>

            {/* Indicadores (estatísticas fake/placeholder) */}
            <div className="flex gap-8 mt-10 text-sm text-gray-300">
              <div>
                <p className="text-3xl font-black text-purple-200">+500</p>
                <p>Alunos esperados</p>
              </div>
              <div>
                <p className="text-3xl font-black text-purple-200">100%</p>
                <p>Gratuito</p>
              </div>
              <div>
                <p className="text-3xl font-black text-purple-200">24h</p>
                <p>Conexões rápidas</p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO (imagem) */}
          <div className="relative flex justify-center">
            
            {/* Container estilizado da imagem */}
            <div className="bg-white/10 backdrop-blur-xl rounded-[32px] shadow-[0_0_60px_rgba(99,102,241,0.35)] p-5 border border-white/10 relative overflow-hidden">
              
              {/* Efeito de brilho por cima */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

              {/* Imagem principal */}
              <img
                src={imagemCarona} // imagem importada
                alt="Carona universitária inteligente" // acessibilidade
                className="rounded-3xl max-h-[520px] object-contain w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE BENEFÍCIOS */}
      <section id="beneficios" className="relative px-6 py-24 md:px-16 lg:px-28">
        
        {/* Título da seção */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-black">Por que usar uma carona universitária?</h2>
          <p className="text-gray-300 mt-4 text-lg">Nosso objetivo é facilitar a vida dos estudantes.</p>
        </div>

        {/* Cards de benefícios */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3">Economia</h3>
            <p className="text-gray-300">Divida gastos de combustível e reduza custos.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl text-center">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold mb-3">Praticidade</h3>
            <p className="text-gray-300">Encontre colegas com rotas parecidas.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl text-center">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-3">Sustentabilidade</h3>
            <p className="text-gray-300">Menos carros = menos poluição.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <div className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Mensagem final */}
          <h2 className="text-4xl font-black text-center">
            Clique no botão acima e participe da pesquisa 🚀
          </h2>

          {/* Texto de incentivo */}
          <p className="text-gray-300 mt-4">
            Leva menos de 1 minuto e ajuda a construir uma solução real para estudantes.
          </p>
        </div>
      </div>

    </div>
  );
}
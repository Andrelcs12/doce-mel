import { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { BsList, BsX } from "react-icons/bs"; // Importando o ícone de lista e o ícone de fechar
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./img/logo.jpeg"; // Importando a logo
import brilhanteImg from "./img/Brilhante.jpeg"; // Importando a imagem Brilhante.jpeg
import cadernoAzulImg from "./img/cadernoAzul.jpeg"; // Importando a imagem cadernoAzul
import cadernoBonitoImg from "./img/CadernoBonito.jpeg"; // Importando a imagem CadernoBonito
import cadernosImg from "./img/Cadernos.jpeg"; // Importando a imagem Cadernos
import faculdadeImg from "./img/Faculdade.jpeg"; // Importando a imagem Faculdade
import infantilImg from "./img/Infantil.jpeg"; // Importando a imagem Infantil
import narutoImg from "./img/Naruto.jpeg"; // Importando a imagem Naruto
import personalizadoImg from "./img/Personalizado.jpeg"; // Importando a imagem Personalizado
import saboneteRoxoImg from "./img/saboneteRoxo.jpeg"; // Importando a imagem saboneteRoxo
import azulFloridoImg from "./img/AzulFlorido.jpeg"; // Importando a imagem AzulFlorido
import floridoImg from "./img/Florido.jpeg"; // Importando a imagem Florido
import gatinhaImg from "./img/Gatinha.jpeg"; // Importando a imagem Gatinha
import iniciaisImg from "./img/Iniciais.jpeg"; // Importando a imagem Iniciais
import saboneteVermelhoImg from "./img/SaboneteVermelho.jpeg"; // Importando a imagem SaboneteVermelho

const App = () => {
  const [showMore, setShowMore] = useState(false);

  const products = [
    { id: 5, name: "Caixinha Personalizada", description: "Com o seu toque pessoal.", image: personalizadoImg },
    { id: 13, name: "Brilhante", description: "Brilho radiante.", image: brilhanteImg },
    { id: 16, name: "Cadernos", description: "Coleção completa.", image: cadernosImg },
    
    { id: 15, name: "Caderno Bonito", description: "Estilo e praticidade.", image: cadernoBonitoImg },
    { id: 14, name: "Caderno Azul", description: "Para suas anotações.", image: cadernoAzulImg },
    { id: 17, name: "Faculdade", description: "Para seu aprendizado.", image: faculdadeImg },
    { id: 18, name: "Infantil", description: "Caderno para as crianças.", image: infantilImg },
    { id: 19, name: "Naruto", description: "Para os fãs de Naruto.", image: narutoImg },
    { id: 20, name: "Sabonete Roxo", description: "Aromas suaves.", image: saboneteRoxoImg },
    { id: 21, name: "Azul Florido", description: "Caixinha azul com flores.", image: azulFloridoImg },
    { id: 24, name: "Iniciais", description: "Com as iniciais do nome. Personalize do seu jeito!", image: iniciaisImg },
   
    { id: 23, name: "Gatinha", description: "Com tema de gatinho. Você escolhe e personaliza!", image: gatinhaImg },

    { id: 25, name: "Sabonete Vermelho", description: "Com fragrância suave.", image: saboneteVermelhoImg },
    { id: 22, name: "Florido", description: "Design floral encantador.", image: floridoImg },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
<header className="bg-pink-900 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-6">
      <h1 className='text-4xl font-extrabold text-white'>
        Ateliê Doce Mel
      </h1>
    </div>
    {/* Menu de navegação visível em telas grandes */}
    <div className={`hidden md:flex gap-4`}>
      <a href="#about" className="hover:text-pink-300 text-2xl">
        Sobre
      </a>
      <a href="#products" className="hover:text-pink-300 text-2xl">
        Produtos
      </a>
      <a href="#contact" className="hover:text-pink-300 text-2xl">
        Contato
      </a>
    </div>
    {/* Botão de Toggle visível em telas pequenas */}
    <button
      className="md:hidden bg-black text-white rounded-full p-3"
      onClick={toggleSidebar}
    >
      <BsList className="text-2xl" />
    </button>
  </div>
</header>

{/* Sidebar Menu */}
<nav
  className={`${
    isSidebarOpen ? "translate-x-0" : "translate-x-full"
  } fixed right-0 top-0 bottom-0 bg-pink-900 text-white z-50 pt-16 transition-transform duration-500 md:hidden w-2/3`}
>
  {/* Fechar Sidebar */}
  <button
    onClick={toggleSidebar}
    className="absolute top-4 right-4 text-white text-3xl"
  >
    <BsX />
  </button>

  <div className="flex flex-col items-center space-y-6">
    <a href="#about" className="hover:text-pink-300 text-2xl">
      Sobre
    </a>
    <a href="#products" className="hover:text-pink-300 text-2xl">
      Produtos
    </a>
    <a href="#contact" className="hover:text-pink-300 text-2xl">
      Contato
    </a>
  </div>
</nav>



      {/* Hero Section */}
      <section
        id="about"
        className="relative bg-gradient-to-b  from-pink-200 via-pink-100 to-white pt-28 pb-12 px-8"
      >
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center transition-all duration-500">
          {/* Text Section */}
<div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
  <h2 className="text-5xl font-extrabold text-pink-900 mb-6 mt-4">
    Bem-vindo ao <span className="text-pink-700">Ateliê Doce Mel!</span>
  </h2>
  <p className="mt-6 text-lg text-gray-700 mb-6">
    No Ateliê Doce Mel, você escolhe e personaliza cada detalhe! Caixinhas e produtos feitos com carinho, perfeitos para todas as ocasiões. Personalize o seu de acordo com o seu estilo e preferências!
  </p>
  <p className="mt-2 text-lg text-gray-600 mb-8">
    Explore a nossa coleção e crie o presente perfeito para quem você ama!
  </p>
  <a href="#products" className="mt-8 bg-pink-700 text-white py-3 px-6 rounded-lg hover:bg-pink-900 transition-all">
    Ver Produtos
  </a>
</div>

          
          <div
            className="lg:w-1/2 flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            <img src={logo} alt="Logo Ateliê Doce Mel"
              className="rounded-full shadow-lg sm:h-80 lg:h-96 transform transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white  px-8">
        <h2 className="text-3xl font-bold text-pink-900 text-center" data-aos="fade-up">
          Nossos Produtos
        </h2>
        <div className="mt-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showMore ? products : products.slice(0, 3)).map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center border rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
            >
              <div className="w-full aspect-w-1 aspect-h-1">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-md" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-pink-700 text-center">
                {product.name}
              </h3>
              <p className="mt-2 text-center text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-900 transition-colors"
          >
            {showMore ? "Ver Menos" : "Ver Mais"}
          </button>
        </div>
      </section>

    {/* Contact Section */}
<section id="contact" className="bg-pink-900 text-white py-16 px-8 mt-8" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center mb-12 text-white" data-aos="zoom-in">
    Entre em Contato
  </h2>

  {/* Redes Sociais */}
  <div className="flex justify-center space-x-8 mb-12">
    <a
      href="https://instagram.com/ateliedocemel2"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-125 hover:text-pink-500"
      data-aos="zoom-in"
    >
      <FaInstagram className="text-5xl text-pink-300 hover:text-pink-500 transition-all" />
    </a>
    <a
      href="https://wa.me/your-phone-number"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-125 hover:text-pink-500"
      data-aos="zoom-in"
    >
      <FaWhatsapp className="text-5xl text-pink-300 hover:text-pink-500 transition-all" />
    </a>
    <a
      href="tel:+123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-125 hover:text-pink-500"
      data-aos="zoom-in"
    >
      <FaPhone className="text-5xl text-pink-300 hover:text-pink-500 transition-all" />
    </a>
    {/* Icone de Email */}
    <a
      href="mailto:apglu.26@gmail.com"
      className="transition-transform transform hover:scale-125 hover:text-pink-500"
      data-aos="zoom-in"
    >
      <FaEnvelope className="text-5xl text-pink-300 hover:text-pink-500 transition-all" />
    </a>
  </div>

  {/* Mensagem de Solicitação */}
  <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105" data-aos="fade-up">
    <h3 className="text-2xl font-bold mb-6 text-center text-pink-900">Ou envie uma mensagem por e-mail</h3>
    <p className="text-center text-lg text-gray-700">
      Para enviar uma mensagem, clique no ícone de e-mail ou envie para{" "}
      <a href="mailto:apglu.26@gmail.com" className="text-pink-500 hover:text-pink-700 transition-colors">
        apglu.26@gmail.com
      </a>
    </p>
  </div>
</section>

{/* Footer */}
<footer className="bg-pink-900 text-white " >
  <div className="container mx-auto text-center">
    <p className="text-1xl pb-2 text-white">
      &copy; 2024 Ateliê Doce Mel. Todos os direitos reservados.
    </p>
  </div>
</footer>


    </div>
  );
};

export default App;

import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Contato', href: '#' },
  ]

  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'João Silva',
    data: '2025-08-15',
    dataFormatada: '15 de agosto de 2025',
    conteudo: [
      'Eu visitei as belíssimas praias do Nordeste brasileiro no verão passado e foi incrível! As águas cristalinas, as dunas de areia e a cultura local me impressionaram profundamente. Mal posso esperar para voltar!',
      'Se você está planejando uma viagem para o Nordeste, não deixe de visitar Jericoacoara, Canoa Quebrada e Porto de Galinhas. Cada lugar tem seu charme único e oferece experiências inesquecíveis.',
    ],
    imagem: {
      src: 'https://imgs.search.brave.com/JzfFY7SHTqaQVvUplrRwdJ5Kvpg6SsknUY2oFCOCRcI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbGF1/ZGlhLmFicmlsLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9tZWxo/b3Jlcy1wcmFpYXMt/ZG8tbm9yZGVzdGUt/YmFjM2FkYS1kby1z/YW5jaG8tcGUuanBn/P3F1YWxpdHk9NzAm/c3RyaXA9aW5mbyZ3/PTEwMjQmY3JvcD0x',
      alt: 'Foto de uma praia do Nordeste',
      legenda: 'Praia do Nordeste - Foto por João Silva',
    },
  }

  const relatedPosts = [
    { label: 'Roteiro de 7 dias pelo Nordeste', href: '#' },
    { label: 'Melhores restaurantes à beira-mar', href: '#' },
    { label: 'Dicas para aproveitar as praias com crianças', href: '#' },
  ]

  return (
    <div className="layout">
      <Header titulo="Meu Blog de Viagens">
        <Navigation links={navLinks} />
      </Header>
      <main className="main">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          dataFormatada={post.dataFormatada}
          conteudo={post.conteudo}
          imagem={post.imagem}
        />
      </main>
      <Sidebar posts={relatedPosts} />
      <Footer ano={2025} blogNome="Meu Blog de Viagens" />
    </div>
  )
}

export default App

function Footer({ ano, blogNome }) {
  return (
    <footer className="footer">
      <p>&copy; {ano} {blogNome}. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer

function Article({ titulo, autor, data, dataFormatada, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p className="article-meta">
        Por <strong>{autor}</strong> &mdash;{' '}
        <time dateTime={data}>{dataFormatada}</time>
      </p>
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
      {imagem && (
        <figure>
          <img src={imagem.src} alt={imagem.alt} />
          <figcaption>{imagem.legenda}</figcaption>
        </figure>
      )}
    </article>
  )
}

export default Article

function Sidebar({ posts }) {
  return (
    <aside className="sidebar">
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href={post.href}>{post.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar

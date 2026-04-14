function Navigation({ links }) {
  return (
    <nav>
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

const Navbar = () => {
    return (
        <nav>
  <div className="nav__logo">
    <a href="#">
      <img src="../public/logo.png" alt="logo" />
    </a>
  </div>
  <ul className="nav__links">
    <li className="link">
      <a href="#">Inicio</a>
            </li>
    <li className="link">
      <a href="#">Programas</a>
    </li>
    <li className="link">
      <a href="#">Servicios</a>
    </li>
    <li className="link">
      <a href="#">Nosotros</a>
    </li>
    <li className="link">
      <a href="#">Comunidad</a>
    </li>
  </ul>
  <button className="btn">Únete ahora</button>
</nav>

    )
}

export default Navbar
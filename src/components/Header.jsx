const Header = () => {
    return (
        <header className="section__container header__container">
  <div className="header__content">
    <span className="bg__blur" />
    <span className="bg__blur header__blur" />
    <h4>
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          EL MEJOR FITNESS DE LA CIUDAD
        </font>
      </font>
    </h4>
    <h1>
      <span>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>HAZ QUE</font>
        </font>
      </span>
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          {" "}
          TU CUERPO ESTÉ EN FORMA
        </font>
      </font>
    </h1>
    <p>
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          Libera tu potencial y emprende un viaje hacia una versión más fuerte,
          en forma y segura de ti misma. ¡Regístrate en 'Make Your Body Shape'
          ahora y sé testigo de la increíble transformación de la que es capaz
          tu cuerpo!
        </font>
      </font>
    </p>
    <button className="btn">
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>Empezar</font>
      </font>
    </button>
  </div>
  <div className="header__image">
    <img src="../public/header2.png" alt="encabezamiento" />
  </div>
</header>

    )
} 
export default Header 
const About = () => {
    return (
        <section className="section__container join__container">
  <h2 className="section__header">
    <font style={{ verticalAlign: "inherit" }}>
      <font style={{ verticalAlign: "inherit" }}>
        ¿POR QUÉ UNIRSE A NOSOTROS?
      </font>
    </font>
  </h2>
  <p className="section__subheader">
    <font style={{ verticalAlign: "inherit" }}>
      <font style={{ verticalAlign: "inherit" }}>
        Nuestra diversa base de miembros crea un ambiente amistoso y de apoyo,
        donde puedes hacer amigos y mantenerte motivado.
      </font>
    </font>
  </p>
  <div className="join__image">
    <img src="/join.jpeg" alt="Unirse" />
    <div className="join__grid">
      <div className="join__card">
        <span>
          <i className="ri-user-star-fill" />
        </span>
        <div className="join__card__content">
          <h4>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Entrenador personal
              </font>
            </font>
          </h4>
          <p>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Libera tu potencial con nuestros entrenadores personales
                expertos.
              </font>
            </font>
          </p>
        </div>
      </div>
      <div className="join__card">
        <span>
          <i className="ri-vidicon-fill" />
        </span>
        <div className="join__card__content">
          <h4>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Sesiones de práctica
              </font>
            </font>
          </h4>
          <p>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Mejora tu estado físico con sesiones de práctica.
              </font>
            </font>
          </p>
        </div>
      </div>
      <div className="join__card">
        <span>
          <i className="ri-building-line" />
        </span>
        <div className="join__card__content">
          <h4>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Buena gestión</font>
            </font>
          </h4>
          <p>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Gestión de apoyo para su éxito fitness.
              </font>
            </font>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default About
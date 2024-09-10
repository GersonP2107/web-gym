const Feedback = () => {
    return (
        <div className="section__container review__container">
  <span>
    <i className="ri-double-quotes-r" />
  </span>
  <div className="review__content">
    <h4>
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>REVISIÓN DE MIEMBROS</font>
      </font>
    </h4>
    <p>
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          Lo que realmente distingue a este gimnasio es su equipo de
          entrenadores expertos. Los entrenadores son expertos, accesibles y
          realmente se comprometen a ayudar a los miembros a lograr sus
          objetivos de acondicionamiento físico. Se toman el tiempo para
          comprender las necesidades individuales y crear planes de
          entrenamiento personalizados, lo que garantiza los máximos resultados
          y la máxima seguridad.
        </font>
      </font>
    </p>
    <div className="review__rating">
      <span>
        <i className="ri-star-fill" />
      </span>
      <span>
        <i className="ri-star-fill" />
      </span>
      <span>
        <i className="ri-star-fill" />
      </span>
      <span>
        <i className="ri-star-fill" />
      </span>
      <span>
        <i className="ri-star-half-fill" />
      </span>
    </div>
    <div className="review__footer">
      <div className="review__member">
        <img src="../public/member.webp" alt="miembro" />
        <div className="review__member__details">
          <h4>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Stiven Martinez</font>
            </font>
          </h4>
          <p>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Desarrollador de software
              </font>
            </font>
          </p>
        </div>
      </div>
      <div className="review__nav">
        <span>
          <i className="ri-arrow-left-line" />
        </span>
        <span>
          <i className="ri-arrow-right-line" />
        </span>
      </div>
    </div>
  </div>
</div>

    )
}

export default Feedback
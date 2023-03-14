const About = () => {
    return <div>
        <section id="AboutMe" className="margint">
      <div className="container bg-secondary">
        <div className="row-align-items-center">
          <div className="col-md order-lg-7 text-white">
            <div className="p-5">
              <h2 className="display-4">About me!</h2>
              <p className="card-text"> 
                
                    I've always been drawn to both the creative and analytical side of development, I'm so thankful to be able to do both with the foundation I built during bootcamp.
                    <br />
                    <br />
                  I'm excited to make the leap and continue refining my skills with the right company. I'm now looking for a junior dev position to finally kick start my career and learn among professionals.
                
                </p>
                <a href={require("../assets/Kalpana_SoftwareEngineer.pdf")} download="Download Resume" className="btn btn-outline-light">
                <i className="fa-solid  fa-download"></i>
                Download my resume
              </a>
            </div>
        </div>
      </div>
      </div>

    </section>
    </div>
}

export default About;
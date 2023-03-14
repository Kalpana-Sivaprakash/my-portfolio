

const Project = () => {
    return <div>
        <section className="container margint" id="work">
    <div className="row d-flex justify-content-around mt-8">
        <h1 className="my-4">My Work</h1>
    </div>

    <div className="row justify-content-between text-center mt-8">
      <p className="jumbotron"> Currently I'm a learner in bootcamp course and learning the front end technolgies such as HTML5, CSS, Javascript and React.js 
        to make interactive and user-friendly web applications with resposive designs. Following are the few responsive designs placed 
        in my github. </p>
    </div>
    <div className="row justify-content-between text-center mt-8">
      <div className="col-lg-5 mx-auto mb-4">
        <div className="card">
          <img src= {require('../images/keyboard-black.png')} alt="keyboard-work" className="card-img-top"/>
          <div className="card-body">
            <h4>Pre-work study guide</h4>
            <p className="card-text"> This Prework Study Guide was created for boot camp students who were going through the Prework. 
              It contains notes on HTML, CSS, Git, and JavaScript.</p>
          </div>
          <div className="card-footer">
            <a href="https://github.com/Kalpana-Sivaprakash/prework-study-guide" className="btn btn-primary" target="_blank">Find Out More!</a>
          </div>
        </div>
      </div>

      {/* <!-- project-2 --> */}
      <div className="col-lg-5 mx-auto mb-4">
        <div className="card">
          <img src={require('../images/computer-macro-light.jpg')} alt="keyboard-macro" className="card-img-top" />
          <div className="card-body">
            <h4>Horiseon</h4>
            <p className="card-text"> This page is responsive by refactoring the code. 
              It is made with HTML and CSS to give the page more responsive to the users even if it is viewed from different size of screen. 
              This page is designed with semantic HTML elements for structuring.
              Have used the overflow attribute in CSS to make the respective section responsive. 
              Have used the max-width attribute to show the image as more responsive.</p>
          </div>
          <div className="card-footer">
            <a href="https://github.com/Kalpana-Sivaprakash/Horiseon" target="_blank" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
        
      {/* <!-- project-3 --> */}
      <div className="col-lg-5 mx-auto mb-4">
        <div className="card">
          <img src={require('../images/keyboard-working.jpeg')} alt="keyboard-working" className="card-img-top" />
          <div className="card-body">
            <h4>Portfolio</h4>
            <p className="card-text"> 
              This is Portfolio website creation with the basic HTML and CSS. Have used media queries to set the screen or web page as responsive.
            </p>
          </div>
          <div className="card-footer">
            <a href="https://github.com/Kalpana-Sivaprakash/Portfolio" target="_blank" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
       
      {/* <!-- project-4 --> */}
      <div className="col-lg-5 mx-auto mb-4">
        <div className="card">
          <img  className="card-img-top" src= {require('../images/kbd-coding.jpg')}alt="keyboard-coding" />
          <div className="card-body">
            <h4>Bootstrap-portfolio</h4>
            <p className="card-text"> 
              This is responsive portfolio website creation with the HTML, CSS and Bootstrap. 
              Bootstrap framework has been used to minimise the css and media queries code to make the responsive web pages.
            </p>
            </div>
          <div className="card-footer">
            <a href="https://github.com/Kalpana-Sivaprakash/Bootstrap-Portfolio"  target="_blank" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
        
    </div>

</section>
    </div>
}

export default Project;

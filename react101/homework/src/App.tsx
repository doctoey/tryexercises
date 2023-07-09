import React from "react";

function App() {
  const image =
    "https://pbs.twimg.com/media/Fz9_f8YaUAAYevV?format=jpg&name=360x360";

  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-light">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-start bg-dark-orange p-4 rounded">
        <img
          src={image}
          alt="Profile"
          className="w-48 h-48 object-cover rounded-circle border-4 border-light mb-4 mb-md-0 me-md-4"
        />
        <div>
          <h2 className="h3 text-light font-weight-bold mb-3">
            My name is doctoey
          </h2>
          <div className="mb-4">
            <h5 className="mb-2">Discord</h5>
            <p className="text-info mb-0">doctoey</p>
          </div>
          <div className="mb-4">
            <h5 className="mb-2">Github</h5>
            <a
              href="https://github.com/doctoey"
              className="text-info mb-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/doctoey
            </a>
          </div>
          <div className="mb-4">
            <h5 className="mb-2">About me</h5>
            <p className="mb-0">
              I have decided to switch my career into the tech industry.
            </p>
          </div>
          <div>
            <h5 className="mb-2">Contact:</h5>
            <a href="mailto:doctoey@odds.team" className="text-info mb-0">
              doctoey@odds.team
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/cheewathun/"
              className="text-info mb-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/cheewathun/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

import React from "react";

const OurServices = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container-fluid">
          <div className="row text-center">
            {/* Card 1 */}
            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-6 col-xxl-2 col-12">
              <div className="card mb-2">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="./images/img2.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd card */}

            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-6 col-xxl-2 col-12">
              <div className="card mb-2">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="./images/img2.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mx-auto my-5">
              <button
                type="button"
                className="btn btn-outline-info"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="More Services"
              >
                CheckMore
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;

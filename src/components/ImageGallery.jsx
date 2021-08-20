import React from "react";

const ImageGallery = () => {
  return (
    <>
      <section className="main_heading my-5 bg-light my-5">
        <div className="text-center">
          <h1 className="display-4">Gallery</h1>
          <hr className="w-25 mx-auto" />
        </div>
        {/* <!-- 1st row --> */}
        <div className="container imgGallery">
          <div className="row gy-3 gx-3">
            <div className="col-md-4 col-10 mx-auto">
              <figure>
                <img
                  src="./images/img3.jpg"
                  className="img-fluid"
                  alt="image Gallery"
                />
              </figure>
            </div>

            <div className="col-md-4 col-10 mx-auto">
              <figure>
                <img
                  src="./images/img2.jpg"
                  className="img-fluid"
                  alt="image Gallery"
                />
              </figure>
            </div>
            <div className="col-md-4 col-10 mx-auto">
              <figure>
                <img
                  src="./images/img2.jpg"
                  className="img-fluid"
                  alt="image Gallery"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* <!-- 2nd row --> */}
        <div className="container imgGallery">
          <div className="row gy-2 gx-3">
            <div className="col-md-4 col-10 mx-auto">
              <figure>
                <img
                  src="./images/img3.jpg"
                  className="img-fluid"
                  alt="image Gallery"
                />
              </figure>
            </div>

            <div className="col-md-4 col-10 mx-auto">
              <figure>
                <img
                  src="./images/img2.jpg"
                  className="img-fluid"
                  alt="image Gallery"
                />
              </figure>
            </div>
            <div className="col-md-4 col-10 mx-auto">
              <figure>
                <img
                  src="./images/img2.jpg"
                  className="img-fluid"
                  alt="image Gallery"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGallery;

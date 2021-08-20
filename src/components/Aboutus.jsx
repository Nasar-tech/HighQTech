import React from "react";

const Aboutus = () => {
  return (
    <>
      <section className="main_heading my-5">
        <div className="text-center">
          <h1 className="display-4">AboutUs</h1>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-12">
              <figure>
                <img
                  src="./images/img1.jpg"
                  className="img-fluid about_image"
                  alt="aboutimage"
                />
              </figure>
            </div>
            <div
              className="
              col-lg-6 col-md-6 col-12
              d-flex
              justify-content-center
              align-items-start
              flex-column
            "
            >
              <h1>HighQ Technologies</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ab odio sunt doloremque aliquid eveniet ut quidem eum
                laboriosam, saepe ipsam velit a deleniti nesciunt repellendus.
                Ipsa harum obcaecati eveniet.
              </p>
              <button
                type="button"
                className="btn btn-outline-info"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="MoreAboutMe"
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

export default Aboutus;

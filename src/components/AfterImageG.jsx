import React from "react";

const AfterImageG = () => {
  return (
    <>
      <div className="container">
        <section className="main_heading my-5 py-5 youtubelink">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 py-5 text-center">
                <h1>Check out our youtube channel</h1>
                <p>Never giveup ....!!!</p>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="youtubelink"
                >
                  Check Out
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AfterImageG;

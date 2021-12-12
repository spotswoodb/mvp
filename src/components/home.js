import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://cdn.shopify.com/s/files/1/0558/7937/files/Website_Special_Collections_Hero.jpg?v=1622656045"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">MVP Player Valuations</h1>
            <p>
              To me, ideas are worth nothing unless executed.
              They are just a multiplier.
              Execution is worth millions.
              - Steve Jobs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
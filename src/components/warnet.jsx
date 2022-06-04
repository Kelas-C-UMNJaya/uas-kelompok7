import React from "react";

function warnet ({warnet, makanIncrease, goKampus, goMall, goHome}) {

    return (
      <div id="options" className="d-flex mt-4 gap-4 justify-content-center">
        <div className="lokasi">
          <div className="col-6 mb-3">
          <h3 className="tittleBtn">Lokasi:</h3>
            <button className="btn color" onClick={goHome}>
              Rumah
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={goKampus}>
              Kampus
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={goMall}>
              Mall
            </button>
          </div>
        </div>
        <right>
        <div className="action">
          <div className="col-6 mb-3">
          <h3 className="tittleBtn">Aktivitas:</h3>
            <button className="btn color" onClick={warnet}>
              Main
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={makanIncrease}>
              Makan
            </button>
          </div>
        </div>
        </right>
      </div>
    );
}

export default warnet;

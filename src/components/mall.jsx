import React from "react";

function mall ({restoran, arcade, hangout, bioskop, goKampus, goWarnet, goHome}) {
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
            <button className="btn color" onClick={goWarnet}>
              Warnet
            </button>
          </div>
        </div>
        <right>
        <div className="action">
          <div className="col-6 mb-3">
          <h3 className="tittleBtn">Aktivitas:</h3>
            <button className="btn color" onClick={bioskop}>
              Bioskop
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={arcade}>
              Arcade
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={hangout}>
              Hangout
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={restoran}>
              Restoran
            </button>
          </div>
        </div>
        </right>
      </div>
    );
}

export default mall;

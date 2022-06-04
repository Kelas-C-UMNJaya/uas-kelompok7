import React from "react";

function kampus ({kuliah, perpustakaan, organisasi, goMall, goWarnet, goHome}) {

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
            <button className="btn color" onClick={goMall}>
              Mall
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
            <button className="btn color" onClick={kuliah}>
              Kuliah
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" style={{"font-size":"12px"}} onClick={perpustakaan}>
              Perpustakaan
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={organisasi}>
            Organisasi
            </button>
          </div>
        </div>
        </right>
      </div>
    );
}

export default kampus;

import React from "react";


function options ({ makanIncrease , mainIncrease ,belajarIncrease, tidurIncrease , goKampus, goMall, goWarnet}) {
  
    return (
      <div id="options" className="d-flex mt-4 gap-4 justify-content-center">
        <div className="lokasi">
          <div className="col-6 mb-3">
          <h3 className="tittleBtn">Lokasi:</h3>
            <button className="btn color" onClick={goKampus}>
              Kampus
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
            <button className="btn color" onClick={makanIncrease}>
              Makan
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={mainIncrease}>
              Main
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={tidurIncrease}>
              Tidur
            </button>
          </div>
          <div className="col-6 mb-3">
            <button className="btn color" onClick={belajarIncrease}>
              Belajar
            </button>
          </div>
        </div>
        </right>

      </div>
    );
}

export default options;

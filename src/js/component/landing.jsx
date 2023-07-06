import React from 'react'

export const Landing = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide mx-4" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://image.yachtcharterfleet.com/w1450/h623/qh/ca/kd7623185/review/overview/637168.jpg" className="d-block w-100" alt="..." style={{ width: "auto", height: "450px"}}/>
                </div>
                {/* <div className="carousel-item">
                    <img src="https://image.yachtcharterfleet.com/w1450/h623/qh/ca/kd7623185/review/overview/637168.jpg" className="d-block w-100" alt="..." style={{ width: "auto", height: "450px"}}/>
                </div>
                <div className="carousel-item">
                    <img src="https://mcdn.wallpapersafari.com/medium/28/19/GXVAZL.jpg" className="d-block w-100" alt="..." style={{ width: "auto", height: "450px"}}/>
                </div> */}
            </div>
        </div>
    );
};
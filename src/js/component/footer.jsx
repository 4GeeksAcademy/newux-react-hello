import React from 'react'

export const Footer = () => {
    return (
        <div className="container-expand-lg my-5 mb-0">
            <footer className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#009FB5" }}>
                <div className="container p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Island Escape Tours
                                </h6>
                                <p>
                                    Cruise the cays or the sandy banks. Deep drop with our experienced crew or simple lounge with family and friends.
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a className="text-white">Center Consoles</a>
                                </p>
                                <p>
                                    <a className="text-white">Sail Boats</a>
                                </p>
                                <p>
                                    <a className="text-white">Catamarans</a>
                                </p>
                                <p>
                                    <a className="text-white">Yachts</a>
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none" />
                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Aventura, FL 33126, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> captain@ietours.com</p>
                                <p><i className="fas fa-phone mr-3"></i> 305 555 8888 </p>
                                <p><i className="fas fa-print mr-3"></i> 305 555 7777</p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                <a
                                    className="btn btn-dark btn-floating m-1"
                                    style={{ backgroundColor: "#000000" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-facebook-f"></i
                                ></a>

                                <a
                                    className="btn btn-dark btn-floating m-1"
                                    style={{ backgroundColor: "#000000" }}
                                    href="#!"
                                    role="button"><i className="fab fa-twitter"></i></a>

                                <a
                                    className="btn btn-dark btn-floating m-1"
                                    style={{ backgroundColor: "#000000" }}
                                    href="#!"
                                    role="button"><i className="fab fa-google"></i></a>

                                <a
                                    className="btn btn-dark btn-floating m-1"
                                    style={{ backgroundColor: "#000000" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-instagram"></i></a>
                                <a
                                    className="btn btn-dark btn-floating m-1"
                                    style={{ backgroundColor: "#000000" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-linkedin-in"></i></a>
                                <a
                                    className="btn btn-dark btn-floating m-1"
                                    style={{ backgroundColor: "#000000" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright: Island Escape Tours
                    {/* <a className="text-white"> Island Escape Tours </a> */}
                </div>
            </footer>
        </div>
    );
};


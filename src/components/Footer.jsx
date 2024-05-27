import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="foot-data">
                                <div className="logo-img">
                                    <img src="https://umea.qodeinteractive.com/wp-content/uploads/2021/04/umea-footer-x2.png" alt="" />
                                </div>
                                <div className="foot-info">
                                    <p>Welcome to a place of refinement and <br /> beauty. This is Umeå, a WP gem we <br /> made for all furniture stores & brands.
                                    </p>
                                    <span>
                                        FB. TW. IN. BE. DR.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="foot-data2">
                                <h5>Studio</h5>
                            </div>
                            <div className="foot-info2">
                                <ul>
                                    <li>Visit our Store</li>
                                    <li>About Us</li>
                                    <li>Our Blog</li>
                                    <li>Craftsmanship</li>
                                    <li>Apply For a Job</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="foot-data3">
                                <h5>Shopping</h5>
                            </div>
                            <div className="foot-info3">
                                <ul>
                                    <li>Online Payments</li>
                                    <li>Gift Cards</li>
                                    <li>Return Policy</li>
                                    <li>Furniture Assembling</li>
                                    <li>Shipping Methods</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="foot-data-4">
                                <h5>Payment Methods</h5>
                            </div>
                            <div className="foot-info4">
                                <p>Select one of many supported payment providers from the list below.</p>
                            </div>
                            <div className="foot-img">
                                <img src="https://umea.qodeinteractive.com/wp-content/uploads/2021/03/footer-logo-group.png" alt="" />
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </footer>
               <h6> © 2021 Qode Interactive, All Rights Reserved</h6>
        </div>
    )
}

export default Footer;

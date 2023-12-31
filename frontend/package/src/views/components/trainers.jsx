import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import CallToAction from "../../components/call-to-action/CallToAction";
import Trainers from "./sections/trainers.jsx";

const DataTrainers = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Trainers /> 
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
    );
}

DataTrainers.propTypes = {
    classes: PropTypes.object
};

export default DataTrainers;

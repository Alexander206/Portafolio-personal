import React from "react";

const BannerImage = ({ imgProfile, imgSocial }) => {
    const socialElements = imgSocial.map((item, index) => {
        return (
            <li key={index}>
                <a href={item.url} target="_blank">
                    <img src={item.icon} alt="social icon" />
                </a>
            </li>
        );
    });

    return (
        <figure className="banner_image">
            <ul className="decoration">
                <div></div>
                <div></div>
                <div></div>
            </ul>

            <img className="picture" src={imgProfile} alt="Fotografia Jeisson Alexander" />

            <ul className="banner_social">{socialElements}</ul>
        </figure>
    );
};

export default BannerImage;
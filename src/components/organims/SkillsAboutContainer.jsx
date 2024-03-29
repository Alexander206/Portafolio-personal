// Dependences
import React from "react";
import { Link } from "react-router-dom";

// Components
import SkillsItem from "../atoms/SkillsItem";

// Resources
import imgText from "../../assets/icon/header-img.svg";

// Principal component
const SkillsAboutContainer = ({ text, imgMe, ability, images }) => {
    // Lista de componentes de habilidades blandas
    const componentSkills = ability.map((item, index) => {
        return <SkillsItem key={index} icon={item.icon} text={item.text} />;
    });

    // Lista de imagenes de tecnologías
    const componentImages = images.map((item, index) => {
        const img = new URL(`../../assets/skills/${item.img}`, import.meta.url).pathname;
        return <img key={index} className={`${item.id}_img animate__animated animate__zoomIn`} src={img} alt="Programing image" />;
    });

    return (
        <article className="about_container">
            <h2>Habilidades</h2>

            <div className="separator"></div>

            <article className="text">
                <article>
                    <h2>Sobre mi</h2>

                    <p>
                        {text[0]} <span>{text[1]}</span> {text[2]}
                    </p>

                    <article className="skills">{componentSkills}</article>

                    <Link to="/contact">
                        Contácta conmigo <img src={imgText} alt="contact img" />
                    </Link>
                </article>

                <figure className="img">
                    <img className="principal_img" src={imgMe} alt="Programing image" />

                    {componentImages}
                </figure>
            </article>
        </article>
    );
};

export default SkillsAboutContainer;

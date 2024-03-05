import { useContext } from "react";

// Styles
import "./styles.scss";

// Componets
import LoadingPage from "../../library/loadingPage";
import Nav from "../../library/nav";
import Footer from "../../library/footer";

import Skills from "./components/templates/Skills";

// Context
import GeneralContext from "../../context/GeneralContext";

// Resourses
import ilustrationMe from "../../assets/pages/home/me-ilustration.svg";
import imgArrow from "../../assets/icon/arrow-right.svg";

const About = () => {
    const { social } = useContext(GeneralContext);

    return (
        <>
            <LoadingPage />
            <Nav classPage={"header_home"} />

            <main className="main_home">
                <Skills
                    text={[
                        "Soy un apasionado desarrollador que se destaca por enfrentar desafíos en situaciones nuevas y complejas. Esta mentalidad me impulsa a buscar constantemente nuevas formas de mejorar y ampliar mis habilidades en el campo de la tecnología. Además, como",
                        "Licenciado en Diseño Tecnológico, ",
                        "poseo la capacidad de liderar equipos con eficacia, adaptándome fácilmente y comunicándome de manera asertiva.",
                    ]}
                    ability={[
                        { icon: "people-circle", text: "COMUNICACIÓN" },
                        { icon: "heart-half", text: "AUTONOMÍA" },
                        { icon: "layers", text: "ORGANIZACIÓN" },
                        { icon: "body", text: "ADAPTABILIDAD" },
                    ]}
                    images={[
                        { img: "HTML.svg", id: "html" },
                        { img: "CSS.svg", id: "css" },
                        { img: "javaScript.svg", id: "javaScript" },
                        { img: "react.svg", id: "react" },
                        { img: "node.svg", id: "node" },
                    ]}
                    imgMe={ilustrationMe}
                    arrow={imgArrow}
                    btnlink={{
                        cvUrl: social.cv,
                        text: "Hoja de vida",
                    }}
                />
            </main>

            <Footer />
        </>
    );
};

export default About;
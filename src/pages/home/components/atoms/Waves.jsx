// components
import React from "react";

// Principal component
const Waves = () => {
    return (
        <div className="container_waves">
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(213,205,192,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(213,205,192,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(213,205,192,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(213,205,192)" />
                </g>
            </svg>
        </div>
    );
};

export default Waves;
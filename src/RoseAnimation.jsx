import React from "react";
import "./RoseAnimation.css";

const RoseAnimation = () => {

    const createFloatingPetals = () => {
        return Array.from({ length: 50 }).map((_, i) => (
            <div
                key={i}
                className="floating-petal"
                style={{
                    left: `${0.1 + Math.random() * 100}vw`, // Horizontal movement based on scroll position
                    top: `${Math.random() * 100}vh`, // Random vertical position within the viewport
                    transform: `scale(${Math.random() * 0.7 + 0.8}) rotate(${Math.random() * 720}deg)`, // Random rotation for floating petals
                    width: "60px",
                    height: "30px",
                    borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                    animation: "movePetals 8s linear infinite",
                }}
            ></div>
        ));
    };

    return (
        <div>
            {createFloatingPetals()}
        </div>
    );
};

export default RoseAnimation;

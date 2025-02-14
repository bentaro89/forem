import React, { useEffect, useState } from "react";
import "./RoseAnimation.css";

const MAX_PETALS = 35;
const RoseAnimation = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        // Add a new petal every 800ms if the limit isn't reached
        const interval = setInterval(() => {
            setPetals((prevPetals) => {
                if (prevPetals.length >= MAX_PETALS) return prevPetals; // Stop adding petals if the limit is reached

                return [
                    ...prevPetals,
                    {
                        id: prevPetals.length,
                        style: {
                            left: `${0.1 + Math.random() * 100}vw`,
                            top: `-30px`, // Start from above the viewport to simulate continuous spawning
                            transform: `scale(${Math.random() * 0.7 + 0.8}) rotate(${Math.random() * 720}deg)`,
                        },
                    },
                ];
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="floating-petal"
                    style={{
                        ...petal.style,
                        width: "60px",
                        height: "30px",
                        borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                        animation: "movePetals 30s linear infinite",
                    }}
                ></div>
            ))}
        </div>
    );
};

export default RoseAnimation;

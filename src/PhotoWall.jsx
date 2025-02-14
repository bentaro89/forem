import React, { useState } from 'react';
import './PhotoWall.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic9 from './pic9.jpg';
import pic10 from './pic10.jpg';
import bestpart from './bestpart.mp3';

const PhotoWall = () => {
    const buttonStyle = {
        padding: "12px 24px",
        fontSize: "2em",
        fontWeight: "bold",
        color: "#fff",
        background: "linear-gradient(45deg, #ff4d4d, #cc0000)",
        border: "none",
        borderRadius: "30px",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        marginRight: "1em",
    };

    const hoverStyle = {
        background: "linear-gradient(45deg, #cc0000, #ff4d4d)",
        transform: "scale(1.05)",
        boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.25)",
    };
    const [finalLine, setFinalLine] = useState("");
    const [photos, setPhotos] = useState([pic1, pic2, pic3, pic4, pic5, pic6]);
    const stanzas = [
        [
            "Hi Manchun, it's your elf",
            "Click once and scroll down please :)",
        ],
        [
            "June 29th, 2024 was a day thought normal",
            "Nothing was out of the blue",
            "Yet I'm glad I woke up that morning",
            "Cause it was the day I (really) met you"
        ],
        [
            "From Kung Fu Panda",
            "To Sichuan spice",
            "I love learning more about my 亲爱的",
            "Like how you savor a watermelon slice"
        ],
        [
            "Your smile brightens my day",
            "More than basketball or Frank Ocean",
            "I get ecstatic when we play",
            "You’re the only one who can make me feel that emotion"
        ],
        [
            "Manchun, You’re truly one of a kind",
            "A sweeter soul is impossible to find",
            "In New York, more restaurant dates I have booked",
            "We can go after we wrestle; I know I’m cooked"
        ],
        [
            "Though miles apart, my thoughts stay true",
            "That I’m always thinking of you",
            "I’m glad I can finally call you mine (hopefully)",
            "May I have the honor to be your Valentine? ❤️"
        ]
    ];

    const clickedYes = () => {
        setPhotos([pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]);
        setFinalLine("Yay :)");
    }

    const clickedNo = () => {
        setPhotos([pic1, pic2, pic3, pic4, pic5, pic10]);
        setFinalLine("what why? :(");
    }

    const playAudio = () => {
        const audio = new Audio(bestpart);  // Make sure the path is correct
        audio.play();
    };

    return (
        <div className="photo-wall" >
            {
                photos.map((photo, i) => (
                    <div>
                        {
                            i < 6 &&
                            // loop through the stanzas and display each line
                            <div className='stanza-container' onClick={playAudio}>
                                {
                                    stanzas[i].map((stanza) => (
                                        <p className='stanza'>{stanza}</p>
                                    ))
                                }
                            </div>
                        }
                        {
                            i === 5 &&
                            <div className='buttons'>
                                <button
                                    style={buttonStyle}
                                    onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
                                    onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
                                    onClick={clickedYes}
                                >
                                    Yes
                                </button>
                                <button onClick={clickedNo}>
                                    no
                                </button>
                            </div>
                        }
                        {
                            i === 5 && <p className='stanza'>{finalLine}</p>

                        }
                        <img className="pic" key={i} src={photo} alt={'pic'} />
                    </div>
                ))
            }
        </div>
    );
};

export default PhotoWall;
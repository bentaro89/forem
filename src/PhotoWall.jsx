import React from 'react';
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


const PhotoWall = () => {
    const photos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
    const stanzas = [
        [
            "Hi Manchun, it's your elf"
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

    return (
        <div className="photo-wall" >
            {
                photos.map((photo, i) => (
                    <div>
                        {
                            i < 6 &&
                            // loop through the stanzas and display each line
                            <div className='stanza-container'>
                                {
                                    stanzas[i].map((stanza) => (
                                        <p className='stanza'>{stanza}</p>
                                    ))
                                }
                            </div>
                        }
                        <img className="pic" key={i} src={photo} alt={'pic'} />

                    </div>
                ))
            }
        </div>
    );
};

export default PhotoWall;
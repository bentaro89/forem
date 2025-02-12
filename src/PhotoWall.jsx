import React from 'react';
import './PhotoWall.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';

const PhotoWall = () => {
    const photos = [pic1, pic2];
    const stanzas = [
        ["I'm a little teapot",
            "Short and stout",
            "Here is my handle",
            "Here is my spout",
            "When I get all steamed up",
            "Hear me shout"],
        ["I'm a little teapot",
            "Short and stout",
            "Here is my handle",
            "Here is my spout",
            "When I get all steamed up",
            "Hear me shout"]
    ]

    return (
        <div className="photo-wall" >
            {
                photos.map((photo, i) => (
                    <div>
                        <img className="pic" key={i} src={photo} alt={'pic'} />
                        {
                            // loop through the stanzas and display each line
                            stanzas[i].map((stanza) => (
                                <p className='stanza'>{stanza}</p>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default PhotoWall;
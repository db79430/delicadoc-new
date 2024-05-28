import {Container} from "react-bootstrap";
import React from "react";
import group4583 from "./img/Group 4583.svg"
import group45832 from "./img/Group 4583 (2).svg"
import group45833 from "./img/Group 4583 (3).svg"
import group4586 from "./img/Group 4586.svg"
import group45861 from "./img/Group 4586 (1).svg"
import group45862 from "./img/Group 4586 (2).svg"
import group45863 from "./img/Group 4586 (3).svg"
import group45864 from "./img/Group 4586 (4).svg"
import group45865 from "./img/Group 4586 (5).svg"
import group45866 from "./img/Group 4586 (6).svg"
import group45867 from "./img/Group 4586 (7).svg"
import "./Prizes.css"

export const Prizes = () => {
    const images = [
        { src: group4583, caption: 'Баллы на карту лояльности от «Перекрестка»' },
        { src: group45833, caption: 'iPhone 15 Pro' },
        { src: group4586, caption: 'Сертификат на 2 000 рублей' },
        { src: group45861, caption: 'Image 6' },
        { src: group45862, caption: 'Image 7' },
        { src: group45863, caption: 'Image 8' },
        { src: group45864, caption: 'Image 9' },
        { src: group45865, caption: 'Image 10' },
        { src: group45866, caption: 'Image 10' },
        { src: group45867, caption: 'Image 10' },
        { src: group45832, caption: 'Image 3' }
    ];
    return (
        <div className="prizes-container">
                <div className="image-grid">
                    {images.map((image, index) => (
                        <div key={index} className="image-item">
                            <img className="img-prizes" src={image.src} alt={image.caption} />
                            <div className="caption">{image.caption}</div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

'use client'
import AnalogClock from 'analog-clock-react';
const ReactClock = () => {
    let options = {
        width: "250px",
        border: true,
        borderColor: "white",
        baseColor: "black",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "#d81c7a",
            minute: "#ffffff",
            hour: "#ffffff"
        }
    };

    return (
        <div>
            <AnalogClock {...options} />
        </div>
    );
};

export default ReactClock;
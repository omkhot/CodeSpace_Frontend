import { useState } from "react";

function useScreenAdujuster(containerRef){
    const [leftWidth, setLeftWidth] = useState(50); // percent width

    const handleMouseDown = (e) => {
        const startX = e.clientX;
        const startLeftWidth = leftWidth;

        const onMouseMove = (e) => {
            const containerWidth = containerRef.current.getBoundingClientRect().width;
            const newLeftWidth = ((startLeftWidth / 100) * containerWidth + (e.clientX - startX)) / containerWidth * 100;
            if (newLeftWidth > 20 && newLeftWidth < 80) {
                setLeftWidth(newLeftWidth);
            }
        };

        const onMouseUp = () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    return {
        leftWidth, 
        handleMouseDown
    };
}

export default useScreenAdujuster;
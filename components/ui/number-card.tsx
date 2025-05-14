import React from "react";
import { PatternBackground } from "./pattern-background";

interface NumberCardProps {
    number: string;
    label: string;
    backgroundColor?: string;
    vectorColor?: string;
}

const NumberCard: React.FC<NumberCardProps> = ({
    number,
    label,
    backgroundColor = "#008080",
    vectorColor = "rgba(0, 128, 128, 0.12)",
}) => {
    return (
        <div
            className="relative text-white rounded-[30px] overflow-hidden h-[340px] p-6 flex flex-col justify-between"
            style={{ backgroundColor }}
        >
            {/* Pattern as background layer */}
            <div className="absolute inset-0 z-0">
                <PatternBackground
                    spacing={100}
                    backgroundColor={backgroundColor}
                    vectorColor={vectorColor}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Number in top-left */}
                <div className="text-6xl font-bold">{number}</div>

                {/* Label at bottom-center */}
                <div className="flex justify-center mb-2">
                    <p className="text-3xl text-center font-semibold">{label}</p>
                </div>
            </div>
        </div>
    );
};

export default NumberCard;

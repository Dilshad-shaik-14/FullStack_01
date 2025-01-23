import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-orange-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            style={{ transition: "background-color 0.3s, color 0.3s, border-radius 0.3s" }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
                e.target.style.borderRadius = "15px";
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
                e.target.style.borderRadius = "10px"; 
            }}
            {...props}
        >
            {children}
        </button>
    );
}

"use client";

const HARMONIOUS_COLORS = [
    "#4C6FA5", // Soft blue
    "#6B8299", // Muted blue-gray
    "#89A5C2", // Light blue

    "#6A8D73", // Forest green
    "#8BA68F", // Sage green
    "#A5BDA6", // Light green

    "#7A6B99", // Muted purple
    "#9B89B3", // Lavender
    "#B3A5C2", // Light purple

    "#C49A3A", // Warm gold
    "#A68F6B", // Taupe
    "#B3A589", // Light tan

    "#8B3A62", // Muted wine
    "#A66B7A", // Dusty rose
    "#B38999", // Light pink

    "#5A8D8D", // Teal
    "#82996B", // Olive
    "#997A6B", // Soft terracotta
];

export const getItemColor = (id: number): string => {
    const index = (id * 17) % HARMONIOUS_COLORS.length;
    return HARMONIOUS_COLORS[index];
};


export const getAllColors = (): string[] => {
    return [...HARMONIOUS_COLORS];
};
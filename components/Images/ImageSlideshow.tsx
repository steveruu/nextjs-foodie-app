"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

import classes from "./ImageSlideshow.module.css";

const images = [
    {
        image: burgerImg,
        alt: "A delicious burger",
    },
    {
        image: curryImg,
        alt: "A delicious curry",
    },
    {
        image: pizzaImg,
        alt: "A delicious pizza",
    },
    {
        image: dumplingsImg,
        alt: "Delicious dumplings",
    },
    {
        image: macncheeseImg,
        alt: "A delicious macncheese",
    },
    {
        image: schnitzelImg,
        alt: "A delicious schnitzel",
    },
    {
        image: tomatoSaladImg,
        alt: "A delicious tomato salad",
    },
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex): any => {
                return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slideshow}>
            {
                images.map((image, index) => {
                    return (
                        <Image
                            key={index}
                            src={image.image}
                            alt={image.alt}
                            className={index === currentImageIndex ? classes.active : ''}
                        />
                    );
                })
            }
        </div>
    );
}
"use client";

import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }: { label: string, name: string }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<any>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log("file change")

        if (!file) {
            setImage(null);
            return;
        }

        const fileReader = new FileReader(); // nefunguje
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            console.log(fileReader);
            setImage(fileReader.result);
        };
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                {image ? <div className={classes.preview}><Image src={image}
                    alt="Image selected by user"
                    fill
                /></div> : null}
                <input
                    className={classes.input}
                    type="file"
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={inputRef}
                    onChange={handleFileChange}
                    onClick={() => {
                        inputRef.current?.click();
                    }}
                />
                <button className={classes.button} type="button" onClick={() => {
                    inputRef.current?.click();
                }}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
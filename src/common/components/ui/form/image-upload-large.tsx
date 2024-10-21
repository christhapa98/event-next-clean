//image upload component for large images like background images,poster etc.
"use client";
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import Image from "next/image";
import { PlusIcon } from "lucide-react";

export default function ImageUploadLarge({
    id,
    previewImage,
    onChange,
    isLoading,
    onHandleClose = () => { },
    resolutionNote,
}: Readonly<{
    id: string;
    previewImage?: string;
    onChange: (image: string | File) => void;
    isLoading?: boolean;
    onHandleClose?: () => void;
    resolutionNote?: string
}>) {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                console.error("File size exceeds 5MB. Please choose a smaller file.");
                if (fileInputRef.current) {
                    fileInputRef.current.value = ``;
                }
                setImage(null)
                return;
            }
            if (!file.type.startsWith("image/") || file.type === "image/avif") {
                console.error(
                    "Unsupported file type. Please choose an image or GIF file."
                );
                if (fileInputRef.current) {
                    fileInputRef.current.value = ``;
                }
                setImage(null)
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
            onChange(file);
        }
    };

    const clearImage = async () => {
        await onHandleClose();
        if (fileInputRef.current) {
            fileInputRef.current.value = ``;
        }
        setImage(null)
    };

    const handleEditButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    useEffect(() => {
        if (previewImage) {
            setImage(previewImage);
        }
    }, [previewImage]);

    return (
        <div className={`w-full rounded-[16px]  h-[200px] flex flex-col items-center justify-center relative overflow-hidden group border border-dashed`}>
            {isLoading && (
                <div className="absolute w-full h-[255px] bg-black opacity-50 z-10 text-white flex justify-center">
                    loading
                </div>
            )}
            {image && (
                <Image
                    priority
                    src={image}
                    alt=""
                    width={684}
                    height={255}
                    className="absolute object-contain z-5 w-full"
                />
            )}
            {!image && <UploadButton id={id} />}
            {image && (
                <div className="absolute opacity-0 inset-0 flex justify-center items-center gap-12 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                        id={id + "-btn"}
                        className="p-4 rounded-full transition ease-in-out duration-100"
                        onClick={handleEditButtonClick}
                    >
                        <Image width={20} height={20} alt="" src="/icons/edit.svg" />
                    </button>
                    <button
                        id={id + "-btn"}
                        className="p-4  rounded-full transition ease-in-out duration-100"
                        onClick={() => {
                            clearImage();
                        }}
                    >
                        <Image width={20} height={20} alt="" src="/icons/delete.svg" />
                    </button>
                </div>
            )}
            <input
                id={id}
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
            />
            <p className="text-[12px] pt-4 text-gray-50">{resolutionNote}</p>
        </div>
    );
}

const UploadButton = ({ id }: { id: string }) => {
    return (
        <div className="flex flex-col gap-[8px] items-center z-[2]">
            <button
                className="w-[72px] h-[72px] flex items-center justify-center border border-dashed rounded-full"
                onClick={() => document.getElementById(id)?.click()}
            >
                <PlusIcon />
            </button>
            <p className="text-p leading-p  font-h1  text-gray-60">Upload Image</p>
        </div>
    );
};

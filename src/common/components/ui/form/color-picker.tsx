"use client";
import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

export const primaryColor = "#4FBFA5";

export interface ColorPickerProps {
    label: string,
    onChange: any,
    value: any
}
export default function ColorPicker(props: Readonly<ColorPickerProps>) {
    const { label, onChange, value } = props;
    const [colorPicker, setColorPicker] = useState<boolean>(false);
    const [colorValue, setColorValue] = useState<any>({
        hex: primaryColor,
    });

    useEffect(() => {
        if (value) {
            setColorValue({ hex: value })
        }
    }, [value])

    const handleClose = () => {
        setColorPicker(false);
    };
    const primaryColorHandler = (e: any) => {
        setColorValue(e);
        onChange(e)
    };
    return (
        <div className="cursor-pointer w-full">
            {label && (
                <label className="flex gap-[2px] mb-[8px]">
                    <span className="text-[14px] font-semibold leading-[16.8px]">
                        {label}
                    </span>
                </label>
            )}
            <button
                type="button"
                className="flex items-center h-[48px] w-full border rounded-[4px] border-gray-20 overflow-hidden"
                onClick={() => setColorPicker(!colorPicker)}
            >
                <div
                    className={` w-[48px] h-full`}
                    style={{ backgroundColor: colorValue?.hex }}
                />
                <p className="px-[8px] text-[14px] leading-[22px] font-p-sm text-gray-40">
                    {colorValue?.hex}
                </p>
            </button>
            {colorPicker && (
                <div style={popover as any}>
                    <button style={cover as any} onClick={handleClose} />
                    <ChromePicker
                        color={colorValue}
                        onChange={primaryColorHandler}
                    />
                </div>
            )}
        </div>
    );
}

const popover = {
    position: "absolute",
    zIndex: "2",
};
const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
};

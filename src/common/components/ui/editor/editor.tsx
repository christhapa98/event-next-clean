"use client";
import React from "react";
import { Editor } from "tinymce";
import BundledEditor from "./bundledEditor";

type Props = {
    editorValues: string;
    getEditorValues: (value: string) => void;
    className?: string;
    editorRef?: React.MutableRefObject<Editor | null>;
    disabled?: boolean;
    placeholder?: string;
};

const TextEditor = ({
    editorValues,
    getEditorValues,
    className,
    editorRef,
}: Props) => {
    const ref = React.useRef<HTMLDivElement>();
    return (
        <div className={`w-full ` + className}>
            <BundledEditor
                onInit={(_evt: any, editor: any) => editorRef ? editorRef!.current = editor : ref.current = editor}
                initialValue={editorValues}
                onBlur={(val: any) => {
                    getEditorValues(editorRef?.current?.getContent()!)
                }}

                init={{
                    menubar: false,
                    statusbar: false,
                    plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                    toolbar: [
                        'fontsize fontfamily undo redo | bold italic underline strikethrough superscript subscript | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | removeformat | code | preview | forecolor backcolor | formatselect fontselect fontsizeselect | image  link | table | hr ',
                    ],
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </div>
    );
};

export default TextEditor;

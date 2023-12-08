'use client'
import React from "react";
import useDownloader from "react-use-downloader";

export default function FileDownlode() {
    const { download } = useDownloader();

    const fileUrl = "../../components/Banner/AsifAhammed.pdf";
    const filename = "AsifAhammed.pdf";

    return (
        <button onClick={() => download(fileUrl, filename)}>
            Click 
        </button>
    );
} 
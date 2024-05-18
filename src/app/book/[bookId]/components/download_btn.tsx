"use client";
import React from "react";
import classes from "./download_btn.module.css";
import { saveAs } from "file-saver";

export default function DownloadButton({
  fileLink,
  fileName,
}: {
  fileLink: string;
  fileName: string;
}) {
  const downloadHandler = async () => {
    const regex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s]/g;
    fileName = fileName.replace(regex, "").toLowerCase();
    const response = await fetch(fileLink);
    const blob = await response.blob();
    saveAs(blob, fileName);
  };
  return (
    <button className={classes["download-btn"]} onClick={downloadHandler}>
      download cover
    </button>
  );
}

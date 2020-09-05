import React, { useRef, useState, useEffect } from "react";
import FileSaver from "file-saver";

import {
  StyledFileLabel,
  StyledInput,
  StyledInformationAboutFile,
} from "./styled";
import { Link } from "react-router-dom";
export default function FileInputComponent({ type }) {
  const fileInput = useRef(null);
  const [fileInformation, setFileInformation] = useState(null);
  const onTestSaveFile = function () {
    // var blob = new Blob(["Hello, world!"], {
    //   type: "text/plain;charset=utf-8",
    // });
    // FileSaver.saveAs("https://httpbin.org/image", "image.jpg");
    // FileSaver.saveAs(
    //   "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    //   "MyCV.pdf"
    // );
    // FileSaver.saveAs(blob, "hello world.txt");
    // fetch("https://cf.bstatic.com/images/hotel/max1024x768/468/46842174.jpg")
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const file = new File([blob], "dot.png", blob);
    //     console.log(file);
    //     FileSaver.saveAs(file);
    //   });
  };
  const formatBytes = function (bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  const showFile = function (input) {
    const file = fileInput.current.files[0];
    setFileInformation({
      file,
      fileSize: formatBytes(file.size),
    });
  };

  useEffect(() => {
    console.log(fileInformation);
  }, [fileInformation]);
  return (
    <StyledFileLabel>
      <StyledInput
        ref={fileInput}
        type="file"
        name="file"
        onChange={showFile}
      />
      <StyledInformationAboutFile>
        <button onClick={onTestSaveFile}>Download</button>

        <div>
          <p>{fileInformation && fileInformation.file.name}</p>
          <span>{fileInformation && fileInformation.fileSize}</span>
          <p>{fileInformation && fileInformation.file.type.split("/")[0]}</p>
        </div>
        <div>
          <p>Download</p>
        </div>
      </StyledInformationAboutFile>
    </StyledFileLabel>
  );
}

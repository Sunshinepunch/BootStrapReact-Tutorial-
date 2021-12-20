import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
  const {getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });
}
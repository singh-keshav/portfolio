import React from "react";

interface FileUploadProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ onFileChange }: FileUploadProps) => {
  return (
    <label className="flex items-center cursor-pointer bg-gray-100 p-2 rounded border border-gray-300">
      <input
        type="file"
        onChange={onFileChange}
        className="hidden"
      />
      <span className="text-gray-700">Choose File</span>
    </label>
  );
};

export default FileUpload;

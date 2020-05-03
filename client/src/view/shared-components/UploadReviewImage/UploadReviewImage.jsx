import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useUploadImageMutation from "./useUploadImageMutation";

export const UploadReviewImage = ({ setReviewImagePath }) => {
  const [uploadReviewImage, { data }] = useUploadImageMutation();
  const onDrop = useCallback(
    ([file]) => {
      uploadReviewImage({ variables: { file } });
    },
    [uploadReviewImage]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    data && setReviewImagePath(data.uploadReviewImage);
  }, [data]);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop review image here...</p>
      ) : (
        <p>Drag and drop some review image here, or click to select image</p>
      )}
    </div>
  );
};

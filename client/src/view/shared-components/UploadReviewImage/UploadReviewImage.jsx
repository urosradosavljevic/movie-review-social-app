import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useUploadImageMutation from "./useUploadImageMutation";
import { UploadReviewImageWrapper } from "./components/UploadReviewImageWrapper";
import { PreviewImage } from "./components/PreviewImage";

export const UploadReviewImage = ({ setReviewImagePath, reviewImagePath }) => {
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
    <UploadReviewImageWrapper>
      {reviewImagePath && (
        <PreviewImage src={reviewImagePath} alt="review image" />
      )}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop review image here...</p>
        ) : (
          <p>Drag and drop some image here..</p>
        )}
      </div>
    </UploadReviewImageWrapper>
  );
};

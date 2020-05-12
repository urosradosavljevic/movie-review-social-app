import styled from "styled-components";

export const UploadReviewImageWrapper = styled.div`
  position: relative;
  border: 2px dashed #333;
  height: 100px;
  color: #000;
  font-weight: 700;
  font-size: 15px;
  text-shadow: 0 0 3px #fff, 0 0 5px #fff;
  font-family: Arial;
  border-radius: 5px;
  background: url("https://www.iconninja.com/files/163/669/195/share-up-storage-cloud-dropbox-upload-arrow-icon.png");
  background-repeat: no-repeat;
  background-position: center;

  padding: 0 10px;
  margin: 0 15px 0 15px;
  cursor: pointer;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

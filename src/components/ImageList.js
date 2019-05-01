import React from "react";
import "./ImageList.css";
const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <img alt={image.description} src={image.urls.regular} key={image.id} />
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

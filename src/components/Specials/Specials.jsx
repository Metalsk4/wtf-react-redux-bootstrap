import React from "react";
import Items from "../Items/Items";

// import images from "../../helpers/imageHelpers";
const Specials = ({
  sectionHeading,
  itemAdded,
  imageData,
  isPreview,
  history
}) => {
  return (
    <React.Fragment>
      <Items
        sectionHeading={sectionHeading}
        imageData={imageData}
        itemAdded={itemAdded}
        isPreview={isPreview}
        history={history}
      />
    </React.Fragment>
  );
};

export default Specials;

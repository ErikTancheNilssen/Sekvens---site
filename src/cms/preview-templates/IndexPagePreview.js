import React from "react";
import { PageTemplate } from "../../templates/index-page.js";
import Wrap from "../../wrap-with-provider.js";

const PagePreview = ({ entry, getAsset, widgetFor }) => {
  const image = entry.getIn(["data", "image"]);

  return (
    <Wrap
      element={
        <PageTemplate
          html={widgetFor("body") || null}
          title={entry.getIn(["data", "title"]) || ""}
          image={image ? getAsset(image).path : ""}
          pages={[]}
        />
      }
    />
  );
};

export default PagePreview;

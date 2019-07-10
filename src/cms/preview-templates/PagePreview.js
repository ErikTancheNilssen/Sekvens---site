import React from "react";
import { PageTemplate } from "../../templates/PageTemplate.js";
import Wrap from "../../wrap-with-provider.js";

const PagePreview = ({ entry, getAsset, widgetFor }) => {
  const image = entry.getIn(["data", "image"]);
  const blocks = entry.getIn(["data", "blocks"]).toJSON();
  console.log(blocks);
  return (
    <Wrap
      element={
        <PageTemplate
          html={widgetFor("body") || null}
          title={entry.getIn(["data", "title"]) || ""}
          blocks={blocks}
        />
      }
    />
  );
};

export default PagePreview;

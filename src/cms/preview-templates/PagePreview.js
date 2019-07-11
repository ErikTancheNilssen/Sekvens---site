import React from "react";
import { PageTemplate } from "../../templates/PageTemplate.js";
import Wrap from "../../wrap-with-provider.js";

const PagePreview = ({ entry, getAsset, widgetFor }) => {
  const blocks = entry.getIn(["data", "blocks"]).toJSON();
  return (
    <Wrap
      element={
        <PageTemplate
          html={widgetFor("body") || null}
          title={entry.getIn(["data", "title"]) || ""}
          introduction={entry.getIn(["data", "introduction"]) || ""}
          blocks={blocks}
        />
      }
    />
  );
};
export default PagePreview;

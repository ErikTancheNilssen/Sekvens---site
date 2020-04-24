import CMS from "netlify-cms-app";
import React from "react";
import { StyleSheetManager } from "styled-components";

import PagePreview from "./preview-templates/PagePreview";

class CSSInjector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeRef: ""
    };
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName("iframe")[0];
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem });
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </div>
    );
  }
}

CMS.registerPreviewTemplate("pages", props => (
  <CSSInjector>
    <PagePreview {...props} />
  </CSSInjector>
));

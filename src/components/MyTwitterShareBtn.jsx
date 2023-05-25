import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

function MyTwitterShareBtn({ data }) {
  return (
    <TwitterShareButton url=" " title={`${data.quote} - ${data.author}`}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  );
}

export default MyTwitterShareBtn;

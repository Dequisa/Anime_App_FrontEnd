import React from "react";
import PropTypes from "prop-types";
import "../CSS/YouTube.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    {embedId && (
      <iframe
        width="560"
        height="350"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    )}
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

import React, { useEffect, useRef } from "react";

export default function BackgroundVideo({ src }) {
  const videoRef = useRef(null);

  
  useEffect(() => {
    if (!videoRef.current) return;
    if (!src) return;

    videoRef.current.load();
    const p = videoRef.current.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [src]);

  return (
    <div className="app-bg" aria-hidden="true">
      {src ? (
        <video
          ref={videoRef}
          className="app-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
         
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}

      <div className="app-tint" />
      {/* <div className="app-vignette" />
      <div className="app-grain" /> */}
    </div>
  );
}

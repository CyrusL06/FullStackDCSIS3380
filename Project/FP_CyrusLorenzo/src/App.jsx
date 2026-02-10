import { useState } from "react";
import "./App.css";
import BackgroundVideo from "./components/backgroundVideo";
import Header from "./components/header";
import Footer from "./components/footer";
import { backgroundVid } from "./contents";

const App = () => {
  // const videoSrc = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  // How to make it random....
  //  Have a button that changes this as well using start
  //
  
  const [videoSrc, setVideoSrc] = useState(backgroundVid[0].vid);

  const changeVideo = () => {
    setVideoSrc((prev) =>
      prev === backgroundVid[0].vid ? backgroundVid[1].vid : backgroundVid[0].vid,
    );
  };

  

  const title = "Expense Tracker"
  const subTitle = "Track expenses, keep spending honest, and build better habits without the clutter."
  

  return (
    <div className="app-shell">
      <BackgroundVideo src={videoSrc} />

      <div className="app-content flex min-h-screen flex-col">
        <div className="flex-1">
          <Header title={title} sub={subTitle} onPressed={changeVideo} />
        </div>
        <Footer />
      </div>

    

  


    </div>
  );
};

export default App;

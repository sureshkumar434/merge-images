import { useState } from "react";
import img1 from "./static/images/download (1).jpeg";
import img2 from "./static/images/download (2).jpeg";
import img3 from "./static/images/download.jpeg";
import mergeImages from "merge-images";
import { ImageWithTitle } from "./atom/ImageWithTitle";

function App() {
  const [img, setImg] = useState();
  mergeImages([{src:img1}, {src:img2, opacity:0.4}, {src:img3, opacity:0.5}], {
  }).then((b64) => setImg(b64));
  return (
    <>
     <ImageWithTitle images={[img1,img2, img3]} title="Input images"/>
      <br/>
      <br/>
      <ImageWithTitle images={[img]} title="Output image"/>
    </>
  );
}

export default App;

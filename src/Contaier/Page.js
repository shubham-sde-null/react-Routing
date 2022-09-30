import React from "react";
import { useParams } from "react-router-dom";
function Page() {
  const { color } = useParams();
  return (
    <div
      style={{ backgroundColor: color, width: "100vw", height: "100vh" }}
    ></div>
  );
}

export default Page;

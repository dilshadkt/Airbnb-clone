import React, { useContext } from "react";
import MyContext from "../../../components/contex/Mycontex";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FinishUp = () => {
  const navigate = useNavigate();
  const { formData } = useContext(MyContext);

  const PostData = () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    for (let i = 0; i < formData.image.length; i++) {
      data.append("photos", formData.image[i]);
    }

    axios
      .post("/listings/become-a-host", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex mx-[15%] mt-[5%] mb-4  ">
      <div className="flex-1 flex flex-col items-start justify-center">
        <h4 className="text-lg font-medium">Step 3</h4>
        <h1 className="my-6 text-5xl font-medium">Finish up and publish</h1>
        <p className="text-lg">
          Finally, you’ll choose if you'd like to start with an experienced
          guest, then you'll set your nightly price. Answer a few quick
          questions and publish when you're ready.
        </p>
      </div>
      <div className="flex-1">
        <video autoPlay muted>
          <source
            src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between px-10 h-[80px] items-center">
        <div onClick={() => navigate(-1)} className="underline font-medium">
          back
        </div>
        <div
          onClick={() => PostData()}
          className="bg-rose-600 p-3 rounded-lg font-medium text-white"
        >
          Finish
        </div>
      </div>
    </div>
  );
};

export default FinishUp;

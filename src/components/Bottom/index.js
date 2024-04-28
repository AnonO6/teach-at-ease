import cx from "classnames";
import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div className="absolute flex justify-between bottom-5 left-0 right-0 mx-auto w-300">
      {muted ? (
        <MicOff
          className={cx("p-4 rounded-full text-black cursor-pointer bg-secondary", {
            "bg-buttonPrimary": muted,
          })}
          size={55}
          onClick={toggleAudio}
        />
      ) : (
        <Mic
          className="p-4 rounded-full text-black cursor-pointer bg-secondary"
          size={55}
          onClick={toggleAudio}
        />
      )}
      {playing ? (
        <Video
          className="p-4 rounded-full text-black cursor-pointer bg-secondary"
          size={55}
          onClick={toggleVideo}
        />
      ) : (
        <VideoOff
          className={cx("p-4 rounded-full text-black cursor-pointer bg-secondary", {
            "bg-buttonPrimary": !playing,
          })}
          size={55}
          onClick={toggleVideo}
        />
      )}
      <PhoneOff
        size={55}
        className="p-4 rounded-full text-black cursor-pointer bg-secondary"
        onClick={leaveRoom}
      />
    </div>
  );
};

export default Bottom;

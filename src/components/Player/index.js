import ReactPlayer from "react-player";
import cx from "classnames";
import { Mic, MicOff, UserSquare2 } from "lucide-react";

const Player = (props) => {
  const { url, muted, playing, isActive } = props;
  return (
    <div
      className={cx("relative overflow-hidden mb-5 h-full", {
        "rounded-lg": isActive,
        "rounded-md h-min": !isActive,
        "w-200": !isActive,
        "shadow-lg": !isActive,
      })}
    >
      {playing ? (
        <ReactPlayer
          url={url}
          muted={muted}
          playing={playing}
          width="100%"
          height="100%"
        />
      ) : (
        <UserSquare2 className="text-black" size={isActive ? 400 : 150} />
      )}

      {!isActive && (
        muted ? (
          <MicOff className="text-black absolute right-2 bottom-2" size={20} />
        ) : (
          <Mic className="text-black absolute right-2 bottom-2" size={20} />
        )
      )}
    </div>
  );
};

export default Player;

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

const CopySection = (props) => {
  const { roomId } = props;

  return (
    <div className="flex flex-col absolute text-black border border-black rounded p-2 left-30 bottom-100">
      <div className="text-base copyHeading">Copy Room ID:</div>
      <hr className="my-1" />
      <div className="flex items-center text-sm copyDescription">
        <span>{roomId}</span>
        <CopyToClipboard text={roomId}>
          <Copy className="ml-3 cursor-pointer" />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;

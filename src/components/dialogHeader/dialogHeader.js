import { X } from "react-feather";

const DialogHeader = props => {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="text-2xl font-bold">{props.title}</p>

      <div
        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition-all duration-300"
        onClick={() => props.close()}
      >
        <X size={20} />
      </div>
    </div>
  );
};

export default DialogHeader;

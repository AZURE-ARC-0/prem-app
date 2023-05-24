import { ServicesCardProps } from "shared/types";
import DeleteIcon from "./DeleteIcon";
import StopIcon from "./StopIcon";
import PlayIcon from "./PlayIcon";
import { MouseEvent, useState } from "react";
import WarningModal from "components/service/WarningModal";
import WarningIcon from "./WarningIcon";

const ServicesCard = ({
  title,
  className,
  icon,
  isRunning,
  isWarning,
  onStart,
  onStop,
  onDelete,
  OnClickRedirect,
}: ServicesCardProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const warningMsgHandle = (event:MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  }

  return (
    <div className={className}>
      <div onClick={OnClickRedirect} className="flex gap-8 items-start flex-wrap w-full z-10 relative">
        <div className="dashboard-bottom__card-box">
          <img src={icon} alt="icon" />
        </div>
        <div className="flex gap-4 md:ml-auto">
          {isRunning && (
            <>
              <button className="border-[0.5px] border-brightgray rounded-[3px] py-1 px-3 text-[10px] font-proximaNova-regular">
                Running
              </button>
              <button onClick={onStop}>
                <StopIcon />
              </button>
            </>
          )}
          {!isRunning && (
            <button onClick={onStart}>
              <PlayIcon />
            </button>
          )}
          <button onClick={onDelete}>
            <DeleteIcon />
          </button>
          {!isWarning && (
            <button onClick={warningMsgHandle}>
              <WarningIcon />
            </button>
          )}
        </div>
      </div>
      <h3>{title}</h3>
      {isOpen && (
        <WarningModal isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default ServicesCard;

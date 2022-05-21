import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import infoSelectors from "../../redux/info/info-selects";
import { changeVolume } from "../../redux/info/info-slice";
import { FaVolumeUp, FaVolumeMute, FaVolumeDown } from "react-icons/fa";
import { Wrapper, WrapperVolume, Input, Backdrop } from "./Volume.style";

const Volume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const volume = useSelector(infoSelectors.getVolume);

  const oldVolume = useRef(1);

  const handleChange = (e) => {
    dispatch(changeVolume(+e.target.value));
  };

  const handleClick = () => {
    if (volume !== 0) {
      oldVolume.current = volume;
      dispatch(changeVolume(0));
    } else {
      dispatch(changeVolume(oldVolume.current));
    }
  };

  return (
    <>
      <Wrapper>
        <WrapperVolume onMouseEnter={open} onMouseLeave={close}>
          {volume === 0 ? (
            <FaVolumeMute size={24} onClick={handleClick} />
          ) : volume < 0.5 ? (
            <FaVolumeDown size={24} onClick={handleClick} />
          ) : (
            <FaVolumeUp size={24} onClick={handleClick} />
          )}
          {isOpen && (
            <Input
              value={volume}
              type="range"
              min={0}
              max={1}
              step={0.01}
              onChange={handleChange}
            />
          )}
        </WrapperVolume>
      </Wrapper>
      <Backdrop
        onClick={() => {
          console.log(1);
          close();
        }}
      ></Backdrop>
    </>
  );
};

export default Volume;

import React from 'react';
import { GrPowerReset } from "react-icons/gr";

import { FaRegSave } from "react-icons/fa";

interface SaveResetButtonsProps {
  onSave: () => void;
  onReset: () => void;
}

const SaveResetButtons: React.FC<SaveResetButtonsProps> = ({ onSave, onReset }) => {
  return (
    <div>
      <button  onClick={onSave}>  Save      
      <FaRegSave style={{height:'18px',marginTop:'4px',marginLeft:'4px'}}/>
</button>
      <button onClick={onReset}>Reset <GrPowerReset style={{height:'18px',marginTop:'4px',marginLeft:'4px'}}/>
 </button>
    </div>
  );
};

export default SaveResetButtons;

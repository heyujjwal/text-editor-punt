import React, { useState } from 'react';
import './TextEditor.css';
import { FaSearch } from "react-icons/fa";
import { TbZoomReplace } from "react-icons/tb";



interface TextEditorProps {
  text: string;
  onTextChange: (newText: string) => void;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  fontSize: number;
}

const TextEditor: React.FC<TextEditorProps> = ({
  text,
  onTextChange,
  fontFamily,
  fontWeight,
  fontStyle,
  fontSize,
}) => {
  const [findTerm, setFindTerm] = useState('');
  const [replaceTerm, setReplaceTerm] = useState('');

  const handleFindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindTerm(e.target.value);
  };

  const handleReplaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplaceTerm(e.target.value);
  };

  const handleFind = () => {
    if (findTerm) {
      const regex = new RegExp(findTerm, 'gi');
      const matches = text.match(regex);
      if (matches) {
        alert(`Found ${matches.length} occurrences of "${findTerm}".`);
      } else {
        alert(`No occurrences of "${findTerm}" found.`);
      }
    }
  };

  const handleReplace = () => {
    if (findTerm && replaceTerm) {
      const regex = new RegExp(findTerm, 'gi');
      const newText = text.replace(regex, replaceTerm);
      onTextChange(newText);
    }
  };

  return (
    <div className="text-editor">
      
      <div className="find-replace">
      <label htmlFor="find-replace" style={{marginTop:'10px',fontWeight:'600',fontSize:'large'}}>Find/Replace</label>
        <input
          type="text"
          placeholder="Find"
          value={findTerm}
          onChange={handleFindChange}
        />
        <input
          type="text"
          placeholder="Replace"
          value={replaceTerm}
          onChange={handleReplaceChange}
        />
        <button className='findbutton' onClick={handleFind}>Find <FaSearch style={{height:'12px',marginTop:'3px',marginLeft:'4px'}}/>
</button>
        <button className='replacebutton' onClick={handleReplace}>Replace <TbZoomReplace style={{height:'14px',marginTop:'3px',marginLeft:'4px'}}/>
</button>
      </div>
      <textarea
        style={{
          fontFamily,
          fontWeight,
          fontStyle,
          fontSize: `${fontSize}px`,
        }}
        placeholder='Hey Write it up!'
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
};

export default TextEditor;

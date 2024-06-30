import React, { useEffect, useState } from 'react';
import FontSelector from './Components/FontSelector';
import FontWeightSelector from './Components/FontWeightSelector';
import FontSizeSelector from './Components/FontSizeSelector';
import ItalicToggle from './Components/ItalicToggle';
import TextEditor from './Components/TextEditor'
import fonts from './font.json';
import SaveResetButtons from './Components/SaveResetButtons';
import './App.css' 
import DarkModeToggle from './Components/DarkModeToggle';

interface Fonts {
  [key: string]: {
    [key: string]: string; // Maps weights and styles to URLs
  };
}

const font: Fonts = fonts;

const App: React.FC = () => {
  const defaultFont = 'ABeeZee';
  const defaultWeight = '400';
  const defaultItalic = false;
  const defaultFontSize = 20;
  const defaultDarkMode = false;
  const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32, 36, 40];

  const [selectedFont, setSelectedFont] = useState<string>(defaultFont);
  const [selectedWeight, setSelectedWeight] = useState<string>(defaultWeight);
  const [isItalic, setIsItalic] = useState<boolean>(defaultItalic);
  const [selectedFontSize, setSelectedFontSize] = useState<number>(defaultFontSize);
  const [text, setText] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(defaultDarkMode);

  useEffect(() => {
    const savedFont = localStorage.getItem('selectedFont');
    const savedWeight = localStorage.getItem('selectedWeight');
    const savedItalic = localStorage.getItem('isItalic');
    const savedText = localStorage.getItem('text');
    const savedFontSize = localStorage.getItem('selectedFontSize');
    const savedDarkMode = localStorage.getItem('isDarkMode');

    if (savedFont && savedWeight && savedItalic !== null) {
      setSelectedFont(savedFont);
      setSelectedWeight(savedWeight);
      setIsItalic(JSON.parse(savedItalic));
      if (savedText) {
        setText(savedText);
      }
      if (savedFontSize) {
        setSelectedFontSize(Number(savedFontSize));
      }
      if (savedDarkMode !== null) {
        setIsDarkMode(JSON.parse(savedDarkMode));
      }
    }
  }, []);

  useEffect(() => {
    const autoSave = () => {
      localStorage.setItem('selectedFont', selectedFont);
      localStorage.setItem('selectedWeight', selectedWeight);
      localStorage.setItem('isItalic', JSON.stringify(isItalic));
      localStorage.setItem('text', text);
      localStorage.setItem('selectedFontSize', selectedFontSize.toString());
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    };
    const intervalId = setInterval(autoSave, 5000); // Auto-save every 5 seconds
    return () => clearInterval(intervalId);
  }, [selectedFont, selectedWeight, isItalic, text, selectedFontSize, isDarkMode]);

  const handleSave = () => {
    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('selectedWeight', selectedWeight);
    localStorage.setItem('isItalic', JSON.stringify(isItalic));
    localStorage.setItem('text', text);
    localStorage.setItem('selectedFontSize', selectedFontSize.toString());
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  };

  const handleReset = () => {
    setSelectedFont(defaultFont);
    setSelectedWeight(defaultWeight);
    setIsItalic(defaultItalic);
    setSelectedFontSize(defaultFontSize);
    setText('');
    setIsDarkMode(defaultDarkMode);
    localStorage.removeItem('selectedFont');
    localStorage.removeItem('selectedWeight');
    localStorage.removeItem('isItalic');
    localStorage.removeItem('text');
    localStorage.removeItem('selectedFontSize');
    localStorage.removeItem('isDarkMode');
  };

  const handleFontChange = (f: string) => {
    setSelectedFont(f);
    const fontVariants = font[f];
    const weightOptions = Object.keys(fontVariants).filter((variant: string) => !variant.includes('italic'));
    const italicOptions = Object.keys(fontVariants).filter((variant: string) => variant.includes('italic'));

    // Reset to default weight and italic if the current selections are not available in the new font
    if (!Object.keys(fontVariants).includes(selectedWeight + (isItalic ? 'italic' : ''))) {
      if (isItalic && italicOptions.length > 0) {
        setSelectedWeight(italicOptions[0].replace('italic', ''));
        setIsItalic(true);
      } else {
        setSelectedWeight(weightOptions[0]);
        setIsItalic(false);
      }
    }
  };

  const fontVariants = font[selectedFont];
  const weightOptions = Object.keys(fontVariants).filter((variant: string) => !variant.includes('italic'));
  const italicOptions = Object.keys(fontVariants).filter((variant: string) => variant.includes('italic'));

  useEffect(() => {
    const fontUrl = fontVariants[selectedWeight + (isItalic ? 'italic' : '')];
    const newFontFace = new FontFace(selectedFont, `url(${fontUrl})`);
    document.fonts.add(newFontFace);
    newFontFace.load().then(() => {
      // Apply the font to the text editor only
      const textEditor = document.querySelector('.text-editor textarea') as HTMLTextAreaElement;
      if (textEditor) {
        textEditor.style.fontFamily = selectedFont;
      }
    });
  }, [selectedFont, selectedWeight, isItalic, fontVariants]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="app">
      <div className="controls">
        <div className="control-group">
          <label htmlFor="font-family">Font Family</label>
          <FontSelector
            fonts={fonts}
            selectedFont={selectedFont}
            onFontChange={handleFontChange}
          />
        </div>
        <div className="control-group">
          <label htmlFor="font-weight">Font Weight/Variant</label>
          <FontWeightSelector
            weights={weightOptions}
            selectedWeight={selectedWeight}
            onWeightChange={(weight) => setSelectedWeight(weight)}
          />
        </div>
        <div className="control-group italic-toggle">
          <label htmlFor="italic-toggle">Italics</label>
          <ItalicToggle
            isItalic={isItalic}
            onToggleItalic={(checked) => setIsItalic(checked)}
            disabled={!italicOptions.length}
          />
        </div>
        <div className="control-group">
          <label htmlFor="font-size">Font Size</label>
          <FontSizeSelector
            sizes={fontSizes}
            selectedSize={selectedFontSize}
            onSizeChange={(size) => setSelectedFontSize(size)}
          />
        </div>
        
        
      </div>
      <TextEditor
        text={text}
        onTextChange={(newText) => setText(newText)}
        fontFamily={selectedFont}
        fontWeight={selectedWeight}
        fontStyle={isItalic ? 'italic' : 'normal'}
        fontSize={selectedFontSize}
      />
      <SaveResetButtons
        onSave={handleSave}
        onReset={handleReset}
      />

<div className="control-group dark-mode-toggle">
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
    </div>
  );
};

export default App;
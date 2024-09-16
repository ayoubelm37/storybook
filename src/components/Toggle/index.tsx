import React, { useState } from 'react';
import './index.css';

interface ToggleProps {
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  initialChecked = false,
  onToggle,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onToggle) {
      onToggle(newChecked);
    }
  };

  return (
    <div className="toggle" onClick={handleToggle}>
      <div className={`toggle-handle ${checked ? 'checked' : ''}`} />
    </div>
  );
};

export default Toggle;

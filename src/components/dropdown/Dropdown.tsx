import DownWardTriangle from '@/assets/icons/downward-triangle.svg';
import React, { useEffect, useRef, useState } from 'react';
import * as styles from './Dropdown.css';

interface DropdownProps {
  headerTitle: string;
  list: string[];
  onSelectItem?: (item: string) => void;
}

export default function Dropdown({ headerTitle, list, onSelectItem }: DropdownProps) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(headerTitle);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsListOpen(!isListOpen);
  };

  const selectItem = (item: string) => {
    setSelectedItem(item);
    setIsListOpen(false);

    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsListOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isListOpen]);

  return (
    <div ref={dropdownRef} className={styles.container}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <span>{selectedItem}</span>
        <DownWardTriangle />
      </button>

      {isListOpen && (
        <div className={styles.dropdownList}>
          {list.map((item) => (
            <button key={item} onClick={() => selectItem(item)} className={styles.dropdownListItem}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

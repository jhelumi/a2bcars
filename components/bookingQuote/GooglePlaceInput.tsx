'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search } from 'lucide-react';

interface GooglePlaceInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const MOCK_PLACES = [
  'Heathrow Airport (LHR), London',
  'Gatwick Airport (LGW), Horley',
  'Manchester Airport (MAN), Manchester',
  'London City Centre, UK',
  'Birmingham New Street Station',
  'Edinburgh Castle, Scotland',
  'Oxford University, Oxford',
  'Cambridge Science Park',
  'Brighton Pier, Brighton',
  'Liverpool Lime Street',
];

const GooglePlaceInput: React.FC<GooglePlaceInputProps> = ({
  label,
  value,
  onChange,
  error,
  placeholder,
}) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);

    if (val.length > 2) {
      const filtered = MOCK_PLACES.filter((place) =>
        place.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (place: string) => {
    setQuery(place);
    onChange(place);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <MapPin size={18} />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder || 'Start typing a location...'}
          className={`block w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all ${
            error ? 'border-red-500' : 'border-slate-300'
          }`}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>
      )}

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
          {suggestions.map((place, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(place)}
              className="px-4 py-2 hover:bg-slate-50 cursor-pointer flex items-center gap-3 text-sm text-slate-600 border-b border-slate-50 last:border-0"
            >
              <Search size={14} className="text-slate-400" />
              {place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GooglePlaceInput;

import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="search note..."
        className="w-full border border-primary focus:outline-none focus:ring-2 focus:ring-primary px-2 py-2 rounded shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

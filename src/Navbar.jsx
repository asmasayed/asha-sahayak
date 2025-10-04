import React from 'react';

const Navbar = ({ activePage, onNavigate }) => {
  // --- STYLE DEFINITIONS ---
  // Note: We are using hardcoded colors here because inline styles
  // cannot directly access the CSS variables from your stylesheet.

  const baseButtonStyle = {
    // Core layout and appearance for ALL buttons
    background: 'none',
    border: 'none',
    fontSize: '0.875rem', // Corresponds to --font-size-sm
    fontWeight: 500, // Corresponds to --font-weight-medium
    color: '#5F6368', // Corresponds to --text-medium
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem', // Corresponds to --space-1
    flexGrow: 1,
    height: '100%',
    borderRadius: 0, // Ensure no rounded corners by default
  };

  const activeButtonStyle = {
    // Styles ONLY for the active button
    backgroundColor: '#007bff', // Corresponds to --primary-color
    color: '#FFFFFF', // Corresponds to --white
    fontWeight: 600, // Corresponds to --font-weight-semibold
  };

  return (
    <nav className="navbar">
      <button 
        style={activePage === 'home' ? { ...baseButtonStyle, ...activeButtonStyle } : baseButtonStyle} 
        onClick={() => onNavigate('home')}
      >
        Home
      </button>
      <button 
        style={activePage === 'visits' ? { ...baseButtonStyle, ...activeButtonStyle } : baseButtonStyle} 
        onClick={() => onNavigate('visits')}
      >
        Visits Log
      </button>
      <button 
        style={activePage === 'schemes' ? { ...baseButtonStyle, ...activeButtonStyle } : baseButtonStyle} 
        onClick={() => onNavigate('schemes')}
      >
        Schemes
      </button>
    </nav>
  );
};

export default Navbar;

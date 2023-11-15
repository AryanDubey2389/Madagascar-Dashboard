import React, { useState } from "react";
import map from '../assets/img/madagascar_map.png';
import point from '../assets/img/imp_points.png';
import point2 from '../assets/img/point2.png';
import map2 from '../assets/img/map2.png'

function MapSelector() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("map");

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const Map1 = () => {
    return (
      <>
            <img
              src={point}
              alt="Point"
              style={{
                position: 'relative',
                top: '50%', // Adjust as needed
                left: '30%', // Adjust as needed
                width: '420px', // Adjust as needed
                height: '120px', // Adjust as needed
                transform: 'translate(-50%, -50%)', // Center the point
                zIndex: 2, // Ensure the point is above the map
              }}
            />
        <div
          style={{
            overflow: 'auto',
            width: isZoomed ? '100%' : '350px', // Initial width is 350px
            height: 'auto',
            position: 'relative',
            margin: '0 auto',
            transition: 'width 0.5s ease-in-out',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={map}
            alt="Map"
            style={{
              width: '100%', // Use 100% width inside the container
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
      </>
    );
  };
  const Map2 = () => {
    return (
      <>
            <img
              src={point2}
              alt="Point"
              style={{
                position: 'relative',
                top: '50%', // Adjust as needed
                left: '30%', // Adjust as needed
                width: '420px', // Adjust as needed
                height: '120px', // Adjust as needed
                transform: 'translate(-50%, -50%)', // Center the point
                zIndex: 2, // Ensure the point is above the map
              }}
            />
        <div
          style={{
            overflow: 'auto',
            width: isZoomed ? '100%' : '350px', // Initial width is 350px
            height: 'auto',
            position: 'relative',
            margin: '0 auto',
            transition: 'width 0.5s ease-in-out',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={map2}
            alt="Map"
            style={{
              width: '100%', // Use 100% width inside the container
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
      </>
    );
  };
  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "map1":
        return <Map1 />;
      case "map2":
        return <Map2 />;
      default:
        return <Map1 />;
    }
  };

  return (
    <>
      <div className="content" style={{ overflow: 'hidden', position: 'relative' }}>
        <select onChange={handleDropdownChange}>
          <option value="map1">Tree Cover</option>
          <option value="map2">Forest Change</option>
        </select>
        {renderSelectedComponent()}
      </div>
    </>
  );
}

export default MapSelector;

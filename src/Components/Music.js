import React, { useState, useEffect } from 'react';

export default function Music ({ searchResults}) {

  const [favourite, setFavourite] = useState(true);

  function handleClick() {
    setFavourite(!favourite);

}
    return (
        <div>
          {searchResults && 
            searchResults.map(item => (
              <div className="card" key={item.id}>
                <div className="card-body">
                  <img alt="Album label" src={item['im:image'][1].label} className="card-img"/>
                  <h2 className="card-title">{item.title.label}</h2>
                  <p className="card-text">{item['im:artist'].label}</p>
                  <svg width="30px" height="30px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg"  className={`card-favourite ${favourite ? "active" : "" }`} onClick={handleClick}>
                    <g id="Icons" stroke="none" stroke-width="1" fill="none">
                        <g id="Rounded" transform="translate(-239.000000, -4323.000000)">
                            <g id="Toggle" transform="translate(100.000000, 4266.000000)">
                                <g id="-Round-/-Toggle-/-star_border" transform="translate(136.000000, 54.000000)">
                                    <g>
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path  d="M19.65,9.04 L14.81,8.62 L12.92,4.17 C12.58,3.36 11.42,3.36 11.08,4.17 L9.19,8.63 L4.36,9.04 C3.48,9.11 3.12,10.21 3.79,10.79 L7.46,13.97 L6.36,18.69 C6.16,19.55 7.09,20.23 7.85,19.77 L12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.97 L20.21,10.79 C20.88,10.21 20.53,9.11 19.65,9.04 Z M12,15.4 L8.24,17.67 L9.24,13.39 L5.92,10.51 L10.3,10.13 L12,6.1 L13.71,10.14 L18.09,10.52 L14.77,13.4 L15.77,17.68 L12,15.4 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                  </svg>
                </div>
              </div>
          ))}  
        </div>
    )
}

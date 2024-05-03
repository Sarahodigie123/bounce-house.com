import React from 'react';
import './design.css';

function Body7() {
  return (
    <div className='seventhpage'>
      <div className='seventhpagetext'>
        {/* Use inline style as an object */}
        <div style={{ width: '100%' }}>
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Frisco%20Texas+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Body7;


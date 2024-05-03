import React from 'react';
import './design.css';

function Body4() {
  return (
    <div className='fourthbody'>
      <div className='customers'>
        SEE WHAT OUR CUSTOMERS SAY
        </div>
        <div className='customer-container'>
          <div className='customer'>
            <div className='customer-picture left'></div>
            <div className='customer-text'>Beverly Jones <br/> 10/10 service! Sidney was so nice and professional
            <div className="stars">
      &#9733;&#9733;&#9733;&#9733;&#9733; {/* Five star symbols */}
    </div>
            </div>
          </div>
          <div className='customer'>
            <div className='customer-picture middle'></div>
            <div className='customer-text'>Sarah Odigie <br/> Rented out Lets Bounce Frisco for my neice and she loved it!
            <div className="stars">
      &#9733;&#9733;&#9733;&#9733;&#9733; {/* Five star symbols */}
    </div>
            </div>
          </div>
          <div className='customer'>
            <div className='customer-picture right'></div>
            <div className='customer-text'>Varsha Desai <br/> Great Experince!
            <div className="stars">
      &#9733;&#9733;&#9733;&#9733; {/* Five star symbols */}
    </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Body4;

import React from 'react';
import './design.css';

function Body6() {
  return (
  <div className='sixthpage'>
    <div className='sixthpagetext'>
        CONTACT US
        <div className='sixthpagesmalltext'>
        Ready to take your event to the next level? Contact us<br/>
         today to learn more about our inflatable rental options.<br/>
        and how we can help make your event a success. We're <br/>
        here to answer any questions you may have and assist <br/>
         you every step of the way. Let's make memories  <br/>
          together!
        </div>

        <form>
    <div class="sixcontainer">
        <div class="input-group">
            <input type="text" id="fname" name="firstname" placeholder="Full name"/>
        </div>
        <div class="input-group">
            <input type="text" id="email" name="email" placeholder="Email"/>
        </div>
    </div>
    <textarea id="message" name="message" rows="4" placeholder="Leave us a message..."></textarea>
    
    <input type="submit" value="Submit"/>
</form>

        </div>
  </div>
  );
}

export default Body6;

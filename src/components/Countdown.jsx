import React from 'react';

function Countdown() {
  return (
    <div id="countdown" data-testid="countdown">
      <span className="minuteLeft">0</span>
      <span className="minuteRight">0</span>
      <span>:</span>
      <span className="secondLeft">0</span>
      <span className="secondRight">0</span>
    </div>
  );
}

export default Countdown;

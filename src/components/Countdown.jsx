import React from 'react';

function Countdown() {
  return (
    <div id="countdown" data-testid="countdown">
      <span className="minuteLeft">0</span>
      <span className="minuteRight">0</span>
      <span>:</span>
      <span className="secondLeft">0</span>
      <span className="secondRight">0</span>

      <div>
        <button>Vamos rápido, já voltamos</button>
        <button>Voltamos em breve</button>
        <button>Só alegria</button>
        <button>Aleatório</button>
      </div>
    </div>
  );
}

export default Countdown;

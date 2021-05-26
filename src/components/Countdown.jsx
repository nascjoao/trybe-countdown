import React from 'react';

class Countdown extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      minutes: 0,
      seconds: 0
    };

    this.randomInterval = this.randomInterval.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.time) {
      this.setMinutesAndSeconds();
    }
  }

  setMinutesAndSeconds() {
    const { time } = this.state;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    this.setState({ minutes, seconds });
  }

  randomInterval() {
    const min = Math.ceil(30);
    const max = Math.floor(180);
    const time = Math.floor(Math.random() * (max - min + 1) + min);

    this.setState({ time });
  }

  render() {
    const { minutes, seconds } = this.state;
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0');

    return (
      <div id="countdown" data-testid="countdown">
        <div className="timer">
          <span className="minuteLeft">{minuteLeft}</span>
          <span className="minuteRight">{minuteRight}</span>
          <span>:</span>
          <span className="secondLeft">{secondLeft}</span>
          <span className="secondRight">{secondRight}</span>
        </div>
  
        <div>
          <button>Vamos rápido, já voltamos</button>
          <button>Voltamos em breve</button>
          <button>Só alegria</button>
          <button onClick={this.randomInterval}>Aleatório</button>
        </div>
      </div>
    );
  }
}

export default Countdown;

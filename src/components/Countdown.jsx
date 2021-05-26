import React from 'react';

class Countdown extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      minutes: 0,
      seconds: 0
    };

    this.countdownTimeout = null;

    this.shortInterval = this.shortInterval.bind(this);
    this.regularInterval = this.regularInterval.bind(this);
    this.longInterval = this.longInterval.bind(this);
    this.randomInterval = this.randomInterval.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.time) {
      this.setMinutesAndSeconds();
      if (this.state.time > 0) this.startCountdown();
    }
  }

  startCountdown() {
    const { time } = this.state;
    clearTimeout(this.countdownTimeout);
    this.countdownTimeout = setTimeout(() => {
      this.setState({
        time: time - 1
      });
    }, 1000);
  }

  setMinutesAndSeconds() {
    const { time } = this.state;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    this.setState({ minutes, seconds });
  }

  shortInterval() {
    const time = 4 * 60;

    this.setState({ time });
  }

  regularInterval() {
    const time = 6 * 60;

    this.setState({ time });
  }

  longInterval() {
    const time = 10 * 60;

    this.setState({ time });
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
          <button onClick={this.shortInterval}>Vamos rápido, já voltamos</button>
          <button onClick={this.regularInterval}>Voltamos em breve</button>
          <button onClick={this.longInterval}>Só alegria</button>
          <button onClick={this.randomInterval}>Aleatório</button>
        </div>
      </div>
    );
  }
}

export default Countdown;

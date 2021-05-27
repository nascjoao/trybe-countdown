import React from 'react';
import './styles.scss';

class Countdown extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      minutes: 0,
      seconds: 0,
      temporaryTime: '',
      startCountdownDisabled: true,
    };

    this.countdownTimeout = null;

    this.handleInputTime = this.handleInputTime.bind(this);
    this.customInterval = this.customInterval.bind(this);
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

  handleInputTime({ target }) {
    const temporaryTime = target.value;

    const timePattern = /^([1-5][0-9]|[1-9])m\s([1-5][0-9]|[1-9])+s$|^([1-5][0-9]|[1-9])(m|s)$/g;

    this.setState({
      temporaryTime: target.value,
      startCountdownDisabled: !temporaryTime.match(timePattern),
    });
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

  customInterval(event) {
    event.preventDefault();

    let { temporaryTime } = this.state;

    temporaryTime = temporaryTime.split(/\s/);

    let seconds = 0;

    temporaryTime.forEach((unit) => {
      if (unit.includes('m')) {
        const temporaryMinutes = unit.replace('m', '');
        const minutesInSeconds = Math.floor(temporaryMinutes * 60);
        seconds += minutesInSeconds;
      } else {
        let temporarySeconds = unit.replace('s', '');
        temporarySeconds = temporarySeconds % 60;
        seconds += temporarySeconds;
      }
    });

    this.setState({ time: seconds, temporaryTime: '', startCountdownDisabled: true });
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
    const { minutes, seconds, startCountdownDisabled, temporaryTime } = this.state;
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0');

    return (
      <div id="countdown" data-testid="countdown">
        <div className="timer">
          <div className="minutes">
            <span className="minuteLeft">{minuteLeft}</span>
            <span className="minuteRight">{minuteRight}</span>
          </div>
          <span>:</span>
          <div className="seconds">
            <span className="secondLeft">{secondLeft}</span>
            <span className="secondRight">{secondRight}</span>
          </div>
        </div>

        <form className="customInterval" onSubmit={this.customInterval}>
          <input type="text" value={temporaryTime} spellCheck={false} placeholder="Ex.: 3m 25s" onChange={this.handleInputTime} />
          <button type="submit" disabled={startCountdownDisabled}>Iniciar countdown</button>
        </form>
  
        <div className="options">
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

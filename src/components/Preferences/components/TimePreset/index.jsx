/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import timeFunctions from '../../../../functions/time';

import './styles.scss';

export default class TimePreset extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      currentTime: '',
      isValueValid: '',
    };

    this.loadData = this.loadData.bind(this);
    this.handleInputTime = this.handleInputTime.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isValueValid !== this.state.isValueValid) {
      this.loadData();
    }
  }

  handleInputTime({ target }) {
    const { convertCustomTimeToSeconds, setPreset } = timeFunctions;
    const temporaryTime = target.value;
    const { name: nameInState } = this.state;
    const { label } = this.props;
    const name = nameInState || label;

    const timePattern = /^([1-5][0-9]|[1-9])m\s([1-5][0-9]|[1-9])+s$|^([1-5][0-9]|[1-9])(m|s)$/g;

    if (temporaryTime.match(timePattern)) {
      const time = convertCustomTimeToSeconds(temporaryTime);
      this.setState({ isValueValid: true });
      setPreset(name, time);
    } else if (temporaryTime === '') {
      this.setState({ isValueValid: '' });
    } else {
      this.setState({ isValueValid: false });
    }
  }

  loadData() {
    const { convertTimeToMinutesAndSeconds } = timeFunctions;
    const { label } = this.props;
    const presets = JSON.parse(localStorage.getItem('presets'));

    if (presets) {
      const found = presets.find((preset) => preset.name === label);
      if (found) {
        const { minutes, seconds } = convertTimeToMinutesAndSeconds(found.time);
        this.setState({ name: label, currentTime: `${minutes}:${seconds}` });
      }
    }
  }

  render() {
    const { currentTime, isValueValid } = this.state;
    const { label } = this.props;
    return (
      <label className="timePreset">
        {label}
        <div className="currentTime">{currentTime || '00:00'}</div>
        <input
          type="text"
          spellCheck={false}
          placeholder="Ex.: 3m 25s"
          onChange={this.handleInputTime}
          className={`isValueValid-${isValueValid}`}
        />
      </label>
    );
  }
}

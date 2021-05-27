function getPreset(name, timeForCreation) {
  const presets = JSON.parse(localStorage.getItem('presets'));

  if (presets) {
    const found = presets.find((preset) => preset.name === name);
    if (found) return found.time;
    else {
      localStorage.setItem('presets', JSON.stringify([
        ...presets,
        {
          name,
          time: timeForCreation,
        }
      ]));

      return timeForCreation;
    }
  } else {
    localStorage.setItem('presets', JSON.stringify([{
      name,
      time: timeForCreation,
    }]));

    return timeForCreation;
  }
}

function convertTimeToMinutesAndSeconds(time) {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  return {
    minutes,
    seconds,
  };
}

function setPreset(name, timeToUpdate) {
  const presets = JSON.parse(localStorage.getItem('presets'));

  if (presets) {
    const found = getPreset(name);
    let updatedPresets = [];
    if (found) {
      updatedPresets = presets.map((preset) => {
        const presetToUpdate = preset;
        if (presetToUpdate.name === name) {
          presetToUpdate.time = timeToUpdate;
        }
        
        return presetToUpdate;
      });
    } else {
      updatedPresets = [...presets, { name, time: timeToUpdate }];
    }
    
    localStorage.setItem('presets', JSON.stringify(updatedPresets));
  } else {
    localStorage.setItem('presets', JSON.stringify([{
      name,
      time: timeToUpdate,
    }]));
  }
}

function convertCustomTimeToSeconds(temporaryTime) {
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

  return seconds;
}

export default {
  getPreset,
  convertTimeToMinutesAndSeconds,
  setPreset,
  convertCustomTimeToSeconds,
};

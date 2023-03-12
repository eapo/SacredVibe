var context = new AudioContext();
var oscillator;
var playButton = document.getElementById('play');
var stopButton = document.getElementById('stop');
var freq1Slider = document.getElementById('freq1');
var freq2Slider = document.getElementById('freq2');
var freq3Slider = document.getElementById('freq3');
var currentFreqSpan = document.getElementById('currentFreq');

playButton.onclick = function() {
  oscillator = context.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = freq1Slider.valueAsNumber + freq2Slider.valueAsNumber + freq3Slider.valueAsNumber;
  oscillator.connect(context.destination);
  oscillator.start();
  currentFreqSpan.innerHTML = 'Current Frequency: ' + oscillator.frequency.value.toFixed() + ' Hz';
}

stopButton.onclick = function() {
  oscillator.stop();
  currentFreqSpan.innerHTML = 'Current Frequency: 0 Hz';
}

freq1Slider.oninput = function() {
  if (oscillator) {
    oscillator.frequency.value = freq1Slider.valueAsNumber + freq2Slider.valueAsNumber + freq3Slider.valueAsNumber;
    currentFreqSpan.innerHTML = 'Current Frequency: ' + oscillator.frequency.value.toFixed() + ' Hz';
  }
}

freq2Slider.oninput = function() {
  if (oscillator) {
    oscillator.frequency.value = freq1Slider.valueAsNumber + freq2Slider.valueAsNumber + freq3Slider.valueAsNumber;
    currentFreqSpan.innerHTML = 'Current Frequency: ' + oscillator.frequency.value.toFixed() + ' Hz';
  }
}

freq3Slider.oninput = function() {
  if (oscillator) {
    oscillator.frequency.value = freq1Slider.valueAsNumber + freq2Slider.valueAsNumber + freq3Slider.valueAsNumber;
    currentFreqSpan.innerHTML = 'Current Frequency: ' + oscillator.frequency.value.toFixed() + ' Hz';
  }
}

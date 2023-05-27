// Function that logs a message to the console
function log(message) {
    console.log(message);
  }
  
  // Function that prompts the user for input and returns the result
  function prompt(message) {
    return window.prompt(message);
  }
  
  // Function that parses a time string and returns an object with hour and minute properties
  function parseTime(timeString) {
    const [hour, minute] = timeString.split(':');
    return { hour: parseInt(hour), minute: parseInt(minute) };
  }
  
  // Function that formats a time object as a string
  function formatTime(time) {
    const padZero = (number) => (number < 10 ? `0${number}` : number);
    return `${padZero(time.hour)}:${padZero(time.minute)}`;
  }
  
  // Function that creates a table element with the given headers and rows
  function createTable(headers, rows) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    const headerRow = document.createElement('tr');
    headers.forEach((header) => {
      const th = document.createElement('th');
      th.innerText = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
  
    rows.forEach((row) => {
      const tr = document.createElement('tr');
      row.forEach((cell) => {
        const td = document.createElement('td');
        td.innerText = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  
    table.appendChild(thead);
    table.appendChild(tbody);
  
    return table;
  }

  // Function that calculates the sum of an array of numbers
function sum(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  // Function that calculates the average of an array of numbers
  function average(numbers) {
    return sum(numbers) / numbers.length;
  }
  
  // Function that calculates the minimum value in an array of numbers
  function min(numbers) {
    return Math.min(...numbers);
  }
  
  // Function that calculates the maximum value in an array of numbers
  function max(numbers) {
    return Math.max(...numbers);
  }
  
  // Function that sorts an array of objects by a specified property
  function sortByProperty(array, property) {
    return array.sort((a, b) => a[property] - b[property]);
  }
  
  // Function that filters an array of objects by a specified property and value
  function filterByProperty(array, property, value) {
    return array.filter((item) => item[property] === value);
  }

  // Function that makes a network request and returns the response as JSON
async function fetchJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  
  // Function that waits for a specified amount of time before resolving
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Function that generates a random integer between min and max (inclusive)
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function that generates a random string of the specified length
  function randomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(randomInt(0, characters.length - 1));
    }
    return result;
  }
  
  // Function that generates a unique ID using a combination of the current date and a random string
  function generateID() {
    const date = new Date();
    const dateString = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    const randomString = randomString(8);
    return `${dateString}-${randomString}`;
  }
  
  // Function that converts an object to a query string
  function objectToQueryString(obj) {
    const parts = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== null && value !== undefined) {
          parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      }
    }
    return parts.join('&');
  }
  
  // Function that converts a query string to an object
  function queryStringToObject(queryString) {
    const obj = {};
    const parts = queryString.split('&');
    for (const part of parts) {
      const [key, value] = part.split('=');
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return obj;
  }

  // Function that returns a promise that resolves after a specified event fires
function waitForEvent(element, eventName) {
    return new Promise((resolve) => {
      const handler = () => {
        element.removeEventListener(eventName, handler);
        resolve();
      };
      element.addEventListener(eventName, handler);
    });
  }
  
  // Function that gets the user's location and returns a promise that resolves with the latitude and longitude
  async function getUserLocation() {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return { lat: position.coords.latitude, lng: position.coords.longitude };
  }
  
  // Function that generates a QR code image for the specified string
  function generateQRCode(text) {
    const qrCode = new QRCode({
      content: text,
      width: 256,
      height: 256,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    });
    const canvas = qrCode.canvas();
    const imageUrl = canvas.toDataURL();
    const image = new Image();
    image.src = imageUrl;
    return image;
  }
  // Function that sets the CSS styles for an element
function setStyles(element, styles) {
    Object.assign(element.style, styles);
  }
  
  // Function that animates an element's CSS styles over a specified duration
  function animateStyles(element, styles, duration) {
    const startStyles = {};
    const endStyles = {};
    for (const property in styles) {
      if (styles.hasOwnProperty(property)) {
        startStyles[property] = element.style[property] || '';
        endStyles[property] = styles[property];
      }
    }
    const animation = element.animate(
      [startStyles, endStyles],
      { duration, fill: 'forwards' }
    );
    return animation.finished;
  }
  
  // Function that fades an element in over a specified duration
  function fadeIn(element, duration) {
    setStyles(element, { opacity: 0 });
    return animateStyles(element, { opacity: 1 }, duration);
  }
  
  // Function that fades an element out over a specified duration
  function fadeOut(element, duration) {
    setStyles(element, { opacity: 1 });
    return animateStyles(element, { opacity: 0 }, duration);
  }
  
  // Function that slides an element in from the left over a specified duration
  function slideInFromLeft(element, duration) {
    setStyles(element, { transform: 'translateX(-100%)' });
    return animateStyles(element, { transform: 'translateX(0)' }, duration);
  }
  
  // Function that slides an element out to the left over a specified duration
  function slideOutToLeft(element, duration) {
    setStyles(element, { transform: 'translateX(0)' });
    return animateStyles(element, { transform: 'translateX(-100%)' }, duration);
  }
  
  // Function that bounces an element up and down over a specified duration
  function bounce(element, duration) {
    const keyframes = [
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0px)' },
    ];
    const options = { duration, iterations: Infinity };
    const animation = element.animate(keyframes, options);
    return animation.finished;
  }

  // Function that generates a fractal using the Barnsley fern algorithm
function generateFractal(canvas, iterations) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;
    const scale = Math.min(width, height) / 10;
  
    let x = 0;
    let y = 0;
    let minX = x;
    let minY = y;
    let maxX = x;
    let maxY = y;
  
    const transform1 = (x, y) => ({ x: 0, y: 0.16 * y });
    const transform2 = (x, y) => ({ x: 0.85 * x + 0.04 * y, y: -0.04 * x + 0.85 * y + 1.6 });
    const transform3 = (x, y) => ({ x: 0.2 * x - 0.26 * y, y: 0.23 * x + 0.22 * y + 1.6 });
    const transform4 = (x, y) => ({ x: -0.15 * x + 0.28 * y, y: 0.26 * x + 0.24 * y + 0.44 });
  
    const transforms = [transform1, transform2, transform3, transform4];
    const weights = [0.01, 0.85, 0.07, 0.07];
  
    for (let i = 0; i < iterations; i++) {
      const random = Math.random();
      let index = 0;
      for (let j = 0; j < weights.length; j++) {
        if (random < weights[j]) {
          index = j;
          break;
        }
        random -= weights[j];
      }
      const transform = transforms[index];
      const { x: newX, y: newY } = transform(x, y);
      minX = Math.min(minX, newX);
      minY = Math.min(minY, newY);
      maxX = Math.max(maxX, newX);
      maxY = Math.max(maxY, newY);
      x = newX;
      y = newY;
      ctx.fillRect((x - minX) * scale, height - (y - minY) * scale, 1, 1);
    }
  }
  
  // Function that encrypts a message using the Vigenere cipher
  function encryptVigenere(message, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const keyChar = key[i % key.length];
      const messageIndex = alphabet.indexOf(messageChar.toLowerCase());
      const keyIndex = alphabet.indexOf(keyChar.toLowerCase());
      if (messageIndex >= 0) {
        const newIndex = (messageIndex + keyIndex) % alphabet.length;
        const newChar = alphabet[newIndex];
        result += messageChar === messageChar.toUpperCase() ? newChar.toUpperCase() : newChar;
      } else {
        result += messageChar;
      }
    }
    return result;
  }
  
  // Function that decrypts a message using the Vigenere cipher
  function decryptVigenere(message, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const keyChar = key[i % key.length];
      const messageIndex = alphabet.indexOf(messageChar.toLowerCase());
      const keyIndex = alphabet.indexOf(keyChar.toLowerCase());
      if (messageIndex >= 0) {
        const newIndex = (messageIndex - keyIndex + alphabet.length) % alphabet.length;
        const newChar = alphabet[newIndex];
        result += messageChar === messageChar.toUpperCase() ? newChar.toUpperCase() : newChar;
      } else {
        result += messageChar;
      }
    }
    return result;
  }
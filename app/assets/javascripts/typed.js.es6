// The MIT License (MIT)

// Copyright (c) 2018 Matt Boldt

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * Defaults & options
 * @returns {object} Typed defaults & options
 * @public
 */

const defaults = {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    'These are the default values...',
    'You know what you should do?',
    'Use your own!',
    'Have a great day!'
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 0,

  /**
   * @property {number} startDelay time before typing starts in milliseconds
   */
  startDelay: 0,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 0,

  /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */
  smartBackspace: true,

  /**
   * @property {boolean} shuffle shuffle the strings
   */
  shuffle: false,

  /**
   * @property {number} backDelay time before backspacing in milliseconds
   */
  backDelay: 700,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: false,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

  /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */
  contentType: 'html',

  /**
   * Before it begins typing
   * @param {Typed} self
   */
  onBegin: (self) => {},

  /**
   * All typing is complete
   * @param {Typed} self
   */
  onComplete: (self) => {},

  /**
   * Before each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {},

  /**
   * After each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {},

  /**
   * During looping, after last string is typed
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {},

  /**
   * Typing has been stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingPaused: (arrayPos, self) => {},

  /**
   * Typing has been started after being stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingResumed: (arrayPos, self) => {},

  /**
   * After reset
   * @param {Typed} self
   */
  onReset: (self) => {},

  /**
   * After stop
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {},

  /**
   * After start
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {},

  /**
   * After destroy
   * @param {Typed} self
   */
  onDestroy: (self) => {}
};

class HTMLParser {
  /**
   * Type HTML tags & HTML Characters
   * @param {string} curString Current string
   * @param {number} curStrPos Position in current string
   * @param {Typed} self instance of Typed
   * @returns {number} a new string position
   * @private
   */

  typeHtmlChars(curString, curStrPos, self) {
    if (self.contentType !== 'html') return curStrPos;
    const curChar = curString.substr(curStrPos).charAt(0);
    if (curChar === '<' || curChar === '&') {
      let endTag = '';
      if (curChar === '<') {
        endTag = '>';
      } else {
        endTag = ';';
      }
      while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
        curStrPos++;
        if (curStrPos + 1 > curString.length) {
          break;
        }
      }
      curStrPos++;
    }
    return curStrPos;
  }

  /**
   * Backspace HTML tags and HTML Characters
   * @param {string} curString Current string
   * @param {number} curStrPos Position in current string
   * @param {Typed} self instance of Typed
   * @returns {number} a new string position
   * @private
   */
  backSpaceHtmlChars(curString, curStrPos, self) {
    if (self.contentType !== 'html') return curStrPos;
    const curChar = curString.substr(curStrPos).charAt(0);
    if (curChar === '>' || curChar === ';') {
      let endTag = '';
      if (curChar === '>') {
        endTag = '<';
      } else {
        endTag = '&';
      }
      while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
        curStrPos--;
        if (curStrPos < 0) {
          break;
        }
      }
      curStrPos--;
    }
    return curStrPos;
  }
}

let htmlParser = new HTMLParser();

/**
 * Initialize the Typed object
 */

class Initializer {
  /**
   * Load up defaults & options on the Typed instance
   * @param {Typed} self instance of Typed
   * @param {object} options options object
   * @param {string} elementId HTML element ID _OR_ instance of HTML element
   * @private
   */

  load(self, options, elementId) {
    // chosen element to manipulate text
    if (typeof elementId === 'string') {
      self.el = document.querySelector(elementId);
    } else {
      self.el = elementId;
    }

    self.options = { ...defaults, ...options };

    // attribute to type into
    self.isInput = self.el.tagName.toLowerCase() === 'input';
    self.attr = self.options.attr;
    self.bindInputFocusEvents = self.options.bindInputFocusEvents;

    // show cursor
    self.showCursor = self.isInput ? false : self.options.showCursor;

    // custom cursor
    self.cursorChar = self.options.cursorChar;

    // Is the cursor blinking
    self.cursorBlinking = true;

    // text content of element
    self.elContent = self.attr
      ? self.el.getAttribute(self.attr)
      : self.el.textContent;

    // html or plain text
    self.contentType = self.options.contentType;

    // typing speed
    self.typeSpeed = self.options.typeSpeed;

    // add a delay before typing starts
    self.startDelay = self.options.startDelay;

    // backspacing speed
    self.backSpeed = self.options.backSpeed;

    // only backspace what doesn't match the previous string
    self.smartBackspace = self.options.smartBackspace;

    // amount of time to wait before backspacing
    self.backDelay = self.options.backDelay;

    // Fade out instead of backspace
    self.fadeOut = self.options.fadeOut;
    self.fadeOutClass = self.options.fadeOutClass;
    self.fadeOutDelay = self.options.fadeOutDelay;

    // variable to check whether typing is currently paused
    self.isPaused = false;

    // input strings of text
    self.strings = self.options.strings.map((s) => s.trim());

    // div containing strings
    if (typeof self.options.stringsElement === 'string') {
      self.stringsElement = document.querySelector(self.options.stringsElement);
    } else {
      self.stringsElement = self.options.stringsElement;
    }

    if (self.stringsElement) {
      self.strings = [];
      self.stringsElement.style.display = 'none';
      const strings = Array.prototype.slice.apply(self.stringsElement.children);
      const stringsLength = strings.length;

      if (stringsLength) {
        for (let i = 0; i < stringsLength; i += 1) {
          const stringEl = strings[i];
          self.strings.push(stringEl.innerHTML.trim());
        }
      }
    }

    // character number position of current string
    self.strPos = 0;

    // current array position
    self.arrayPos = 0;

    // index of string to stop backspacing on
    self.stopNum = 0;

    // Looping logic
    self.loop = self.options.loop;
    self.loopCount = self.options.loopCount;
    self.curLoop = 0;

    // shuffle the strings
    self.shuffle = self.options.shuffle;
    // the order of strings
    self.sequence = [];

    self.pause = {
      status: false,
      typewrite: true,
      curString: '',
      curStrPos: 0
    };

    // When the typing is complete (when not looped)
    self.typingComplete = false;

    // Set the order in which the strings are typed
    for (let i in self.strings) {
      self.sequence[i] = i;
    }

    // If there is some text in the element
    self.currentElContent = this.getCurrentElContent(self);

    self.autoInsertCss = self.options.autoInsertCss;

    this.appendAnimationCss(self);
  }

  getCurrentElContent(self) {
    let elContent = '';
    if (self.attr) {
      elContent = self.el.getAttribute(self.attr);
    } else if (self.isInput) {
      elContent = self.el.value;
    } else if (self.contentType === 'html') {
      elContent = self.el.innerHTML;
    } else {
      elContent = self.el.textContent;
    }
    return elContent;
  }

  appendAnimationCss(self) {
    const cssDataName = 'data-typed-js-css';
    if (!self.autoInsertCss) {
      return;
    }
    if (!self.showCursor && !self.fadeOut) {
      return;
    }
    if (document.querySelector(`[${cssDataName}]`)) {
      return;
    }

    let css = document.createElement('style');
    css.type = 'text/css';
    css.setAttribute(cssDataName, true);

    let innerCss = '';
    if (self.showCursor) {
      innerCss += `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `;
    }
    if (self.fadeOut) {
      innerCss += `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `;
    }
    if (css.length === 0) {
      return;
    }
    css.innerHTML = innerCss;
    document.body.appendChild(css);
  }
}

let initializer = new Initializer();


/**
 * Welcome to Typed.js!
 * @param {string} elementId HTML element ID _OR_ HTML element
 * @param {object} options options object
 * @returns {object} a new Typed object
 */
class Typed {
  constructor(elementId, options) {
    // Initialize it up
    initializer.load(this, options, elementId);
    // All systems go!
    this.begin();
  }

  /**
   * Toggle start() and stop() of the Typed instance
   * @public
   */
  toggle() {
    this.pause.status ? this.start() : this.stop();
  }

  /**
   * Stop typing / backspacing and enable cursor blinking
   * @public
   */
  stop() {
    if (this.typingComplete) return;
    if (this.pause.status) return;
    this.toggleBlinking(true);
    this.pause.status = true;
    this.options.onStop(this.arrayPos, this);
  }

  /**
   * Start typing / backspacing after being stopped
   * @public
   */
  start() {
    if (this.typingComplete) return;
    if (!this.pause.status) return;
    this.pause.status = false;
    if (this.pause.typewrite) {
      this.typewrite(this.pause.curString, this.pause.curStrPos);
    } else {
      this.backspace(this.pause.curString, this.pause.curStrPos);
    }
    this.options.onStart(this.arrayPos, this);
  }

  /**
   * Destroy this instance of Typed
   * @public
   */
  destroy() {
    this.reset(false);
    this.options.onDestroy(this);
  }

  /**
   * Reset Typed and optionally restarts
   * @param {boolean} restart
   * @public
   */
  reset(restart = true) {
    clearInterval(this.timeout);
    this.replaceText('');
    if (this.cursor && this.cursor.parentNode) {
      this.cursor.parentNode.removeChild(this.cursor);
      this.cursor = null;
    }
    this.strPos = 0;
    this.arrayPos = 0;
    this.curLoop = 0;
    if (restart) {
      this.insertCursor();
      this.options.onReset(this);
      this.begin();
    }
  }

  /**
   * Begins the typing animation
   * @private
   */
  begin() {
    this.options.onBegin(this);
    this.typingComplete = false;
    this.shuffleStringsIfNeeded(this);
    this.insertCursor();
    if (this.bindInputFocusEvents) this.bindFocusEvents();
    this.timeout = setTimeout(() => {
      // Check if there is some text in the element, if yes start by backspacing the default message
      if (!this.currentElContent || this.currentElContent.length === 0) {
        this.typewrite(this.strings[this.sequence[this.arrayPos]], this.strPos);
      } else {
        // Start typing
        this.backspace(this.currentElContent, this.currentElContent.length);
      }
    }, this.startDelay);
  }

  /**
   * Called for each character typed
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */
  typewrite(curString, curStrPos) {
    if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
      this.el.classList.remove(this.fadeOutClass);
      if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
    }

    const humanize = this.humanizer(this.typeSpeed);
    let numChars = 1;

    if (this.pause.status === true) {
      this.setPauseStatus(curString, curStrPos, true);
      return;
    }

    // contain typing function in a timeout humanize'd delay
    this.timeout = setTimeout(() => {
      // skip over any HTML chars
      curStrPos = htmlParser.typeHtmlChars(curString, curStrPos, this);

      let pauseTime = 0;
      let substr = curString.substr(curStrPos);
      // check for an escape character before a pause value
      // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
      // single ^ are removed from string
      if (substr.charAt(0) === '^') {
        if (/^\^\d+/.test(substr)) {
          let skip = 1; // skip at least 1
          substr = /\d+/.exec(substr)[0];
          skip += substr.length;
          pauseTime = parseInt(substr);
          this.temporaryPause = true;
          this.options.onTypingPaused(this.arrayPos, this);
          // strip out the escape character and pause value so they're not printed
          curString =
            curString.substring(0, curStrPos) +
            curString.substring(curStrPos + skip);
          this.toggleBlinking(true);
        }
      }

      // check for skip characters formatted as
      // "this is a `string to print NOW` ..."
      if (substr.charAt(0) === '`') {
        while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
          numChars++;
          if (curStrPos + numChars > curString.length) break;
        }
        // strip out the escape characters and append all the string in between
        const stringBeforeSkip = curString.substring(0, curStrPos);
        const stringSkipped = curString.substring(
          stringBeforeSkip.length + 1,
          curStrPos + numChars
        );
        const stringAfterSkip = curString.substring(curStrPos + numChars + 1);
        curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
        numChars--;
      }

      // timeout for any pause after a character
      this.timeout = setTimeout(() => {
        // Accounts for blinking while paused
        this.toggleBlinking(false);

        // We're done with this sentence!
        if (curStrPos >= curString.length) {
          this.doneTyping(curString, curStrPos);
        } else {
          this.keepTyping(curString, curStrPos, numChars);
        }
        // end of character pause
        if (this.temporaryPause) {
          this.temporaryPause = false;
          this.options.onTypingResumed(this.arrayPos, this);
        }
      }, pauseTime);

      // humanized value for typing
    }, humanize);
  }

  /**
   * Continue to the next string & begin typing
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */
  keepTyping(curString, curStrPos, numChars) {
    // call before functions if applicable
    if (curStrPos === 0) {
      this.toggleBlinking(false);
      this.options.preStringTyped(this.arrayPos, this);
    }
    // start typing each new char into existing string
    // curString: arg, this.el.html: original text inside element
    curStrPos += numChars;
    const nextString = curString.substr(0, curStrPos);
    this.replaceText(nextString);
    // loop the function
    this.typewrite(curString, curStrPos);
  }

  /**
   * We're done typing the current string
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */
  doneTyping(curString, curStrPos) {
    // fires callback function
    this.options.onStringTyped(this.arrayPos, this);
    this.toggleBlinking(true);
    // is this the final string
    if (this.arrayPos === this.strings.length - 1) {
      // callback that occurs on the last typed string
      this.complete();
      // quit if we wont loop back
      if (this.loop === false || this.curLoop === this.loopCount) {
        return;
      }
    }
    this.timeout = setTimeout(() => {
      this.backspace(curString, curStrPos);
    }, this.backDelay);
  }

  /**
   * Backspaces 1 character at a time
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @private
   */
  backspace(curString, curStrPos) {
    if (this.pause.status === true) {
      this.setPauseStatus(curString, curStrPos, true);
      return;
    }
    if (this.fadeOut) return this.initFadeOut();

    this.toggleBlinking(false);
    const humanize = this.humanizer(this.backSpeed);

    this.timeout = setTimeout(() => {
      curStrPos = htmlParser.backSpaceHtmlChars(curString, curStrPos, this);
      // replace text with base text + typed characters
      const curStringAtPosition = curString.substr(0, curStrPos);
      this.replaceText(curStringAtPosition);

      // if smartBack is enabled
      if (this.smartBackspace) {
        // the remaining part of the current string is equal of the same part of the new string
        let nextString = this.strings[this.arrayPos + 1];
        if (
          nextString &&
          curStringAtPosition === nextString.substr(0, curStrPos)
        ) {
          this.stopNum = curStrPos;
        } else {
          this.stopNum = 0;
        }
      }

      // if the number (id of character in current string) is
      // less than the stop number, keep going
      if (curStrPos > this.stopNum) {
        // subtract characters one by one
        curStrPos--;
        // loop the function
        this.backspace(curString, curStrPos);
      } else if (curStrPos <= this.stopNum) {
        // if the stop number has been reached, increase
        // array position to next string
        this.arrayPos++;
        // When looping, begin at the beginning after backspace complete
        if (this.arrayPos === this.strings.length) {
          this.arrayPos = 0;
          this.options.onLastStringBackspaced();
          this.shuffleStringsIfNeeded();
          this.begin();
        } else {
          this.typewrite(this.strings[this.sequence[this.arrayPos]], curStrPos);
        }
      }
      // humanized value for typing
    }, humanize);
  }

  /**
   * Full animation is complete
   * @private
   */
  complete() {
    this.options.onComplete(this);
    if (this.loop) {
      this.curLoop++;
    } else {
      this.typingComplete = true;
    }
  }

  /**
   * Has the typing been stopped
   * @param {string} curString the current string in the strings array
   * @param {number} curStrPos the current position in the curString
   * @param {boolean} isTyping
   * @private
   */
  setPauseStatus(curString, curStrPos, isTyping) {
    this.pause.typewrite = isTyping;
    this.pause.curString = curString;
    this.pause.curStrPos = curStrPos;
  }

  /**
   * Toggle the blinking cursor
   * @param {boolean} isBlinking
   * @private
   */
  toggleBlinking(isBlinking) {
    if (!this.cursor) return;
    // if in paused state, don't toggle blinking a 2nd time
    if (this.pause.status) return;
    if (this.cursorBlinking === isBlinking) return;
    this.cursorBlinking = isBlinking;
    if (isBlinking) {
      this.cursor.classList.add('typed-cursor--blink');
    } else {
      this.cursor.classList.remove('typed-cursor--blink');
    }
  }

  /**
   * Speed in MS to type
   * @param {number} speed
   * @private
   */
  humanizer(speed) {
    return Math.round((Math.random() * speed) / 2) + speed;
  }

  /**
   * Shuffle the sequence of the strings array
   * @private
   */
  shuffleStringsIfNeeded() {
    if (!this.shuffle) return;
    this.sequence = this.sequence.sort(() => Math.random() - 0.5);
  }

  /**
   * Adds a CSS class to fade out current string
   * @private
   */
  initFadeOut() {
    this.el.className += ` ${this.fadeOutClass}`;
    if (this.cursor) this.cursor.className += ` ${this.fadeOutClass}`;
    return setTimeout(() => {
      this.arrayPos++;
      this.replaceText('');

      // Resets current string if end of loop reached
      if (this.strings.length > this.arrayPos) {
        this.typewrite(this.strings[this.sequence[this.arrayPos]], 0);
      } else {
        this.typewrite(this.strings[0], 0);
        this.arrayPos = 0;
      }
    }, this.fadeOutDelay);
  }

  /**
   * Replaces current text in the HTML element
   * depending on element type
   * @param {string} str
   * @private
   */
  replaceText(str) {
    if (this.attr) {
      this.el.setAttribute(this.attr, str);
    } else {
      if (this.isInput) {
        this.el.value = str;
      } else if (this.contentType === 'html') {
        this.el.innerHTML = str;
      } else {
        this.el.textContent = str;
      }
    }
  }

  /**
   * If using input elements, bind focus in order to
   * start and stop the animation
   * @private
   */
  bindFocusEvents() {
    if (!this.isInput) return;
    this.el.addEventListener('focus', (e) => {
      this.stop();
    });
    this.el.addEventListener('blur', (e) => {
      if (this.el.value && this.el.value.length !== 0) {
        return;
      }
      this.start();
    });
  }

  /**
   * On init, insert the cursor element
   * @private
   */
  insertCursor() {
    if (!this.showCursor) return;
    if (this.cursor) return;
    this.cursor = document.createElement('span');
    this.cursor.className = 'typed-cursor';
    this.cursor.innerHTML = this.cursorChar;
    this.el.parentNode &&
      this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
  }
}

export default Typed
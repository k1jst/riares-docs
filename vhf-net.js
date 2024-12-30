
/**
 * Input/Replacement hash table
 * @constant {string|string}
 * @type {input_fields {replaces|from}}
 * @see setValues()
 */
const INPUT_VALUES = [
    { valueClass: "callsign", fieldId: "inputCallsign" },
    { valueClass: "firstname", fieldId: "inputName" },
    { valueClass: "qth", fieldId: "inputLocation" }
];
/**
 * Date/Replacement hash table
 * @constant {string|string}
 * @type {input_fields {replaces|from}}
 * @see setDateValues()
 */
const INPUT_DATE_FIELDS = [
    { valueClass: "netdate", fieldId: "netdatePicker" },
    { valueClass: "nextdate", fieldId: "nextdatePicker" }
];


/**
 * Builds choice elements from EXERCISE_CHOICES and 
 * inserts them in the select element exercisePicker.
 * @requires select#exercisePicker
 * @requires EXERCISE_CHOICES
 * @see deploySelectedChoiceExercise()
 */
function buildSelectChoiceExercise() {
    const _DESTINATION = document.querySelector('select#exercisePicker');
    let _result = '';
    for (_choice in EXERCISE_CHOICES) {
        if (_choice === "Comments") {
            _result += '<option value=' + _choice + ' selected>' + _choice + '</option>';
        } else {
            _result += '<option value=' + _choice + ' >' + _choice + '</option>';
        }
    }
    _DESTINATION.innerHTML = _result;
}
/**
 * Builds digital clock in HH:MM:SS format
 * @requires div#time-box--digital-clock
 */
function updateTime() {
    let clock = document.querySelector('div#time-box--digital-clock');
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let zone = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${zone}`;
    setTimeout(updateTime, 1000);
}

/**
 * Using the selection from exercisePicker deploys
 * replacement HTML from EXERCISE_CHOICE in the
 * exercise div element.
 * @see buildSelectChoiceExercise()
 */
function deploySelectedChoiceExercise() {
    const DESTINATION = document.getElementById('exercise');
    const USER_SELECTION_KEY = document.getElementById('exercisePicker').value;
    for (choice in EXERCISE_CHOICES) {
        if (USER_SELECTION_KEY === choice) {
            DESTINATION.innerHTML = EXERCISE_CHOICES[USER_SELECTION_KEY];
        }
    }
}
/**
 * Convert text and numbers to NATO phonetics
 * @param {string} text - Text to be converted to phonetics
 * @returns result - As concat string of phonetic characters with spaces
 */
function convertTextToPhonetic(text) {
    const PHONETIC_ALPHABET = {
        'a': 'Alpha', 'b': 'Bravo', 'c': 'Charlie', 'd': 'Delta',
        'e': 'Echo', 'f': 'Foxtrot', 'g': 'Golf', 'h': 'Hotel',
        'i': 'India', 'j': 'Juliett', 'k': 'Kilo', 'l': 'Lima',
        'm': 'Mike', 'n': 'November', 'o': 'Oscar', 'p': 'Papa',
        'q': 'Quebec', 'r': 'Romeo', 's': 'Sierra', 't': 'Tango',
        'u': 'Uniform', 'v': 'Victor', 'w': 'Whiskey', 'x': 'X-ray',
        'y': 'Yankee', 'z': 'Zulu', '1': 'One', '2': 'Two', '3': 'Three',
        '3': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight',
        '9': 'Niner', '0': 'Zero'
    };
    let result = '';
    for (let char of text.toLowerCase()) {
        if (char in PHONETIC_ALPHABET) {
            result += PHONETIC_ALPHABET[char] + ' ';
        } else {
            result += char + ' ';
        }
    }
    return result.trim();
}
/**
 * Convert an integer to am ordinal string.
 * @param {int} number 
 * @returns {string} ordinal number
 */
function getOrdinalNumber(_number) {
    if (_number > 3 && _number < 21) return _number + 'th';
    switch (_number % 10) {
        case 1: return _number + 'st';
        case 2: return _number + 'nd';
        case 3: return _number + 'rd';
        default: return _number + 'th';
    }
}

/**
 * Sets Cookie values from input field elements
 */
function setCookieValues() {
    if (getCookie('allowCookies')) {
        setCookie('callsign', document.getElementById('inputCallsign').value);
        setCookie('firstname', document.getElementById('inputName').value);
        setCookie('qth', document.getElementById('inputLocation').value);
    }
}
/**
 * Updates the date values in the script from the input field
 * @param {date} replaceDate - Date to format and insert as string
 * @param {string} fieldId - Where to put it
 */
function setDateValues(replaceDate, fieldId) {
    const date = new Date(document.getElementById(fieldId).value + 'T00:00')
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const day = getOrdinalNumber(date.getDate());
    const year = date.getFullYear();
    const y = days[dayOfWeek] + ', ' + months[month] + ' ' + day + ', ' + year;
    const x = document.getElementsByClassName(replaceDate);
    for (let i = 0; i < x.length; i++) {
        x[i].textContent = y;
    }
};
/**
 * On user input records or clears one of two timestamps
 *
 * @param {string} event - start|stop
 * @param {string} action - mark|clear
 */
function recordTimeStamp(event, action) {
    var eventDisplay = document.querySelectorAll('span.time-box--time-stamp--value-' + event);
    var eventButton = document.querySelectorAll('button.time-stamp--button-' + event );
    var eventDisplayDiv = document.querySelectorAll('div.time-box--time-stamp-' + event);
    switch (action) {
        case 'mark':
            for (let i = 0; i < eventDisplay.length; i++) {
                eventDisplay[i].textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
            var index = 0, length = eventButton.length;
            for (; index < length; index++) {
                eventButton[index].style.backgroundColor = "green";
            }
            var index = 0, length = eventDisplayDiv.length;
            for (; index < length; index++) {
                eventDisplayDiv[index].classList.remove("hidden");
            }
            break;
        case 'clear':
            for (let i = 0; i < eventDisplay.length; i++) {
                eventDisplay[i].textContent = '(not marked)';
            }
            var index = 0, length = eventButton.length;
            for (; index < length; index++) {
                eventButton[index].style.backgroundColor = "#444";
            }
            var index = 0, length = eventDisplayDiv.length;
            for (; index < length; index++) {
                eventDisplayDiv[index].classList.add("hidden");
            }
    }
};

/** replaces the value of any class with the value from fieldId.
 * Also converts replacement text to phonetic if the destination class includes phonetic.
 * @param {string} className 
 * @param {*} fieldId 
 */
function alterValueByClass(className, fieldId) {
    const y = document.getElementById(fieldId);
    const x = document.getElementsByClassName(className);
    for (let i = 0; i < x.length; i++) {
        let z = y.value;
        if (x[i].classList.contains('phonetic')) {
            z = convertTextToPhonetic(y.value);
        }
        x[i].textContent = z;
    }
};

/**
 * Set visibility of an element or class and set button state
 * Can be used as a toggle or to set the state
 *
 * @param {string} selector - valid css selector to show/hide
 * @param {string} change - toggle*|show|hide
 * @param {string} button - selectorButton* | valid css selector for button
 */
function setVisibility(selector, change, button) {
    if (!button) { button = "button." + selector + 'Button'}
    if (!change) { change = 'toggle' }
    let _element = document.querySelectorAll(`${selector}`);
    let _button = document.querySelectorAll(`${button}`);
    if (change === 'toggle') {
      for (let i = 0; i < _element.length; i++) {
        if (_element[i].classList.contains('hidden')) {
            _element[i].classList.remove('hidden');
            for (var x = 0; x < _button.length; x++) {
                if (!_button[x].classList.contains('button--state-active')) { _button[x].classList.add('button--state-active'); }
            }
        } else {
            _element[i].classList.add('hidden');
            for (var x = 0; x < _button.length; x++) {
                if (_button[x].classList.contains('button--state-active')) {_button[x].classList.remove('button--state-active');}
          }
        }
      }
    }
    if (change === 'show') {
      for (let i = 0; i < _element.length; i++) {
        if (_element[i].classList.contains('hidden')) {_element[i].classList.remove('hidden');}
        for (let x = 0; x < _button.length; x++) {
            if (!_button[x].classList.contains('button--state-active')) {_button[x].classList.add('button--state-active');}
        }
      }
    }
    if (change === 'hide') {
      for (let i = 0; i < _element.length; i++) {
        if (!_element[i].classList.contains('hidden')) {_element[i].classList.add('hidden');}
        for (let x = 0; x < _button.length; x++) {
            if (_button[x].classList.contains('button--state-active')) {_button[x].classList.remove('button--state-active');}
        }
      }
    }
}


/**
 * Retrieves cookie
 *
 * @param {string} name
 * @returns {string} matches|undefined
 */
function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * Sets cookie
 * Defaults to 1 year and path /
 * @param {string} name
 * @param {string} value 
 * @param {array} attributes - key=value pairs 
 */
function setCookie(name, value, attributes = {}) {
    attributes = {
        path: '/',
        'max-age': 31449600,
    }
    if (attributes.expires instanceof Date) {
        attributes.expires = attributes.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let attributeKey in attributes) {
        updatedCookie += "; " + attributeKey;
        let attributeValue = attributes[attributeKey];
        if (attributeValue !== true) {
            updatedCookie += "=" + attributeValue;
        }
    }
    document.cookie = updatedCookie;
}

/** Validates if cookies are allowed, if so checks for allowCookies cookie or displays cookie consent box */
function reviewCookieStatus() {
    const consentBox = document.getElementById("consentBox");
    if (ALLOW_COOKIE_PROMPT && (ALLOW_COOKIES_OVER_HTTP || window.location.protocol === 'https:')) {
        if (getCookie('allowCookies')) {
            consentBox.classList.add("hide");
            setCookie('allowCookies', 'true');
        } else {
            consentBox.classList.remove("hide");
        }
    } else {
        consentBox.classList.add("hide");
    }
}
/** On user input accept cookies, set allowCookies cookie or throw an error at user */
function acceptCookies() {
    setCookie('allowCookies', 'true');
    if (getCookie('allowCookies')) {
        consentBox.classList.add("hide");
    } else {
        alert
            ("Cookie can't be set! Please" +
                " unblock this site from the cookie" +
                " setting of your browser.");
    }
}
/** On user input decline cookies, hide consent box */
function declineCookies() {
    const consentBox = document.getElementById("consentBox");
    consentBox.classList.add("hide");
}

/** Sets default values in datepicker input boxes */
function setDefaultDatePickerValues() {
    const _now = new Date();
    const tzoffset = _now.getTimezoneOffset() * 6e4;
    const dateTimeString = (new Date(_now - tzoffset)).toISOString().slice(0, 10);
    const nextdateTimeString = (new Date(_now - tzoffset + 12096e5)).toISOString().slice(0, 10);
    document.getElementById('netdatePicker').value = dateTimeString;
    document.getElementById('nextdatePicker').value = nextdateTimeString;
}

/** On user input process checkin text from input box and add it to checkin display
 * @depends setTriggerCheckinAreaEnter() - checkin declared
 */
function recordCheckin() {
    let checkinInput = document.getElementById('checkinbox').value;
    checkins += checkinInput;
    checkins += '\n';
    checkins = checkins.replace("[object HTMLDivElement]", "");
    let k = document.getElementById('checkinreport');
    k.textContent = checkins;
    k.innerHTML = "<span class='checkinline' onclick='alterCheckin(this);'>" + (k.textContent.split("\n").filter(Boolean).join("</span>\n<span class='checkinline' onclick='alterCheckin(this);'>")) + "</span>";
    k.scrollTop = k.scrollHeight;
    document.getElementById('checkinbox').value = null;
}
/**
 * Work in progress
 *
 * @param {string} x - increase|decrease
 */
function alterCheckinAreaFontSize(x) {
    let y = document.getElementById('checkin-area')
    let currentFontSize = 16;
    if (x === 'increase') {
        currentFontSize += 1;
    }
    if (x === 'decrease') {
        currentFontSize -= 1;
    }
    y.style.fontSize = currentFontSize;
    recordCheckin();
}

/**
 * On user input returns value of selected line from display into input text box to be edited
 *
 * @param {string} x - checkin value to be edited
 */
function alterCheckin(x) {
    recordCheckin();
    let p = document.getElementById('checkinbox');
    let t = x.textContent;
    checkins = checkins.replace(t, '');
    p.value = t;
}

/** Assembles a checkin report from custom fields, timestamps, and checkins and copies it to the clipboard */
function copyNetReport_Clipboard() {
    let text = "Net Date: " + document.getElementById('netdatePicker').value + '\n';
    text += "Net Control: " + document.getElementById('inputCallsign').value + ' ' + document.getElementById('inputName').value + ', ' + document.getElementById('inputLocation').value + '\n'
    text += "Net Start Time: " + document.querySelector('span#time-box--time-stamp--value-start').textContent + '\nCheckins:\n';
    text += document.getElementById('checkinreport').textContent;
    text += "\nNet End Time: " + document.querySelector('span#time-box--time-stamp--value-end').textContent;
    navigator.clipboard
        .writeText(text)
        .then(() => {
            alert("Successfully copied checkin report to the clipboard");
        })
        .catch(error => {
            alert("Something went wrong copying to the clipboard. Error:" + error);
        });
}
/** Retrieves saved default values from cookies */
function setDefaultsfromCookies() {
    if (getCookie('allowCookies')) {
        if (getCookie('callsign')) defaultInputCallsign = getCookie('callsign');
        if (getCookie('firstname')) defaultInputName = getCookie('firstname');
        if (getCookie('qth')) defaultInputLocation = getCookie('qth');
    }
}
/** Updates the user input boxes with default values */
function alterInput_Defaults() {
    document.getElementById('inputCallsign').value = defaultInputCallsign;
    document.getElementById('inputName').value = defaultInputName;
    document.getElementById('inputLocation').value = defaultInputLocation;
}
/** Event listener for Enter Key in checkin box input */
function setTriggerCheckinAreaEnter() {
    document.getElementById('checkinbox').onkeydown = function (e) {
        if (e.key == 'Enter') {
            recordCheckin();
        }
    }
    let checkins;
}
/**
 * Fires deploySelectedChoiceExercise to update exercise in script
 * Fires alterValueByClass for all entries in INPUT_VALUES array
 * Fires setCookieValues to assign values from input field values
 * Fires setDateValues to assign date values from INPUT_DATE_FIELDS array
 */
function setValues() {
    deploySelectedChoiceExercise();
    INPUT_VALUES.forEach(inputField => {
        alterValueByClass(inputField.valueClass, inputField.fieldId);
    });
    setCookieValues();
    INPUT_DATE_FIELDS.forEach(inputDateField => {
        setDateValues(inputDateField.valueClass, inputDateField.fieldId);
    });
};

/** Listens for user clicks on text in net script and sets dataset.selected triggering different display with css*/
function setTriggerNetText() {
    Array.from(document.getElementsByClassName('tx', 'net')).forEach(function(item) {
        item.addEventListener('click', function(clickevent) {
            clickedObject = clickevent.target;
            Array.from(document.getElementsByClassName('tx', 'net')).forEach(function(item) {
                if( item == clickedObject && item.dataset.selected != "true" ) {
                   item.dataset.selected = "true";
                } else {
                   item.dataset.selected = "false";
                }
            });
        });
    });
}

/** Initial setup on page load
 * @fires setTriggerCheckinAreaEnter - start listener for Enter in checkin input and declare checkin
 * @fires updateTime - build digital clock and update every 1s
 * @fires reviewCookieStatus - checks if cookies are already allowed and set, hides consent if they are
 * @fires setDefaultsfromCookies - gets cookie values and replaces defaults
 * @fires alterInput_Defaults - changes current text in input fields to default values
 * @fires buildSelectChoiceExercise - builds choices for select input for exercises from hash table
 * @fires setValues - implements choice in exercise selection, updates values from user input boxes and saves them as cookies
 * @fires setTriggerNetText - listens for user clicks on text in net and sets dataset.selected which alters css values
 */
document.addEventListener('DOMContentLoaded', function () {
    setTriggerCheckinAreaEnter();
    updateTime();
    reviewCookieStatus();
    setDefaultsfromCookies();
    alterInput_Defaults();
    setDefaultDatePickerValues();
    buildSelectChoiceExercise();
    setValues();
    setTriggerNetText();
});

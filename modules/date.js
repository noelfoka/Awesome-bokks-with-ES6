// import { DateTime } from "../luxon/src/luxon.js";

import { DateTime } from 'luxon';

const time = document.getElementById('time');
time.innerHTML = DateTime.now();

export default time.innerHTML;

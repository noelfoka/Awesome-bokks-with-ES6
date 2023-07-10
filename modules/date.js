import { DateTime } from '../luxon/src/luxon.js';

const time = document.getElementById('time');
time.innerHTML = DateTime.now();

export default time.innerHTML;

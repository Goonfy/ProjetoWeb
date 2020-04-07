const from_timeEl = document.getElementById('from_time');
const from_ammountEl = document.getElementById('from_ammount');
const to_timeEl = document.getElementById('to_time');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');
 
from_timeEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_timeEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

var timelist = ({
  H: ({H: 1, M: 60, S: 3600, MS: 3600000}),
  M: ({H: 0.0166666667, M: 1, S: 60, MS: 60000}),
  S: ({H: 0.000277777778, M: 0.0166666667, S: 1, MS: 1000}),
  MS: ({H: 0.00000027778, M: 0.000016667, S: 0.001, MS: 1})
});
 
exchange.addEventListener('click', () => {
  const temp = from_timeEl.value;
  from_timeEl.value = to_timeEl.value;
  to_timeEl.value = temp;

  calculate();
});
 
function calculate() {
  const from_time = from_timeEl.value;
  const to_time = to_timeEl.value;

  rateEl.innerText = `1 ${from_time} = ${timelist[from_time][to_time]} ${to_time}`
  to_ammountEl.value = (from_ammountEl.value * timelist[from_time][to_time]);
}
 
calculate();
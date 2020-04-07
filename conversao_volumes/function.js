const from_volumeEl = document.getElementById('from_volume');
const from_ammountEl = document.getElementById('from_ammount');
const to_volumeEl = document.getElementById('to_volume');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');
 
from_volumeEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_volumeEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

var volumeslist = ({
  L: ({L: 1, DL: 10, CL: 100, ML: 1000}),
  DL: ({L: 0.1, DL: 1, CL: 10, ML: 100}),
  CL: ({L: 0.01, DL: 0.1, CL: 1, ML: 10}),
  ML: ({L: 0.001, DL: 0.01, CL: 0.1, ML: 1})
});
 
exchange.addEventListener('click', () => {
  const temp = from_volumeEl.value;
  from_volumeEl.value = to_volumeEl.value;
  to_volumeEl.value = temp;

  calculate();
});
 
function calculate() {
  const from_volume = from_volumeEl.value;
  const to_volume = to_volumeEl.value;

  rateEl.innerText = `1 ${from_volume} = ${volumeslist[from_volume][to_volume]} ${to_volume}`
  to_ammountEl.value = (from_ammountEl.value * volumeslist[from_volume][to_volume]);
}
 
calculate();
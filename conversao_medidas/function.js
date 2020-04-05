const from_lengthmeasureEl = document.getElementById('from_lengthmeasure');
const from_ammountEl = document.getElementById('from_ammount');
const to_lengthmeasureEl = document.getElementById('to_lengthmeasure');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');
 
from_lengthmeasureEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_lengthmeasureEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

var lengthlist = ({
  KM: ({KM: 1, DAM: 10, HM: 100, M: 1000, DM: 10000, CM: 100000, MM: 1000000, MI: 0.621371192, IN: 39370.0787, FT: 3280.8399, YA: 1093.6133}),
  DAM: ({KM: 0.1, DAM: 1, HM: 10, M: 100, DM: 1000, CM: 10000, MM: 100000, MI: 0.0621371192, IN: 3937.00787, FT: 328.08399, YA: 109.36133}),
  HM: ({KM: 0.01, DAM: 0.1, HM: 1, M: 10, DM: 100, CM: 1000, MM: 10000, MI: 0.00621371192, IN: 393.700787, FT: 32.808399, YA: 10.936133}),
  M: ({KM: 0.001, DAM: 0.01, HM: 0.1, M: 1, DM: 10, CM: 100, MM: 1000, MI: 0.000621371192, IN: 39.3700787, FT: 3.2808399, YA: 1.0936133}),
  DM: ({KM: 0.0001, DAM: 0.001, HM: 0.01, M: 0.1, DM: 1, CM: 10, MM: 100, MI: 0.0000621371192, IN: 3.93700787, FT: 0.32808399, YA: 0.10936133}),
  CM: ({KM: 0.00001, DAM: 0.0001, HM: 0.001, M: 0.01, DM: 0.1, CM: 1, MM: 10, MI: 0.00000621371192, IN: 0.393700787, FT: 0.032808399, YA: 0.010936133}),
  MM: ({KM: 0.000001, DAM: 0.00001, HM: 0.0001, M: 0.001, DM: 0.01, CM: 0.1, MM: 1, MI: 0.000000621371192, IN: 0.0393700787, FT: 0.0032808399, YA: 0.0010936133}),
  MI: ({KM: 1.609344, DAM: 16.09344, HM: 160.9344, M: 1609.344, DM: 16093.44, CM: 160934.4, MM: 1609344.0, MI: 1, IN: 63360, FT: 5280, YA: 1760}),
  FT: ({KM: 0.0003048, DAM: 0.003048, HM: 0.03048, M: 0.3048, DM: 3.048, CM: 30.48, MM: 304.8, MI: 0.000189393939, IN: 12, FT: 1, YA: 0.333333333}),
  IN: ({KM: 0.0000254, DAM: 0.000254, HM: 0.00254, M: 0.0254, DM: 0.254, CM: 2.54, MM: 25.4, MI: 0.000015782828282828283, IN: 1, FT: 0.0833333333, YA: 0.0277777778}),
  YA: ({KM: 0.0009144, DAM: 0.009144, HM: 0.09144, M: 0.9144, DM: 9.144, CM: 91.44, MM: 914.4, MI: 0.000568181818, IN: 36, FT: 3, YA: 1})
});
 
exchange.addEventListener('click', () => {
  const temp = from_lengthmeasureEl.value;
  from_lengthmeasureEl.value = to_lengthmeasureEl.value;
  to_lengthmeasureEl.value = temp;

  calculate();
});
 
function calculate() {
  const from_lengthmeasure = from_lengthmeasureEl.value;
  const to_lengthmeasure = to_lengthmeasureEl.value;

  rateEl.innerText = `1 ${from_lengthmeasure} = ${lengthlist[from_lengthmeasure][to_lengthmeasure]} ${to_lengthmeasure}`
  to_ammountEl.value = (from_ammountEl.value * lengthlist[from_lengthmeasure][to_lengthmeasure]);
}
 
calculate();
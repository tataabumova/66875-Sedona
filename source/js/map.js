/****************Карта***************/
var myMap;
  ymaps.ready(init);
function init () {
  myMap = new ymaps.Map('map', {
  center: [34.739346, -111.761403], 
  zoom: 10,
  controls: ['smallMapDefaultSet']
  });
  console.log(myMap);
}

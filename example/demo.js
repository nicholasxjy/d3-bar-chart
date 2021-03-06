var data = [{
  forecast: "",
  actual: "51.5",
  timestamp: 1456873200,
  human_date: "2016-03-01 23:00:00"
}, {
  forecast: "",
  actual: "58.3",
  timestamp: 1459548000,
  human_date: "2016-04-01 22:00:00"
}, {
  forecast: "",
  actual: "56.9",
  timestamp: 1470088800,
  human_date: "2016-08-01 22:00:00"
}, {
  forecast: "",
  actual: "49.1",
  timestamp: 1472767200,
  human_date: "2016-09-01 22:00:00"
}, {
  forecast: "",
  actual: "55.1",
  timestamp: 1475532000,
  human_date: "2016-10-03 22:00:00"
}, {
  forecast: "",
  actual: "52.1",
  timestamp: 1478008800,
  human_date: "2016-11-01 22:00:00"
}, {
  forecast: "",
  actual: "53",
  timestamp: 1480604400,
  human_date: "2016-12-01 23:00:00"
}, {
  forecast: "",
  actual: "",
  timestamp: 1483455600,
  human_date: "2017-01-03 23:00:00"
}, {
  forecast: "",
  actual: "",
  timestamp: 1485961200,
  human_date: "2017-02-01 23:00:00"
},{
  forecast: "41.5",
  actual: "",
  timestamp: 1488367600,
  human_date: "2016-03-01 23:00:00"
},{
  forecast: "51.5",
  actual: "",
  timestamp: 1494367600,
  human_date: "2016-04-01 23:00:00"
},{
  forecast: "31.5",
  actual: "",
  timestamp: 1497367600,
  human_date: "2016-05-01 23:00:00"
}]

let list = []
data.forEach(d => {
  if (d.actual || d.forecast) {
    if (!d.actual && d.forecast) {
      list.push({
        value: d.forecast,
        timestamp: d.timestamp,
        human_date: d.human_date,
        symbol: 'forecast',
        color: '#999'
      })
    } else {
      list.push({
        value: d.actual,
        timestamp: d.timestamp,
        human_date: d.human_date,
        symbol: 'actual',
        color: '#1478F0'
      })
    }
  }
})



var chart = new BarChart({
  xTicks: 6,
  yTicks: 6,
  margin: {
    top: 25,
    left: 20,
    bottom: 20,
    right: 40
  }
})
chart.renderMultiBars(list)

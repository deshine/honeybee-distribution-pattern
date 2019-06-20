# Honeybee Distribution Pattern SPA

This single page app uses the open FDA API to show the distribution_pattern of states over the past 12 months. Most of the work is done on the front end using Vue.js, Chart.js, and jQuery.

## Getting Started

You can view the app here: https://deshine.github.io/honeybee-distribution-pattern/

or

Clone to your computer. Run 'npm install' from project root to download dependencies. From project root, run 'node app.js' to start the node server. View the application at http://localhost:3000/

### Prerequisites

Node.js, 

### Description

* The single page app will start by showing the number of nationwide drug recall enforcement reports over the past 12 months.

* When a state checkbox is checked, the number of reports corresponding to that state will be fetched using the open FDA API and shown on the chart.

* If a state checkbox is unchecked, the dataset will be hidden, but not removed so that if it is checked again, it can be recalled without having to query the API again.

## Built With

* [Node.js](https://nodejs.org)
* [Express.js](https://expressjs.com/)
* [Vue.js](https://vuejs.org/)
* [Chart.js](https://www.chartjs.org)


## License

This project is licensed under the MIT License

const moment = require('moment');

function Employee(props) {
  this.first_name = props.first_name || "";
  this.last_name = props.last_name || "";
  this.position = props.position || "";
  this.meetings = [];
  this.schedule = function(meeting) {
    this.meetings.push(meeting);
  }
  this.meetings_per_week = function() {
    let mpw = []; // will hold totals of meetings per week
    for (let meeting of this.meetings) {
      let dt = moment(meeting.time);
      let week = dt.week();
      if (undefined === mpw[week]) {
        mpw[week] = 1;
      } else {
        mpw[week] += 1;
      }
    }
    let avg_mpw = mpw.reduce((acc, cv) => acc += cv / (mpw.length - 1), 0);
    return avg_mpw;
  }
}

module.exports = Employee;
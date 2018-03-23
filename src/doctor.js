import $ from 'jquery';
export class DoctorSearch {

  constructor(issue, doctor) {
    this.issue = issue;
    this.doctor = doctor;
    this.location = or-portland; //necessary?//
  }

  findDoctor(doctor) {
    // let location = this.location;
    // let doctor = this.doctor;
    const apiKey = process.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${doctor}&location=${location}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(response => {showResults(results)
    }).fail(() => 'Unfortunately, there was an error. Please try again shortly.')
  }

  showSpecialist(issue) {
    // let location = this.location;
    // let issue =  this.issue;
    const apiKey = process.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(response =>
    {showResults(results)
    }).fail(() => 'Unfortunately, there was an error. Please try again shortly.')
  }

}

// API for Portland,OR  ('https://api.betterdoctor.com/2016-03-01/doctors?user_location=37.773%2C-122.413&skip=0&limit=10&user_key=9bdb5b28a2e985c4ad2c1017ac5e8887&location=or-portland')

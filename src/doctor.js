import $ from 'jquery';
export class DoctorSearch {

  constructor(issue, doctor) {
    this.issue = issue;
    this.doctor = doctor;
    this.location = or-portland; //necessary?//
  }

  findDoctor(doctor) {
    let location = this.location
    const apiKey = process.exports.apiKey
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}&location=${location}`).then(response => {showResults(results)
    }).fail(() => 'Unfortunately, there was an error. Please try again shortly.')
  }

}


// original API with longitude lattitude: `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`
//

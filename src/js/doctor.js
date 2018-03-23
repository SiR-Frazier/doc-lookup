import $ from 'jquery';

export class DoctorSearch {

  constructor(medicalIssue, doctor, location) {
    this.medicalIssue = medicalIssue;
    this.doctor = doctor;
    this.location = location; //necessary?//
  }

  findDoctor(doctor) {
    let location = this.location
    const apiKey = process.exports.apiKey
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&user_location=${location}&skip=0&limit=10&user_key=${apiKey}`).then(response => {showResults(results)
    }).fail(() => 'Unfortunately, there was an error. Please try again shortly.')
  }

}


//original API with longitude lattitude: `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`

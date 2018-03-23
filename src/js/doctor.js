

export class DoctorSearch {

  constructor(medicalIssue, doctor) {
    this.medicalIssue = medicalIssue;
    this.doctor = doctor;
  }

  findDoctor(doctor) {
    const apiKey = process.exports.apiKey
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(response => {showResults(results)
    }).fail(() => 'Unfortunately, there was an error. Please try again shortly.')
  }
}

import $ from 'jquery';
// const apiKey = "9bdb5b28a2e985c4ad2c1017ac5e8887"
const parseDoc = (docInfo) => {
  return `
    <li>
      <div>
        <span>${docInfo.profile.first_name}</span>
        <span>${docInfo.profile.last_name}</span>
      </div>
    </li>
  `
}
export default class DoctorSearch {

  constructor() {
    // this.issue = issue;
    // this.doctor = doctor;
    // this.location = "or-portland"; //necessary?//
  }

findDoctor(doctor) {
  debugger
    const apiKey = process.exports.apiKey;

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`)
      .then(resp => {
        // const docFirstName = resp.data[0].profile.first_name
        console.log(resp)
        resp.data.map(docInfo => $(".showDoctors").append(parseDoc(docInfo)))
      })
      .catch(() => alert('Unfortunately, there was an error. Please try again shortly.'))
  }

  showSpecialist(issue) {
    // const apiKey = process.exports.apiKey;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(response =>
    {showResults(results)
    }).fail(() => 'Unfortunately, there was an error. Please try again shortly.')
  }

}

// API for Portland,OR  ('https://api.betterdoctor.com/2016-03-01/doctors?user_location=37.773%2C-122.413&skip=0&limit=10&user_key=9bdb5b28a2e985c4ad2c1017ac5e8887&location=or-portland')

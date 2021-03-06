import $ from 'jquery';
const apiKey = "9bdb5b28a2e985c4ad2c1017ac5e8887"

const showDocInfo = function(docInfo) {
    return `
      <ul>
        <li>
          <p>Name: ${docInfo.doctorName}</p>
          <p>Bio: ${docInfo.bio}</p>
          <p>Address: ${docInfo.address}, ${docInfo.city}, ${docInfo.state}, ${docInfo.zip}</p>
          <p>Phone Number: ${docInfo.phoneNumber.number}</p>
          <p>Specialty: ${docInfo.specialty}</p>
          <p>Website: ${docInfo.site}</p>
          <p>Accepting new patients: ${docInfo.patients}</p>
        </li>
      </ul>
    `
}

export default class DoctorSearch {

  findDoctor(doctor) {
      // const apiKey = process.env.apiKey;
      if (doctor.length === 0) {
        alert("Please enter a name")
        return
      }
      const docInfo = [];
      $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`).then(resp => {
        resp.data.forEach(function(doctor) {
          if (resp.data.length ===  0) {
            alert("There are zero results.")
            return;
          } else {
              const doctorName = doctor.profile.last_name + "," + doctor.profile.first_name;
              const bio = doctor.profile.bio;
              const specialty = doctor.specialties[0].name;
              const phoneNumber = doctor.practices[0].phones[0];
              const address = doctor.practices[0].visit_address.street;
              const city = doctor.practices[0].visit_address.city;
              const state = doctor.practices[0].visit_address.state;
              const zip = doctor.practices[0].visit_address.zip;
              const patients = doctor.practices[0].accepts_new_patients;
              const site = doctor.practices[0].website;
              const docInfo = ({doctorName, bio, specialty, phoneNumber, address, city, state, zip, patients, site});
              $('.showDoctors').append(showDocInfo(docInfo));
          return docInfo;
        }
        })
      }).fail(() => alert('Unfortunately, there was an error. Please try again shortly.'))
    }

  showSpecialist(issue) {
    if (issue.length === 0) {
      alert("Please enter your medical issue")
      return
    }
    const docInfo = [];
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(resp => {
      resp.data.forEach(function(issue) {
        if (resp.data.length ===  0) {
          alert("There are zero results.")
          return;
        } else {
            const doctorName = issue.profile.last_name + "," + issue.profile.first_name;
            const bio = issue.profile.bio;
            const specialty = issue.specialties[0].name;
            const phoneNumber = issue.practices[0].phones[0];
            const address = issue.practices[0].visit_address.street;
            const city = issue.practices[0].visit_address.city;
            const state = issue.practices[0].visit_address.state;
            const zip = issue.practices[0].visit_address.zip;
            const patients = issue.practices[0].accepts_new_patients;
            const site = issue.practices[0].website;
            const docInfo = ({doctorName, bio, specialty, phoneNumber, address, city, state, zip, patients, site});
            $('.showDoctors').append(showDocInfo(docInfo));
        return docInfo;
      }
      })
    }).fail(() => alert('Unfortunately, there was an error. Please try again shortly.'))
  }
}

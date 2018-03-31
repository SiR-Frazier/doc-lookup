import $ from 'jquery';
const apiKey = "9bdb5b28a2e985c4ad2c1017ac5e8887"

export default class DoctorSearch {

  // constructor() {
  //   this.issue = issue;
  //   this.doctor = doctor;
  // }

  findDoctor(doctor) {
      // let apiKey = process.env.apiKey;
      const docInfo = [];
      $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`).then(resp => {
        resp.data.forEach(function(doctor) {
            if(doctor) {
              const doctorName = doctor.profile.last_name + "," + doctor.profile.first_name;
              const bio = doctor.profile.bio;
              const specialty = doctor.specialties[0].name;
              const phoneNumber = doctor.practices[0].phones[0];
              const address = doctor.practices[0].visit_address.street;
              const patients = doctor.practices[0].accepts_new_patients;
              docInfo.push({doctorName, bio, specialty, phoneNumber, address, patients});
              console.log(docInfo);
              $('.showDoctors').append(`<li>${doctorName}</li>`);
          return docInfo;
        }
        fail(() => alert('Unfortunately, there was an error. Please try again shortly.'))
      })
    });
  }
  //**LOOK TO ADD APPEND instead of push. using hardcode for AP
  showSpecialist(issue) {
    const docInfo = [];
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(resp => {
      resp.data.forEach(function(issue) {
          if(issue) {
            const doctorName = issue.profile.last_name + "," + issue.profile.first_name;
            const bio = issue.profile.bio;
            const specialty = issue.specialties[0].name;
            const phoneNumber = issue.practices[0].phones[0];
            const address = issue.practices[0].visit_address.street;
            const patients = issue.practices[0].accepts_new_patients;
            docInfo.push({doctorName, bio, specialty, phoneNumber, address, patients});
            console.log(docInfo);
            $('.showDoctors').append(`<li>${doctorName}</li>`);
        return docInfo;
      }

    })
    }).catch(() => alert('Unfortunately, there was an error. Please try again shortly.'))
  }
}

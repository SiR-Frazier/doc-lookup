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
          for (let i = 0; i <resp.data.length; i ++) {
            if(resp.data.length > 0) {
              let doctor = resp.data[i].profile.last_name + "," + resp.data[i].profile.first_name;
              let bio = resp.data[i].profile.bio;
              let specialty = resp.data[i].specialties[0].name;
              let phoneNumber = resp.data[i].practices[0].phones;
              let address = resp.data[i].practices[0].visit_address.street;
              let patients = resp.data[i].practices[0].accepts_new_patients;
              docInfo.append(resp.data[i].length);
              console.log(docInfo);
          }
          return docInfo;
        }
        fail(() => alert('Unfortunately, there was an error. Please try again shortly.'))
      })
    });
  }
  //**LOOK TO ADD APPEND instead of push. using hardcode for AP
  showSpecialist(issue) {
    let docInfo = [];
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(resp => {
      resp.data.forEach(function(doctor) {
        for (let i = 0; i <resp.data.length; i ++) {
          if(resp.data.length > 0) {
            let doctor = resp.data[i].profile.last_name + "," + resp.data[i].profile.first_name;
            let bio = resp.data[i].profile.bio;
            let specialty = resp.data[i].specialties[0].name;
            let phoneNumber = resp.data[i].practices[0].phones;
            let address = resp.data[i].practices[0].visit_address.street;
            let patients = resp.data[i].practices[0].accepts_new_patients;
            docInfo.push(resp.data[i].length);
            console.log(doctor);
          }
          return docInfo;
        }
        fail(() => alert('Unfortunately, there was an error. Please try again shortly.'))
      })
    });
  }
}

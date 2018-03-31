import $ from 'jquery';
const apiKey = "9bdb5b28a2e985c4ad2c1017ac5e8887"
// const parseDoc = (docInfo) => {
//   return `
//     <li>
//       <div>
//         <span>${docInfo.profile.first_name}</span>
//         <span>${docInfo.profile.last_name}</span>
//         <span>${docInfo.visit_address.street}</span>
//         <span>${docInfo.phones.number}</span>
//         <span>${docInfo.practices.accepts_new_patients}</span>
//       </div>
//     </li>
//   `
// }
export default class DoctorSearch {

  constructor() {
    // this.issue = issue;
    // this.doctor = doctor;
    // this.location = "or-portland"; //necessary?//
  }

findDoctor(doctor) {
    // let apiKey = process.env.apiKey;
    const docInfo = [];
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`).then(resp => {
      resp.data.forEach(function(doctor) {
        for (let i = 0; i <resp.data.length; i ++) {
          let doctor = resp.data[i].profile.last_name + "," + resp.data[i].profile.first_name;
          let specialty = resp.data[i].specialties.uid;
          // let phoneNumber = resp.data[i].phones.number;
          let address = resp.data[i].practices.visit_address;
        }
        console.log(doctor);
        // docInfo.push([doctor.profile.first_name]);
        // docInfo.push([doctor.profile.last_name]);
        // docInfo.push([doctor.phones.number]);
        // docInfo.push([doctor.practices.accepts_new_patients]);
        // docInfo.push([doctor.practices.visit_address]);
        // docInfo.push([doctor.specialties.uid]);
      });
      return docInfo;
      })
      .fail(() => alert('Unfortunately, there was an error. Please try again shortly.'))
  }
  //**LOOK TO ADD APPEND instead of push. using hardcode for AP
  // showSpecialist(issue) {
  //   let docInfo = [];
  //   $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`).then(resp => {  resp.data.forEach(function(doctor) {
  //     docInfo.push([doctor.profile.first_name]);
  //     docInfo.push([doctor.profile.last_name]);
  //     docInfo.push([doctor.phones.number]);
  //     docInfo.push([doctor.practices.accepts_new_patients]);
  //     docInfo.push([doctor.practices.visit_address]);
  //     docInfo.push([doctor.specialties.uid])
  //   });
  //   return docInfo;
  //   })
  //   .fail(() => alert('Unfortunately, there was an error. Please try again shortly.'))
  // }

}

// API for Portland,OR  ('https://api.betterdoctor.com/2016-03-01/doctors?user_location=37.773%2C-122.413&skip=0&limit=10&user_key=9bdb5b28a2e985c4ad2c1017ac5e8887&location=or-portland')

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import DoctorSearch from './doctor.js';

import './styles.css';


const showResults = response => {
  // results:
  // let firstName = response.data[i].profile.first_name;
  // let lastName = response.data[i].profile.last_name;
  // let address = response.data[i].visit_address.street;
  // let phoneNumber = response.data[i].phones.number;
  // let newPatients = response.data[i].practices.accepts_new_patients;
}

$(document).ready(function() {
  const doctorSearch = new DoctorSearch();

  $('#search').click(function() {
    event.preventDefault();
    $('.showDoctors').empty();
    let doctor = $('#doctor').val();
    $('#showDoctors').text(`Here's a list of doctors near you:`)
    DoctorSearch.prototype.findDoctor(doctor)

  });

  // $('#search').click(function() {
  //   event.preventDefault();
  //   $('.showDoctors').empty();
  //   let issue = $('#issue').val();
  //   $('#showDoctors').text(`Here's a list of doctors:`)
  //   DoctorSearch.prototype.showSpecialist(issue)
  // });

});

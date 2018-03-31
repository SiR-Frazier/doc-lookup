import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import DoctorSearch from './doctor.js';

import './styles.css';



$(document).ready(function() {
  const doctorSearch = new DoctorSearch();

  $('#search').click(function() {
    event.preventDefault();
    $('.showDoctors').empty();
    let doctor = $('#doctor').val();
    $('#showDoctors').text(`Here's a list of doctors near you:`)
    DoctorSearch.prototype.findDoctor(doctor)
  });

  $('#search').click(function() {
    event.preventDefault();
    $('.showDoctors').empty();
    let issue = $('#issue').val();
    $('#showDoctors').text(`Here's a list of doctors:`);
    DoctorSearch.prototype.showSpecialist(issue);
  });

});

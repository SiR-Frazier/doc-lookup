import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { DoctorSearch } from './../doctor.js';
import './styles.css';
import '../.env';

const showResults = response => {}

$(document).ready(function() {
  let doctorSearch = new DoctorSearch();

  $('#search').click(function() {
    event.preventDefault();
    $('.showDoctors').empty()
    let doctor = $('#doctor').val();
    $('#showDoctors').text(`Here's a list of doctors near you:`)
    DoctorSearch.prototype.findDoctor(issue,doctor)
  });

  $('#search').click(function() {
    event.preventDefault();
    $('.showDoctors').empty()
    let issue = $('#issue').val();
    $('#showDoctors').text(`Here's a list of doctors near you:`)
    DoctorSearch.prototype.findDoctor(issue,doctor)
  });

});

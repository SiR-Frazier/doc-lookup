import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorSearch } from './../js/doctor.js';
import './styles.css';
import '../.env';

const showResults = response => {}

$(document).ready(function() {
  let doctorSearch = new DoctorSearch();

  $('#search').click(function() {
    event.preventDefault();
    $('.showDoctors').empty()
    let doctor = $('#doctor').val();

  });

});

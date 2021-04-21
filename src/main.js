import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NewsService from './services/news-service'; // the class then the file 

function clearFields() { //clear all inpur fields
  $('#show-story').text("");
}

function getElements(response) { //4
  if (response.status === "OK") { //if correct to the API response exists
    response.results.forEach(result => {
      $('#show-story').append(`<li><a href="${result.url}">${result.title}</a></li>`); //show response name
      $('#show-story').append(`<a href="${result.url}"><img src="${result.multimedia[2].url}"></a>`);
    });
    // $("#imageBox").html(`<img src="${response.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.status}`); //show response error message.
  }
}


$(document).ready(function() { //1
  $('#getStories').click(function() {
    const selectedSections = $("#sections option:selected").val(); //take in user value
    clearFields(); //run clear fields
    NewsService.getNews(selectedSections) //call recipe class and getrecipe method pass userSearch  
      .then(function(response) { //take response and pass to getElements
        getElements(response); //call getElements with response  //3
      });
  });
});
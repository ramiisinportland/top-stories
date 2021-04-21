export default class NewsService {  
  static getNews(searchTerm) {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${searchTerm}.json?api-key=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}
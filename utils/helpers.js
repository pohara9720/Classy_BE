var axios = require("axios");
var config = require("../api.js")
console.log(config);

var helpers = {

getPotato: function() {
    return axios.get(`${config.url}/api`)
      .then(function(results) {
        console.log("axios results for grabbing all potatoes", results);
        return results;
      });
  },
savePotato: function({name, location, image, review,rating}) {
    var newPotato = {
    	name, 
    	location,
    	image,
    	review, 
    	 rating 
    	}
    return axios.post(`${config.url}/api`, newPotato)
      .then(function(response) {
        console.log("axios results for posting new potato", response);
        return response;
      });
  },
  loginPotato: function({name, location, image}) {
    var newPotato = {
      name, 
      location,
      image
      }
    return axios.post(`${config.url}/api`, newPotato)
      .then(function(response) {
        console.log("axios results for posting new potato after login", response);
        return response;
      });
  },


  pushInfo: function({id,reviews,ratings}){
    var info = {
      id,
      reviews,
      ratings
    }
    return axios.post(`${config.url}/add`, info).then(function(response){
      console.log("axios results for pushing info",response);
      return response;
    })
  },

/////////FUNCTIONS FOR GENERATING PROFILE //////////

findPotato: function(id){
  var id = {
    id: id
  };
return axios.post(`${config.url}/potatoProfile`,id).then(function(results){
  console.log("potato found",results);
  return results;
  })
},

noDouble: function({name,location,image}){
  var find = {
    name,
    location,
    image
  };
  return axios.post(`${config.url}/single`,find).then(function(results){
    console.log("posting searching existing potato",results);
    return results;
  })
},



  //  deletePotato: function(name, location, image, review,rating) {
  //   return axios.delete("/api/saved", {
  //     params: {
  //       "title": title,
  //       "data": data,
  //       "url": url
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("axios results", results);
  //     return results;
  //   });
  // }



}

module.exports = helpers;
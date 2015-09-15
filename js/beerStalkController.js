beerStalker.controller('BeerStalkController',['$scope', '$resource', function($scope, $resource) {

  var self = this;
  // var searchResource = $resource('https://api.meetup.com/2/open_events.json?:text&:key')

  // self.searchResult = searchResource.get(
  //   {text: "text=beer",
  //    key: 'key=646f252216306e6d712d7c536a3c2565'}
  //   );

/////////////////////////////
  // var searchResource = $resource('https://api.meetup.com/2/open_events.json?and_text=true&:text&:country&:city&:key',
  //   {text: "text=free+beer", 
  //     country: "country=gb", 
  //     city: variable, 
  //     key: 'key=646f252216306e6d712d7c536a3c2565', 
  //     callback:'JSON_CALLBACK'}, 
  //   {get:{method:'JSONP'}})
/////////////////////

// self.tasks = [];

//   self.addTask = function() {
//     self.tasks.push(
//       { 
//         "name" : self.taskName,
//         "completed": false
//       });
//     self.taskName = ''
//   };

// function search(){
//   searchResource.get().$promise.then(function(response){
//       self.searchResult = response.results;
//       console.log(self.searchResult[0].name)
//   });
// }

  $scope.search = function() {
  var searchResource = $resource('https://api.meetup.com/2/open_events.json?and_text=true&:text&:country&city=:city&:key',
    {text: "text=free+beer", 
      country: "country=gb",
      city: $scope.cityName, 
      key: 'key=646f252216306e6d712d7c536a3c2565', 
      callback:'JSON_CALLBACK'}, 
    {get:{method:'JSONP'}})

      searchResource.get().$promise.then(function(response){
          self.searchResult = response.results;
          console.log(self.searchResult[0].name)
      });

  }

}]);
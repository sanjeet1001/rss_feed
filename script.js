
var app = angular.module('feedApp', ['ngMaterial','ngTable']);

app.controller('feedRead',function($scope, $http,NgTableParams,$filter){



$scope.init =function(){
   var url ='http://feeds.feedburner.com/FeaturedBlogPosts-DataScienceCentral?format=xml';
   $http.jsonp("https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=" + url + "&callback=JSON_CALLBACK")
          .then(function (response) {
              $scope.resFeed = response.data.responseData.feed;
              $scope.tableParams = new NgTableParams({}, { dataset: $scope.resFeed.entries});
              console.log(response.data.responseData.feed);
          }, function (error) {
              
          });
}

});
  


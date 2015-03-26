(function() {
  var app = angular.module('toDoList', []);

  app.controller('ListController', function(){

    this.tasks = [];
    this.auxtask = {};
    this.dateToday = formatDate(new Date());

    this.currentPage = 0;
    this.pageSize = 3;
    
    this.adding = false;
    this.updating = false;

    this.addTask = function(){
      this.auxtask.hided = true;
      this.tasks.push(angular.copy(this.auxtask));
      this.auxtask = {};
    };
  
    this.updateTask = function(){
      this.auxtask.hided = true;
      this.auxtask = {};
    };

    this.deleteTask = function(index){
      this.tasks.splice(index, 1);
    };

    this.numberOfPages=function(){
        return Math.ceil(this.tasks.length/this.pageSize);                
    };

    function formatDate(d) {

      var dd = d.getDate();
      if ( dd < 10 ) dd = '0' + dd;

      var mm = d.getMonth()+1;
      if ( mm < 10 ) mm = '0' + mm;

      var yyyy = d.getFullYear();

      return yyyy+'-'+mm+'-'+dd;
    };
  });

  app.filter('startFrom', function() {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
      }
  });
})();

 angular.module('blogApp')
 .controller('authControler', function($scope,addPost){
   $scope.savePost = function(){
     var data = {};
     data.postTitle   = $scope.postTitle;
     data.postContent = $scope.htmlVariable;
     data.postAuthor  = 'Hasan';
     addPost.addPost(data);
   }

 });
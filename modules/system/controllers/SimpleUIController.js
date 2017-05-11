angular.module('ylApp').controller('SimpleUIController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();

        $scope.selectModel = [{id:1,name:'name1'},{id:2,name:'name2'}];









        if($('.page-container').height()+68 > $(window).height() ){
            console.log('有滚动条')
            $rootScope.settings.layout.pageNoScoll = false;
        }else{
            console.log(`当前的正高度高度为：${$('.page-container').height()+68} 小于页面的高度${$(window).height()}`)
            $rootScope.settings.layout.pageNoScoll = true;
        }


    });


});/**
 * Created by zhankun on 2017/5/9.
 */

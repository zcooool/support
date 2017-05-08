/* Setup general page controller */
angular.module('ylApp').controller('GeneralPageController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	App.initAjax();

        if($('.page-container').height()+68 > $(window).height() ){
            console.log('有滚动条')
            $rootScope.settings.layout.pageNoScoll = false;
        }else{
            console.log(`当前的正高度高度为：${$('.page-container').height()+68} 小于页面的高度${$(window).height()}`)
            $rootScope.settings.layout.pageNoScoll = true;
        }
    });
}]);

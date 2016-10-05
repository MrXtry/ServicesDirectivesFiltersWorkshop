/// <reference path="../angular.js" />

angular.module("mainModule")
    .directive("successButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    clicked: "=ngModel"
                },
                templateUrl: "Scripts/Directives/Success-Button/Success-Button.html"


                // Use templateUrl or the other template
                //template: `
                //    <button type="submit"
                //            ng-click="clicked = true"
                //            class ="btn btn-success">
                //            <span class ="glyphicon glyphicon-check"
                //                ng-show="clicked"></span>
                //        Success!
                //    </button>
                //`
            }
        }
    ]);
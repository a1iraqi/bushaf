var app = angular.module('app', ['ngRoute']);

app.controller('ctrl', function($scope, $http, $timeout)
{
    $scope.showSuccess;

    $scope.addRequest = function(name, phoneNumber, udid, senderName, bankName)
    {
        $http(
        {
            method:'POST',
            data:
            {
                'name':name,
                'phoneNumber':phoneNumber,
                'udid':udid,
                'senderName':senderName,
                'bankName':bankName
            },
            url:'services/post.php'
        }).then(function(response)
        {
            if(response.data == 1)
            {
                $scope.showSuccess = true;

                $timeout(function()
                {
                    window.location.reload();
                    window.location.href = "#!/main";
                }, 1000);
            }

            else
            {
                $scope.showSuccess = false;
                alert('ظپط´ظ„ ظپظٹ ط¥ط±ط³ط§ظ„ ط§ظ„ط·ظ„ط¨, ط¹ط§ظˆط¯ ط§ظ„ظ…ط­ط§ظˆظ„ط© ظ„ط§ط­ظ‚ط§ظ‹!');
                window.location.reload();
            }

            var name = document.getElementById('name'),
                phoneNumber = document.getElementById('phoneNumber'),
                udid = document.getElementById('udid'),
                senderName = document.getElementById('senderName'),
                bankName = document.getElementById('bankName');

            name.value = '';
            phoneNumber.value = '';
            udid.value = '';
            senderName.value = '';
            bankName.value = '';
        });
    }
});


app.config(['$routeProvider', function($routeProvider)
{
    $routeProvider

    .when('/',
    {
        redirectTo:'/main'
    })

    .when('/main',
    {
        templateUrl:'pages/main.html'
    })

    .when('/features',
    {
        templateUrl:'pages/features.html'
    })

    .when('/banks',
    {
        templateUrl:'pages/banks.html'
    })

    .when('/buy',
    {
        templateUrl:'pages/buy.html'
    })

    .when('/groups',
    {
        templateUrl:'pages/groups.html'
    })

    .when('/rules',
    {
        templateUrl:'pages/rules.html'
    })

    .when('/pro1',
    {
        templateUrl:'pages/groups/pro1.html'
    })

    .when('/pro2',
    {
        templateUrl:'pages/groups/pro2.html'
    })

    .when('/pro3',
    {
        templateUrl:'pages/groups/pro3.html'
    })

    .when('/pro4',
    {
        templateUrl:'pages/groups/pro4.html'
    })

    .when('/pro5',
    {
        templateUrl:'pages/groups/pro5.html'
    })

    .when('/pro6',
    {
        templateUrl:'pages/groups/pro6.html'
    })

    .when('/pro7',
    {
        templateUrl:'pages/groups/pro7.html'
    })

    .when('/pro8',
    {
        templateUrl:'pages/groups/pro8.html'
    })

    .when('/pro9',
    {
        templateUrl:'pages/groups/pro9.html'
    })
    .when('/pro',
    {
        templateUrl:'pages/groups/pro.html'
    })

    .otherwise(
    {
        redirectTo:'/main'
    });
}]);

/*
// My Custom Filter

app.filter('addAlpha', function()
{
    return function()
    {
        
    }
});

// My Custom Directive

app.directive('headingTitle', function()
{
    return {
        restrict: 'E',
        templateUrl: 'ss.html'
    };
});
*/
'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function ($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function ($scope) {

  }])
    .controller('NavCtrl', ['$scope', function ($scope) {
        $scope.navCollapsed = true;
    }])
    .controller('ManufacturerCtrl', ['$scope', function ($scope) {
        $scope.suppliers = [
            {
                name: "Life Fitness",
                image: "img/logos/LifeFitness.gif"
            },
            {
                name: "Precor",
                image: "img/logos/Precor.gif"
            },
            {
                name: "Icon Health and Fitness",
                image: "img/logos/icon.gif"
            },
            {
                name: "WoodWay",
                image: "img/logos/wwlogoover.gif"
            },
            {
                name: "Vision Fitness",
                image: "img/logos/VisionFitness.gif"
            },
            {
                name: "Landice",
                image: "img/logos/140_LandiceLogo.gif"
            },
            {
                name: "Horizon Fitness",
                image: "img/logos/logo_horizon.gif"
            },
            {
                name: "AFG",
                image: "img/logos/logo_afg.gif"
            },
            {
                name: "Octane Fitness",
                image: "img/logos/logo_octane.gif"
            },
            {
                name: "NordicTrack",
                image: "img/logos/nordictrack-logo.jpg"
            },
            {
                name: "Proform",
                image: "img/logos/proform.gif"
            },
            {
                name: "Health Rider",
                image: "img/logos/Logo_HealthRider.gif"
            },
            {
                name: "Lemond Fitness",
                image: "img/logos/lemond-logo.gif"
            },
            {
                name: "SportsArt",
                image: "img/logos/logo_sportsart.gif"
            },
            {
                name: "Diamondback Fitness",
                image: "img/logos/logo_diamondback.gif"
            },
            {
                name: "Nautilus",
                image: "img/logos/logo_nautilus.gif"
            },
            {
                name: "Bodyguard Fitness",
                image: "img/logos/bodyguard-fitness-logo.jpg"
            },
            {
                name: "StarTrac",
                image: "img/logos/StarTrac.gif"
            },
            {
                name: "Cybex",
                image: "img/logos/cybex.png"
            },
            {
                name: "True Fitness",
                image: "img/logos/truefitness.gif"
            }

        ];
    }])
    .controller('CarouselCtrl', ['$scope', function ($scope) {
        $scope.slides = [
            {
                name: "image 1",
                image: "img/sliders/1.jpg"
            },
            {
                name: "image 2",
                image: "img/sliders/2.jpg"
            },
            {
                name: "image 3",
                image: "img/sliders/3.jpg"
            },
            {
                name: "image 4",
                image: "img/sliders/4.jpg"
            },
            {
                name: "image 5",
                image: "img/sliders/5.jpg"
            },
            {
                name: "image 6",
                image: "img/sliders/6.jpg"
            }
        ];
        $scope.myInterval = 5000;
    }])
    .controller('HomeCtrl', ['$scope', 'Page', function ($scope, Page) {
        $scope.Page = Page;
    }])
    .controller('AboutUsCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Who is Farmers Fitness?");
        $scope.bios = [
            {
                name: "Kevin Farmer",
                description: "Farmer's <\strong>Fitness Repair<\/strong> &amp; Services was founded by Kevin Farmer. With Kevin's wide experience in electronics and mechanics he decided to pursue his dream and become a business owner in the fitness industry. Kevin continues to lead the tech team with his vast knowledge in all aspects of diagnostics and extraordinary customer service skills.",
                image: "img/leadership/kevinfarmer.jpg"
            },
            {
                name: "Amanda Farmer",
                description: "Farmer's Fitness was also joined by Amanda Farmer. Amanda has built great customer service relationships with manufactures to ensure expedient delivery of all warranty and non-warranty parts. She will help you with all your equipment administrative needs.",
                image: "img/leadership/amandafarmer.jpg"
            },
            {
                name: "Bill Farmer",
                description: "Shortly thereafter  Bill Farmer, Kevin's brother, was added to the team.&nbsp; Bill is senior technician with many years of experience behind him.&nbsp; He is the leader  when it comes to resolving any issue in the field.&nbsp; He holds senior  certifications with almost every manufacture imaginable.",
                image: "img/leadership/billfarmer.jpg"
            },
            {
                name: "David Rose",
                description: "Recently  added to the Team was David Rose.&nbsp; David has developed into an excellent  technician and is superb when it comes to customer service.&nbsp; David also  holds many certifications with manufactures.&nbsp; He always ensures to provide  the very best when it comes to taking care of our customers.",
                image: "img/leadership/davidrose.jpg"
            }
        ];
    }])
    .controller('GymMovesCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Gym Moves");
    }])
    .controller('ServicesCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Fitness Repair Services");

    }])
    .controller('PmContractCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Preventative Maintenance Service Agreement");

    }])
    .controller('LaborWarrantyCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Labor Warranty Programs");

    }])
    .controller('ServiceRequestCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Service Request");
        $scope.request = [];
        $scope.submit = function (form) {
            $scope.request.push(form);
        }
    }])
    .controller('ContactCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Contact Farmers Fitness");
        $scope.contactRequests = [];
        $scope.submit = function (form) {
            $scope.contactRequests.push(form);
        }
    }])
    .controller('SitemapCtrl', ['$scope', 'Page', function ($scope, Page) {
        Page.setTitle("Sitemap");
    }])
/* .controller('CarouselCtrl', function(){
         this.myInterval = 5000;
     this.slides = sliders;
 })*/;
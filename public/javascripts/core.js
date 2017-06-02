'use strict';

var module = angular.module('home_automation', []);

    module.controller('homeController', ['$scope', 'homeService', function($scope, homeService){

        $scope.room = {
            room_1:{
                lights: "ON"
            },
            room_2:{
                lights: "OFF"
            }
        };
        $scope.roomTemp = undefined;
        $scope.isCurtain = true;

        //We are reading the current temperature from a server (sample .json file in this case)
        homeService.getTemperature().then(function(response){
            $scope.roomTemp = response;

            $("div.room1_size").css("box-shadow", "inset 0 0 20px 30px rgba(179, 230, 255, "+$scope.roomTemp.room_1.opacity+")");
            $("div.room2_size").css("box-shadow", "inset 0 0 20px 30px rgba(179, 230, 255, "+$scope.roomTemp.room_2.opacity+")");
        });

        //This method simulates switching the lights for room-1
        $("#room_1").on( "click", function() {
            if($scope.room.room_1.lights==="ON") {
                $("div.room1_size").css("background-color", "yellow");
                $scope.room.room_1.lights = "OFF";
            }
            else{
                $("div.room1_size").css("background-color", "white");
                $scope.room.room_1.lights = "ON";
            }
        });

        //This method simulates switching the lights for room-2
        $("#room_2").on("click", function() {
            if($scope.room.room_2.lights==="ON") {
                $("div.room2_size").css("background-color", "yellow");
                $scope.room.room_2.lights = "OFF";
            }
            else{
                $("div.room2_size").css("background-color", "white");
                $scope.room.room_2.lights = "ON";
            }
        });

        //This method simulates heating room-1
        $("#room1Increase").on("click", function() {
            $scope.roomTemp.room_1.temperature  += 1;
            $scope.$apply();
            if($scope.roomTemp.room_1.opacity<0){
                $scope.roomTemp.room_1.opacity=0;
            }
            else if($scope.roomTemp.room_1.opacity>1){
                $scope.roomTemp.room_1.opacity=1;
            }
            if($scope.roomTemp.room_1.temperature > 0 && $scope.roomTemp.room_1.temperature <= 20) {//Cold
                $scope.roomTemp.room_1.opacity -= 0.05;
                $("div.room1_size").css("box-shadow", "inset 0 0 20px 30px rgba(179, 230, 255, " + $scope.roomTemp.room_1.opacity + ")")
            }
            else if($scope.roomTemp.room_1.temperature > 20 && $scope.roomTemp.room_1.temperature <= 35){//Hot
                $scope.roomTemp.room_1.opacity += 0.05;
                $("div.room1_size").css("box-shadow", "inset 0 0 20px 30px rgba(255, 102, 102, " + $scope.roomTemp.room_1.opacity + ")")
            }
            else{
                alert("Max limit reached");
            }
        });

        //This method simulates cooling room-1
        $("#room1Decrease").on("click", function() {
            $scope.roomTemp.room_1.temperature  -= 1;
            $scope.$apply();
            if($scope.roomTemp.room_1.opacity<0){
                $scope.roomTemp.room_1.opacity=0;
            }
            else if($scope.roomTemp.room_1.opacity>1){
                $scope.roomTemp.room_1.opacity=1;
            }

            if($scope.roomTemp.room_1.temperature > 0 && $scope.roomTemp.room_1.temperature <= 20) {//Cold
                $scope.roomTemp.room_1.opacity += 0.05;
                $("div.room1_size").css("box-shadow", "inset 0 0 20px 30px rgba(179, 230, 255, " + $scope.roomTemp.room_1.opacity + ")")
            }
            else if($scope.roomTemp.room_1.temperature > 20 && $scope.roomTemp.room_1.temperature <= 35){//Hot
                $scope.roomTemp.room_1.opacity -= 0.05;
                $("div.room1_size").css("box-shadow", "inset 0 0 20px 30px rgba(255, 102, 102, " + $scope.roomTemp.room_1.opacity + ")")
            }
            else{
                alert("Min limit reached");
            }
        });

        //This method simulates heating room-2
        $("#room2Increase").on("click", function() {
            $scope.roomTemp.room_2.temperature  += 1;
            $scope.$apply();
            if($scope.roomTemp.room_2.opacity<0){
                $scope.roomTemp.room_2.opacity=0;
            }
            else if($scope.roomTemp.room_2.opacity>1){
                $scope.roomTemp.room_2.opacity=1;
            }

            if($scope.roomTemp.room_2.temperature > 0 && $scope.roomTemp.room_2.temperature <= 20) {//Cold
                $scope.roomTemp.room_2.opacity -= 0.05;
                $("div.room2_size").css("box-shadow", "inset 0 0 20px 30px rgba(179, 230, 255, " + $scope.roomTemp.room_2.opacity + ")")
            }
            else if($scope.roomTemp.room_2.temperature > 20 && $scope.roomTemp.room_2.temperature <= 35){//Hot
                $scope.roomTemp.room_2.opacity += 0.05;
                $("div.room2_size").css("box-shadow", "inset 0 0 20px 30px rgba(255, 102, 102, " + $scope.roomTemp.room_2.opacity + ")")
            }
            else{
                alert("Max limit reached");
            }

        });

        //This method is used to simulate cooling room-2
        $("#room2Decrease").on("click", function() {
            $scope.roomTemp.room_2.temperature  -= 1;
            $scope.$apply();
            if($scope.roomTemp.room_2.opacity<0){
                $scope.roomTemp.room_2.opacity=0;
            }
            else if($scope.roomTemp.room_2.opacity>1){
                $scope.roomTemp.room_2.opacity=1;
            }
            if($scope.roomTemp.room_2.temperature > 0 && $scope.roomTemp.room_2.temperature <= 20) {//Cold
                $scope.roomTemp.room_2.opacity += 0.05;
                $("div.room2_size").css("box-shadow", "inset 0 0 20px 30px rgba(179, 230, 255, " + $scope.roomTemp.room_2.opacity + ")")
            }
            else if($scope.roomTemp.room_2.temperature > 20 && $scope.roomTemp.room_2.temperature <= 35){//Hot
                $scope.roomTemp.room_2.opacity -= 0.05;
                $("div.room2_size").css("box-shadow", "inset 0 0 20px 30px rgba(255, 102, 102, " + $scope.roomTemp.room_2.opacity + ")")
            }
            else{
                alert("Min limit reached");
            }
        });

        //This metjod is used to toggle a variable which simulates curtain opening and closing
        $("#curtain").on("click", function() {
            if($scope.isCurtain) {
                $scope.isCurtain = false;
            }
            else{
                $scope.isCurtain =  true;
            }
            $scope.$apply();
        });

    }

]);


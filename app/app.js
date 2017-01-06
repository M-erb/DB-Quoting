/*=============================================================================
Author: Michael Erb
Contact: michael@erbwebdev.com
Created: 9-1-2016
=============================================================================*/

var chatsApp = angular.module('ewdApp', ['ngclipboard','headroom','checklist-model','ngAnimate']);

chatsApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http){

  // Free items --------------------------------------------------------------
  $scope.freeItems = [
    {
      show: 'basic',
      label:'Basic Contacts Fields (Deleted)'
    },
    {
      show: 'owner_personNotes',
      label:'Restore Owner Id/Person Notes'
    },
    {
      show: '',
      label:'Update merchant account on orders/subscriptions to Infusionsoft Payments'
    },
    {
      show: '',
      label: 'Deleted Campaigns'
    }
  ]

  $scope.checkedFree = {
    item: []
  }

  $scope.isOneCheckedFree = function() {
    $scope.free = 'free';
    if($scope.checkedFree.item.length > 0){
      $scope.free = 'free'
    }else {
      $scope.free = ''
    }
    return $scope.free;
  };


  // basic items-----------------------------------------------------------
  $scope.basicItems = [
    'Custom Contact Fields',
    'Tasks',
    'Notes',
    'Appointments'
  ]

  $scope.checkedBasic = {
    item: []
  }

  $scope.quoteBasic = 0;
  $scope.isOneCheckedBasic = function() {
    if($scope.checkedBasic.item.length > 0){
      $scope.quoteBasic = 200
    }else {
      $scope.quoteBasic = 0
    }
    return $scope.quoteBasic;
  };

  // Order items-----------------------------------------------------------
  $scope.orderItems = [
    'Order records',
    'Credit Cards',
  ]

  $scope.checkedOrder = {
    item: []
  }

  $scope.quoteOrder = 0;
  $scope.isOneCheckedOrder = function() {
    if($scope.checkedOrder.item.length > 0){
      $scope.quoteOrder = 200
    }else {
      $scope.quoteOrder = 0
    }
    return $scope.quoteOrder;
  };

  // Large section items-----------------------------------------------------------
   $scope.largeSectionItems = [
   'Basic Contact Fields (Updated)',
   'Referral Partner Records',
   'Opportunity Record',
   'Tags (Deleted from System)',
   'Tags (Removed from Contact)',
   'Products',
  ]

  $scope.checkedLargeSection = {
   item: []
  }

  $scope.quoteLargeSection = 0;
  $scope.isOneCheckedLargeSection = function() {
    switch ($scope.checkedLargeSection.item.length) {
      case 1:
        $scope.quoteLargeSection = 200;
        break;
      case 2:
        $scope.quoteLargeSection = 400;
        break;
      case 3:
        $scope.quoteLargeSection = 600;
        break;
      case 4:
        $scope.quoteLargeSection = 800;
        break;
      case 5:
        $scope.quoteLargeSection = 1000;
        break;
      case 5:
        $scope.quoteLargeSection = 1000;
        break;
      case 6:
        $scope.quoteLargeSection = 1200;
        break;
      default:
        $scope.quoteLargeSection = 0;
    }
  };

  // Merged Contacts item-----------------------------------------------------------
  $scope.mergedContactsItems = 'Merged Contacts';

  $scope.checkedMergedContacts = {
    item: []
  }

  $scope.showMerged = false;
  $scope.quoteMergedContacts = 0;
  $scope.isOneCheckedMergedContacts = function() {
    if($scope.checkedMergedContacts.item.length > 0){
      $scope.quoteMergedContacts = 600
    }else {
      $scope.quoteMergedContacts = 0
    }

    if($scope.showMerged === true){
      $scope.showMerged = false;
    }else {
      $scope.showMerged = true;
    }
  };

  // Other group---------------------------------------------------------------------
  $scope.other1 = "";

  $scope.quoteOther1 = 0;
  $scope.hasALength = function() {
    // console.log('other1 value is: '+$scope.other1);
    // console.log('other1 length is: '+$scope.other1.length);
    if($scope.other1.length > 0){
      $scope.quoteOther1 = 200
    }else {
      $scope.quoteOther1 = 0
    }
    // console.log('other1 value is now: '+$scope.other1);
    // console.log('other1 length is now: '+$scope.other1.length);
  };

  // required checkboxes-------------------------------------------------------------
  $scope.requiredItems = [
    'Customer was able to confirm the Last Four digits of the card on file?*',
    'Customer was able to confirm the billing address?*',
    'I told the customer that if it costs more a database team member will be reaching out before the restore?*',
    'I told the customer that the Data Restore would be 3-5 Business Days (unless approved by Database)?*'
  ]

  $scope.checkedRequiredItems = {
    item: []
  }

  $scope.showStepThree = false; //Change back to false!
  $scope.areAllCheckedRequiredItems = function() {

    if($scope.checkedRequiredItems.item.length >= $scope.requiredItems.length){
      $scope.showStepThree = true
    }else {
      $scope.showStepThree = false
    }
  };








  // button controls
  $scope.uncheckAll = function() {
    $scope.checkedFree.item = [];
    $scope.checkedBasic.item = [];
    $scope.checkedOrder.item = [];
    $scope.checkedLargeSection.item = [];
    $scope.checkedMergedContacts.item = [];

    $scope.isOneCheckedFree();
    $scope.isOneCheckedBasic();
    $scope.isOneCheckedOrder();
    $scope.isOneCheckedLargeSection();
    $scope.isOneCheckedMergedContacts();
  };

  //


}]);

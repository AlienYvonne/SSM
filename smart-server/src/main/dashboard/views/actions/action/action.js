/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
angular.module('dashboard')

  .config(['$stateProvider',
    function ($stateProvider) {
      'use strict';

      $stateProvider
        .state('action', {
          abstract: true,
          url: '/actions/action/:actionId',
          templateUrl: 'views/actions/action/action.html',
          controller: 'ActionCtrl',
          resolve: {
            action0: ['$stateParams', 'models', function ($stateParams, models) {
              return models.$get.action($stateParams.actionId);
            }]
          }
        });
    }])

/**
 * This controller is used to obtain action. All nested views will read status from here.
 */
  .controller('ActionCtrl', ['$scope', 'action0',
    function ($scope, action0) {
      'use strict';

      $scope.action = action0.$data();
      action0.$subscribe($scope, function (action) {
        $scope.action = action;
      });
    }])
;

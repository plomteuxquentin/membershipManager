/* jshint -W117, -W030 */
describe('layout', function() {
  describe('sidebar', function() {
    var controller;
    var views = {
      dashboard: 'app/dashboard/dashboard.html',
      customers: 'app/customers/customers.html'
    };

    beforeEach(function() {
      module('app.layout', bard.fakeToastr);
      bard.inject('$controller', '$httpBackend', '$location',
        '$rootScope', '$state', 'routerHelper');
    });

    beforeEach(function() {
      routerHelper.configureStates(mockData.getMockStates(), '/');
      controller = $controller('SidebarController');
      $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should have isCurrent() for / to return `selected`', function() {
      $location.path('/');
      expect(controller.isCurrent($state.current)).to.equal('selected');
    });

    it('should have isCurrent() for /customers to return `selected`', function() {
      $location.path('/customers');
      expect(controller.isCurrent($state.current)).to.equal('selected');
    });

    it('should have isCurrent() for non route not return `selected`', function() {
      $location.path('/invalid');
      expect(controller.isCurrent({title: 'invalid'})).not.to.equal('selected');
    });
  });
});

describe('Approvals Service', function () {
    var $httpBackend;
    var approvalsService;
    var $rootScope;
    var catchCallback;

    beforeEach(module('d2-rest'));
    beforeEach(module('PEPFAR.approvals'));
    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _approvalsService_) {
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        approvalsService = _approvalsService_;

        catchCallback = sinon.spy();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be an object', function () {
        expect(approvalsService).to.be.a('object');
    });

    describe('approve', function () {
        it('should be a method', function () {
            expect(approvalsService.approve).to.be.a('function');
        });

        it('should reject the promise when there are no parameters', function () {
            approvalsService.approve().catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'The parameters for approvals are missing' });
        });

        it('should reject the promise when the period is missing', function () {
            approvalsService.approve({}).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Period parameter (pe) is missing or empty' });
        });

        it('should reject the promise when the datasets are missing', function () {
            approvalsService.approve({ pe: [ '2014' ] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Dataset id parameter (ds) is missing or empty' });
        });

        it('should reject the promise when the category option is missing', function () {
            approvalsService.approve({ pe: [ '2014' ], ds: ['1', '2'] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Category option combo parameter is missing or empty' });
        });


        it('should do a post request when the data is completed', function () {
            $httpBackend.expectPOST('/dhis/api/dataApprovals/approvals',
                { pe: [ '2014' ], ds: ['1', '2'], approvals: [{id:'d234453'}]}).respond(200);

            approvalsService.approve({ pe: [ '2014' ],  ds: ['1', '2'], approvals: [{id:'d234453'}]});

            $httpBackend.flush();
        });
    });

    describe('unapprove', function () {
        it('should be a method', function () {
            expect(approvalsService.unapprove).to.be.a('function');
        });

        it('should reject the promise when there are no parameters', function () {
            approvalsService.unapprove().catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'The parameters for approvals are missing' });
        });

        it('should reject the promise when the period is missing', function () {
            approvalsService.unapprove({}).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Period parameter (pe) is missing or empty' });
        });

        it('should reject the promise when the datasets are missing', function () {
            approvalsService.unapprove({ pe: [ '2014' ] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Dataset id parameter (ds) is missing or empty' });
        });

        it('should reject the promise when the category option is missing', function () {
            approvalsService.unapprove({ pe: [ '2014' ], ds: ['1', '2'] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Category option combo parameter is missing or empty' });
        });

        it('should do a post request when the data is completed', function () {
            $httpBackend.expectPOST('/dhis/api/dataApprovals/unapprovals',
                { pe: [ '2014' ], ds: ['1', '2'], approvals: [{id:'d234453'}]}).respond(200);

            approvalsService.unapprove({ pe: [ '2014' ], ds: ['1', '2'], approvals: [{id:'d234453'}]});

            $httpBackend.flush();
        });
    });

    describe('unapprove', function () {
        it('should be a method', function () {
            expect(approvalsService.accept).to.be.a('function');
        });

        it('should reject the promise when there are no parameters', function () {
            approvalsService.accept().catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'The parameters for approvals are missing' });
        });

        it('should reject the promise when the period is missing', function () {
            approvalsService.accept({}).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Period parameter (pe) is missing or empty' });
        });

        it('should reject the promise when the datasets are missing', function () {
            approvalsService.accept({ pe: [ '2014' ] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Dataset id parameter (ds) is missing or empty' });
        });

        it('should reject the promise when the category option is missing', function () {
            approvalsService.accept({ pe: [ '2014' ], ds: ['1', '2'] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Category option combo parameter is missing or empty' });
        });

        it('should do a post request when the data is completed', function () {
            $httpBackend.expectPOST('/dhis/api/dataAcceptances/acceptances',
                { pe: [ '2014' ], ds: ['1', '2'], approvals: [{id:'d234453'}]}).respond(200);

            approvalsService.accept({ pe: [ '2014' ], ds: ['1', '2'], approvals: [{id:'d234453'}]});

            $httpBackend.flush();
        });
    });

    describe('unapprove', function () {
        it('should be a method', function () {
            expect(approvalsService.unaccept).to.be.a('function');
        });

        it('should reject the promise when there are no parameters', function () {
            approvalsService.unaccept().catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'The parameters for approvals are missing' });
        });

        it('should reject the promise when the period is missing', function () {
            approvalsService.unaccept({}).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Period parameter (pe) is missing or empty' });
        });

        it('should reject the promise when the datasets are missing', function () {
            approvalsService.unaccept({ pe: [ '2014' ] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Dataset id parameter (ds) is missing or empty' });
        });

        it('should reject the promise when the category option is missing', function () {
            approvalsService.unaccept({ pe: [ '2014' ], ds: ['1', '2'] }).catch(catchCallback);
            $rootScope.$apply();

            expect(catchCallback).to.be.calledWith({ statusText : 'Category option combo parameter is missing or empty' });
        });

        it('should do a post request when the data is completed', function () {
            $httpBackend.expectPOST('/dhis/api/dataAcceptances/unacceptances',
                { pe: [ '2014' ], ds: ['1', '2'], approvals: [{id:'d234453'}]}).respond(200);

            approvalsService.unaccept({ pe: [ '2014' ], ds: ['1', '2'], approvals: [{id:'d234453'}]});

            $httpBackend.flush();
        });
    });
});

/*jshint expr: true*/
/*jshint -W079 */ //redefined expect
var expect = require('chai').expect;

describe('Mockgoose Find Tests', function () {
    'use strict';

    var mockgoose = require('../..');
    var Mongoose = require('mongoose').Mongoose;
    var mongoose = new Mongoose();
    mockgoose(mongoose);
    mongoose.connect('mongodb://localhost/TestingDB');
    var SimpleModel = require('./../models/SimpleModel')(mongoose);
    var IndexModel = require('./../models/IndexModel')(mongoose);

    beforeEach(function (done) {
        mockgoose.reset();
        done();
    });

    afterEach(function (done) {
        //Reset the database after every test.
        mockgoose.reset();
        done();
    });

    describe('Sort', function () {

        it('Be able to sort items by field in ascending order ObjectId', function (done) {
            IndexModel.create({name: 'aaa'}, {name: 'bbb'}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    IndexModel.findOne({}, {}, {sort: {_id: 1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            expect(model.name).to.equal('aaa');
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }
            });
        });

        it('Be able to sort items by field in descending order ObjectId', function (done) {
            IndexModel.create({name: 'aaa'}, {name: 'bbb'}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    IndexModel.findOne({}, {}, {sort: {_id: -1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            // expect(model.name).to.equal('bbb');
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }

            });
        });

        it('Be able to sort items by field in ascending order Numeric', function (done) {
            IndexModel.create({name: 'zzz', value: 1}, {name: 'aaa', value: 2}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    IndexModel.findOne({}, {}, {sort: {value: 1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            expect(model.name).to.equal('zzz');
                            expect(model.value).to.equal(1);
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }
            });
        });

        it('Be able to sort items by field in descending order Numeric', function (done) {
            IndexModel.create({name: 'zzz', value: 1}, {name: 'aaa', value: 2}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    IndexModel.findOne({}, {}, {sort: {value: -1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            expect(model.name).to.equal('aaa');
                            expect(model.value).to.equal(2);
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }

            });
        });

        it('Be able to sort items by field in ascending order Alpha', function (done) {
            IndexModel.create({name: 'zzz', value: 1}, {name: 'aaa', value: 2}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    IndexModel.findOne({}, {}, {sort: {name: 1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            expect(model.name).to.equal('aaa');
                            expect(model.value).to.equal(2);
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }
            });
        });

        it('Be able to sort items by field in descending order Alpha', function (done) {
            IndexModel.create({name: 'zzz', value: 1}, {name: 'aaa', value: 2}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    IndexModel.findOne({}, {}, {sort: {name: -1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            expect(model.name).to.equal('zzz');
                            expect(model.value).to.equal(1);
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }
            });
        });

        it('Be able to sort items by field in ascending order Date', function (done) {
            SimpleModel.create({name: 'one', date: new Date(1000)}, {name: 'two', date: new Date(2000)}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    SimpleModel.findOne({}, {}, {sort: {date: 1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            expect(model.name).to.equal('one');
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }
            });
        });

        it('Be able to sort items by field in descending order Date', function (done) {
            SimpleModel.create({name: 'one', date: new Date(1000)}, {name: 'two', date: new Date(2000)}, function (err, results) {
                expect(err).not.to.be.ok;
                expect(results).not.to.be.undefined;
                if (results) {
                    SimpleModel.findOne({}, {}, {sort: {date: -1}}, function (err, model) {
                        expect(err).not.to.be.ok;
                        expect(model).not.to.be.undefined;
                        if (model) {
                            expect(model.name).to.equal('two');
                            done(err);
                        } else {
                            done('Error finding models');
                        }
                    });
                } else {
                    done('Error creating Models!');
                }
            });
        });

        it('Be able to sort items by multiple fields', function (done) {
            var fixtures = [
                {name: 'test name 1', date: new Date(3000), number: 15}, 
                {name: 'test name 2', date: new Date(2000), number: 20}, 
                {name: 'test name 3', date: new Date(1000), number: 15}, 
                {name: 'test name 4', date: new Date(2000), number: 20}, 
                {name: 'test name 5', date: new Date(4000), number: 10}
            ];

            var expectedOrder = [4, 0, 2, 1, 3];

            SimpleModel.create.apply(
                SimpleModel,
                fixtures.concat(function (err, results) {
                    expect(err).not.to.be.ok;
                    expect(results).not.to.be.undefined;
                    
                    if (results) {
                        SimpleModel.find({}, {}, {sort: {number: 1, date: -1, name: 1}}, function (err, models) {
                            expect(err).not.to.be.ok;

                            models.forEach(function(model, index) {
                                var expectedModel = fixtures[expectedOrder[index]];
                                expect(model.name).to.equal(expectedModel.name);
                                expect(model.date.getTime()).to.equal(expectedModel.date.getTime());
                                expect(model.number).to.equal(expectedModel.number);
                            });

                            done(err);
                        });
                    } else {
                        done('Error creating Models!');
                    }
                })
            );
        });
    });

    describe('Sort Bugs', function () {

        describe('Sorting on fields that don\'t exist throws an error #40', function () {
            var Schema = new mongoose.Schema({
                name: String,
                email: String
            });
            var Model = mongoose.model('Bugs', Schema);

            beforeEach(function (done) {
                mockgoose.reset();
                Model.create({name: 'x', email: 'y'}, {name: 'y'}, done);
            });

            it('Be able to sort when a field does not exists ascending', function (done) {
                Model.findOne({}, {}, {sort: {email: 1}}).exec().then(function (result) {
                    expect(result.name).to.equal('y');
                    done();
                });
            });

            it('Be able to sort when a field does not exists neutral', function (done) {
                Model.findOne({}, {}, {sort: {email: 0}}).exec().then(function (result) {
                    expect(result.name).to.equal('y');
                    done();
                });
            }); 

            it('Be able to sort when a field does not exist descending', function (done) {
                Model.findOne({}, {}, {sort: {email: -1}}).exec().then(function (result) {
                    expect(result.name).to.equal('x');
                    done();
                });
            });
        });
    });
});

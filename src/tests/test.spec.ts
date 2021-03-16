import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server';
import dotenv from 'dotenv';

dotenv.config();

const assert = chai.assert;
chai.use(chaiHttp);

suite('Routing tests', function() {

  suite('GET /api/cats => expect list of most searched cats', function() {
    test('Test GET /api/cats', function(done) {
      chai.request(server)
        .get('/api/cats')
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'mostPopularBreeds', 'Response should contain an array of most popular cat breeds.');
          assert.equal(res.body.success, true);
          assert.property(res.body.mostPopularBreeds[0], 'name', 'Response should contain array of objects, having name property.');
          assert.property(res.body.mostPopularBreeds[0], 'id', 'Response should contain array of objects, having id property.');
          assert.property(res.body.mostPopularBreeds[0], 'description', 'Response should contain array of objects, having description property.');
          assert.property(res.body.mostPopularBreeds[0], 'image', 'Response should contain array of objects, having image property.');
          assert.property(res.body.mostPopularBreeds[0], 'searched', 'Response should contain array of objects, having searched property.');
          assert.lengthOf(res.body.mostPopularBreeds, 10, 'Response should contain array of 10 objects.');
          done();
        });
      });
    });

  suite('GET /api/cats/breeds/:breedId => expect information about a breed of a cat', function() {
    test('Test GET /api/cats/breeds/:breedId', function(done) {
      chai.request(server)
        .get('/api/cats/breeds/beng')
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'catInfo', 'Response should contain an object of image information and breeds array consisting of one selected breed.');
          assert.equal(res.body.success, true);
          assert.property(res.body.catInfo.breeds[0], 'name', 'Response should contain breed object, having name property.');
          assert.property(res.body.catInfo.breeds[0], 'id', 'Response should contain breed object, having id property.');
          assert.property(res.body.catInfo.breeds[0], 'description', 'Response should contain breed object, having description property.');
          assert.property(res.body.catInfo, 'url', 'Response should contain url property.');
          done();
        });
      });
    });


  suite('GET /api/cats/images => expect information about a breed of a cat', function() {
    test('Test GET /api/cats/images?breedId=beng&limit=2', function(done) {
      chai.request(server)
        .get('/api/cats/images?breedId=beng&limit=2')
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.property(res.body, 'catInfo', 'Response should contain an array of of objects of image information and breeds array consisting of one selected breed.');
          assert.equal(res.body.success, true);
          assert.property(res.body.catInfo[0].breeds[0], 'name', 'Response should contain breed object, having name property.');
          assert.property(res.body.catInfo[0].breeds[0], 'id', 'Response should contain breed object, having id property.');
          assert.property(res.body.catInfo[0].breeds[0], 'description', 'Response should contain breed object, having description property.');
          assert.property(res.body.catInfo[0], 'url', 'Response should contain url property.');
          assert.lengthOf(res.body.catInfo, 2, 'Response should contain array of 2 objects.');
          done();
        });
      });
    });

    suite('GET /api/cats/images => expect information about a breed of a cat', function() {
      test('Test GET /api/cats/images?breedId=beng&limit=2', function(done) {
        chai.request(server)
          .get('/api/cats/images?breedId=beng&limit=2')
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.property(res.body, 'catInfo', 'Response should contain an array of of objects of image information and breeds array consisting of one selected breed.');
            assert.equal(res.body.success, true);
            assert.property(res.body.catInfo[0].breeds[0], 'name', 'Response should contain breed object, having name property.');
            assert.property(res.body.catInfo[0].breeds[0], 'id', 'Response should contain breed object, having id property.');
            assert.property(res.body.catInfo[0].breeds[0], 'description', 'Response should contain breed object, having description property.');
            assert.property(res.body.catInfo[0], 'url', 'Response should contain url property.');
            assert.lengthOf(res.body.catInfo, 2, 'Response should contain array of 2 objects.');
            done();
          });
        });
    });


    suite('GET /api/cats/search => expect information about a breed of a cat', function() {
      test('Test GET /api/cats/search?q=Turkish', function(done) {
        chai.request(server)
          .get('/api/cats/search?q=Turkish')
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.property(res.body, 'searchList', 'Response should contain an array of of objects of image information and breeds array consisting of one selected breed.');
            assert.equal(res.body.success, true);
            assert.property(res.body.searchList[0], 'name', 'Response should contain breed object, having name property.');
            assert.property(res.body.searchList[0], 'id', 'Response should contain breed object, having id property.');
            assert.lengthOf(res.body.searchList, 2, 'Response should contain array of 2 objects.');
            done();
          });
        });

      test('Test GET /api/cats/search', function(done) {
        chai.request(server)
          .get('/api/cats/search')
          .end(function(err, res){
            assert.equal(res.status, 400);
            assert.equal(res.body.success, false);
            assert.property(res.body, 'message', 'Response should contain message property.');
            done();
          });
        });
    });

});
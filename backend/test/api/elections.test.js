/* eslint-disable no-underscore-dangle */
process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');

const app = require('../../server');
const conn = require('../../database/index');

describe('Elections testing', () => {
  before((done) => {
    conn
      .connectMock()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    conn.clear().catch((err) => done(err));
    conn
      .close()
      .then(() => done())
      .catch((err) => done(err));
  });

  it('Has no elections', (done) => {
    request(app)
      .get('/api/elections/')
      .then((res) => {
        const { body } = res;
        expect(body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });

  it('/POST one election', (done) => {
    request(app)
      .post('/api/elections/')
      .send({ title: 'Title', position: 'Position' })
      .then((res) => {
        const { body } = res;
        expect(body).to.contain.property('registeredVotes');
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('title');
        expect(body).to.contain.property('position');
        expect(body).to.contain.property('votes');
        done();
      });
  });

  it('Has one election', (done) => {
    request(app)
      .get('/api/elections/')
      .then((res) => {
        const { body } = res;
        expect(body.length).to.equal(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('/POST another election', (done) => {
    request(app)
      .post('/api/elections/')
      .send({ title: 'Title', position: 'Position' })
      .then((res) => {
        const { body } = res;
        expect(body).to.contain.property('registeredVotes');
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('title');
        expect(body).to.contain.property('position');
        expect(body).to.contain.property('votes');
        done();
      });
  });

  it('Has two elections', (done) => {
    request(app)
      .get('/api/elections/')
      .then((res) => {
        const { body } = res;
        expect(body.length).to.equal(2);
        done();
      })
      .catch((err) => done(err));
  });

  it('/POST one election with incorrect title', (done) => {
    request(app)
      .post('/api/elections/')
      .send({ title: 'Tit', position: 'Position' })
      .then((res) => {
        const { body } = res;
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal(
          '"title" length must be at least 5 characters long'
        );
        done();
      })
      .catch((err) => done(err));
  });

  it('/POST one election with incorrect position', (done) => {
    request(app)
      .post('/api/elections/')
      .send({ title: 'Title', position: 'Pos' })
      .then((res) => {
        const { body } = res;
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal(
          '"position" length must be at least 5 characters long'
        );
        done();
      })
      .catch((err) => done(err));
  });

  let _id;

  it('/GET one election', (done) => {
    request(app)
      .get('/api/elections/')
      .then((res) => {
        const { body } = res;
        expect(body[0]).to.contain.property('registeredVotes');
        expect(body[0]).to.contain.property('_id');
        expect(body[0]).to.contain.property('title');
        expect(body[0]).to.contain.property('position');
        expect(body[0]).to.contain.property('votes');
        expect(body[0]).to.contain.property('votes');
        expect(body[0].title).to.be.equal('Title');
        expect(body[0].position).to.be.equal('Position');
        _id = body[0]._id;
        done();
      })
      .catch((err) => done(err));
  });

  it('/PATCH one election', (done) => {
    request(app)
      .patch(`/api/elections/${_id}`)
      .send({ title: 'Unit!', position: 'Testing' })
      .then((res) => {
        const { body } = res;
        expect(body).to.contain.property('n');
        expect(body).to.contain.property('nModified');
        expect(body.nModified).to.be.equal(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('/PATCH one election with incorrect title', (done) => {
    request(app)
      .patch(`/api/elections/${_id}`)
      .send({ title: 'Tit', position: 'Position' })
      .then((res) => {
        const { body } = res;
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal(
          '"title" length must be at least 5 characters long'
        );
        done();
      })
      .catch((err) => done(err));
  });

  it('/PATCH one election with incorrect position', (done) => {
    request(app)
      .patch(`/api/elections/${_id}`)
      .send({ title: 'Title', position: 'Pos' })
      .then((res) => {
        const { body } = res;
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal(
          '"position" length must be at least 5 characters long'
        );
        done();
      })
      .catch((err) => done(err));
  });

  it('Delete one election', (done) => {
    request(app)
      .delete(`/api/elections/${_id}`)
      .then((res) => {
        const { status } = res;
        expect(status).to.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('Delete unexisting election', (done) => {
    request(app)
      .delete(`/api/elections/${_id}`)
      .then((res) => {
        const { status, body } = res;
        expect(status).to.be.equal(404);
        expect(body).to.contain.property('error');
        expect(body.error).to.be.equal('Election not found');
        done();
      })
      .catch((err) => done(err));
  });

  it('Has one election after deleting', (done) => {
    request(app)
      .get('/api/elections/')
      .then((res) => {
        const { body } = res;
        expect(body.length).to.equal(1);
        done();
      })
      .catch((err) => done(err));
  });
});

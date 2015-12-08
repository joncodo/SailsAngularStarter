/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    provider: {
      type: 'string'
    },
    displayName: {
      type: 'string'
    },
    emails: {
      type: 'array'
    },
    photos: {
      type: 'array'
    },
    googleId: {
      type: 'string'
    },
    accessToken: {
      type: 'string'
    },
    refreshToken: {
      type: 'string'
    }
  }
};


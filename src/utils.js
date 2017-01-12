const isFunction = require('lodash.isfunction');
const isError = require('lodash.iserror');
const isUndefined = require('lodash.isundefined');
const isPlainObject = require('lodash.isplainobject');
const isString = require('lodash.isstring');

module.exports = {
  returnCallbackError,
  testCallback,
  testFunction,
  testOptionalObject,
  testObject,
  testString,
};

function returnCallbackError(maybeError, callback) {
  if (isError(maybeError)) {
    return callback(maybeError);
  }
}

function testCallback(callback) {
  if (! isFunction(callback)) {
    throw new TypeError('callback must be defined and be a function');
  }
}

function testFunction(name, func) {
  if (! isFunction(func)) {
    throw new TypeError(name + ' must be a function');
  }
}

function testOptionalObject(name, obj) {
  if (isUndefined(obj)) return;
  testObject(name, obj);
}

function testObject(name, obj) {
  if (! isPlainObject(obj)) {
    throw new TypeError(name + ' must be an object');
  }
}

function testString(name, str) {
  if (! isString(str)) {
    throw new TypeError(name + ' must be a string');
  }
}

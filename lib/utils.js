'use strict';

const path = require('path');
const mime = require('mime');

const POSITION_STRING_AVOID_DOT = 1;
const REGEX_HASH_QUERYSTRING = /[#\\?]/g;

const DEFAULT_CONTENT_TYPE = 'application/octet-stream';

const getFileExtension = (fileName) => {
  const extname = path.extname(fileName);
  const endOfExt = extname.search(REGEX_HASH_QUERYSTRING);
  return endOfExt > -1
    ? extname.substring(POSITION_STRING_AVOID_DOT, endOfExt)
    : extname.substring(POSITION_STRING_AVOID_DOT);
};

const getContentType = (ext) => {
  return mime.getType(ext) || DEFAULT_CONTENT_TYPE;
};

module.exports = {
  getFileExtension,
  getContentType
};

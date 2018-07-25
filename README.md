# s3 Directory Uploader

Script to upload directory and all it's contents to a S3 bucket using the official Amazon SDK.

Customized build of [s3 directory upload](https://github.com/Ilyahas/s3-directory-upload)

## Install

```bash
npm install s3-directory-uploader -S
```

## AWS Credentials

In order to use this module, you'll need to have AWS Credentials.
You should add these to a `.env` file in the root of your project.

The ENV variables are `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY` and `BUCKET_NAME`.

## Example

```javascript
const s3Uploader = require('s3-directory-uploader');
const path = require('path');

const directoryName = path.resolve(__dirname, 'my-local-directory');
const deleteExistingFilesInBucket = true;
const remotePath = 'some-remote-sub-directory/another-directory/';

s3Uploader(directoryName, credentials, deleteExistingFilesInBucket);
```

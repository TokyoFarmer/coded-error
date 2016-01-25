# CodedError: JS Exception + code + message

Throwing an exception:

```javascript
var CodedError = require('coded-error')

get('http://url').then(data => {
  throw new CodedError(403, 'Access Denied');
}).catch(e => {
  // handle error here
});
```

Checking whether an exception has a specific code:

```javascript
get('http://url').then(data => {
  throw new CodedError(403, 'Access Denied');
}).catch(e => {
  if (CodedError.is(403)) {
    // do specific things here
  }

  throw e;
});
```

Or this can be automatically done for you, using Bluebird's catch:

```javascript
get('http://url').then(data => {
  throw new CodedError(403, 'Access Denied');
}).catch(CodedError.only(403), e_for_oh_three => {
  // handle 403 case
}).catch(e => {
  // all other exceptions go here
})
```

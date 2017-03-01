# deep-freeze
Just a small function to freeze the entire object avoiding mutability.

#How to use
```javascript
import deepFreeze from 'index';

let person = {
  firstName: 'name',
  lastName: 'lastName'
}

deepFreeze(person);
```

#How to run tests
```zsh
npm t
```

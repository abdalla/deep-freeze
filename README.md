# deep-freeze
Just a small function to freeze the entire object avoiding mutability.

#Use
```javascript
import deepFreeze from 'index';

let person = {
  firstName: 'name',
  lastName: 'lastName'
}

deepFreeze(person);
```

#Test
```zsh
npm t
```

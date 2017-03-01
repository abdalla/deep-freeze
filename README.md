# deep-freeze
Just a small function to freeze the entire object avoiding mutability.

#Use
```zsh
npm install deep-freezer
```

```javascript
import deepFreeze from 'deep-freezer';

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

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
};

deepFreeze(person);
```
#Handle Errors
To throw error when you try to mutate a frozen object, just use the deep-freezer in strict mode.

```javascript
'use strict'

import deepFreeze from 'deep-freezer';

let person = {
  firstName: 'name',
  lastName: 'lastName'
};

deepFreeze(person);
```

#Examples
More examples could be find at example folder.

#Test
```zsh
npm t
```

# addcolor
 Add color to Node.js console text and background.


## Installation
```sh
npm i addcolor
```

## Usage
```js
import color from 'addcolor';

console.log(color.yellow('add color to text'));
console.log(`${color.bg.blue('add color to background')} also ${color.style.reverse('reverse background & foreground')}`);
```

### Colors
Both foreground and background
- black
- white 
- red
- green
- yellow
- blue
- cyan
- magenta
### Styles
- blink
- reverse
- hidden
- bright
- dim
- underscore
- strikethrough
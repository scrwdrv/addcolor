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
```js
console.log(`${color.code.fg.black}black text and ${color.code.bg.cyan}black text with cyan background${color.code.reset}`);
```
```js
console.log(color.red('red and bold ', 'bright'));
console.log(color.style.bright('bold and red', 'red'));
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
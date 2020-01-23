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
### Use color codes
```js
console.log(`${color.code.fg.black}black text and ${color.code.bg.cyan}black text with cyan background${color.code.reset}`);
```
### Use both color & style at the same time
```js
console.log(color.red('red and bold ', 'bright'));
console.log(color.style.bold('bold and red', 'red'));
```
### Quick run through all the colors & styles
```js
for (let type in code)
    if (type !== 'reset')
        for (let item in code[type])
            console.log(code[type][item], item, code.reset)
```
### Colors
Both foreground and background
- black
- red
- green
- yellow
- blue
- magenta 
- cyan 
- white
- default
- blackBright 
- redBright 
- greenBright 
- yellowBright 
- blueBright 
- magentaBright 
- cyanBright 
- whiteBright

### Styles
- bold
- dim
- italic
- underscore
- blink
- rapidBlink
- reverse
- hidden
- strikethrough
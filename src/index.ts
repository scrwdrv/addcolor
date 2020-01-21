type Styles = 'blink' | 'reverse' | 'hidden' | 'bright' | 'dim' | 'underscore';
type Colors = 'black' | 'white' | 'red' | 'green' | 'yellow' | 'blue' | 'cyan' | 'magenta';

const codes = {
    fg: {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m'
    },
    bg: {
        black: '\x1b[40m',
        red: '\x1b[41m',
        green: '\x1b[42m',
        yellow: '\x1b[43m',
        blue: '\x1b[44m',
        magenta: '\x1b[45m',
        cyan: '\x1b[46m',
        white: '\x1b[47m'
    },
    style: {
        bright: '\x1b[1m',
        dim: '\x1b[2m',
        underscore: '\x1b[4m',
        blink: '\x1b[5m',
        reverse: '\x1b[7m',
        hidden: '\x1b[8m'
    },
}

let fg: { [color in Colors]: (str: string) => string; } = {} as any,
    bg: { [color in Colors]: (str: string) => string; } = {} as any,
    style: { [style in Styles]: (str: string) => string } = {} as any;

for (let type in codes)
    for (let item in codes[type])
        eval(`${type}[item] = (str)=> { return '${codes[type][item]}' + str + '\x1b[0m' }`);

export default {
    ...fg,
    bg: bg,
    style: style
}
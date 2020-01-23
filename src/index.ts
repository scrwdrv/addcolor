type Styles = 'bold' | 'dim' | 'italic' | 'underscore' | 'blink' | 'rapidBlink' | 'reverse' | 'hidden' | 'strikethrough';
type Colors = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta ' | 'cyan ' | 'white' | 'default' | 'blackBright ' | 'redBright ' | 'greenBright ' | 'yellowBright ' | 'blueBright' | 'magentaBright' | 'cyanBright' | 'whiteBright';

const code = {
    fg: {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
        default: '\x1b[39m',
        blackBright: '\x1b[90m',
        redBright: '\x1b[91m',
        greenBright: '\x1b[92m',
        yellowBright: '\x1b[93m',
        blueBright: '\x1b[94m',
        magentaBright: '\x1b[95m',
        cyanBright: '\x1b[96m',
        whiteBright: '\x1b[97m'
    },
    bg: {
        black: '\x1b[40m',
        red: '\x1b[41m',
        green: '\x1b[42m',
        yellow: '\x1b[43m',
        blue: '\x1b[44m',
        magenta: '\x1b[45m',
        cyan: '\x1b[46m',
        white: '\x1b[47m',
        default: '\x1b[49m',
        blackBright: '\x1b[100m',
        redBright: '\x1b[101m',
        greenBright: '\x1b[102m',
        yellowBright: '\x1b[103m',
        blueBright: '\x1b[104m',
        magentaBright: '\x1b[105m',
        cyanBright: '\x1b[106m',
        whiteBright: '\x1b[107m'
    },
    style: {
        bold: '\x1b[1m',
        dim: '\x1b[2m',
        italic: '\x1b[3m',
        underscore: '\x1b[4m',
        blink: '\x1b[5m',
        rapidBlink: '\x1b[6m',
        reverse: '\x1b[7m',
        hidden: '\x1b[8m',
        strikethrough: '\x1b[9m'
    },
    reset: '\x1b[0m'
}

let fg: { [color in Colors]: (str: string, style?: Styles) => string; } = {} as any,
    bg: { [color in Colors]: (str: string, style?: Styles) => string; } = {} as any,
    style: { [style in Styles]: (str: string, color?: Colors) => string } = {} as any;

for (let type in code)
    if (type !== 'reset') for (let item in code[type])
        switch (type) {
            case 'fg':
            case 'bg':
                eval(`${type}[item] = (str, style) => { return (style ? code.style[style] : '') + '${code[type][item]}' + str + '${code.reset}' }`);
                break;
            case 'style':
                eval(`${type}[item] = (str, color) => { return '${code[type][item]}' + (color ? code.fg[color] : '') + str + '${code.reset}' }`);
                break;
        }

export default {
    ...fg,
    bg: bg,
    style: style,
    code: code
}
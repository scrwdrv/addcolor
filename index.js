"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code = {
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
        hidden: '\x1b[8m',
        strikethrough: '\x1b[9m'
    },
    reset: '\x1b[0m'
};
let fg = {}, bg = {}, style = {};
for (let type in code)
    if (type !== 'reset')
        for (let item in code[type])
            switch (type) {
                case 'fg':
                case 'bg':
                    eval(`${type}[item] = (str, style) => { return '${code[type][item]}' + (style ? code.style[style] : '') + str + '${code.reset}' }`);
                    break;
                case 'style':
                    eval(`${type}[item] = (str, color) => { return (color ? code.fg[color] : '') + '${code[type][item]}' + str + '${code.reset}' }`);
                    break;
            }
exports.default = {
    ...fg,
    bg: bg,
    style: style,
    code: code
};
//# sourceMappingURL=index.js.map
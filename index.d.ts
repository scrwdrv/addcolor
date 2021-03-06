declare type Styles = 'bold' | 'dim' | 'italic' | 'underscore' | 'blink' | 'rapidBlink' | 'reverse' | 'hidden' | 'strikethrough';
declare type Colors = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'default' | 'blackBright' | 'redBright' | 'greenBright' | 'yellowBright' | 'blueBright' | 'magentaBright' | 'cyanBright' | 'whiteBright';
declare const _default: {
    bg: {
        default: (str: string, style?: Styles) => string;
        black: (str: string, style?: Styles) => string;
        red: (str: string, style?: Styles) => string;
        green: (str: string, style?: Styles) => string;
        yellow: (str: string, style?: Styles) => string;
        blue: (str: string, style?: Styles) => string;
        magenta: (str: string, style?: Styles) => string;
        cyan: (str: string, style?: Styles) => string;
        white: (str: string, style?: Styles) => string;
        blackBright: (str: string, style?: Styles) => string;
        redBright: (str: string, style?: Styles) => string;
        greenBright: (str: string, style?: Styles) => string;
        yellowBright: (str: string, style?: Styles) => string;
        blueBright: (str: string, style?: Styles) => string;
        magentaBright: (str: string, style?: Styles) => string;
        cyanBright: (str: string, style?: Styles) => string;
        whiteBright: (str: string, style?: Styles) => string;
    };
    style: {
        blink: (str: string, color?: Colors) => string;
        bold: (str: string, color?: Colors) => string;
        reverse: (str: string, color?: Colors) => string;
        hidden: (str: string, color?: Colors) => string;
        dim: (str: string, color?: Colors) => string;
        italic: (str: string, color?: Colors) => string;
        underscore: (str: string, color?: Colors) => string;
        rapidBlink: (str: string, color?: Colors) => string;
        strikethrough: (str: string, color?: Colors) => string;
    };
    code: {
        fg: {
            black: string;
            red: string;
            green: string;
            yellow: string;
            blue: string;
            magenta: string;
            cyan: string;
            white: string;
            default: string;
            blackBright: string;
            redBright: string;
            greenBright: string;
            yellowBright: string;
            blueBright: string;
            magentaBright: string;
            cyanBright: string;
            whiteBright: string;
        };
        bg: {
            black: string;
            red: string;
            green: string;
            yellow: string;
            blue: string;
            magenta: string;
            cyan: string;
            white: string;
            default: string;
            blackBright: string;
            redBright: string;
            greenBright: string;
            yellowBright: string;
            blueBright: string;
            magentaBright: string;
            cyanBright: string;
            whiteBright: string;
        };
        style: {
            bold: string;
            dim: string;
            italic: string;
            underscore: string;
            blink: string;
            rapidBlink: string;
            reverse: string;
            hidden: string;
            strikethrough: string;
        };
        reset: string;
    };
    default: (str: string, style?: Styles) => string;
    black: (str: string, style?: Styles) => string;
    red: (str: string, style?: Styles) => string;
    green: (str: string, style?: Styles) => string;
    yellow: (str: string, style?: Styles) => string;
    blue: (str: string, style?: Styles) => string;
    magenta: (str: string, style?: Styles) => string;
    cyan: (str: string, style?: Styles) => string;
    white: (str: string, style?: Styles) => string;
    blackBright: (str: string, style?: Styles) => string;
    redBright: (str: string, style?: Styles) => string;
    greenBright: (str: string, style?: Styles) => string;
    yellowBright: (str: string, style?: Styles) => string;
    blueBright: (str: string, style?: Styles) => string;
    magentaBright: (str: string, style?: Styles) => string;
    cyanBright: (str: string, style?: Styles) => string;
    whiteBright: (str: string, style?: Styles) => string;
};
export default _default;

declare type Styles = 'blink' | 'reverse' | 'hidden' | 'bright' | 'dim' | 'underscore' | 'strikethrough';
declare type Colors = 'black' | 'white' | 'red' | 'green' | 'yellow' | 'blue' | 'cyan' | 'magenta';
declare const _default: {
    bg: {
        black: (str: string, style?: Styles) => string;
        white: (str: string, style?: Styles) => string;
        red: (str: string, style?: Styles) => string;
        green: (str: string, style?: Styles) => string;
        yellow: (str: string, style?: Styles) => string;
        blue: (str: string, style?: Styles) => string;
        cyan: (str: string, style?: Styles) => string;
        magenta: (str: string, style?: Styles) => string;
    };
    style: {
        blink: (str: string, color?: Colors) => string;
        reverse: (str: string, color?: Colors) => string;
        hidden: (str: string, color?: Colors) => string;
        bright: (str: string, color?: Colors) => string;
        dim: (str: string, color?: Colors) => string;
        underscore: (str: string, color?: Colors) => string;
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
        };
        style: {
            bright: string;
            dim: string;
            underscore: string;
            blink: string;
            reverse: string;
            hidden: string;
            strikethrough: string;
        };
        reset: string;
    };
    black: (str: string, style?: Styles) => string;
    white: (str: string, style?: Styles) => string;
    red: (str: string, style?: Styles) => string;
    green: (str: string, style?: Styles) => string;
    yellow: (str: string, style?: Styles) => string;
    blue: (str: string, style?: Styles) => string;
    cyan: (str: string, style?: Styles) => string;
    magenta: (str: string, style?: Styles) => string;
};
export default _default;

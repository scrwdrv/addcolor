declare const _default: {
    bg: {
        black: (str: string) => string;
        white: (str: string) => string;
        red: (str: string) => string;
        green: (str: string) => string;
        yellow: (str: string) => string;
        blue: (str: string) => string;
        cyan: (str: string) => string;
        magenta: (str: string) => string;
    };
    style: {
        blink: (str: string) => string;
        reverse: (str: string) => string;
        hidden: (str: string) => string;
        bright: (str: string) => string;
        dim: (str: string) => string;
        underscore: (str: string) => string;
        strikethrough: (str: string) => string;
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
    black: (str: string) => string;
    white: (str: string) => string;
    red: (str: string) => string;
    green: (str: string) => string;
    yellow: (str: string) => string;
    blue: (str: string) => string;
    cyan: (str: string) => string;
    magenta: (str: string) => string;
};
export default _default;

/// <reference lib="dom" />

function panic(message: string): never
{
    debugger;
    if (Error)
    {
        const error = new Error(message);

        const global = window ?? globalThis;

        if (global && 'console' in global && 'error' in global.console)
        {
            const err = console.error;
            err(`panicked: `, message);
            err(`stack trace: `, error.stack);
            err(`error object: `, error);
        }

        if (global && 'alert' in global)
        {
            global.alert(
                `panicked: ${message}\n\nstack trace:\n${error.stack}\n\nsee console for details`
            );
        }
    }

    throw message;
}

function assert(x: boolean, message: string | undefined = undefined): asserts x
{
    if (!x)
    {
        panic(message ? `assertion failed: ${message}` : "assertion failed");
    }
}

function assertNonNull<T>(x: T | null): T
{
    assert(x !== null, "null value given to assertNonNull");
    return x;
}

const btn_back = assertNonNull(document.getElementById("btn-back")) as HTMLButtonElement;
const btn_next = assertNonNull(document.getElementById("btn-next")) as HTMLButtonElement;
const btn_refresh = assertNonNull(document.getElementById("btn-refresh")) as HTMLButtonElement;
const url_field = assertNonNull(document.getElementById("url-field")) as HTMLInputElement;
const btn_go = assertNonNull(document.getElementById("btn-go")) as HTMLButtonElement;
const iframe = assertNonNull(document.getElementById("iframe")) as HTMLIFrameElement;
const progress = assertNonNull(document.getElementById("progress")) as HTMLProgressElement;

function go(url: string)
{
    progress.removeAttribute('value');
    progress.removeAttribute('max');
    progress.textContent = "Loading...";
    iframe.src = url;
}

btn_refresh.addEventListener('click', () =>
{
    const url = iframe.src;
    go("");
    go(url);
});
url_field.addEventListener('keypress', (ev) =>
{
    if (ev.code == "Enter")
    {
        go(url_field.value);
    }
});
btn_go.addEventListener('click', () =>
{
    go(url_field.value);
});
iframe.addEventListener('load', () =>
{
    progress.value = 1;
    progress.max = 1;
});
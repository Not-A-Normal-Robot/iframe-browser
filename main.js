function c(e){debugger;if(Error){let n=new Error(e),t=window??globalThis;if(t&&"console"in t&&"error"in t.console){let s=console.error;s("panicked: ",e),s("stack trace: ",n.stack),s("error object: ",n)}if(t&&"alert"in t)t.alert(`panicked: ${e}

stack trace:
${n.stack}

see console for details`)}throw e}function d(e,n=void 0){if(!e)c(n?`assertion failed: ${n}`:"assertion failed")}function o(e){return d(e!==null,"null value given to assertNonNull"),e}var u=o(document.getElementById("btn-refresh")),l=o(document.getElementById("url-field")),f=o(document.getElementById("btn-go")),i=o(document.getElementById("iframe")),r=o(document.getElementById("progress"));function a(e){r.removeAttribute("value"),r.removeAttribute("max"),r.textContent="Loading...",i.src=e}u.addEventListener("click",()=>{a(i.src)});l.addEventListener("keypress",(e)=>{if(e.code=="Enter")a(l.value)});f.addEventListener("click",()=>{a(l.value)});i.addEventListener("load",()=>{r.value=1,r.max=1});

//# debugId=D9FB2A8DD6B2F25164756E2164756E21
//# sourceMappingURL=main.js.map

function i(e){debugger;if(Error){let t=new Error(e),r=window??globalThis;if(r&&"console"in r&&"error"in r.console){let l=console.error;l("panicked: ",e),l("stack trace: ",t.stack),l("error object: ",t)}if(r&&"alert"in r)r.alert(`panicked: ${e}

stack trace:
${t.stack}

see console for details`)}throw e}function d(e,t=void 0){if(!e)i(t?`assertion failed: ${t}`:"assertion failed")}function n(e){return d(e!==null,"null value given to assertNonNull"),e}var f=n(document.getElementById("btn-back")),E=n(document.getElementById("btn-next")),u=n(document.getElementById("btn-refresh")),c=n(document.getElementById("url-field")),m=n(document.getElementById("btn-go")),a=n(document.getElementById("iframe")),o=n(document.getElementById("progress"));function s(e){o.removeAttribute("value"),o.removeAttribute("max"),o.textContent="Loading...",a.src=e}u.addEventListener("click",()=>{let e=a.src;s(""),s(e)});c.addEventListener("keypress",(e)=>{if(e.code=="Enter")s(c.value)});m.addEventListener("click",()=>{s(c.value)});a.addEventListener("load",()=>{o.value=1,o.max=1});

//# debugId=8CE3DA7C7168487464756E2164756E21
//# sourceMappingURL=main.js.map

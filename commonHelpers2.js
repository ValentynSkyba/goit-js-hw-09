import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),s=()=>{const t={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))},o=()=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.email.value=t.email,e.message.value=t.message)};o();e.addEventListener("input",s);e.addEventListener("submit",function(t){t.preventDefault();const a=e.email.value.trim(),m=e.message.value.trim();a&&m?(console.log({email:a,message:m}),localStorage.removeItem("feedback-form-state"),e.reset()):alert("All fields must be filled in.")});
//# sourceMappingURL=commonHelpers2.js.map

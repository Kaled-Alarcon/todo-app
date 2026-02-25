(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<h1>Tus tareas</h1>\r
\r
<div id="todo-container">\r
   <input id="todo-input" type="text" placeholder="¿Qué necesitas hacer?" />\r
\r
   <div id="todo-tasks-container">\r
      <!-- <div class="todo-task-card">\r
         <input type="checkbox" name="" id="" />\r
\r
         <span>Ordenar mi cama</span>\r
      </div>\r
\r
      <div class="todo-task-card checked">\r
         <input type="checkbox" name="" id="" checked disabled />\r
\r
         <span>Ordenar mi cama</span>\r
      </div> -->\r
   </div>\r
\r
   <div id="todo-footer">\r
      <div>\r
         <p id="todo-pending-label">Sin tareas</p>\r
         <!-- <p>-</p>\r
         <p id="todo-completed-label">0 completadas</p> -->\r
      </div>\r
\r
      <div>\r
         <button id="todo-clear">Borrar todas</button>\r
         <button id="todo-clear-completed">Borrar completadas</button>\r
      </div>\r
   </div>\r
</div>\r
\r
<span style="font-size: 20px; color: #ccc"\r
   >Hecho por <span style="font-weight: 700; color: darkmagenta">Kaled Alarcón</span></span\r
>\r
`,t=e=>{localStorage.setItem(`store`,JSON.stringify(e))},n=()=>{let e=``,t=new Date().getDate(),n=new Date().getHours(),r=new Date().getSeconds(),i=Math.random()*1e3,a=Math.round(i),o=Math.random()*1e3,s=Math.round(o);for(;a.toString().length!==3;){let e=Math.random()*1e3;a=Math.round(e)}for(;s.toString().length!==3;){let e=Math.random()*1e3;s=Math.round(e)}return t.toString().length===1&&(t*=10),n.toString().length===1&&(n*=10),r.toString().length===1&&(r*=10),a.toString().length===1&&(a*=10),a.toString().length<3&&(a*=10),s.toString().length===1&&(s*=10),s.toString().length<3&&(s*=10),e=`${a}${s}${t}${n}${r}`,e},r=[],i=e=>{let i={id:n(),title:e,checked:!1,createdAt:new Date};return r.push(i),t(r),i},a=e=>(r=r.map(t=>(t.id===e&&(t.checked=!t.checked),t)),t(r),r),o=()=>{r=[],t(r)},s=()=>{let e=r.filter(e=>{if(e.checked===!1)return e}),n=r.filter(e=>{if(e.checked===!0)return e});return r=e,t(r),n},c=()=>{let e=document.getElementById(`todo-input`),t=document.getElementById(`todo-tasks-container`),n=document.getElementById(`todo-pending-label`),c=document.getElementById(`todo-clear`),l=document.getElementById(`todo-clear-completed`);e.addEventListener(`change`,e=>{if(e.target.value===``||e.target.value===void 0)return;let o=i(e.target.value),s=document.createElement(`div`);s.classList.add(`todo-task-card`),s.id=o.id;let c=document.createElement(`input`);c.type=`checkbox`,c.checked=o.checked;let l=document.createElement(`span`);l.textContent=o.title,s.appendChild(c),s.appendChild(l),t.appendChild(s),n.textContent=`${r.length} tarea/s`,c.addEventListener(`change`,()=>{a(o.id),s.classList.toggle(`checked`)}),e.target.value=``}),c.addEventListener(`click`,()=>{o(),t.innerHTML=``,n.textContent=`Sin tareas`}),l.addEventListener(`click`,()=>{if(s().forEach(e=>{document.getElementById(e.id).remove()}),r.length===0){n.textContent=`Sin tareas`;return}n.textContent=`${r.length} tarea/s`})},l=document.getElementById(`app`);l.innerHTML=e,t(r),c();
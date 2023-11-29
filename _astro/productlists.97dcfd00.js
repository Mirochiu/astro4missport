const N=(u,t)=>u&&(t(u)?u:N(u.parentNode,t)),M=u=>{const t=N(u.target,m=>m.classList.contains("card"));if(!t)return;const p=t.querySelector("img");p&&(u.type==="mouseenter"?(t.classList.add("zoom-in"),p.dataset.hoverSrc&&(p.src=p.dataset.hoverSrc)):u.type==="mouseout"&&(t.classList.remove("zoom-in"),p.dataset.src&&(p.src=p.dataset.src)))},W=u=>{const t=N(u.target,m=>m.classList.contains("card"));if(!t)return;const p=t.querySelector("img");p&&(t.classList.remove("zoom-in"),p.dataset.src&&(p.src=p.dataset.src))},D=u=>{const t=u&&u.target;if(!t)return;const p=t.selectedIndex==null?-1:t.selectedIndex;let m=t.parentNode;for(;m!=null&&m.tagName!=="SECTION";)m=m==m.parentNode?null:m.parentNode;if(!m)return;const f=m.querySelectorAll("li.title")[p];f&&f.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))},F=async(u,t)=>{const p="A1:AZ200";if(!t)throw new Error("config not found");if(typeof t.brandName!="string"||!t.brandName)throw new Error("invalid brand");const m=t.querySelectNode||".select-tabs",f=e=>typeof e=="string"&&e.trim().replaceAll("'","%27").replaceAll('"',"%22")||"",b=e=>{if(e){if(e.ok)return e;throw new Error(`error code:${e.status} msg:${e.statusText}`)}},k=async e=>{const i=e.sheetName,o=e.dataRange,c=await Promise.all([fetch(e.bookUrl),fetch(e.keyUrl)]);b(c.find(l=>!l.ok));const s=(await Promise.all(c.map(l=>l.text()))).map(atob);return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${s[0]}/values/${i}!${o}?key=${s[1]}`)},A=(e,i=0)=>{let o;const c=[];return e.forEach((s,l)=>{o!==s[i]&&(o=s[i],c.push(l))}),c.map((s,l,a)=>e.slice(s,a[l+1]))},y=e=>typeof e=="string"?e.trim():e,x=e=>(i,o,c)=>{let s=y(e[c]);return s&&(i[s]=y(o)),i},T=(e,i)=>{const o=x(i===void 0?e.shift():i),c=["Topic","Series","EnglishSeries"],s=["ProductName"];let l={};const a=[];return e.forEach(d=>{if(!d||!d.length)return;const n=d.reduce(o,{});c.forEach(r=>{n[r]?l[r]=n[r]:n[r]=l[r]}),!s.find(r=>!n[r])&&a.push(n)},[]),A(a,"Topic")},C=async()=>await k({sheetName:t.brandName,dataRange:p,bookUrl:t.bookUrl,keyUrl:t.keyUrl}).then(b).then(e=>e.json()).then(e=>e.values),P=`<img src="https://storage.googleapis.com/mis-sport/logo/new-item.png" alt="${t.brandName}" width="42" height="42" class="rounded-circle"></img>`,U=`<img src="https://storage.googleapis.com/mis-sport/logo/sale-item.png" alt="${t.brandName}" width="42" height="42" class="rounded-circle"></img>`,w='<div width="42" height="42"></div>',I=(e,i,o)=>{const c=n=>{let r=NaN;return typeof n=="number"?r=n:typeof n=="string"&&(r=parseInt(n)),!isNaN(r)&&r.toLocaleString()||""},s=(n,r)=>({label:r&&P||w,price:`<p class="text-end stretched-link text-dark" style="word-wrap:break-word;">NT$${c(n)}</p>`}),l=(n,r)=>({label:U,price:`<p class="text-end stretched-link" style="color:IndianRed;word-wrap:break-word;"><sup class="text-decoration-line-through" style="color:Silver;">NT$${c(n)} </sup>NT$${c(r)}</p>`}),a=parseInt(e),d=parseInt(i);return isNaN(a)?isNaN(d)?(console.error("invalid prices:",e,i),{label:w,price:""}):s(d,o):isNaN(d)||a==d?s(a,o):a>d?l(a,d):l(d,a)},q=e=>{let i;const o=t.brandName,c=e.ProductName,s=e.Topic.replaceAll(" ","_"),l=e.EnglishSeries.replaceAll(" ","_"),a=e.EnglishName.replaceAll(" ","_"),d=`/product/${encodeURIComponent(o)}/${encodeURIComponent(s)}/${encodeURIComponent(l)}/${encodeURIComponent(a)}/index.html`,n=(e.Img||"").split(";").map(f).filter(Boolean),r=n[0]||"",_=n[1]&&`data-hover-src="${n[1]}"`||"",H=f(e.Logo),v=I(e.Price,e.Price2,e.New);let E="";if(i=e.ColorWithSizes){const z=g=>{if(g&&typeof g!="string")return null;let h=g.trim();h.startsWith("[")&&(h=h.substring(h.indexOf("]")+1));const L=h.indexOf("("),S=(L===-1?h:h.substring(0,L)).trim();return S?'<div class="mine-circle-fill" style="background-color:'+S+';"></div>':null};E=i.split(";").map(z).filter(Boolean).join("")}return`<div class="col"><div class="card card-cover h-100% overflow-hidden text-bg-white rounded-4 shadow-lg"
        onmouseenter="onHoverProductCard(event);" onmouseout="onHoverProductCard(event);">
        <img src="${r}" data-src="${r}" ${_} class="card-img-top" alt="${c}">
        <div class="card-img-overlay">
            <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">${v.label}</li>
            </ul>
        </div>
        <div class="d-flex justify-content-center p-2 pb-0">${E}</div>
        <div class="card-body">
            <h6 class="card-title text-center">${o}<br>${c}</h6>
            <br>
            <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                    <img src="${H}" alt="${o}" width="36" height="36" class="rounded-circle border border-white">
                </li>
                <li class="me-auto"></li>
                <li class="me-auto"></li>
                <li class="me-auto">
                    <a class="product-link" href="${d}" onclick="onClickProductCard(event);">${v.price}</a>
                </li>
            </ul>
        </div></div></div>`},$=u.querySelectorAll(t.queryTopicNode);if($.length<1)return console.debug("not found topic node(s)");const R=await C(t.brandName),B=T(R);$.forEach((e,i)=>{const o=e.querySelector(t.queryTabNode);if(!o)return console.error("not found tabs for items");const c=e.querySelector(m),s=B[i];if(!s)return;const l=[];let a=null;s.forEach(d=>{const{Topic:n,Series:r}=d;l.includes(r)||(l.push(r),o.innerHTML+=`<li>
                    <h3>${r}</h3>
                    <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5"
                        data-topic="${n}" data-series="${r}" />
                </li>
`,a=o.querySelector(`[data-series="${r}"]`)),a&&(a.innerHTML+=q(d)+`
`)}),c&&(c.innerHTML=l.map(d=>`<option>${d}</option>`).join(`
`))})},G=async(u,t)=>(window.onClickProductCard=W,window.onHoverProductCard=M,window.onTabSelected=D,await F(u,t)),Z={init:G};export{Z as p};

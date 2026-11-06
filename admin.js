// Edit mode. Only loads when the page is opened with ?edit on the end of the URL.
(function(){
  var KEY='site_admin_v1',st={};
  try{st=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
  var S=JSON.parse(JSON.stringify(window.SITE));
  S.theme=S.theme||{};S.buttons=S.buttons||[];S.tabs=S.tabs||[];
  var guess=(location.hostname.slice(-10)==='.github.io'&&location.pathname.split('/')[1])?location.hostname.split('.')[0]+'/'+location.pathname.split('/')[1]:'';
  var repo=st.repo||guess,token=st.token||'';
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
  function persist(){try{localStorage.setItem(KEY,JSON.stringify({repo:repo,token:token}))}catch(e){}}

  var css=document.createElement('style');
  css.textContent='#admin{position:fixed;left:0;right:0;bottom:0;max-height:58vh;overflow:auto;background:var(--card);color:var(--fg);border-top:2px solid var(--accent);padding:12px 16px;z-index:99;font:14px/1.4 system-ui,sans-serif}'
  +'#admin input,#admin select,#admin textarea{width:100%;padding:6px 8px;margin:2px 0 8px;background:var(--bg);color:var(--fg);border:1px solid var(--line);border-radius:6px;font:inherit}'
  +'#admin textarea{min-height:120px;font-family:ui-monospace,monospace}'
  +'#admin button{padding:6px 12px;border-radius:6px;border:1px solid var(--accent);background:transparent;color:var(--accent);font-weight:600;cursor:pointer;margin:2px 4px 2px 0}'
  +'#admin button.p{background:var(--accent);color:var(--on-accent)}'
  +'#admin .row{border:1px solid var(--line);border-radius:8px;padding:8px;margin:8px 0}'
  +'#admin .g{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0 12px}'
  +'#admin label{color:var(--muted);font-size:12px}#admin summary{cursor:pointer;font-weight:700;margin:6px 0}';
  document.head.appendChild(css);
  var box=document.createElement('div');box.id='admin';document.body.appendChild(box);
  document.body.style.paddingBottom='60vh';

  function msg(t,bad){var m=document.getElementById('amsg');if(m){m.textContent=t;m.style.color=bad?'#d33':'var(--accent)'}}
  var timer;function preview(){clearTimeout(timer);timer=setTimeout(function(){window.renderSite(S)},300)}
  function slug(t){return String(t).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'tab'}

  function draw(){
    var h='<div style="display:flex;gap:12px;align-items:center"><b>Edit mode</b><span id="amsg" style="flex:1"></span><button data-a="hide">Hide</button></div>';
    h+='<details><summary>Connection (needed to save)</summary><div class="g"><div><label>Repo (owner/name)</label><input data-k="repo" value="'+esc(repo)+'"></div>'
     +'<div><label>GitHub token (stays in this browser only)</label><input data-k="token" type="password" value="'+esc(token)+'"></div></div></details>';
    h+='<details open><summary>Site</summary><div class="g">'
     +'<div><label>Title</label><input data-s="title" value="'+esc(S.title)+'"></div>'
     +'<div><label>Tagline</label><input data-s="tagline" value="'+esc(S.tagline)+'"></div>'
     +'<div><label>Footer</label><input data-s="footer" value="'+esc(S.footer)+'"></div>'
     +'<div><label>Accent colour (light)</label><input data-th="accent" type="color" value="'+esc(S.theme.accent||'#0b6bcb')+'"></div>'
     +'<div><label>Accent colour (dark)</label><input data-th="accentDark" type="color" value="'+esc(S.theme.accentDark||'#6cb0ff')+'"></div>'
     +'<div><label>Mode</label><select data-th="mode">'+['auto','light','dark'].map(function(m){return '<option'+((S.theme.mode||'auto')===m?' selected':'')+'>'+m+'</option>'}).join('')+'</select></div></div></details>';
    h+='<details><summary>Buttons ('+S.buttons.length+')</summary>';
    S.buttons.forEach(function(b,i){h+='<div class="row g"><div><label>Label</label><input data-b="'+i+'" data-f="label" value="'+esc(b.label)+'"></div><div><label>Link (https://… or #tabid)</label><input data-b="'+i+'" data-f="url" value="'+esc(b.url)+'"></div><div><button data-a="delb" data-i="'+i+'">Delete</button></div></div>'});
    h+='<button data-a="addb">+ Add button</button></details>';
    h+='<details open><summary>Tabs ('+S.tabs.length+')</summary>';
    S.tabs.forEach(function(t,i){
      h+='<div class="row"><div class="g"><div><label>Tab title</label><input data-t="'+i+'" data-f="title" value="'+esc(t.title)+'"></div>'
       +'<div><label>Type</label><select data-t="'+i+'" data-f="type"><option value="html"'+(t.type!=='embed'?' selected':'')+'>Your own content (HTML)</option><option value="embed"'+(t.type==='embed'?' selected':'')+'>Embed (Google Doc, YouTube…)</option></select></div></div>';
      if(t.type==='embed')h+='<label>Embed URL</label><input data-t="'+i+'" data-f="url" value="'+esc(t.url)+'"><label>Intro text (optional)</label><input data-t="'+i+'" data-f="intro" value="'+esc(t.intro)+'">';
      else h+='<label>Content (HTML)</label><textarea data-t="'+i+'" data-f="content">'+esc(t.content)+'</textarea>';
      h+='<button data-a="up" data-i="'+i+'">↑</button><button data-a="down" data-i="'+i+'">↓</button><button data-a="del" data-i="'+i+'">Delete tab</button></div>';
    });
    h+='<button data-a="add">+ Add tab</button></details>';
    h+='<div style="margin-top:8px"><button class="p" data-a="save">Save to GitHub</button></div>';
    box.innerHTML=h;
  }

  box.addEventListener('input',function(e){
    var d=e.target.dataset,v=e.target.value;
    if(d.k){if(d.k==='repo')repo=v.trim();else token=v.trim();persist();return}
    if(d.s)S[d.s]=v;
    else if(d.th)S.theme[d.th]=v;
    else if(d.b!=null)S.buttons[+d.b][d.f]=v;
    else if(d.t!=null){S.tabs[+d.t][d.f]=v;if(d.f==='type'){draw()}}
    preview();
  });
  box.addEventListener('click',function(e){
    var d=e.target.dataset,i=+d.i;if(!d.a)return;
    if(d.a==='hide'){box.remove();document.body.style.paddingBottom='';return}
    if(d.a==='add'){var id=slug('new tab'),n=1;while(S.tabs.some(function(t){return t.id===id}))id='new-tab-'+(++n);S.tabs.push({id:id,title:'New tab',type:'html',content:'<h2>New tab</h2><p>Write something here.</p>'})}
    if(d.a==='del'&&confirm('Delete this tab?'))S.tabs.splice(i,1);
    if(d.a==='up'&&i>0)S.tabs.splice(i-1,0,S.tabs.splice(i,1)[0]);
    if(d.a==='down'&&i<S.tabs.length-1)S.tabs.splice(i+1,0,S.tabs.splice(i,1)[0]);
    if(d.a==='addb')S.buttons.push({label:'Button',url:'https://'});
    if(d.a==='delb')S.buttons.splice(i,1);
    if(d.a==='save'){save();return}
    draw();window.renderSite(S);
  });

  function b64(s){return btoa(unescape(encodeURIComponent(s)))}
  async function save(){
    if(!/^[^\/\s]+\/[^\/\s]+$/.test(repo)||!token){msg('Open Connection and add your repo and token first.',true);return}
    var url='https://api.github.com/repos/'+repo+'/contents/config.js',
        hd={Authorization:'Bearer '+token,Accept:'application/vnd.github+json'};
    msg('Saving…');
    try{
      var g=await fetch(url,{headers:hd}),sha;
      if(g.ok)sha=(await g.json()).sha;else if(g.status!==404){throw new Error('Could not read config.js ('+g.status+'). Check repo name and token.')}
      var text='// Managed by edit mode. You can also edit this file by hand.\nwindow.SITE = '+JSON.stringify(S,null,2)+';\n';
      var p=await fetch(url,{method:'PUT',headers:hd,body:JSON.stringify({message:'Update site via edit mode',content:b64(text),sha:sha})});
      if(!p.ok)throw new Error('Save failed ('+p.status+'): '+((await p.json()).message||''));
      msg('Saved. Live in about a minute.');
    }catch(err){msg(err.message,true)}
  }
  draw();
})();

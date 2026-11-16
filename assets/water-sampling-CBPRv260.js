var e=`<!DOCTYPE html>
<html lang="mn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ундны усны дээж авалт — Интерактив хичээл</title>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
:root{
  --navy:#0b3a7a; --blue:#1667c7; --sky:#e8f3ff; --sky2:#cfe6ff; --aqua:#2fb6e8;
  --green:#1f9d55; --red:#d93636; --amber:#f2a516; --ink:#1b2a41; --muted:#5b6b82;
  --card:#ffffff; --r:18px;
}
*{box-sizing:border-box}
body{margin:0;font-family:'Nunito',system-ui,sans-serif;color:var(--ink);
  background:linear-gradient(180deg,#dff0ff 0%,#f6fbff 40%,#eef7ff 100%);min-height:100vh}
header{padding:28px 20px 70px;text-align:center;color:#fff;position:relative;overflow:hidden;
  background:linear-gradient(135deg,#0b3a7a,#1667c7 60%,#2fb6e8)}
header h1{margin:0;font-size:clamp(26px,4.5vw,44px);font-weight:900;letter-spacing:.5px}
header p{margin:8px 0 0;font-size:clamp(15px,2vw,19px);opacity:.92}
.wave{position:absolute;left:0;right:0;bottom:-1px;height:60px}
nav{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);
  box-shadow:0 2px 12px rgba(11,58,122,.08)}
.navin{max-width:1100px;margin:auto;display:flex;gap:6px;overflow-x:auto;padding:10px 14px}
.navin button{flex:none;border:0;background:var(--sky);color:var(--navy);font:700 14px 'Nunito';
  padding:9px 14px;border-radius:999px;cursor:pointer;transition:.2s;white-space:nowrap}
.navin button.on{background:var(--blue);color:#fff}
.navin button.done::after{content:" ✓";color:var(--green)}
.navin button.on.done::after{color:#bff5d3}
.progress{height:5px;background:var(--sky2)}
.progress i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--aqua),var(--green));transition:.4s}
main{max-width:1100px;margin:0 auto;padding:22px 16px 60px}
section{display:none;animation:fade .35s ease}
section.on{display:block}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
h2{font-size:clamp(22px,3vw,30px);color:var(--navy);margin:6px 0 4px;font-weight:900}
.lead{color:var(--muted);margin:0 0 18px;font-size:16px}
.card{background:var(--card);border-radius:var(--r);padding:20px;box-shadow:0 6px 24px rgba(11,58,122,.08)}
.grid{display:grid;gap:16px}
.g2{grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.g3{grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.pill{display:inline-block;background:var(--sky);color:var(--blue);font-weight:800;font-size:13px;padding:4px 10px;border-radius:999px}
.btn{border:0;background:var(--blue);color:#fff;font:800 15px 'Nunito';padding:11px 20px;border-radius:12px;cursor:pointer;transition:.15s}
.btn:hover{filter:brightness(1.08)} .btn:active{transform:scale(.97)}
.btn.ghost{background:var(--sky);color:var(--navy)}
.btn.green{background:var(--green)}
.btn:disabled{opacity:.45;cursor:not-allowed}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.next{margin-top:22px;display:flex;justify-content:space-between;gap:10px}
.ico{width:54px;height:54px;border-radius:16px;display:grid;place-items:center;font-size:28px;background:var(--sky);flex:none}
.check li{list-style:none;margin:10px 0;padding-left:30px;position:relative}
.check li::before{content:"✔";position:absolute;left:0;top:0;color:#fff;background:var(--blue);width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:12px}
ul.check{padding:0;margin:0}

/* Flip cards */
.flip{perspective:1000px;height:220px;cursor:pointer}
.flip .in{position:relative;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d}
.flip.f .in{transform:rotateY(180deg)}
.flip .fa,.flip .ba{position:absolute;inset:0;backface-visibility:hidden;border-radius:var(--r);padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;box-shadow:0 6px 24px rgba(11,58,122,.1)}
.flip .fa{background:#fff}
.flip .ba{background:linear-gradient(135deg,var(--blue),var(--aqua));color:#fff;transform:rotateY(180deg);font-size:15px}
.flip .big{font-size:56px}
.flip h3{margin:8px 0 2px;color:var(--navy)}
.hint{font-size:12px;color:var(--muted);margin-top:6px}

/* Steps */
.stepper{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.stepper button{flex:1;min-width:90px;border:0;background:#fff;border-radius:14px;padding:10px 6px;font:800 13px 'Nunito';color:var(--muted);cursor:pointer;box-shadow:0 3px 10px rgba(11,58,122,.07)}
.stepper button b{display:block;font-size:22px;color:var(--sky2)}
.stepper button.on{background:var(--blue);color:#fff}.stepper button.on b{color:#fff}
.stepper button.seen b{color:var(--blue)}.stepper button.on.seen b{color:#fff}
.stepbody{display:grid;grid-template-columns:240px 1fr;gap:20px;align-items:center}
@media(max-width:640px){.stepbody{grid-template-columns:1fr}}
.scene{height:220px;border-radius:var(--r);background:linear-gradient(180deg,#eaf5ff,#cfe6ff);display:grid;place-items:center;overflow:hidden}
.scene svg{width:200px;height:200px}
.tip{margin-top:12px;background:#fff8e6;border-left:5px solid var(--amber);padding:10px 14px;border-radius:10px;font-size:15px}

.pc{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:6px 0;border-radius:12px;background:#f4f9ff;border:2px solid transparent;cursor:pointer;font-weight:700;transition:.2s;user-select:none}
.pc:hover{border-color:var(--sky2)}
.pc input{display:none}
.pc .box{width:24px;height:24px;border-radius:7px;border:2.5px solid #9bb7d8;background:#fff;flex:none;display:grid;place-items:center;transition:.2s}
.pc.on{background:#e6f7ee;border-color:#bfe8cf}
.pc.on .box{background:var(--green);border-color:var(--green)}
.pc.on .box::after{content:"✓";color:#fff;font-weight:900;font-size:15px}
.pc.on .pt{color:var(--green);text-decoration:line-through;text-decoration-thickness:1.5px}
.pc .pe{font-size:20px}
/* Container builder */
.opt{border:3px solid transparent;background:#fff;border-radius:16px;padding:14px;cursor:pointer;text-align:center;transition:.2s;box-shadow:0 4px 14px rgba(11,58,122,.07)}
.opt.sel{border-color:var(--blue);background:var(--sky)}
.opt .e{font-size:38px}
.feedback{margin-top:14px;padding:14px;border-radius:12px;font-weight:700;display:none}
.feedback.ok{display:block;background:#e6f7ee;color:var(--green)}
.feedback.bad{display:block;background:#fdeaea;color:var(--red)}

/* Cooler sim */
.sim{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:720px){.sim{grid-template-columns:1fr}}
input[type=range]{width:100%;accent-color:var(--blue)}
.meter{display:flex;align-items:flex-end;gap:16px}
.thermo{width:30px;height:180px;border-radius:15px;background:#eef;position:relative;border:3px solid #cdd}
.thermo i{position:absolute;bottom:0;left:0;right:0;border-radius:12px;transition:.3s}
.status{font-size:20px;font-weight:900;margin-top:8px}
.bar{height:14px;background:#eef3fa;border-radius:8px;overflow:hidden;margin-top:6px}
.bar i{display:block;height:100%;transition:.3s}

/* Sort game */
.sortlist{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.sortlist li{background:#fff;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 3px 10px rgba(11,58,122,.08);font-weight:700;transition:background .3s}
.sortlist li .n{width:30px;height:30px;border-radius:50%;background:var(--sky);color:var(--blue);display:grid;place-items:center;font-weight:900;flex:none}
.sortlist li .mv{margin-left:auto;display:flex;gap:4px}
.sortlist li .mv button{border:0;background:var(--sky);border-radius:8px;width:34px;height:34px;cursor:pointer;font-size:16px}
.sortlist li.right{background:#e6f7ee}.sortlist li.wrong{background:#fdeaea}

/* Label */
.label-wrap{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:720px){.label-wrap{grid-template-columns:1fr}}
.bottle{position:relative;width:240px;margin:auto}
.lbl{background:#fff;border:2px dashed #9bb7d8;border-radius:10px;padding:12px;font-family:'Courier New',monospace;font-size:14px;line-height:1.7;position:absolute;left:30px;right:30px;top:120px}
.field{display:flex;flex-direction:column;gap:4px;margin-bottom:10px}
.field label{font-weight:800;font-size:14px;color:var(--navy)}
.field input,.field select{font:600 15px 'Nunito';padding:10px 12px;border-radius:10px;border:2px solid var(--sky2);outline:none}
.field input:focus,.field select:focus{border-color:var(--blue)}

/* True/False */
.tf{display:flex;flex-direction:column;gap:10px}
.tfrow{background:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;box-shadow:0 3px 10px rgba(11,58,122,.07)}
.tfrow p{margin:0;flex:1;min-width:200px;font-weight:600}
.tfrow button{border:0;border-radius:10px;padding:8px 14px;font:800 14px 'Nunito';cursor:pointer}
.tfrow .y{background:#e6f7ee;color:var(--green)}.tfrow .no{background:#fdeaea;color:var(--red)}
.tfrow.answered button{opacity:.4;pointer-events:none}
.tfrow .why{flex-basis:100%;font-size:14px;color:var(--muted);display:none}
.tfrow.answered .why{display:block}

/* Quiz */
.q{font-size:19px;font-weight:800;margin:6px 0 14px}
.ans{display:flex;flex-direction:column;gap:10px}
.ans button{text-align:left;border:2px solid var(--sky2);background:#fff;border-radius:14px;padding:13px 16px;font:700 16px 'Nunito';color:var(--ink);cursor:pointer;transition:.15s}
.ans button:hover{border-color:var(--blue)}
.ans button.c{background:#e6f7ee;border-color:var(--green)}
.ans button.w{background:#fdeaea;border-color:var(--red)}
.ans.lock button{pointer-events:none}
.score{font-size:60px;font-weight:900;color:var(--blue);text-align:center}
.badge{font-size:80px;text-align:center}
.foot{text-align:center;color:var(--navy);font-weight:900;font-size:18px;margin-top:30px;opacity:.8}
.callout{display:flex;gap:14px;align-items:flex-start}
.warn{background:#fff1f1;border:2px solid #f5c2c2}
</style>
</head>
<body>
<header>
  <h1>💧 Ундны усны дээж авалт</h1>
  <p>Цэвэр, аюулгүй усыг — Эрүүл ирээдүйд · Интерактив хичээл</p>
  <svg class="wave" viewBox="0 0 1440 60" preserveAspectRatio="none"><path fill="#dff0ff" d="M0,30 C240,60 480,0 720,25 C960,50 1200,10 1440,30 L1440,60 L0,60Z"/></svg>
</header>
<nav>
  <div class="navin" id="nav"></div>
  <div class="progress"><i id="prog"></i></div>
</nav>
<main>

<!-- 1. Intro -->
<section data-t="1. Танилцуулга">
  <span class="pill">Хичээл 1/8</span>
  <h2>Яагаад дээж зөв авах ёстой вэ?</h2>
  <p class="lead">Лабораторийн шинжилгээний үр дүн нь дээж хэр зөв авсанаас шууд хамаарна. Буруу авсан дээж — буруу дүгнэлт.</p>
  <div class="grid g2">
    <div class="card callout"><div class="ico">🎯</div><div>
      <h3 style="margin:0 0 6px;color:var(--navy)">Зорилго</h3>
      Ундны усны дээж авах нь усны чанарыг шинжлэх лабораторийн судалгаанд шаардлагатай <b>төлөөлөхүйц</b> дээжийг <b>зөв аргаар</b> авахад оршино.
    </div></div>
    <div class="card callout"><div class="ico">🛡️</div><div>
      <h3 style="margin:0 0 6px;color:var(--navy)">Ач холбогдол</h3>
      <ul class="check">
        <li>Хүн амын эрүүл мэндийг хамгаална</li>
        <li>Усны чанарыг хянаж, эрсдэлийг бууруулна</li>
        <li>Байгаль орчны бохирдлыг илрүүлэхэд чухал</li>
      </ul>
    </div></div>
  </div>
  <div class="card" style="margin-top:16px">
    <h3 style="margin:0 0 8px;color:var(--navy)">🤔 Бодоод үзээрэй</h3>
    <p style="margin:0 0 12px">Хэрэв дээж авагч бээлий өмсөлгүй савны хүзүүнд гараараа хүрвэл шинжилгээнд юу гарах вэ?</p>
    <div class="row">
      <button class="btn ghost" onclick="think(this,0)">Ус цэвэр гэж гарна</button>
      <button class="btn ghost" onclick="think(this,1)">Бодит бус бохирдол илэрч болно</button>
      <button class="btn ghost" onclick="think(this,0)">Ямар ч нөлөөгүй</button>
    </div>
    <div class="feedback" id="thinkFb"></div>
  </div>
  <div class="next"><span></span><button class="btn" onclick="go(1)">Дараах →</button></div>
</section>

<!-- 2. Types -->
<section data-t="2. Дээжийн төрөл">
  <span class="pill">Хичээл 2/8</span>
  <h2>Дээж авах төрлүүд</h2>
  <p class="lead">Карт дээр дарж эргүүлэн, тус бүрийн онцлогийг судлаарай.</p>
  <div class="grid g3">
    <div class="flip" onclick="flipC(this)"><div class="in">
      <div class="fa"><div class="big">🚰</div><h3>Худаг, цэвэр усан хангамжийн ус</h3><div class="hint">дарж эргүүлэх ↻</div></div>
      <div class="ba"><b>Ундны ус</b><br><br>Хүн шууд хэрэглэдэг тул хамгийн чухал. Ус урсдаг хэсгээс (цорго) авна — эхлээд хэсэг хугацаанд урсгана.</div>
    </div></div>
    <div class="flip" onclick="flipC(this)"><div class="in">
      <div class="fa"><div class="big">🏞️</div><h3>Гадаргын ус</h3><p style="margin:0;color:var(--muted)">гол, нуур, тогтоол ус</p><div class="hint">дарж эргүүлэх ↻</div></div>
      <div class="ba"><b>Гадаргын ус</b><br><br>Эргээс хол, гадаргын хөөс, ёроолын лагнаас зайтай, урсгалын төлөөлөхүйц цэгээс авна.</div>
    </div></div>
    <div class="flip" onclick="flipC(this)"><div class="in">
      <div class="fa"><div class="big">🏭</div><h3>Хаягдал ус, бохир ус</h3><p style="margin:0;color:var(--muted)">шаардлагатай үед</p><div class="hint">дарж эргүүлэх ↻</div></div>
      <div class="ba"><b>Хаягдал ус</b><br><br>Бохирдлын эх үүсвэрийг тогтоох, цэвэрлэгээний үр дүнг хянахад авна. Хамгаалалтын хэрэгслийг заавал хэрэглэнэ.</div>
    </div></div>
  </div>
  <div class="card" style="margin-top:16px">
    <h3 style="margin:0 0 10px;color:var(--navy)">🧩 Тохирох төрлийг сонго</h3>
    <div id="typeGame"></div>
  </div>
  <div class="next"><button class="btn ghost" onclick="go(0)">← Өмнөх</button><button class="btn" onclick="go(2)">Дараах →</button></div>
</section>

<!-- 3. Steps -->
<section data-t="3. Дараалал">
  <span class="pill">Хичээл 3/8</span>
  <h2>Дээж авах 6 алхам</h2>
  <p class="lead">Алхам бүр дээр дарж дэлгэрэнгүй үзээрэй. Бүх алхмыг үзсэний дараа дараагийн хичээл нээгдэнэ.</p>
  <div class="stepper" id="stepper"></div>
  <div class="card stepbody">
    <div class="scene" id="scene"></div>
    <div>
      <h3 id="stTitle" style="margin:0 0 8px;color:var(--navy);font-size:24px"></h3>
      <ul class="check" id="stList"></ul>
      <div class="tip" id="stTip"></div>
    </div>
  </div>
  <div class="next"><button class="btn ghost" onclick="go(1)">← Өмнөх</button>
    <div class="row"><button class="btn ghost" id="stPrev" onclick="step(cur-1)">‹ Алхам</button><button class="btn" id="stNext" onclick="stepNext()">Алхам ›</button></div></div>
</section>

<!-- 4. Containers -->
<section data-t="4. Сав">
  <span class="pill">Хичээл 4/8</span>
  <h2>Ашиглагдах сав</h2>
  <p class="lead">Зөв савны 4 шаардлагыг сонгоод “Шалгах” дарна уу.</p>
  <div class="grid g3" id="contOpts"></div>
  <div class="row" style="margin-top:14px"><button class="btn" onclick="checkCont()">Шалгах</button><button class="btn ghost" onclick="resetCont()">Дахин</button></div>
  <div class="feedback" id="contFb"></div>
  <div class="next"><button class="btn ghost" onclick="go(2)">← Өмнөх</button><button class="btn" onclick="go(4)">Дараах →</button></div>
</section>

<!-- 5. Transport sim -->
<section data-t="5. Тээвэрлэлт">
  <span class="pill">Хичээл 5/8</span>
  <h2>Тээвэрлэлт, хадгалалт — Симуляц</h2>
  <p class="lead">Хадгалах температур болон лабораторид хүргэх хугацааг өөрчилж, дээж хүчинтэй эсэхийг шалгаарай.</p>
  <div class="card sim">
    <div>
      <div class="field"><label>🌡️ Хөргөгч савны температур: <span id="tV">4</span>°C</label>
        <input type="range" id="tR" min="-5" max="30" value="4" oninput="sim()"></div>
      <div class="field"><label>⏱️ Лабораторид хүргэх хугацаа: <span id="hV">6</span> цаг</label>
        <input type="range" id="hR" min="1" max="48" value="6" oninput="sim()"></div>
      <div class="field"><label><input type="checkbox" id="sealC" checked onchange="sim()"> Сав битүүмжлэгдсэн</label></div>
      <div class="field"><label><input type="checkbox" id="sunC" onchange="sim()"> Нарны шууд тусгалд байсан</label></div>
    </div>
    <div>
      <div class="meter">
        <div class="thermo"><i id="thFill"></i></div>
        <div style="flex:1">
          <div style="font-size:60px" id="coolEmoji">🧊</div>
          <div class="status" id="simStatus"></div>
          <div style="color:var(--muted);font-size:14px" id="simWhy"></div>
          <div style="margin-top:12px;font-weight:800;font-size:14px">Дээжийн найдвартай байдал</div>
          <div class="bar"><i id="qBar"></i></div>
        </div>
      </div>
    </div>
  </div>
  <div class="tip">📌 Дүрэм: <b>4°C орчим</b> хадгалж, <b>24 цагийн дотор</b> лабораторид хүргэнэ. Битүүмжилсэн саванд, нарнаас хамгаалж тээвэрлэнэ.</div>
  <div class="next"><button class="btn ghost" onclick="go(3)">← Өмнөх</button><button class="btn" onclick="go(5)">Дараах →</button></div>
</section>

<!-- 6. Practice: order + label -->
<section data-t="6. Дадлага">
  <span class="pill">Хичээл 6/8</span>
  <h2>Дадлага ажил</h2>
  <div class="grid g2">
    <div class="card">
      <h3 style="margin:0 0 6px;color:var(--navy)">① Алхмуудыг зөв дараалалд оруул</h3>
      <p style="margin:0 0 12px;color:var(--muted);font-size:14px">↑ ↓ товчоор байрлалыг солино.</p>
      <ul class="sortlist" id="sortL"></ul>
      <div class="row" style="margin-top:12px"><button class="btn" onclick="checkSort()">Шалгах</button><button class="btn ghost" onclick="shuffleSort()">Холих</button></div>
      <div class="feedback" id="sortFb"></div>
    </div>
    <div class="card">
      <h3 style="margin:0 0 6px;color:var(--navy)">② Дээжийн шошго бөглө</h3>
      <p style="margin:0 0 12px;color:var(--muted);font-size:14px">Шошго бүрэн, усанд нэвтрэхгүй байх ёстой.</p>
      <div class="field"><label>Дээжийн дугаар</label><input id="lN" placeholder="ж: Худаг №1" oninput="lbl()"></div>
      <div class="field"><label>Огноо</label><input id="lD" type="date" oninput="lbl()"></div>
      <div class="field"><label>Цаг</label><input id="lT" type="time" oninput="lbl()"></div>
      <div class="field"><label>Дээжийн төрөл</label><select id="lK" onchange="lbl()"><option value="">— сонгох —</option><option>Ундны ус</option><option>Гадаргын ус</option><option>Хаягдал ус</option></select></div>
      <div class="field"><label>Хариуцсан хүн</label><input id="lP" placeholder="Нэр" oninput="lbl()"></div>
      <div class="field"><label>Шошгоны төрөл</label><select id="lM" onchange="lbl()"><option value="">— сонгох —</option><option value="w">Ус нэвтрэхгүй шошго</option><option value="p">Энгийн цаас</option></select></div>
      <div style="background:#f4f9ff;border:2px dashed #9bb7d8;border-radius:12px;padding:12px;font-family:'Courier New',monospace;font-size:14px;line-height:1.7" id="lblPrev"></div>
      <div class="row" style="margin-top:12px"><button class="btn" onclick="checkLbl()">Шалгах</button></div>
      <div class="feedback" id="lblFb"></div>
    </div>
  </div>
  <div class="next"><button class="btn ghost" onclick="go(4)">← Өмнөх</button><button class="btn" onclick="go(6)">Дараах →</button></div>
</section>

<!-- 7. Cautions -->
<section data-t="7. Анхаарах">
  <span class="pill">Хичээл 7/8</span>
  <h2>⚠️ Анхаарах зүйлс — Үнэн үү, худал уу?</h2>
  <p class="lead">Өгүүлбэр бүрийг уншаад зөв эсэхийг сонго.</p>
  <div class="tf" id="tf"></div>
  <div class="card warn callout" style="margin-top:16px"><div class="ico" style="background:#fdeaea">❗</div><div>
    <b>Санаж явах 4 дүрэм:</b> гар, сав, тагийг бохирдуулахгүй · тоосонцор, халуун, нарны шууд тусгалаас хол · хамгаалалтын хэрэгсэл ашиглах · зөвхөн зориулалтын сав.
  </div></div>
  <div class="next"><button class="btn ghost" onclick="go(5)">← Өмнөх</button><button class="btn" onclick="go(7)">Шалгалт →</button></div>
</section>

<!-- 8. Quiz -->
<section data-t="8. Шалгалт">
  <span class="pill">Хичээл 8/8</span>
  <h2>Эцсийн шалгалт</h2>
  <div class="card" id="quiz"></div>
  <div class="next"><button class="btn ghost" onclick="go(6)">← Өмнөх</button><span></span></div>
</section>

<div class="foot">💧 Зөв дээж — найдвартай шинжилгээ — цэвэр ус</div>
</main>

<script>
const secs=[...document.querySelectorAll('section')];
const nav=document.getElementById('nav');
const done=new Set();
secs.forEach((s,i)=>{const b=document.createElement('button');b.textContent=s.dataset.t;b.onclick=()=>go(i);nav.appendChild(b)});
function go(i){
  secs.forEach((s,j)=>s.classList.toggle('on',j===i));
  [...nav.children].forEach((b,j)=>b.classList.toggle('on',j===i));
  nav.children[i].scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
  window.scrollTo({top:0,behavior:'smooth'});
  mark(i);
}
function mark(i){done.add(i);[...nav.children].forEach((b,j)=>b.classList.toggle('done',done.has(j)));
  document.getElementById('prog').style.width=(done.size/secs.length*100)+'%'}
function fb(id,ok,msg){const e=document.getElementById(id);e.className='feedback '+(ok?'ok':'bad');e.innerHTML=msg}

// intro
function think(b,ok){fb('thinkFb',ok,ok?'✅ Зөв! Гарын бактери саванд орж, усанд байхгүй бохирдол илэрч болно. Тиймээс бээлий заавал өмсөнө.':'❌ Үгүй ээ. Гараас бактери саванд шилжиж, шинжилгээний дүнг гажуудуулна.')}

// flip
function flipC(e){e.classList.toggle('f')}

// type game
const tg=[["Айлын гал тогооны цоргоны ус","Ундны ус"],["Туул голын ус","Гадаргын ус"],["Үйлдвэрээс гарч буй ус","Хаягдал ус"],["Гүний худгийн ус","Ундны ус"],["Тогтоол цөөрмийн ус","Гадаргын ус"]];
(function(){const w=document.getElementById('typeGame');tg.forEach(([q,a])=>{
  const r=document.createElement('div');r.className='tfrow';r.style.marginBottom='8px';
  r.innerHTML=\`<p>\${q}</p>\`;["Ундны ус","Гадаргын ус","Хаягдал ус"].forEach(o=>{const b=document.createElement('button');b.className='y';b.style.background='var(--sky)';b.style.color='var(--navy)';b.textContent=o;
    b.onclick=()=>{[...r.querySelectorAll('button')].forEach(x=>x.style.pointerEvents='none');b.style.background=o===a?'#c9f0d8':'#f8d0d0';b.textContent=(o===a?'✅ ':'❌ ')+o;
      if(o!==a){[...r.querySelectorAll('button')].find(x=>x.textContent===a).style.background='#c9f0d8'}};r.appendChild(b)});w.appendChild(r)})})();

// steps
const svgs={
 prep:\`<svg viewBox="0 0 200 200"><rect x="30" y="110" width="140" height="60" rx="10" fill="#1667c7"/><rect x="30" y="100" width="140" height="20" rx="6" fill="#0b3a7a"/><rect x="55" y="55" width="22" height="45" rx="5" fill="#cfe6ff" stroke="#1667c7" stroke-width="3"/><rect x="58" y="45" width="16" height="12" fill="#1667c7"/><rect x="95" y="60" width="22" height="40" rx="5" fill="#a0602a"/><rect x="98" y="50" width="16" height="12" fill="#222"/><rect x="130" y="62" width="40" height="38" rx="4" fill="#fff" stroke="#9bb7d8" stroke-width="3"/><line x1="137" y1="74" x2="163" y2="74" stroke="#9bb7d8" stroke-width="3"/><line x1="137" y1="84" x2="158" y2="84" stroke="#9bb7d8" stroke-width="3"/><text x="100" y="148" text-anchor="middle" font-size="26" fill="#fff">🧤😷</text></svg>\`,
 point:\`<svg viewBox="0 0 200 200"><rect x="20" y="50" width="90" height="22" rx="8" fill="#7d8ea6"/><rect x="95" y="50" width="30" height="50" rx="8" fill="#7d8ea6"/><rect x="60" y="30" width="16" height="22" fill="#5b6b82"/><rect x="45" y="24" width="46" height="10" rx="5" fill="#5b6b82"/><path d="M110 100 Q 108 140 110 180" stroke="#2fb6e8" stroke-width="10" fill="none" stroke-linecap="round"><animate attributeName="stroke-dasharray" values="0,200;200,0" dur="1.5s" repeatCount="indefinite"/></path><circle cx="160" cy="60" r="22" fill="none" stroke="#d93636" stroke-width="5"/><circle cx="160" cy="60" r="8" fill="#d93636"/></svg>\`,
 rinse:\`<svg viewBox="0 0 200 200"><g transform="rotate(-25 100 100)"><rect x="70" y="60" width="60" height="100" rx="12" fill="#e8f3ff" stroke="#1667c7" stroke-width="4"/><rect x="82" y="40" width="36" height="22" fill="#e8f3ff" stroke="#1667c7" stroke-width="4"/><rect x="74" y="110" width="52" height="46" rx="8" fill="#2fb6e8" opacity=".6"><animate attributeName="height" values="46;10;46" dur="2s" repeatCount="indefinite"/></rect></g><text x="150" y="60" font-size="30">×3</text></svg>\`,
 take:\`<svg viewBox="0 0 200 200"><rect x="70" y="10" width="20" height="40" fill="#7d8ea6"/><path d="M80 50 L80 95" stroke="#2fb6e8" stroke-width="8"/><rect x="55" y="90" width="60" height="95" rx="12" fill="#e8f3ff" stroke="#1667c7" stroke-width="4"/><rect x="59" y="100" width="52" height="81" rx="8" fill="#2fb6e8" opacity=".6"><animate attributeName="y" values="175;100;100" dur="2.5s" repeatCount="indefinite"/><animate attributeName="height" values="6;81;81" dur="2.5s" repeatCount="indefinite"/></rect><text x="150" y="110" font-size="13" fill="#0b3a7a" font-weight="bold">агаарын</text><text x="150" y="126" font-size="13" fill="#0b3a7a" font-weight="bold">зай ✔</text></svg>\`,
 label:\`<svg viewBox="0 0 200 200"><rect x="55" y="45" width="90" height="140" rx="16" fill="#e8f3ff" stroke="#1667c7" stroke-width="4"/><rect x="72" y="20" width="56" height="28" rx="5" fill="#1667c7"/><rect x="62" y="85" width="76" height="66" rx="6" fill="#fff" stroke="#9bb7d8" stroke-width="2"/><text x="68" y="102" font-size="10" font-family="monospace">№: Худаг-1</text><text x="68" y="118" font-size="10" font-family="monospace">2026.11.16</text><text x="68" y="134" font-size="10" font-family="monospace">10:30</text><text x="68" y="148" font-size="10" font-family="monospace">Ундны ус</text></svg>\`,
 cool:\`<svg viewBox="0 0 200 200"><rect x="25" y="80" width="150" height="95" rx="12" fill="#1667c7"/><rect x="20" y="65" width="160" height="25" rx="8" fill="#0b3a7a"/><rect x="45" y="95" width="25" height="45" rx="5" fill="#e8f3ff"/><rect x="88" y="95" width="25" height="45" rx="5" fill="#e8f3ff"/><rect x="131" y="95" width="25" height="45" rx="5" fill="#e8f3ff"/><text x="100" y="168" text-anchor="middle" font-size="18" fill="#fff" font-weight="bold">4°C ❄</text><text x="100" y="45" text-anchor="middle" font-size="22" fill="#0b3a7a" font-weight="bold">⏱ ≤ 24ц</text></svg>\`};
const steps=[
 {t:"Бэлтгэл ажил",s:'prep',check:[
   ["🧪","Шинжилгээний зориулалтын ариутгасан сав"],
   ["🏷️","Ус нэвтрэхгүй шошго"],
   ["🖊️","Тэмдэглэгээний үзэг / маркер"],
   ["📋","Бичиг баримт, дээж авалтын маягт"],
   ["🧤","Бээлий"],
   ["😷","Маск"],
   ["🥼","Халад"],
   ["🧊","Мөсөн элементтэй хөргөгч сав"]],tip:"💡 Талбайд гарахаасаа өмнө бүх хэрэгслээ жагсаалтаар шалгаарай — мартсан зүйл дээжийг хүчингүй болгож болно."},
 {t:"Дээж авах цэгийг сонгох",s:'point',l:["Төлөөлөхүйц цэгийг сонгох","Ус урсдаг хэсгээс авах (боломжтой тохиолдолд)","Гадны бохирдлоос сэргийлэх"],tip:"💡 Цоргоноос авахдаа хоолойд тогтсон усыг гаргахын тулд эхлээд хэсэг хугацаанд урсгана."},
 {t:"Савыг ариутгах",s:'rinse',l:["Савыг 2–3 удаа дээжийн усаар зайлах","Шаардлагатай бол ариутгах (зүйлчилсэн заврын дагуу)"],tip:"💡 Нян судлалын дээжийн ариутгасан савыг зайлдаггүй — зааврыг заавал шалгаарай."},
 {t:"Дээж авах",s:'take',l:["Савыг дүүргэх (агаарын зай үлдээх)","Гар хүргэхгүй, савны дотор талыг бохирдуулахгүй байх"],tip:"💡 Тагийг доош нь харуулж барих эсвэл цэвэр гадаргуу дээр тавина. Тагны дотор талд хүрч болохгүй."},
 {t:"Шошголох",s:'label',l:["Дээжийн дугаар, огноо, цаг, төрлийг бичих","Ус нэвтрэхгүй шошго ашиглах"],tip:"💡 Шошгогүй дээж = нэргүй дээж. Лаборатори хүлээн авахгүй."},
 {t:"Хадгалах ба тээвэрлэх",s:'cool',l:["4°C орчим температурт хадгалах","Битүүмжилсэн саванд тээвэрлэх","Лабораторид аль болох хурдан хүргэх (ихэвчлэн 24 цагийн дотор)"],tip:"💡 Хөргөгч саванд мөсөн элемент хийж, дээжийг нарнаас хамгаална."}];
let cur=0;const seen=new Set();
const sp=document.getElementById('stepper');
steps.forEach((s,i)=>{const b=document.createElement('button');b.innerHTML=\`<b>\${i+1}</b>\${s.t}\`;b.onclick=()=>step(i);sp.appendChild(b)});
function step(i){if(i<0||i>=steps.length)return;cur=i;seen.add(i);const s=steps[i];
  document.getElementById('scene').innerHTML=svgs[s.s];document.getElementById('stTitle').textContent=(i+1)+'. '+s.t;
  if(s.check)drawPrep();else document.getElementById('stList').innerHTML=s.l.map(x=>\`<li>\${x}</li>\`).join('');document.getElementById('stTip').innerHTML=s.tip;
  [...sp.children].forEach((b,j)=>{b.classList.toggle('on',j===i);b.classList.toggle('seen',seen.has(j))});
  document.getElementById('stPrev').disabled=i===0;
  document.getElementById('stNext').textContent=i===steps.length-1?(seen.size===6?'Дараагийн хичээл →':'Бүх алхмыг үзээрэй'):'Алхам ›';}
const prepDone=new Set();
function drawPrep(){const items=steps[0].check,n=prepDone.size,all=n===items.length;
  document.getElementById('stList').innerHTML=
   \`<div style="display:flex;justify-content:space-between;align-items:center;margin:-4px 0 6px"><b style="color:var(--navy)">Бэлтгэлийн шалгах хуудас</b><span class="pill" style="\${all?'background:#e6f7ee;color:var(--green)':''}">\${n}/\${items.length} бэлэн</span></div>
   <div class="bar" style="margin-bottom:10px"><i style="width:\${n/items.length*100}%;background:\${all?'var(--green)':'var(--aqua)'}"></i></div>\`+
   items.map(([e,t],i)=>\`<label class="pc\${prepDone.has(i)?' on':''}"><input type="checkbox" \${prepDone.has(i)?'checked':''} onchange="togPrep(\${i})"><span class="box"></span><span class="pe">\${e}</span><span class="pt">\${t}</span></label>\`).join('')+
   \`<div class="row" style="margin-top:10px;justify-content:space-between"><span style="font-weight:800;color:\${all?'var(--green)':'var(--muted)'}">\${all?'✅ Бүх хэрэгсэл бэлэн — талбайд гарахад бэлэн!':'⬜ Бэлтгэл дутуу байна'}</span><button class="btn ghost" style="padding:7px 12px;font-size:13px" onclick="prepDone.clear();drawPrep()">Цэвэрлэх</button></div>\`;}
function togPrep(i){prepDone.has(i)?prepDone.delete(i):prepDone.add(i);drawPrep()}
function stepNext(){if(cur<steps.length-1)step(cur+1);else if(seen.size===6)go(3);}
step(0);

// containers
const conts=[["🧪","Шилэн эсвэл хуванцар (химийн урвалд ордоггүй)",1],["📏","250–500 мл багтаамжтай",1],["🧼","Ариутгасан, битүүмжилсэн",1],["🔬","Лабораторийн зориулалтын сав",1],["🥤","Ундааны хуучин лонх",0],["🪣","Таггүй хувин",0],["🧴","Угаалгын бодисны сав",0],["🛢️","5 литрийн том канистр",0]];
const co=document.getElementById('contOpts');
function drawCont(){co.innerHTML='';conts.map((c,i)=>[c,i]).sort(()=>Math.random()-.5).forEach(([c,i])=>{const d=document.createElement('div');d.className='opt';d.dataset.i=i;d.innerHTML=\`<div class="e">\${c[0]}</div><div style="font-weight:700">\${c[1]}</div>\`;d.onclick=()=>d.classList.toggle('sel');co.appendChild(d)})}
function checkCont(){const sel=[...co.querySelectorAll('.sel')].map(d=>+d.dataset.i);const ok=sel.length===4&&sel.every(i=>conts[i][2]);
  co.querySelectorAll('.opt').forEach(d=>{const g=conts[d.dataset.i][2];d.style.borderColor=g?'var(--green)':(d.classList.contains('sel')?'var(--red)':'transparent')});
  fb('contFb',ok,ok?'✅ Маш сайн! Зөв сав нь химийн урвалд ордоггүй, 250–500 мл, ариутгасан, битүүмжилсэн, лабораторийн зориулалттай байна.':'❌ Дахин оролдоорой. Ногоон хүрээтэй нь зөв хариулт. Ахуйн зориулалтын сав хэзээ ч ашиглахгүй!')}
function resetCont(){drawCont();document.getElementById('contFb').className='feedback'}
drawCont();

// sim
function sim(){const t=+tR.value,h=+hR.value,seal=sealC.checked,sun=sunC.checked;tV.textContent=t;hV.textContent=h;
  let q=100,why=[];
  const dt=Math.abs(t-4);if(t<0){q-=45;why.push('Хөлдсөн — сав хагарч, найрлага өөрчлөгдөнө')}else if(dt>4){q-=Math.min(60,dt*4);why.push('Температур өндөр — бичил биетэн үржинэ')}
  if(h>24){q-=Math.min(55,(h-24)*3+20);why.push('24 цагаас хэтэрсэн')}else if(h>12)q-=(h-12);
  if(!seal){q-=40;why.push('Битүүмжлэлгүй — гадны бохирдол орно')}
  if(sun){q-=30;why.push('Нарны тусгал — дулаарч, найрлага өөрчлөгдөнө')}
  q=Math.max(0,Math.round(q));
  const col=q>=75?'var(--green)':q>=45?'var(--amber)':'var(--red)';
  thFill.style.height=Math.min(100,Math.max(4,(t+5)/35*100))+'%';thFill.style.background=t<=8&&t>=0?'var(--aqua)':t<0?'#7fb3ff':'var(--red)';
  coolEmoji.textContent=t<0?'🥶':t<=8?'🧊':t<=18?'🌤️':'🔥';
  simStatus.textContent=q>=75?'✅ Дээж хүчинтэй':q>=45?'⚠️ Эргэлзээтэй':'❌ Дээж хүчингүй';simStatus.style.color=col;
  simWhy.textContent=why.length?why.join(' · '):'Бүх нөхцөл стандартад нийцэж байна.';
  qBar.style.width=q+'%';qBar.style.background=col;}
sim();

// sort
const order=steps.map(s=>s.t);let sorted=[];
const sl=document.getElementById('sortL');
function drawSort(){sl.innerHTML='';sorted.forEach((t,i)=>{const li=document.createElement('li');li.innerHTML=\`<span class="n">\${i+1}</span>\${t}<span class="mv"><button onclick="mv(\${i},-1)">↑</button><button onclick="mv(\${i},1)">↓</button></span>\`;sl.appendChild(li)})}
function mv(i,d){const j=i+d;if(j<0||j>=sorted.length)return;[sorted[i],sorted[j]]=[sorted[j],sorted[i]];drawSort()}
function shuffleSort(){do{sorted=[...order].sort(()=>Math.random()-.5)}while(sorted.join()===order.join());drawSort();document.getElementById('sortFb').className='feedback'}
function checkSort(){let c=0;[...sl.children].forEach((li,i)=>{const ok=sorted[i]===order[i];if(ok)c++;li.className=ok?'right':'wrong'});
  fb('sortFb',c===6,c===6?'🎉 Төгс! Бүх алхам зөв дараалалтай.':\`\${c}/6 зөв байна. Улаан мөрүүдийг засаарай.\`)}
shuffleSort();

// label
function lbl(){const v=id=>document.getElementById(id).value;
  lblPrev.innerHTML=\`Дугаар: \${v('lN')||'____'}<br>Огноо: \${v('lD')||'____'}<br>Цаг: \${v('lT')||'____'}<br>Төрөл: \${v('lK')||'____'}<br>Хариуцсан: \${v('lP')||'____'}\`}
function checkLbl(){const v=id=>document.getElementById(id).value.trim();const miss=[];
  if(!v('lN'))miss.push('дугаар');if(!v('lD'))miss.push('огноо');if(!v('lT'))miss.push('цаг');if(!v('lK'))miss.push('төрөл');if(!v('lP'))miss.push('хариуцсан хүн');
  if(miss.length)return fb('lblFb',0,'❌ Дутуу: '+miss.join(', '));
  if(v('lM')!=='w')return fb('lblFb',0,'❌ Энгийн цаасан шошго норж, бичиг арилна. Ус нэвтрэхгүй шошго сонгоорой.');
  fb('lblFb',1,'✅ Шошго бүрэн, зөв бөглөгдлөө!')}
lbl();

// T/F
const tfs=[["Дээж авахдаа савны дотор талд гараараа хүрч болно.",0,"Гар хүргэвэл бактери орж, шинжилгээний дүн гажуудна."],
 ["Савыг дүүргэхдээ бага зэрэг агаарын зай үлдээнэ.",1,"Агаарын зай нь холих, температурын тэлэлтэд шаардлагатай."],
 ["Дээжийг тээвэрлэх хооронд нарны шууд тусгалд байлгаж болно.",0,"Нар дулаацуулж, усны найрлага, бичил биетний тоог өөрчилнө."],
 ["Ундааны хуучин лонхыг угаагаад дээжийн сав болгож болно.",0,"Ахуйн зориулалтын савыг хэзээ ч ашиглахгүй — зөвхөн лабораторийн зориулалтын сав."],
 ["Дээжийг 4°C орчим хадгалж, 24 цагийн дотор лабораторид хүргэнэ.",1,"Энэ бол тээвэрлэлтийн үндсэн дүрэм."],
 ["Дээж авахдаа бээлий, маск зэрэг хамгаалалтын хэрэгсэл ашиглана.",1,"Өөрийгөө болон дээжийг бохирдлоос хамгаална."]];
(function(){const w=document.getElementById('tf');tfs.forEach(([q,a,why])=>{const r=document.createElement('div');r.className='tfrow';
  r.innerHTML=\`<p>\${q}</p><button class="y">✔ Үнэн</button><button class="no">✘ Худал</button><div class="why"></div>\`;
  const [by,bn]=r.querySelectorAll('button');const ans=x=>{r.classList.add('answered');const ok=x===a;r.style.background=ok?'#e6f7ee':'#fdeaea';r.querySelector('.why').innerHTML=(ok?'✅ Зөв! ':'❌ Буруу. ')+why};
  by.onclick=()=>ans(1);bn.onclick=()=>ans(0);w.appendChild(r)})})();

// quiz
const qs=[
 {q:"Ундны усны дээж авах гол зорилго юу вэ?",a:["Ус хэр их байгааг тоолох","Шинжилгээнд шаардлагатай төлөөлөхүйц дээжийг зөв аргаар авах","Усыг цэвэрлэх","Савыг шалгах"],c:1},
 {q:"Дээжийн савыг дээж авахаас өмнө хэдэн удаа дээжийн усаар зайлах вэ?",a:["Огт зайлахгүй","1 удаа","2–3 удаа","10 удаа"],c:2},
 {q:"Дээжийн савны тохиромжтой багтаамж хэд вэ?",a:["50–100 мл","250–500 мл","2–3 литр","5 литр"],c:1},
 {q:"Дээжийг ямар температурт хадгалах вэ?",a:["−10°C","4°C орчим","25°C","40°C"],c:1},
 {q:"Дээжийг лабораторид ихэвчлэн хэдэн цагийн дотор хүргэх ёстой вэ?",a:["24 цаг","48 цаг","72 цаг","1 долоо хоног"],c:0},
 {q:"Шошгон дээр аль мэдээлэл заавал байх вэ?",a:["Зөвхөн огноо","Усны өнгө","Дээжийн дугаар, огноо, цаг, төрөл","Савны үнэ"],c:2},
 {q:"Дараахаас аль нь дээж авах 1-р алхам вэ?",a:["Шошголох","Бэлтгэл ажил","Дээж авах","Тээвэрлэх"],c:1},
 {q:"Дээжийн савыг дүүргэхдээ юуг анхаарах вэ?",a:["Амсар хүртэл бүрэн дүүргэх","Агаарын зай үлдээх","Хагас дүүргэх","Тагийг онгорхой орхих"],c:1}];
let qi=0,sc=0;const qz=document.getElementById('quiz');
function drawQ(){if(qi>=qs.length)return endQ();const Q=qs[qi];
  qz.innerHTML=\`<div class="row" style="justify-content:space-between"><span class="pill">Асуулт \${qi+1}/\${qs.length}</span><span class="pill">Оноо: \${sc}</span></div>
  <div class="bar"><i style="width:\${qi/qs.length*100}%;background:var(--blue)"></i></div><div class="q">\${Q.q}</div><div class="ans" id="ans"></div><div id="qn" style="margin-top:14px"></div>\`;
  const an=document.getElementById('ans');Q.a.forEach((t,i)=>{const b=document.createElement('button');b.textContent=t;b.onclick=()=>{an.classList.add('lock');
    if(i===Q.c){sc++;b.classList.add('c')}else{b.classList.add('w');an.children[Q.c].classList.add('c')}
    document.getElementById('qn').innerHTML=\`<button class="btn" onclick="qi++;drawQ()">\${qi===qs.length-1?'Дүн харах':'Дараах асуулт →'}</button>\`};an.appendChild(b)})}
function endQ(){const p=Math.round(sc/qs.length*100);const [e,m]=p>=90?['🏆','Гайхалтай! Та дээж авалтын мэргэжилтэн боллоо.']:p>=70?['🥈','Сайн байна! Цөөн зүйлийг давтаарай.']:p>=50?['📘','Дунд зэрэг. Алхмуудыг дахин үзээрэй.']:['💧','Хичээлээ дахин үзээд оролдоорой.'];
  qz.innerHTML=\`<div class="badge">\${e}</div><div class="score">\${sc}/\${qs.length}</div><p style="text-align:center;font-size:18px;font-weight:700">\${m}</p>
  <div class="row" style="justify-content:center"><button class="btn" onclick="qi=0;sc=0;drawQ()">Дахин өгөх</button><button class="btn ghost" onclick="go(2)">Алхмуудыг давтах</button></div>\`}
drawQ();
go(0);
<\/script>
</body>
</html>
`;export{e as default};
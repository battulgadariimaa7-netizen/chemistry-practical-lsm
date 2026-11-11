var e=`<!DOCTYPE html>
<html lang="__LANG__">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>@@9701/35 O/N 2023 Practical|||9701/35 O/N 2023 Практик@@</title>
<meta name="description" content="@@Cambridge AS Chemistry 9701/35 October/November 2023: interactive practical simulation, checking based on the mark scheme, and a whiteboard.|||Cambridge AS Chemistry 9701/35 October/November 2023 — интерактив практик симуляци, mark scheme-д суурилсан шалгалт, самбар.@@">
<style>
@font-face{font-family:"Inter Variable";font-style:normal;font-weight:100 900;font-display:swap;src:url("__INTER_FONT_URL__") format("woff2")}
:root{
  --bg:#f8fafc; --paper:#fff; --ink:#0f172b; --muted:#45556c; --line:#e2e8f0;
  --accent:#007595; --accent-2:#0092b8; --accent-soft:#ecfeff;
  --ok:#007a55; --ok-soft:#ecfdf5; --bad:#c70036; --bad-soft:#fff1f2; --warn:#bb4d00; --warn-soft:#fffbeb;
  --info:#0069a8; --info-soft:#f0f9ff;
  --glass:#cfe3ee; --shadow:0 1px 2px rgba(15,23,43,.05);
  --mono:"Inter Variable",system-ui,sans-serif;
  --radius:12px;
}
*{box-sizing:border-box}
html,body{margin:0}
body{background:var(--bg);color:var(--ink);font:15px/1.6 "Inter Variable",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-weight:700;letter-spacing:-.01em;line-height:1.25;margin:0 0 .5em}
h2{font-size:1.45rem} h3{font-size:1.12rem;margin-top:1.2em}
p{margin:.45em 0}
code,.mono{font-family:var(--mono);font-size:.92em}
sub,sup{line-height:0}
a{color:var(--accent)}
button{font:inherit;cursor:pointer}
input,textarea,select{font:inherit;color:var(--ink);background:var(--paper);border:1px solid var(--line);border-radius:6px;padding:6px 8px}
input:focus,textarea:focus,select:focus{outline:2px solid var(--accent);outline-offset:1px}
textarea{width:100%;min-height:70px;resize:vertical}

/* header */
header.top{position:sticky;top:0;z-index:30;background:#fff;border-bottom:1px solid var(--line)}
.top-inner{max-width:80rem;margin:0 auto;padding:0 16px;display:flex;align-items:center;gap:16px}
nav.tabs{flex:1;min-width:0;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}
nav.tabs button{background:none;border:none;border-bottom:2px solid transparent;padding:12px 8px;color:var(--muted);white-space:nowrap;font-size:.82rem;font-weight:500}
nav.tabs button:hover{color:var(--ink)}
nav.tabs button[aria-selected="true"]{color:var(--accent);border-bottom-color:var(--accent);font-weight:600}
.brand{display:flex;align-items:baseline;gap:8px;flex-shrink:0;white-space:nowrap}
.brand b{font-size:.82rem;font-weight:600}
.brand span{color:var(--muted);font-size:.78rem}
.scorechip{flex-shrink:0;font-size:.8rem;font-weight:600;background:var(--accent-soft);color:var(--accent);padding:3px 10px;border-radius:99px;border:1px solid color-mix(in srgb,var(--accent) 30%,transparent)}
@media (max-width:1100px){.brand span{display:none}}
@media (max-width:860px){.brand{display:none}}

main{max-width:80rem;margin:0 auto;padding:20px 16px 48px}
section.tab{display:none}
section.tab.active{display:block}
.card{background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);padding:16px 18px;box-shadow:var(--shadow);margin:14px 0}
.card h3:first-child{margin-top:0}
.grid2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px}
.grid-sim{display:grid;grid-template-columns:minmax(0,360px) minmax(0,1fr);gap:16px;align-items:start}
@media (max-width:860px){.grid2,.grid-sim{grid-template-columns:minmax(0,1fr)}}
.muted{color:var(--muted)}
.small{font-size:.86rem}
.pill{display:inline-block;font-size:.78rem;font-weight:600;padding:1px 8px;border-radius:99px;background:var(--accent-soft);color:var(--accent);margin-right:4px}
.qhead{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap}
.marks{font-family:var(--mono);font-size:.85rem;color:var(--muted)}
.note{border-left:4px solid var(--info);background:var(--info-soft);padding:10px 12px;border-radius:0 8px 8px 0;margin:10px 0}
.note.warn{border-color:var(--warn);background:var(--warn-soft)}
.note.ok{border-color:var(--ok);background:var(--ok-soft)}
.note.bad{border-color:var(--bad);background:var(--bad-soft)}
.note.exam{border-color:var(--accent);background:var(--accent-soft)}
.note b.t{display:block;margin-bottom:2px}
ol.steps{padding-left:1.3em;margin:.4em 0}
ol.steps li{margin:.25em 0}
ol.steps li.done{color:var(--ok)}
ol.steps li.done::marker{content:"✓  "}

.btn{border:1px solid var(--line);background:var(--paper);color:var(--ink);border-radius:8px;padding:6px 12px;font-weight:600;transition:background .15s}
.btn:hover{background:var(--accent-soft)}
.btn.primary{background:var(--accent);border-color:var(--accent);color:#fff}
.btn.primary:hover{filter:brightness(1.08);background:var(--accent)}
.btn.ghost{background:none}
.btn:disabled{opacity:.45;cursor:not-allowed}
.btnrow{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.wb-link{border:1px dashed var(--accent);color:var(--accent);background:none;border-radius:8px;padding:5px 10px;font-weight:600}

table.rt{border-collapse:collapse;width:100%;font-size:.92rem}
table.rt th,table.rt td{border:1px solid var(--line);padding:4px 6px;text-align:center;vertical-align:middle}
table.rt th{background:color-mix(in srgb,var(--accent-soft) 60%,var(--paper))}
table.rt input{width:100%;min-width:64px;text-align:center;font-family:var(--mono)}
table.rt input.head{text-align:left;font-family:inherit;min-width:180px}
.tablewrap{overflow-x:auto}
td.ok,input.ok{background:var(--ok-soft)!important}
td.bad,input.bad{background:var(--bad-soft)!important}

.calc{display:grid;grid-template-columns:minmax(0,1fr);gap:4px;margin:10px 0;padding:10px 12px;border:1px solid var(--line);border-radius:8px}
.calc .row{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.calc input{width:170px;font-family:var(--mono)}
.fb{font-size:.9rem;margin-top:4px}
.fb .y{color:var(--ok);font-weight:600}
.fb .n{color:var(--bad);font-weight:600}
.markbox{font-family:var(--mono);font-weight:700;color:var(--accent)}
details.teach{margin:10px 0;border:1px solid color-mix(in srgb,var(--accent) 35%,var(--line));border-radius:8px;background:color-mix(in srgb,var(--accent-soft) 45%,var(--paper))}
details.teach summary{padding:8px 12px;cursor:pointer;font-weight:600;color:var(--accent)}
details.teach > div{padding:0 14px 12px}
.eq{font-family:var(--mono);background:var(--bg);border:1px solid var(--line);border-radius:6px;padding:6px 10px;margin:6px 0;overflow-x:auto;white-space:nowrap}

/* apparatus */
.app-svg{width:100%;max-width:360px;height:auto;display:block;margin:auto}
.lens{width:170px;height:300px;border:2px solid var(--ink);border-radius:12px;background:var(--paper);display:block}
.readouts{display:flex;flex-wrap:wrap;gap:10px;margin:8px 0}
.readout{background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:6px 10px;font-family:var(--mono);font-size:.9rem}
.readout b{font-family:inherit;font-weight:600;font-size:.8rem;color:var(--muted);display:block}
.balance{font-family:var(--mono);font-size:1.8rem;background:#10261a;color:#7dff9e;padding:6px 14px;border-radius:6px;letter-spacing:.06em;display:inline-block;min-width:150px;text-align:right}
.log{max-height:180px;overflow:auto;font-family:var(--mono);font-size:.82rem;background:var(--bg);border:1px solid var(--line);border-radius:6px;padding:6px 8px}
.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--ink);color:var(--paper);padding:9px 16px;border-radius:8px;z-index:80;max-width:92vw;box-shadow:var(--shadow);opacity:0;pointer-events:none;transition:opacity .2s}
.toast.show{opacity:1}

/* bench */
.bench{display:grid;grid-template-columns:minmax(0,1fr) 220px;gap:14px;align-items:start}
@media (max-width:700px){.bench{grid-template-columns:minmax(0,1fr)}}
.tube-svg{width:200px;height:300px;display:block;margin:auto}
.obsbox{background:var(--bg);border:1px dashed var(--line);border-radius:8px;padding:8px 10px;min-height:48px;font-size:.92rem}
.samples button.sel{background:var(--accent);color:#fff;border-color:var(--accent)}

/* score */
.scoretable td,.scoretable th{text-align:left}
.bar{height:10px;background:var(--line);border-radius:6px;overflow:hidden}
.bar > i{display:block;height:100%;background:var(--accent)}

/* whiteboard */
.wb-fab{position:fixed;right:18px;bottom:18px;z-index:40;background:var(--accent);color:#fff;border:none;border-radius:99px;padding:12px 18px;font-weight:700;box-shadow:0 6px 20px rgba(0,0,0,.25);display:flex;align-items:center;gap:8px}
.wb{position:fixed;inset:0;z-index:60;display:none;background:rgba(0,0,0,.35)}
.wb.open{display:block}
.wb-panel{position:absolute;right:0;top:0;bottom:0;width:min(980px,100vw);background:var(--paper);display:flex;flex-direction:column;box-shadow:-8px 0 30px rgba(0,0,0,.25)}
.wb-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:8px 10px;border-bottom:1px solid var(--line)}
.wb-bar .sw{width:24px;height:24px;border-radius:50%;border:2px solid var(--line);padding:0}
.wb-bar .sw.on{outline:3px solid var(--accent);outline-offset:1px}
.wb-bar .tool.on{background:var(--accent);color:#fff;border-color:var(--accent)}
.wb-stage{position:relative;flex:1;min-height:0}
.wb-stage canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:crosshair}
.wb-hint{padding:4px 10px;font-size:.8rem;color:var(--muted);border-top:1px solid var(--line)}
#wbGrid.on{background:var(--accent-soft)}
footer{max-width:80rem;margin:0 auto;padding:10px 16px 90px;color:var(--muted);font-size:.78rem}
.wb-fab svg,.wb-bar svg{width:1em;height:1em;display:block}
.wb-bar .icon{padding:6px 10px}
.scorechip,.marks,.markbox,.readout,.balance,table.rt input,.calc input,.log{font-variant-numeric:tabular-nums}
@media (min-width:640px){.top-inner,main,footer{padding-left:24px;padding-right:24px}}
@media (min-width:1024px){.top-inner,main,footer{padding-left:32px;padding-right:32px}}
.card{scroll-margin-top:96px}
.qcards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:14px}
@media (max-width:860px){.qcards{grid-template-columns:minmax(0,1fr)}}
.qcard{border:1px solid var(--line);border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:6px}
.qcard h3{margin:0;font-size:1rem}
.qcard p{margin:0;flex:1}
.qcard .meta{display:flex;justify-content:space-between;gap:8px;font-size:.8rem;color:var(--muted);font-variant-numeric:tabular-nums}
.qcard .btn{margin-top:6px;width:100%}
.flow{padding-left:1.3em;margin:.4em 0}
.flow li{margin:.3em 0}
.tabscore{margin-left:5px;font-size:.72rem;font-weight:500;color:var(--muted);font-variant-numeric:tabular-nums}
.partnav{position:sticky;top:48px;z-index:20;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;background:var(--bg);padding:8px 0;margin:-8px 0 4px}
.partnav button{flex-shrink:0;border:1px solid var(--line);background:var(--paper);color:var(--muted);border-radius:99px;padding:2px 10px;font-size:.78rem;font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}
.partnav button.full{background:var(--ok-soft);border-color:var(--ok);color:var(--ok)}
.partnav button.some{background:var(--warn-soft);border-color:var(--warn);color:var(--warn)}
.partnav button.none{background:var(--bad-soft);border-color:var(--bad);color:var(--bad)}
.nextrow{display:flex;justify-content:flex-end;margin:16px 0 0}
.todo{list-style:none;padding:0;margin:8px 0 16px}
.todo li{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 0;border-top:1px solid var(--line)}
.tag{font-size:.7rem;font-weight:600;color:var(--warn);background:var(--warn-soft);padding:1px 6px;border-radius:99px;margin-left:6px;white-space:nowrap}
.graphwrap{overflow-x:auto;border:1px solid var(--line);border-radius:8px;background:#fff}
#graph{display:block;width:100%;max-width:760px;min-width:520px;margin:auto;touch-action:none;cursor:crosshair}
.gtools{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.gtools .tool.on{background:var(--accent);color:#fff;border-color:var(--accent)}
.scalebox{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px 14px;margin:8px 0}
.scalebox label{display:flex;flex-direction:column;font-size:.86rem;gap:2px}
.scalebox input,.scalebox select{width:100%}
table.rt input.tin{min-width:56px}
.mini{font-size:.82rem}
.graph{display:block;width:100%;max-width:760px;min-width:520px;margin:auto;touch-action:none;cursor:crosshair}
textarea.cell{min-height:56px;font-size:.88rem}
</style>
</head>
<body>
<header class="top">
  <div class="top-inner">
  <nav class="tabs" role="tablist" id="tabs">
    <button role="tab" data-tab="ov" aria-selected="true">@@Overview|||Тойм@@</button>
    <button role="tab" data-tab="q1">1. Na₂CO₃·xH₂O</button>
    <button role="tab" data-tab="q2">@@2. Qualitative analysis|||2. Чанарын шинжилгээ@@</button>
    <button role="tab" data-tab="ref">@@Reference|||Лавлах@@</button>
    <button role="tab" data-tab="score">@@Results|||Дүн@@</button>
  </nav>
    <div class="brand"><b>9701/35 · O/N 2023</b><span>AS Chemistry — Advanced Practical Skills 1</span></div>
    <span class="scorechip" id="scoreChip">0 / 40</span>
  </div>
</header>
<main>
<!-- ===================== OVERVIEW ===================== -->
<section class="tab active" id="tab-ov">
  <div class="card">
    <h2>@@Practical Exam Practice|||Практик шалгалтын интерактив дадлага@@</h2>
    <p>@@This page takes you step by step through the practical exam <b>Cambridge International AS &amp; A Level Chemistry 9701/35, October/November 2023</b> as simulations, and checks your answers straight away against the rules of that year’s <b>mark scheme</b>. 40 marks in total, 2 hours. This year there are only <b>two</b> questions.|||Энэ хуудас <b>Cambridge International AS &amp; A Level Chemistry 9701/35, 2023 оны 10/11-р сар</b>-ын практик шалгалтыг алхам алхмаар симуляци хэлбэрээр хийлгэж, хариултыг тухайн оны <b>mark scheme</b>-ийн дүрмээр шууд шалгана. Нийт 40 оноо, 2 цаг. Энэ жил ердөө <b>хоёр</b> асуулттай.@@</p>
    <div class="qcards" id="qcards"></div>
    <div class="grid2">
      <div><h3>@@Structure|||Бүтэц@@</h3>
        <table class="rt">
          <tr><th>@@Question|||Асуулт@@</th><th>@@Content|||Агуулга@@</th><th>@@Marks|||Оноо@@</th></tr>
          <tr><td>1</td><td style="text-align:left">@@Finding x in Na₂CO₃·xH₂O by two methods: (1) the volume of CO₂ given off, (2) titration with HCl; error calculations|||Na₂CO₃·xH₂O-ийн x-ийг хоёр аргаар олох: (1) ялгарсан CO₂-ын эзлэхүүн, (2) HCl-ээр титрлэх; алдааны тооцоо@@</td><td>23</td></tr>
          <tr><td>2</td><td style="text-align:left">@@<b>Planning your own tests</b> to tell apart three nitrogen-containing ions; two compounds of Mn|||Азот агуулсан гурван ионыг <b>өөрөө сорил төлөвлөж</b> ялгах; Mn-ийн хоёр нэгдэл@@</td><td>17</td></tr>
        </table></div>
      <div><h3>@@Assessment objectives (syllabus)|||Үнэлгээний ангилал (syllabus)@@</h3>
        <table class="rt">
          <tr><th>@@Skill|||Ур чадвар@@</th><th>@@Minimum marks|||Хамгийн бага оноо@@</th></tr>
          <tr><td style="text-align:left">@@MMO: making measurements and observations|||MMO — хэмжилт, ажиглалт хийх@@</td><td>12</td></tr>
          <tr><td style="text-align:left">@@PDO: presenting data and observations|||PDO — өгөгдөл, ажиглалтыг бүртгэх@@</td><td>6</td></tr>
          <tr><td style="text-align:left">@@ACE: analysis, conclusions and evaluation|||ACE — анализ, дүгнэлт, үнэлгээ@@</td><td>10</td></tr>
        </table><p class="small muted">@@The remaining 12 marks are shared among these in varying amounts.|||Үлдсэн 12 оноо эдгээрт харилцан адилгүй хуваарилагдана.@@</p></div>
    </div>
    <h3>Grade threshold (component 35, November 2023)</h3>
    <div class="tablewrap"><table class="rt"><tr><th>Max</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr><tr><td>40</td><td>25</td><td>22</td><td>18</td><td>15</td><td>12</td></tr></table></div>
    <p class="small muted">@@Source: Cambridge grade thresholds for 9701, November 2023.|||Эх сурвалж: Cambridge-ийн November 2023 оны 9701 grade threshold.@@</p>
  </div>
  <div class="card">
    <h3>@@How to use it|||Хэрхэн ашиглах вэ@@</h3>
    <ol class="steps">
      <li>@@Open each question’s tab and do the experiment in the simulation. You read and record the balance, measuring cylinder and burette yourself.|||Асуулт бүрийн табыг нээж, симуляцийн дагуу туршилтаа хийнэ. Жинлүүр, цилиндр, бюретийг та өөрөө уншиж бүртгэнэ.@@</li>
      <li>@@Write headings and observations <b>in English</b>, as you would on the exam paper.|||Гарчиг, ажиглалтыг шалгалтын хуудсан дээр бичдэгтэйгээ адил <b>англиар</b> бичнэ.@@</li>
      <li>@@The <b>Check</b> button shows and explains each mark of the mark scheme separately.|||<b>Шалгах</b> товч mark scheme-ийн оноо бүрийг тусад нь харуулж тайлбарлана.@@</li>
      <li>@@<b>Whiteboard</b> (bottom right corner): a whiteboard for writing out your working by hand.|||<b>Самбар</b> (баруун доод булан) — тооцоогоо гараар бичих цагаан самбар.@@</li>
    </ol>
    <div class="note exam">@@<b class="t">Suggested timing</b>Question 1 is worth 23 marks, so about 70 min: start the titration while the gas collects. Question 2 about 40 min, 10 min for checking. In 2(b)(i), do (ii) while the KMnO₄ cools after heating.|||<b class="t">Цаг хуваарилалтын зөвлөмж</b>1-р асуулт 23 оноотой тул ~70 мин: хий цуглуулах хооронд титрлэлтээ эхэл. 2-р асуулт ~40 мин, шалгах 10 мин. 2(b)(i)-д KMnO₄-ийг халаасны дараа хөрөх хооронд (ii)-ийг хий.@@</div>
    <div class="note">@@<b class="t">About the material</b>The marking points of the mark scheme (9701/35/O/N/23) are explained and used here. The real names of the substances come from the Confidential Instructions in your project. Because of copyright, the question text is not copied word for word; it has been shortened, keeping its meaning. The <i>Principal Examiner Report</i> for this session is not publicly available, so the «Examiner’s tips» are based on the syllabus, the mark scheme and mistakes that come up again and again in earlier years.|||<b class="t">Материалын тухай</b>Mark scheme (9701/35/O/N/23)-ийн онооны цэгүүдийг монголоор тайлбарлаж ашигласан. Бодисуудын жинхэнэ нэрийг таны төслийн Confidential Instructions-аас авсан. Асуултын текстийг зохиогчийн эрхийн улмаас үгчлэн хуулаагүй, утгаар нь товчилсон. Энэ сессийн <i>Principal Examiner Report</i> олон нийтэд нээлттэй байршаагүй тул «Шалгагчийн зөвлөмж» нь syllabus, mark scheme болон өмнөх жилүүдийн давтагддаг алдаан дээр тулгуурласан.@@</div>
  </div>
</section>

<!-- ===================== Q1 ===================== -->
<section class="tab" id="tab-q1">
  <div class="partnav" id="partnav-q1"></div>
  <div class="card">
    <div class="qhead"><h2>@@1. x in hydrated sodium carbonate|||1. Ус агуулсан натрийн карбонатын x@@</h2><span class="marks">[23]</span></div>
    <div class="eq">Na₂CO₃·xH₂O(s) + 2HCl(aq) → 2NaCl(aq) + CO₂(g) + (x+1)H₂O(l)</div>
    <p class="small muted">@@On the exam paper the right-hand side of the equation has «xH₂O»; including the one H₂O formed in the reaction makes it (x+1). This does not affect the calculation: 1 mol Na₂CO₃ → 1 mol CO₂, 2 mol HCl.|||Шалгалтын хуудсанд тэгшитгэлийн баруун талд «xH₂O» гэж бичсэн; урвалаас үүсэх нэг H₂O-г оруулбал (x+1) болно. Тооцоонд нөлөөгүй — 1 mol Na₂CO₃ → 1 mol CO₂, 2 mol HCl.@@</p>
    <p>@@In this example <b>x is not a whole number</b>: Na₂CO₃·10H₂O slowly loses its water of crystallisation in air (efflorescence).|||Энэ жишээнд <b>x бүхэл тоо биш</b> — Na₂CO₃·10H₂O агаарт талстын усаа аажим алддаг (эфлоресценц).@@</p>
  </div>

  <div class="card">
    <h3>@@1(a) Experiment 1: volume of CO₂|||1(a) Туршилт 1 — CO₂-ын эзлэхүүн@@</h3>
    <ul><li><b>FA 1</b> — 0.500 mol dm⁻³ HCl</li><li>@@<b>FA 2</b>: Na₂CO₃·xH₂O (solid)|||<b>FA 2</b> — Na₂CO₃·xH₂O (хатуу)@@</li></ul>
    <details class="teach"><summary>@@Method (summary)|||Аргачлал (товч)@@</summary><div><ol>
      <li>@@Weigh the container with FA 2.|||FA 2-той савыг жинлэнэ.@@</li>
      <li>@@About 5 cm depth of water in the trough; fill the 250 cm³ measuring cylinder with water, turn it upside down and clamp it.|||Тэвшинд ~5 cm гүн ус; 250 cm³ цилиндрийг усаар дүүргэж хөмрөөд хавчина.@@</li>
      <li>@@Use the 50 cm³ measuring cylinder to put 50.0 cm³ of FA 1 into flask Z, check the bung and put the end of the tube into the cylinder.|||50 cm³ цилиндрээр 50.0 cm³ FA 1-ийг колбо Z-д хийж, бөглөөг шалгаад, хоолойн үзүүрийг цилиндрт оруулна.@@</li>
      <li>@@Take out the bung, add all the FA 2 and put the bung back <b>at once</b>. Shake the flask well until gas starts to collect in the cylinder.|||Бөглөөг авч FA 2-ыг бүгдийг нь хийгээд <b>тэр даруй</b> бөглөнө. Хий цилиндрт цуглаж эхэлтэл колбыг сайн сэгсэрнэ.@@</li>
      <li>@@Wait a few minutes, shaking from time to time. Weigh the container with its residue and work out the mass of FA 2.|||Хэдэн минут хүлээж, үе үе сэгсэрнэ. Үлдэгдэлтэй савыг жинлэж, FA 2-ын массыг тооцно.@@</li>
      <li>@@Once no more gas collects, record the final volume.|||Хий цаашид цуглахгүй болмогц эцсийн эзлэхүүнийг бүртгэнэ.@@</li></ol></div></details>
  </div>
  <div class="card"><h3>@@1(a) Simulation|||1(a) Симуляци@@</h3><div id="gasBox"></div></div>
  <div class="card">
    <div class="qhead"><h3>@@1(a) Results|||1(a) Үр дүн@@</h3><span class="marks">[3]</span></div>
    <p class="small">@@Both weighings, the mass of FA 2 and the volume of CO₂. Write the headings in English with their units.|||Хоёр жинлэлт, FA 2-ын масс, CO₂-ын эзлэхүүн. Гарчгийг нэгжтэй нь англиар бич.@@</p><div id="res1"></div>
    <div class="btnrow"><button class="btn primary" id="q1checkA">@@Check 1(a)|||1(a)-г шалгах@@</button></div><div id="q1fbA" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 1(a)|||Багшийн тайлбар: 1(a)@@</summary><div>
      <p>@@<b>I</b>: Headings, units: <span class="mono">mass of container + FA 2 / g</span>; <span class="mono">mass of container (+ residual FA 2) / g</span>; <span class="mono">mass of FA 2 used / g</span>; <span class="mono">volume of carbon dioxide / cm3</span>.|||<b>I</b> — Гарчиг, нэгж: <span class="mono">mass of container + FA 2 / g</span>; <span class="mono">mass of container (+ residual FA 2) / g</span>; <span class="mono">mass of FA 2 used / g</span>; <span class="mono">volume of carbon dioxide / cm3</span>.@@</p>
      <p>@@<b>II</b>: Weighings to the same number of decimal places (2 or 3) <i>and</i> the volume a whole number <i>and</i> the mass of FA 2 worked out correctly.|||<b>II</b> — Жинлэлтүүд ижил аравтын оронтой (2 эсвэл 3) <i>ба</i> эзлэхүүн бүхэл тоо <i>ба</i> FA 2-ын масс зөв тооцогдсон.@@</p>
      <p>@@<b>III</b>: Volume of gas collected 100–200 cm³.|||<b>III</b> — Цуглуулсан хийн эзлэхүүн 100–200 cm³.@@</p>
      <div class="note exam">@@<b class="t">Examiner’s tips</b>CO₂ is fairly soluble in water, so less gas collects than the theoretical amount. Putting the bung in slowly loses gas. Read the cylinder with the water levels inside and outside the same.|||<b class="t">Шалгагчийн зөвлөмж</b>CO₂ усанд нэлээд уусдаг тул онолын хэмжээнээс бага хий цуглардаг. Бөглөөг удаан тавивал хий алдагдана. Цилиндрийн ус дотор/гадна түвшинг харьцуулж уншина.@@</div>
    </div></details>
  </div>
  <div class="card">
    <div class="qhead"><h3>@@1(b) Calculation|||1(b) Тооцоо@@</h3><span class="marks">[4]</span></div>
    <div class="calc"><b>(i)</b><div class="row">n(CO₂) = <input id="c1ia"> mol</div><div class="row">n(Na₂CO₃) = <input id="c1ib"> mol</div></div>
    <div class="calc"><b>(ii)</b><div class="row">M<sub>r</sub>(Na₂CO₃·xH₂O) = <input id="c1ii"></div></div>
    <div class="calc"><b>(iii)</b><div class="row">M<sub>r</sub>(xH₂O) = <input id="c1iiia"></div><div class="row">x = <input id="c1iiib"></div></div>
    <div class="btnrow"><button class="btn primary" id="q1checkB">@@Check 1(b)|||1(b)-г шалгах@@</button> <button class="wb-link" data-wb="Q1">@@Work it out on the whiteboard|||Самбар дээр бодох@@</button></div><div id="q1fbB" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes (example: 1.90 g, 160 cm³)|||Багшийн тайлбар (жишээ: 1.90 g, 160 cm³)@@</summary><div>
      <p><b>(i)</b> n(CO₂) = 160 / 24 000 = <b>6.67 × 10⁻³ mol</b> = n(Na₂CO₃) (1 : 1)</p>
      <p><b>(ii)</b> M<sub>r</sub> = 1.90 / 6.67 × 10⁻³ = <b>285</b></p>
      <p>@@<b>(iii)</b> M<sub>r</sub>(xH₂O) = 285 − 106 = 179 → x = 179 / 18 = <b>9.94</b> (x is not a whole number, so <i>do not round it</i>; 2–4 s.f.)|||<b>(iii)</b> M<sub>r</sub>(xH₂O) = 285 − 106 = 179 → x = 179 / 18 = <b>9.94</b> (x бүхэл биш тул <i>тоймлохгүй</i>, 2–4 s.f.)@@</p>
    </div></details>
  </div>
  <div class="card">
    <div class="qhead"><h3>@@1(c) What if hot water were used in the trough?|||1(c) Тэвшинд халуун ус хэрэглэвэл?@@</h3><span class="marks">[2]</span></div>
    <p class="small">@@<b>(i)</b> Is this an improvement? Explain. [1]|||<b>(i)</b> Сайжруулалт мөн үү? Тайлбарла. [1]@@</p><textarea id="q1ci" placeholder="@@In English…|||Англиар...@@"></textarea>
    <p class="small">@@<b>(ii)</b> What effect does it have on the calculated x? [1]|||<b>(ii)</b> Тооцоолсон x-д ямар нөлөөтэй вэ? [1]@@</p>
    <select id="q1cii"><option value="">@@choose…|||сонго…@@</option><option value="s">@@x decreases|||x багасна@@</option><option value="l">@@x increases|||x ихэснэ@@</option><option value="n">@@no effect|||нөлөөгүй@@</option></select>
    <div class="btnrow"><button class="btn primary" id="q1checkC">@@Check 1(c)|||1(c)-г шалгах@@</button></div><div id="q1fbC" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 1(c)|||Багшийн тайлбар: 1(c)@@</summary><div>
      <p>@@<b>(i)</b> Yes, an improvement: CO₂ is <b>less soluble</b> in hot water, so the volume collected is closer to the true value.|||<b>(i)</b> Тийм, сайжруулалт — халуун усанд CO₂ <b>бага уусна</b>, тиймээс цуглуулах эзлэхүүн жинхэнэд ойртоно.@@</p>
      <p>@@<b>(ii)</b> More CO₂ → larger n(Na₂CO₃) → smaller M<sub>r</sub> → <b>x decreases</b>.|||<b>(ii)</b> Илүү их CO₂ → n(Na₂CO₃) их → M<sub>r</sub> бага → <b>x багасна</b>.@@</p>
    </div></details>
  </div>

  <div class="card">
    <h3>@@1(d) Experiment 2: titration|||1(d) Туршилт 2 — Титрлэлт@@</h3>
    <ul><li><b>FA 3</b> — 0.100 mol dm⁻³ HCl</li><li>@@<b>FA 4</b>: a solution containing 14.30 g of Na₂CO₃·xH₂O in 1 dm³|||<b>FA 4</b> — 1 dm³-т 14.30 g Na₂CO₃·xH₂O агуулсан уусмал@@</li><li>@@<b>FA 5</b>: bromophenol blue (<b>blue</b> in alkali, <b>yellow</b> in acid; end-point <b>green</b>)|||<b>FA 5</b> — бромфенол хөх (шүлтэд <b>хөх</b>, хүчилд <b>шар</b>; төгсгөлийн цэг — <b>ногоон</b>)@@</li></ul>
    <div class="eq">Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + CO₂(g) + H₂O(l)</div>
  </div>
  <div class="card"><h3>@@1(d) Simulation|||1(d) Симуляци@@</h3><div id="titBox"></div></div>
  <div class="card"><div class="qhead"><h3>@@1(d) Results and 1(e) mean|||1(d) Үр дүн ба 1(e) дундаж@@</h3><span class="marks">[7 + 1]</span></div><div id="ttBox"></div>
    <details class="teach"><summary>@@Teacher’s notes: 1(d), (e)|||Багшийн тайлбар: 1(d), (e)@@</summary><div>
      <p>@@<b>I</b> Both rough readings + titre, readings for ≥2 accurate titrations. <b>II</b> Accurate titres, headings (initial/final … reading, titre / volume of FA 3 added), unit / cm3. <b>III</b> All accurate readings to 0.05 cm³. <b>IV</b> The final accurate titre within 0.10 cm³ of another.|||<b>I</b> Rough-ийн 2 заалт + титр, ≥2 нарийн титрлэлтийн заалтууд. <b>II</b> Нарийн титрүүд, гарчиг (initial/final … reading, titre / volume of FA 3 added), нэгж / cm3. <b>III</b> Бүх нарийн заалт 0.05 cm³ хүртэл. <b>IV</b> Сүүлийн нарийн титр өөр нэгээс ≤ 0.10 cm³.@@</p>
      <p>@@<b>V–VII</b> The best mean is compared with the supervisor’s: ≤ 0.50, ≤ 0.30, ≤ 0.20 cm³.|||<b>V–VII</b> Хамгийн сайн дунджийг хянагчийнхтай харьцуулна: ≤ 0.50, ≤ 0.30, ≤ 0.20 cm³.@@</p>
      <p>@@<b>1(e)</b> The mean of titres with a total spread ≤ 0.20 cm³, to 2 decimal places, showing your choice.|||<b>1(e)</b> Нийт тархалт ≤ 0.20 cm³ титрүүдийн дундаж, 2 аравтын оронтой, сонголтоо харуулсан.@@</p>
      <div class="note exam">@@<b class="t">Examiner’s tips</b>The bromophenol blue end-point is <b>green</b>; if you add until it is yellow you have gone past the end-point. Swirl the flask all the time, and note that the end-point colour can change back for a moment as CO₂ is given off.|||<b class="t">Шалгагчийн зөвлөмж</b>Бромфенол хөхийн төгсгөлийн цэг — <b>ногоон</b>; шар болтол нэмбэл төгсгөлийг давсан. Колбыг байнга эргүүлж, CO₂ ялгарахад төгсгөлийн өнгө түр хувирч болохыг анхаар.@@</div>
    </div></details></div>
  <div class="card">
    <div class="qhead"><h3>@@1(f) Calculation|||1(f) Тооцоо@@</h3><span class="marks">[4]</span></div>
    <p class="small">@@mark (i): answers to (ii) and (iii) must be to <b>3–4 s.f.</b>|||(i) оноо: (ii), (iii)-ийн хариултууд <b>3–4 s.f.</b> байх.@@</p>
    <div class="calc"><b>(ii)</b><div class="row">n(HCl) = <input id="c1fii"> mol</div></div>
    <div class="calc"><b>(iii)</b><div class="row">@@n(Na₂CO₃) in 25.0 cm³ =|||25.0 cm³-т n(Na₂CO₃) =@@ <input id="c1fiiia"> mol</div><div class="row">@@n(Na₂CO₃) in 1.00 dm³ =|||1.00 dm³-т n(Na₂CO₃) =@@ <input id="c1fiiib"> mol</div></div>
    <div class="calc"><b>(iv)</b><div class="row">M<sub>r</sub> = <input id="c1fiva"></div><div class="row">x = <input id="c1fivb"></div></div>
    <div class="btnrow"><button class="btn primary" id="q1checkF">@@Check 1(f)|||1(f)-г шалгах@@</button> <button class="wb-link" data-wb="Q1">@@Work it out on the whiteboard|||Самбар дээр бодох@@</button></div><div id="q1fbF" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes (example: mean 29.45 cm³)|||Багшийн тайлбар (жишээ: дундаж 29.45 cm³)@@</summary><div>
      <p><b>(ii)</b> n(HCl) = 0.100 × 29.45 / 1000 = <b>2.945 × 10⁻³ mol</b></p>
      <p>@@<b>(iii)</b> n(Na₂CO₃) = 2.945 × 10⁻³ / 2 = <b>1.473 × 10⁻³ mol</b> (in 25.0 cm³) → × 40 = <b>0.05890 mol</b> (in 1.00 dm³)|||<b>(iii)</b> n(Na₂CO₃) = 2.945 × 10⁻³ / 2 = <b>1.473 × 10⁻³ mol</b> (25.0 cm³-т) → × 40 = <b>0.05890 mol</b> (1.00 dm³-т)@@</p>
      <p><b>(iv)</b> M<sub>r</sub> = 14.30 / 0.05890 = <b>242.8</b>; x = (242.8 − 106) / 18 = <b>7.60</b></p>
      <div class="note exam">@@<b class="t">Examiner’s tips</b>Going from 25.0 cm³ to 1.00 dm³ is <b>× 40</b> (1000 / 25.0). It is normal for the two experiments to give different x: in experiment 1 CO₂ dissolves, so x tends to come out high.|||<b class="t">Шалгагчийн зөвлөмж</b>25.0 cm³-ээс 1.00 dm³ руу шилжихэд <b>× 40</b> (1000 / 25.0). Хоёр туршилтын x ялгаатай гарах нь хэвийн: туршилт 1-д CO₂ уусдаг тул x их гарах хандлагатай.@@</div>
    </div></details>
  </div>
  <div class="card">
    <div class="qhead"><h3>@@1(g) Balance uncertainty|||1(g) Жинлүүрийн тодорхойгүй байдал@@</h3><span class="marks">[2]</span></div>
    <p class="small">@@Making FA 4: container + solid = 32.509 g; empty container = 18.209 g; solid = 14.300 g.|||FA 4 бэлтгэхэд: сав + бодис = 32.509 g; хоосон сав = 18.209 g; бодис = 14.300 g.@@</p>
    <div class="calc"><b>(i)</b><div class="row">@@Uncertainty of one reading = ±|||Нэг заалтын тодорхойгүй байдал = ±@@ <input id="c1gu" style="width:110px"> g</div><div class="row">@@percentage uncertainty = ±|||Хувийн тодорхойгүй байдал = ±@@ <input id="c1gp" style="width:110px"> %</div></div>
    <div class="calc"><b>(ii)</b><div class="row">@@if M<sub>r</sub> = 242.2, the largest M<sub>r</sub> =|||M<sub>r</sub> = 242.2 гэвэл хамгийн их M<sub>r</sub> =@@ <input id="c1gii"></div></div>
    <div class="btnrow"><button class="btn primary" id="q1checkG">@@Check 1(g)|||1(g)-г шалгах@@</button></div><div id="q1fbG" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 1(g)|||Багшийн тайлбар: 1(g)@@</summary><div>
      <p>@@<b>(i)</b> The balance reads to 3 decimal places → U = <b>0.0005 g</b> (or 0.001 g). The mass is the difference of two weighings, so: (2 × 0.0005) / 14.3 × 100 = <b>0.0070 %</b> (0.014 % if U = 0.001).|||<b>(i)</b> Жинлүүр 3 аравтын оронтой → U = <b>0.0005 g</b> (эсвэл 0.001 g). Масс хоёр жинлэлтийн зөрүү тул: (2 × 0.0005) / 14.3 × 100 = <b>0.0070 %</b> (U = 0.001 бол 0.014 %).@@</p>
      <p>@@<b>(ii)</b> M<sub>r</sub> is largest when the mass is largest: 242.2 × (100 + 0.0070) / 100 = <b>242.22</b>.|||<b>(ii)</b> Масс хамгийн их байхад M<sub>r</sub> хамгийн их: 242.2 × (100 + 0.0070) / 100 = <b>242.22</b>.@@</p>
    </div></details>
  </div>
</section>

<!-- ===================== Q2 ===================== -->
<section class="tab" id="tab-q2">
  <div class="partnav" id="partnav-q2"></div>
  <div class="card">
    <div class="qhead"><h2>@@2. Qualitative analysis|||2. Чанарын шинжилгээ@@</h2><span class="marks">[17]</span></div>
    <p>@@<b>FA 6, FA 7, FA 8</b>: salts, each with a <b>different</b> nitrogen-containing ion; the ions are in the Qualitative analysis notes. <b>FA 9, FA 10</b>: each contains one element.|||<b>FA 6, FA 7, FA 8</b> — тус бүр азот агуулсан <b>өөр өөр</b> ионтой давс; ионууд Qualitative analysis notes-д бий. <b>FA 9, FA 10</b> — нэг элемент агуулна.@@</p>
    <p class="small">@@Write your observations clearly. If there is no change, write <b>no change</b>. Use a boiling tube to heat a solution and a hard-glass test-tube to heat a solid.|||Ажиглалтыг тодорхой бич. Өөрчлөлтгүй бол <b>no change</b>. Уусмал халаах бол буцалгах хуруу шил, хатуу бодис халаах бол халуунд тэсвэртэй хуруу шил.@@</p>
  </div>
  <div class="card"><h3>@@Test bench|||Туршилтын ширээ@@</h3><div id="benchBox"></div></div>
  <div class="card">
    <div class="qhead"><h3>@@2(a)(i) Planning tests to tell the nitrogen ions apart|||2(a)(i) Азотын ионуудыг ялгах сорил төлөвлөх@@</h3><span class="marks">[8]</span></div>
    <div class="calc"><div class="row">@@Ions to test for:|||Шалгах ионууд:@@ <input id="n1" style="width:90px"> and <input id="n2" style="width:90px"> and <input id="n3" style="width:90px"></div></div>
    <p class="small">@@Table: in each row write the <b>reagent</b> you used (by name or formula), then your observation for each of FA 6, 7 and 8. Fill in only the rows you need.|||Хүснэгт: мөр бүрт ашигласан <b>урвалжаа</b> (нэр эсвэл томьёогоор) бичээд, FA 6, 7, 8 тус бүрийн ажиглалтыг бич. Шаардлагатай мөрөө л бөглө.@@</p>
    <div class="tablewrap"><table class="rt"><thead><tr><th style="width:26%">reagent / test</th><th>FA 6</th><th>FA 7</th><th>FA 8</th></tr></thead><tbody>
      <tr><td><input class="head" id="rg1"></td><td><textarea class="cell" id="o16"></textarea></td><td><textarea class="cell" id="o17"></textarea></td><td><textarea class="cell" id="o18"></textarea></td></tr>
      <tr><td><input class="head" id="rg2"></td><td><textarea class="cell" id="o26"></textarea></td><td><textarea class="cell" id="o27"></textarea></td><td><textarea class="cell" id="o28"></textarea></td></tr>
      <tr><td><input class="head" id="rg3"></td><td><textarea class="cell" id="o36"></textarea></td><td><textarea class="cell" id="o37"></textarea></td><td><textarea class="cell" id="o38"></textarea></td></tr></tbody></table></div>
    <div class="btnrow"><button class="btn primary" id="q2checkA">@@Check 2(a)(i)|||2(a)(i)-г шалгах@@</button></div><div id="q2fbA" class="fb"></div>
    <p class="small">@@<b>(ii)</b> Formula of the nitrogen-containing ion: [1]|||<b>(ii)</b> Азот агуулсан ионы томьёо: [1]@@</p>
    <div class="calc"><div class="row">FA 6 <input id="f6" style="width:90px"> FA 7 <input id="f7" style="width:90px"> FA 8 <input id="f8" style="width:90px"></div></div>
    <div class="btnrow"><button class="btn primary" id="q2checkA2">@@Check 2(a)(ii)|||2(a)(ii)-г шалгах@@</button></div><div id="q2fbA2" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 2(a): the plan of tests|||Багшийн тайлбар: 2(a) — сорилын төлөвлөгөө@@</summary><div>
      <p>@@Ions: <b>NH₄⁺, NO₃⁻, NO₂⁻</b>.|||Ионууд: <b>NH₄⁺, NO₃⁻, NO₂⁻</b>.@@</p>
      <div class="tablewrap"><table class="rt small"><tr><th>@@reagent|||урвалж@@</th><th>FA 6 (NaNO₃)</th><th>FA 7 (NaNO₂)</th><th>FA 8 (NH₄Cl)</th></tr>
        <tr><th>@@NaOH(aq), heat|||NaOH(aq), халаах@@</th><td>no change</td><td>no change</td><td>gas turns damp red litmus blue (NH₃)</td></tr>
        <tr><th>@@then Al, heat|||дараа нь Al, халаах@@</th><td>gas turns damp red litmus blue</td><td>gas turns damp red litmus blue</td><td>@@(ignore)|||(анхаарахгүй)@@</td></tr>
        <tr><th>@@acidified KMnO₄ (or a named acid)|||хүчиллэг KMnO₄ (эсвэл нэрлэсэн хүчил)@@</th><td>stays purple (no change)</td><td>@@purple → colourless (with acid: brown gas)|||purple → colourless (хүчилтэй: brown gas)@@</td><td>stays purple</td></tr></table></div>
      <p>@@<b>M1</b> the three ions; <b>M2</b> a table with FA 6/7/8 and reagents; <b>M3</b> NaOH + heat; <b>M4</b> only FA 8 turns litmus blue; <b>M5</b> NaOH + Al + heat; <b>M6</b> FA 6 turns litmus blue; <b>M7</b> KMnO₄ or a named acid on a fresh sample; <b>M8</b> only FA 7 decolourises KMnO₄ / gives a brown gas with acid.|||<b>M1</b> гурван ион; <b>M2</b> FA 6/7/8 ба урвалжтай хүснэгт; <b>M3</b> NaOH + халаах; <b>M4</b> зөвхөн FA 8 лакмусыг хөхрүүлнэ; <b>M5</b> NaOH + Al + халаах; <b>M6</b> FA 6 лакмусыг хөхрүүлнэ; <b>M7</b> шинэ дээжинд KMnO₄ эсвэл нэрлэсэн хүчил; <b>M8</b> зөвхөн FA 7 KMnO₄-ийг өнгөгүйжүүлнэ / хүчилтэй хүрэн хий.@@</p>
      <div class="note exam">@@<b class="t">Why this order?</b>NO₃⁻ and NO₂⁻ both give NH₃ with Al + NaOH, so to tell them apart we use the <b>reducing</b> property of NO₂⁻ (it decolourises KMnO₄). Heating with NaOH before adding Al picks out NH₄⁺.|||<b class="t">Яагаад ийм дараалал вэ?</b>NO₃⁻ ба NO₂⁻ хоёулаа Al + NaOH-тэй NH₃ өгдөг тул тэдгээрийг ялгахын тулд NO₂⁻-ийн <b>ангижруулагч</b> шинжийг ашиглана (KMnO₄-ийг өнгөгүйжүүлнэ). Al нэмэхээс өмнө NaOH-тэй халааж NH₄⁺-ийг ялгана.@@</div>
    </div></details>
  </div>
  <div class="card">
    <div class="qhead"><h3>@@2(b) FA 9 and FA 10|||2(b) FA 9 ба FA 10@@</h3><span class="marks">[8]</span></div>
    <p class="small">@@<b>(i) Test 1</b> Heat FA 9 in a hard-glass test tube until the reaction stops. Observations; name one product. <b>Test 2</b> add 2–3 cm of water to the cooled residue, shake and let it settle. [3]|||<b>(i) Test 1</b> FA 9-г халуунд тэсвэртэй хуруу шилэнд урвал зогстол халаа. Ажиглалт; нэг бүтээгдэхүүний нэр. <b>Test 2</b> хөргөсөн үлдэгдэлд 2–3 cm ус нэмж сэгсрээд тунгаа. [3]@@</p>
    <textarea id="t1o" placeholder="Test 1 observations..."></textarea>
    <div class="calc"><div class="row">product: <input id="t1p"></div></div>
    <textarea id="t2o" placeholder="Test 2 observations..."></textarea>
    <p class="small">@@<b>(ii)</b> Dissolve FA 9 in H₂SO₄ + water to make FA 9(aq). <b>Test 3</b> a few drops of FA 9(aq) into 1 cm of FeSO₄(aq). <b>Test 4</b> a few drops of FA 9(aq) into 1 cm of KI(aq). [2]|||<b>(ii)</b> FA 9-ийг H₂SO₄ + усанд уусгаж FA 9(aq) бэлтгэ. <b>Test 3</b> 1 cm FeSO₄(aq)-д хэдэн дусал FA 9(aq). <b>Test 4</b> 1 cm KI(aq)-д хэдэн дусал FA 9(aq). [2]@@</p>
    <textarea id="t3o" placeholder="Test 3..."></textarea><textarea id="t4o" placeholder="Test 4..."></textarea>
    <p class="small">@@<b>(iii)</b> Dissolve FA 10 in water and add NaOH(aq) to 1 cm of it. [2]|||<b>(iii)</b> FA 10-ыг усанд уусгаж, 1 cm-т NaOH(aq) нэмнэ. [2]@@</p><textarea id="t5o" placeholder="observations..."></textarea>
    <div class="calc"><b>(iv)</b><div class="row">element: <input id="t6"> <span class="marks">[1]</span></div></div>
    <div class="btnrow"><button class="btn primary" id="q2checkB">@@Check 2(b)|||2(b)-г шалгах@@</button> <button class="wb-link" data-wb="Q2">@@Whiteboard|||Самбар@@</button></div><div id="q2fbB" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 2(b)|||Багшийн тайлбар: 2(b)@@</summary><div>
      <p>@@<b>(i)</b> 6 stars, 2 stars = 1 mark: black residue*; spits / crackles*; a glowing splint relights*; product: oxygen / MnO₂ / K₂MnO₄*; Test 2: (dark) green* solution*.|||<b>(i)</b> 6 од, 2 од = 1 оноо: хар үлдэгдэл*; үсэрнэ / шажигнана*; цогтой хэлтэрхий дахин асна*; бүтээгдэхүүн: хүчилтөрөгч / MnO₂ / K₂MnO₄*; Test 2: (бараан) ногоон* уусмал*.@@</p>
      <div class="eq">2KMnO₄ → K₂MnO₄ + MnO₂ + O₂</div>
      <p>@@<b>(ii)</b> Test 3: purple → colourless / pale yellow (Fe²⁺ → Fe³⁺). Test 4: purple → brown (I⁻ → I₂).|||<b>(ii)</b> Test 3: нил ягаан → өнгөгүй / цайвар шар (Fe²⁺ → Fe³⁺). Test 4: нил ягаан → хүрэн (I⁻ → I₂).@@</p>
      <p>@@<b>(iii)</b> Off-white ppt; turns brown in air and is insoluble in excess → Mn²⁺. <b>(iv)</b> Manganese (Mn).|||<b>(iii)</b> Цайвар (off-white) тунадас; агаарт хүрэн болно ба илүүдэлд уусахгүй → Mn²⁺. <b>(iv)</b> Манган (Mn).@@</p>
    </div></details>
  </div>
</section>

<section class="tab" id="tab-ref">
  <div class="card">
    <h3>@@Qualitative analysis notes (appendix to the exam paper)|||Чанарын шинжилгээний тэмдэглэл (шалгалтын хуудасны хавсралт)@@</h3>
    <div class="tablewrap"><table class="rt small">
      <tr><th>@@cation|||катион@@</th><th>NaOH(aq)</th><th>NH₃(aq)</th></tr>
      <tr><td>Al³⁺</td><td>white ppt, soluble in excess</td><td>white ppt, insoluble in excess</td></tr>
      <tr><td>NH₄⁺</td><td>no ppt; NH₃ produced on warming</td><td>–</td></tr>
      <tr><td>Ba²⁺</td><td>faint white ppt unless [Ba²⁺] very low</td><td>no ppt</td></tr>
      <tr><td>Ca²⁺</td><td>white ppt unless [Ca²⁺] very low</td><td>no ppt</td></tr>
      <tr><td>Cr³⁺</td><td>grey-green ppt, soluble in excess → dark green solution</td><td>grey-green ppt, insoluble in excess</td></tr>
      <tr><td>Cu²⁺</td><td>pale blue ppt, insoluble in excess</td><td>pale blue ppt, soluble in excess → dark blue solution</td></tr>
      <tr><td>Fe²⁺</td><td>green ppt turning brown in air; insoluble in excess</td><td>same</td></tr>
      <tr><td>Fe³⁺</td><td>red-brown ppt, insoluble in excess</td><td>same</td></tr>
      <tr><td>Mg²⁺</td><td>white ppt, insoluble in excess</td><td>white ppt, insoluble in excess</td></tr>
      <tr><td>Mn²⁺</td><td>off-white ppt rapidly turning brown in air; insoluble in excess</td><td>same</td></tr>
      <tr><td>Zn²⁺</td><td>white ppt, soluble in excess</td><td>white ppt, soluble in excess</td></tr>
    </table></div>
    <div class="tablewrap"><table class="rt small" style="margin-top:10px">
      <tr><th>@@anion|||анион@@</th><th>@@reaction|||урвал@@</th></tr>
      <tr><td>CO₃²⁻</td><td>CO₂ liberated by dilute acids</td></tr>
      <tr><td>Cl⁻</td><td>white ppt with Ag⁺ (soluble in NH₃(aq))</td></tr>
      <tr><td>Br⁻</td><td>cream ppt with Ag⁺ (partially soluble in NH₃(aq))</td></tr>
      <tr><td>I⁻</td><td>pale yellow ppt with Ag⁺ (insoluble in NH₃(aq))</td></tr>
      <tr><td>NO₃⁻</td><td>NH₃ liberated on heating with OH⁻ and Al foil</td></tr>
      <tr><td>NO₂⁻</td><td>NH₃ liberated with OH⁻ and Al foil; decolourises acidified KMnO₄</td></tr>
      <tr><td>SO₄²⁻</td><td>white ppt with Ba²⁺ (insoluble in excess dilute strong acids)</td></tr>
      <tr><td>SO₃²⁻</td><td>white ppt with Ba²⁺ (soluble in excess dilute strong acids); decolourises acidified KMnO₄</td></tr>
      <tr><td>S₂O₃²⁻</td><td>off-white / pale yellow ppt slowly with H⁺</td></tr>
    </table></div>
    <div class="tablewrap"><table class="rt small" style="margin-top:10px">
      <tr><th>@@gas|||хий@@</th><th>@@test and result|||сорил ба үр дүн@@</th></tr>
      <tr><td>NH₃</td><td>turns damp red litmus blue</td></tr>
      <tr><td>CO₂</td><td>gives a white ppt with limewater</td></tr>
      <tr><td>H₂</td><td>pops with a lighted splint</td></tr>
      <tr><td>O₂</td><td>relights a glowing splint</td></tr>
    </table></div>
  </div>
  <div class="card">
    <h3>@@General rules of the mark scheme (Paper 3)|||Mark scheme-ийн ерөнхий дүрмүүд (Paper 3)@@</h3>
    <ul>
      <li>@@A thermometer with 1 °C divisions is read to 0.5 °C (.0 or .5).|||1 °C-ийн хуваарьтай термометрийг 0.5 °C хүртэл уншина (.0 эсвэл .5).@@</li>
      <li>@@All balance readings to the same number of decimal places (2 or 3), as displayed.|||Жинлүүрийн бүх заалт ижил аравтын оронтой (2 эсвэл 3), харагдсанаар нь.@@</li>
      <li>@@Unit in the heading: <span class="mono">/ g</span>, <span class="mono">(g)</span>, <span class="mono">in g</span>.|||Нэгж гарчигт: <span class="mono">/ g</span>, <span class="mono">(g)</span>, <span class="mono">in g</span>.@@</li>
      <li>@@Graph scales: 1, 2 or 5 (×10ⁿ) per 20 small squares. Points as × or ⊙, accurate to half a square.|||Графикийн масштаб: 20 жижиг нүдэнд 1, 2, 5 (×10ⁿ). Цэгүүд × эсвэл ⊙-ээр, хагас нүдний нарийвчлалтай.@@</li>
      <li>@@Significant figures of calculated values: the same as, or one more than, the fewest s.f. in the data.|||Тооцоолсон утгын s.f.: өгөгдлийн хамгийн бага s.f.-тэй тэнцүү эсвэл нэгээр илүү.@@</li>
      <li>@@ECF: a correct calculation using an earlier wrong value still earns the following marks.|||ECF: өмнөх алдаатай утгаар зөв тооцоо хийвэл дараагийн оноо авна.@@</li>
      <li>@@Tables with stars (*): 2 stars = 1 mark, rounded down.|||Од (*) бүхий хүснэгт: 2 од = 1 оноо, доош тоймлоно.@@</li>
    </ul>
    <h3>@@Sources of error and uncertainty (syllabus)|||Алдааны эх үүсвэр ба тодорхойгүй байдал (syllabus)@@</h3>
    <ul>
      <li>@@The answer “human error” is not accepted.|||«Human error» гэсэн хариулт хүлээн авахгүй.@@</li>
      <li>@@Maximum uncertainty = half the difference between the two closest divisions.|||Хамгийн их тодорхойгүй байдал = хамгийн ойрын хоёр хуваарийн зөрүүний хагас.@@</li>
      <li>@@For a quantity found from the difference of two readings the uncertainty doubles: % uncertainty = (2 × U) / value × 100.|||Хоёр заалтын зөрүүгээр олсон хэмжигдэхүүнд тодорхойгүй байдал хоёр дахин: % алдаа = (2 × U) / утга × 100.@@</li>
    </ul>
  </div>
  <div class="card">
    <h3>@@Relative masses (for this paper)|||Харьцангуй масс (энэ шалгалтад)@@</h3>
    <p class="mono small">@@H 1.0 · C 12.0 · N 14.0 · O 16.0 · Na 23.0 · Cl 35.5 · K 39.1 · Mn 54.9<br>Na₂CO₃ = 106.0 · H₂O = 18.0 · Molar volume of a gas (room conditions) = 24 000 cm³ mol⁻¹|||H 1.0 · C 12.0 · N 14.0 · O 16.0 · Na 23.0 · Cl 35.5 · K 39.1 · Mn 54.9<br>Na₂CO₃ = 106.0 · H₂O = 18.0 · Хийн моль эзлэхүүн (өрөөний нөхцөл) = 24 000 cm³ mol⁻¹@@</p>
  </div>
</section>


<section class="tab" id="tab-score"><div class="card"><h2>@@Summary of results|||Дүнгийн хураангуй@@</h2><div id="scoreBody"></div><div class="btnrow"><button class="btn ghost" id="resetAll">@@Clear all answers|||Бүх хариултыг арилгах@@</button></div></div></section>
</main>
<footer>@@Independent study tool, not an official Cambridge product. Practice material. Questions and mark scheme © Cambridge University Press &amp; Assessment 2023; paraphrased here with added explanations. Values in the simulation are modelled and will not match real laboratory results exactly.|||Бие даасан сургалтын хэрэгсэл, Cambridge-ийн албан ёсны бүтээгдэхүүн биш. Дадлагын материал. Асуулт ба mark scheme © Cambridge University Press &amp; Assessment 2023; энд утгачилан, монгол тайлбартай ашигласан. Симуляцийн тоон утгууд нь загварчлал бөгөөд бодит лабораторийн үр дүнтэй яг таарахгүй.@@</footer>
<button class="wb-fab" id="wbFab" aria-label="@@Open whiteboard|||Самбар нээх@@"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg> @@Whiteboard|||Самбар@@</button>
<div class="wb" id="wb" aria-hidden="true">
  <div class="wb-panel">
    <div class="wb-bar">
      <select id="wbPage" title="@@Page|||Хуудас@@"><option value="Q1">@@Question 1|||1-р асуулт@@</option><option value="Q2">@@Question 2|||2-р асуулт@@</option><option value="Q3">@@Question 3|||3-р асуулт@@</option><option value="free">@@Free|||Чөлөөт@@</option></select>
      <button class="btn tool on" data-tool="pen">@@Pen|||Үзэг@@</button>
      <button class="btn tool" data-tool="hl">@@Highlighter|||Тодруулагч@@</button>
      <button class="btn tool" data-tool="line">@@Line|||Шулуун@@</button>
      <button class="btn tool" data-tool="eraser">@@Eraser|||Баллуур@@</button>
      <span id="wbColors"></span>
      <select id="wbSize" title="@@Thickness|||Зузаан@@"><option value="2">@@thin|||нимгэн@@</option><option value="3.5" selected>@@medium|||дунд@@</option><option value="7">@@thick|||бүдүүн@@</option></select>
      <button class="btn" id="wbGrid">@@Grid|||Тор@@</button>
      <button class="btn icon" id="wbUndo" aria-label="@@Undo|||Буцаах@@" title="@@Undo|||Буцаах@@"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/></svg></button>
      <button class="btn icon" id="wbRedo" aria-label="@@Redo|||Дахих@@" title="@@Redo|||Дахих@@"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 15-6.7L21 13"/></svg></button>
      <button class="btn" id="wbClear">@@Clear|||Арилгах@@</button>
      <button class="btn" id="wbSave">PNG</button>
      <button class="btn primary" id="wbClose" style="margin-left:auto">@@Close ×|||Хаах ×@@</button>
    </div>
    <div class="wb-stage" id="wbStage"><canvas id="wbCanvas"></canvas></div>
    <div class="wb-hint">@@Write with a mouse, finger or pen. Each page is saved separately (in this browser).|||Хулгана, хуруу эсвэл үзгээр бичнэ. Хуудас бүр тусдаа хадгалагдана (энэ хөтөч дээр).@@</div>
  </div>
</div>
<div class="toast" id="toast"></div>
<script>
(function(){
"use strict";
const CFG={"id": "w23", "gt": [25, 22, 18, 15, 12], "qtot": [23, 17], "parts": [["q1a", "1(a)", 3], ["q1b", "1(b)", 4], ["q1c", "1(c)", 2], ["q1d", "1(d)", 7], ["q1e", "1(e)", 1], ["q1f", "1(f)", 4], ["q1g", "1(g)", 2], ["q2a1", "2(a)(i)", 8], ["q2a2", "2(a)(ii)", 1], ["q2b1", "2(b)(i)", 3], ["q2b2", "2(b)(ii)", 2], ["q2b3", "2(b)(iii)(iv)", 3]]};
/* ================= shared library for 9701/35 interactive papers ================= */
const PFX="chem9701_35"+CFG.id+"_";
const $=(s,el)=>(el||document).querySelector(s);
const $$=(s,el)=>Array.from((el||document).querySelectorAll(s));
const store={get(k,d){try{const v=localStorage.getItem(PFX+k);return v==null?d:JSON.parse(v);}catch(e){return d;}},
  set(k,v){try{localStorage.setItem(PFX+k,JSON.stringify(v));}catch(e){}}};
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),2600);}
const SUPERS={"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","⁻":"-","⁺":"+"};
const UNITS=/(mol\\/dm-?3|moldm-3|g\\/mol|gmol-1|mol|cm-?3|dm-?3|g)$/i;
function clean(s){return String(s==null?"":s).trim().replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]/g,c=>SUPERS[c]).replace(/−|–/g,"-").replace(/,/g,".").replace(/\\s*[×xX*·]\\s*10\\s*\\^?\\s*/,"e").replace(/\\s+/g,"").replace(UNITS,"");}
function num(s){const c=clean(s);if(!/^[+-]?(\\d+\\.?\\d*|\\.\\d+)(e[+-]?\\d+)?$/i.test(c))return NaN;return parseFloat(c);}
function sigFigs(s){let c=clean(s).replace(/^[+-]/,"");c=c.split(/e/i)[0];if(!/^\\d*\\.?\\d*$/.test(c)||c==="")return 0;
  if(c.includes(".")){return c.replace(".","").replace(/^0+/,"").length;}return c.replace(/^0+/,"").replace(/0+$/,"").length||0;}
function dp(s){const c=clean(s);if(/e/i.test(c))return -1;const i=c.indexOf(".");return i<0?0:c.length-i-1;}
function close(a,b,rel){if(!isFinite(a)||!isFinite(b))return false;return Math.abs(a-b)<=Math.abs(b)*rel+1e-12;}
function sfIn(s,a,b){const n=sigFigs(s);return n>=a&&n<=b;}
function r2(v){return Math.round((v+1e-9)*100)/100;}
function gauss(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function li(ok,text){return \`<div>\${ok?'<span class="y">✓</span>':'<span class="n">✗</span>'} \${text}</div>\`;}
function fbBlock(lines,got,max){return lines.join("")+\`@@<div style="margin-top:6px">Marks: <span class="markbox">\${got} / \${max}</span></div>|||<div style="margin-top:6px">Оноо: <span class="markbox">\${got} / \${max}</span></div>@@\`;}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
const RX={BUB:/(bubbl|effervesc|fizz)/i,RELIGHT:/(relight|re-light|reignit|glows? (more )?bright)/i,POP:/(pop|squeaky)/i,
  NC:/(no (visible |observable )?change|no (observable |visible )?reaction|nothing happens)/i,NOPPT:/(no ppt|no precipitate)/i,
  PPT:/(ppt|precipit)/i,INSOL:/(insoluble|does ?n[o']t dissolve|not dissolve|no change|remains|stays|persist)/i,
  SOLX:/(soluble in excess|dissolves in excess|redissolves|re-dissolves|colourless solution in excess)/i,
  LITBLUE:/(red litmus|litmus).{0,30}blue/i,LIME:/(limewater|lime water).{0,40}(milky|cloudy|white ppt|white precipitate|turbid)|(milky|cloudy|white ppt).{0,30}limewater/i,
  COND:/(condens|droplet|steam|water vapou?r|moisture|liquid)/i};
/* stars: list of [ok,label]; 2 stars = 1 mark */
function starMark(L,items,max){let n=0;items.forEach(([ok,t])=>{L.push(li(ok,t+"*"));if(ok)n++;});const m=Math.min(max,Math.floor(n/2));L.push(\`<div class="small muted">@@Total stars:|||Нийт од:@@ \${n} @@→ 2 stars = 1 mark (max|||→ 2 од = 1 оноо (max@@ \${max}).</div>\`);return m;}

/* tabs & theme */
function showTab(id){$$("#tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.tab===id?"true":"false"));
  $$("section.tab").forEach(s=>s.classList.toggle("active",s.id==="tab-"+id));store.set("tab",id);window.scrollTo({top:0});}
$$("#tabs button").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));

/* score */
const SCORE=store.get("score",{});
function setScore(k,g){SCORE[k]=g;store.set("score",SCORE);renderScore();}
function grade(t){const g=CFG.gt;return t>=g[0]?"A":t>=g[1]?"B":t>=g[2]?"C":t>=g[3]?"D":t>=g[4]?"E":"U";}
/* ---------- progress and results ---------- */
const PARTS=CFG.parts;
/* parts marked by matching words in written answers: a teacher should confirm these */
const KEYWORD_PARTS=new Set(["q1c","q1g","q2a1","q2b1","q2b2","q2b3"]);
const PART_BUTTON={"q1a":"q1checkA","q1b":"q1checkB","q1c":"q1checkC","q1f":"q1checkF","q1g":"q1checkG","q2a1":"q2checkA","q2a2":"q2checkA2","q2b1":"q2checkB","q2b2":"q2checkB","q2b3":"q2checkB"};
const QUESTIONS=CFG.qtot.map((marks,i)=>{const n=i+1,id="q"+n;const tab=$(\`#tabs button[data-tab="\${id}"]\`);const h=$(\`#tab-\${id} h2\`);
  return {id,n,marks,min:Math.max(10,Math.round(marks*110/40/5)*5),title:(tab?tab.textContent:"").replace(/^\\s*\\d+\\.\\s*/,"").trim(),text:(h?h.textContent:"").replace(/^\\s*\\d+\\.\\s*/,"").trim()};});
const MAX=PARTS.reduce((a,p)=>a+p[2],0);
function goPart(k){const id="q"+k[1];showTab(id);const b=PART_BUTTON[k]&&$("#"+PART_BUTTON[k]);const card=b&&b.closest(".card");(card||$("#tab-"+id)).scrollIntoView({block:"start"});}
document.addEventListener("click",e=>{const go=e.target.closest("[data-go]");if(go){showTab(go.dataset.go);return;}const p=e.target.closest("[data-part]");if(p)goPart(p.dataset.part);});
function renderProgress(){
  $("#qcards").innerHTML=QUESTIONS.map(Q=>{const parts=PARTS.filter(([k])=>k[1]===String(Q.n));const seen=parts.filter(([k])=>SCORE[k]!=null);const got=seen.reduce((a,[k])=>a+SCORE[k],0);
    return \`<div class="qcard"><h3>\${Q.n}. \${Q.title}</h3><p class="small muted">\${Q.text}</p><div class="meta"><span>≈\${Q.min} @@min|||мин@@</span><span>\${seen.length?got:"–"} / \${Q.marks} @@marks|||оноо@@</span></div><div class="bar"><i style="width:\${got/Q.marks*100}%"></i></div><button class="btn \${seen.length?"":"primary"}" data-go="\${Q.id}">\${seen.length?"@@Continue|||Үргэлжлүүлэх@@":"@@Start|||Эхлэх@@"}</button></div>\`;}).join("");
  QUESTIONS.forEach(Q=>{const parts=PARTS.filter(([k])=>k[1]===String(Q.n));const nav=$("#partnav-"+Q.id);
    if(nav)nav.innerHTML=parts.map(([k,l,m])=>{const g=SCORE[k];const tone=g==null?"":g===m?"full":g>0?"some":"none";return \`<button class="\${tone}" data-part="\${k}">\${l} \${g==null?"–":g}/\${m}</button>\`;}).join("");
    const tab=$(\`#tabs button[data-tab="\${Q.id}"]\`);if(!tab)return;const seen=parts.filter(([k])=>SCORE[k]!=null);const got=seen.reduce((a,[k])=>a+SCORE[k],0);
    let mark=tab.querySelector(".tabscore");if(!mark){mark=document.createElement("span");mark.className="tabscore";tab.appendChild(mark);}mark.textContent=seen.length?\`\${got}/\${Q.marks}\`:"";});}
QUESTIONS.forEach((Q,i)=>{const next=QUESTIONS[i+1];const sec=$("#tab-"+Q.id);if(sec)sec.insertAdjacentHTML("beforeend",\`<div class="nextrow"><button class="btn primary" data-go="\${next?next.id:"score"}">\${next?"@@Question \${next.n}|||\${next.n}-р асуулт руу@@":"@@See your results|||Дүнгээ харах@@"} →</button></div>\`);});
function renderScore(){let tot=0;let rows="";const q={};QUESTIONS.forEach(Q=>q[Q.n]=[0,Q.marks]);
  PARTS.forEach(([k,l,m])=>{const g=SCORE[k];if(g!=null){tot+=g;if(q[l[0]])q[l[0]][0]+=g;}
    rows+=\`<tr><td>\${l}\${KEYWORD_PARTS.has(k)?'@@<span class="tag">keyword</span>|||<span class="tag">түлхүүр үг</span>@@':""}</td><td>\${g==null?'@@<span class="muted">not checked</span>|||<span class="muted">шалгаагүй</span>@@':g}</td><td>\${m}</td><td style="width:40%"><div class="bar"><i style="width:\${g==null?0:g/m*100}%"></i></div></td></tr>\`;});
  $("#scoreChip").textContent=\`\${tot} / \${MAX}\`;
  const checked=PARTS.filter(([k])=>SCORE[k]!=null).length;
  const lost=p=>p.g==null?-1:p.m-p.g;
  const todo=PARTS.map(([k,l,m])=>({k,l,m,g:SCORE[k]})).filter(p=>p.g==null||p.g<p.m).sort((a,b)=>lost(b)-lost(a));
  const todoHtml=todo.length?\`<ul class="todo">\${todo.slice(0,4).map(p=>\`<li><span>\${p.l} <span class="small muted">\${p.g==null?\`@@not checked · \${p.m} marks|||шалгаагүй · \${p.m} оноо@@\`:\`@@\${p.m-p.g} marks lost|||\${p.m-p.g} оноо алдсан@@\`}</span></span><button class="btn" data-part="\${p.k}">@@Go|||Очих@@</button></li>\`).join("")}</ul>\`:'@@<p class="small">Full marks on every part. Now try it again against the clock.</p>|||<p class="small">Бүх хэсэгт бүтэн оноо авлаа. Одоо цагаа барин дахин хийж үзээрэй.</p>@@';
  const th=\`A \${CFG.gt[0]}, B \${CFG.gt[1]}, C \${CFG.gt[2]}, D \${CFG.gt[3]}, E \${CFG.gt[4]}\`;
  $("#scoreBody").innerHTML=\`<p>\${checked===PARTS.length?\`@@Total: <span class="markbox" style="font-size:1.3rem">\${tot} / \${MAX}</span>: about level <b>\${grade(tot)}</b> by the thresholds for this component (\${th}).|||Нийт: <span class="markbox" style="font-size:1.3rem">\${tot} / \${MAX}</span> — энэ хэсгийн босгоор ойролцоогоор <b>\${grade(tot)}</b> түвшин (\${th}).@@\`:\`@@Current marks: <span class="markbox" style="font-size:1.3rem">\${tot} / \${MAX}</span>. Parts checked: \${checked} / \${PARTS.length}. A level appears once every part has been checked.|||Одоогийн оноо: <span class="markbox" style="font-size:1.3rem">\${tot} / \${MAX}</span>. Шалгасан хэсэг: \${checked} / \${PARTS.length}. Түвшин бүх хэсгийг шалгасны дараа гарна.@@\`}</p>
   @@<h3>What to repeat next</h3>|||<h3>Дараа нь юуг давтах вэ</h3>@@\${todoHtml}
   <p class="small muted">\${QUESTIONS.map(Q=>\`@@Question \${Q.n}|||\${Q.n}-р асуулт@@ \${q[Q.n][0]}/\${Q.marks}\`).join(" · ")}</p>
   <div class="tablewrap"><table class="rt scoretable"><tr>@@<th>Part</th><th>Earned</th>|||<th>Хэсэг</th><th>Авсан</th>@@<th>Max</th><th></th></tr>\${rows}</table></div>
   @@<p class="small muted">In parts labelled “keyword” the program checks written answers only by matching words. Ask a teacher to confirm the final judgement.</p>|||<p class="small muted">«Түлхүүр үг» гэсэн хэсгийн бичгэн хариултыг программ зөвхөн үгээр нь таньж шалгадаг. Эцсийн дүгнэлтийг багшаар баталгаажуулна уу.</p>@@\`;renderProgress();}
$("#resetAll").addEventListener("click",()=>{if(!confirm("@@Clear all marks and answers?|||Бүх оноо, хариултыг арилгах уу?@@"))return;try{Object.keys(localStorage).filter(k=>k.startsWith(PFX)&&!k.includes("_wb_")).forEach(k=>localStorage.removeItem(k));}catch(e){}location.reload();});
function persistInputs(){$$("main input:not([type=checkbox]), main textarea, main select").forEach(el=>{
  if(el.closest("[data-nopersist]"))return;const key=el.id?"in_"+el.id:null;if(!key)return;
  const v=store.get(key,null);if(v!=null)el.value=v;const save=()=>store.set(key,el.value);el.addEventListener("input",save);el.addEventListener("change",save);});}

/* generic magnified scale (burette / thermometer / cylinder) */
function drawScale(svg,val,o){const W=170,H=300,mid=150,k=o.k;let s=\`<rect width="\${W}" height="\${H}" fill="var(--paper)"/>\`;
  if(val==null||!isFinite(val)){svg.innerHTML=s+\`<text x="85" y="150" text-anchor="middle" font-size="12" fill="var(--muted)">\${o.empty||"—"}</text>\`;return;}
  const dir=o.down?1:-1;const yy=v=>mid+dir*(v-val)*k;const x0=60,x1=110;
  s+=\`<rect x="\${x0}" y="0" width="\${x1-x0}" height="\${H}" fill="var(--glass)" fill-opacity=".3"/>\`;
  if(o.liquid){const c=o.meniscus==="up"?-7:8;const below=o.fillAbove?\`L\${x1} 0 L\${x0} 0Z\`:\`L\${x1} \${H} L\${x0} \${H}Z\`;
    s+=\`<path d="M\${x0} \${mid} Q\${(x0+x1)/2} \${mid+c} \${x1} \${mid} \${below}" fill="\${o.liquid}"/>\`;}
  const span=H/2/k+0.5;const lo=Math.max(o.min,val-span),hi=Math.min(o.max,val+span);const st=o.minor;
  for(let t=Math.ceil(lo/st-1e-9);t<=Math.floor(hi/st+1e-9);t++){const v=+(t*st).toFixed(4);const Y=yy(v);
    const isMaj=Math.abs(v/o.major-Math.round(v/o.major))<1e-6;const isMid=o.mid&&Math.abs(v/o.mid-Math.round(v/o.mid))<1e-6;
    s+=\`<line x1="\${x0}" x2="\${x0+(isMaj?34:isMid?24:14)}" y1="\${Y}" y2="\${Y}" stroke="var(--ink)" stroke-width="\${isMaj?1.6:1}"/>\`;
    if(isMaj)s+=\`<text x="\${x0-6}" y="\${Y+4}" font-size="13" text-anchor="end" fill="var(--ink)" font-family="monospace">\${o.fmt?o.fmt(v):v}</text>\`;}
  s+=\`<line x1="\${x0}" x2="\${x0}" y1="0" y2="\${H}" stroke="var(--ink)" stroke-width="2"/><line x1="\${x1}" x2="\${x1}" y1="0" y2="\${H}" stroke="var(--ink)" stroke-width="2"/><path d="M\${x1+4} \${mid} l10 -6 v12z" fill="var(--accent)"/>\`;
  svg.innerHTML=s;}

/* ============ BALANCE + LOG helper ============ */
function Logger(sel){const el=$(sel);const arr=[];return{add(t){arr.push(t);el.innerHTML=arr.map(esc).join("<br>");el.scrollTop=1e6;},arr};}

/* ============ GRAPH TOOL ============ */
function Graph(box,o){
  const P=o.key,W=o.W||120,H=o.H||160,px=5,ml=62,mt=16,VW=ml+W*px+38,VH=mt+H*px+84;
  $(box).innerHTML=\`<div class="scalebox" data-nopersist>
    <label>@@x-axis label (with unit)|||x тэнхлэгийн нэр (нэгжтэй)@@<input data-g="xl" placeholder="..."></label><label>@@x starting value|||x эхлэх утга@@<input data-g="x0" value="0"></label>
    <label>@@x: per 20 small squares|||x: 20 жижиг нүдэнд@@<select data-g="xs"><option value="">@@choose|||сонго@@</option>\${(o.xopts||[1,2,2.5,4,5,10,20]).map(v=>\`<option>\${v}</option>\`).join("")}</select></label>
    <label>@@y-axis label (with unit)|||y тэнхлэгийн нэр (нэгжтэй)@@<input data-g="yl" placeholder="..."></label><label>@@y starting value|||y эхлэх утга@@<input data-g="y0" placeholder="@@e.g. 18|||жишээ 18@@"></label>
    <label>@@y: per 20 small squares|||y: 20 жижиг нүдэнд@@<select data-g="ys"><option value="">@@choose|||сонго@@</option>\${(o.yopts||[0.5,1,2,2.5,3,4,5]).map(v=>\`<option>\${v}</option>\`).join("")}</select></label></div>
   <div class="gtools"><button class="btn tool on" data-gm="plot">@@× Plot points|||× Цэг тавих@@</button><button class="btn tool" data-gm="erase">@@Remove a point|||Цэг арилгах@@</button><button class="btn tool" data-gm="anom">@@Mark as anomalous|||Гажуудсан гэж тэмдэглэх@@</button>
    \${o.lines?\`<button class="btn tool" data-gm="L1">\${o.l1label||"@@Line 1 (curve, 3 points)|||Шугам 1 (муруй, 3 цэг)@@"}</button><button class="btn tool" data-gm="L2">\${o.l2label||"@@Line 2 (straight, 2 points)|||Шугам 2 (шулуун, 2 цэг)@@"}</button>
    <label class="small" style="align-self:center"><input type="checkbox" data-g="l2c"> @@Make line 2 a curve|||Шугам 2-ыг муруй болгох@@</label><label class="small" style="align-self:center"><input type="checkbox" data-g="l1s"> @@Make line 1 straight|||Шугам 1-ийг шулуун болгох@@</label>
    <button class="btn ghost" data-gc="L">@@Clear the lines|||Шугамуудыг арилгах@@</button>\`:""}<button class="btn ghost" data-gc="all">@@Clear everything|||Бүгдийг арилгах@@</button></div>
   <p class="small muted" data-g="hint">@@Plotting mode: click on the grid to plot each point from the table (to half a small square). You can drag the control points of a line to move them.|||Цэг тавих горим: хүснэгтийн цэг бүрийг тор дээр дарж тавина (хагас нүдний нарийвчлалтай). Шугамын хяналтын цэгүүдийг чирж зөөж болно.@@</p>
   <div class="graphwrap"><svg class="graph" viewBox="0 0 \${VW} \${VH}" aria-label="@@Graph grid|||Графикийн тор@@"></svg></div>\`;
  const q=n=>$(\`[data-g="\${n}"]\`,$(box));const svg=$("svg.graph",$(box));
  const G={mode:"plot",pts:store.get(P+"pts",[]),L1:store.get(P+"L1",[]),L2:store.get(P+"L2",[]),drag:null};
  ["xl","x0","xs","yl","y0","ys"].forEach(n=>{const v=store.get(P+n,null);if(v!=null)q(n).value=v;q(n).addEventListener("input",()=>{store.set(P+n,q(n).value);draw();});q(n).addEventListener("change",()=>{store.set(P+n,q(n).value);draw();});});
  ["l2c","l1s"].forEach(n=>{if(!q(n))return;q(n).checked=!!store.get(P+n,false);q(n).addEventListener("change",()=>{store.set(P+n,q(n).checked);G[n==="l2c"?"L2":"L1"]=[];draw();});});
  function sc(){const xs=num(q("xs").value),ys=num(q("ys").value),x0=num(q("x0").value),y0=num(q("y0").value);return{ok:[xs,ys,x0,y0].every(isFinite),xs,ys,x0,y0};}
  const toPx=(x,y,s)=>[ml+(x-s.x0)/s.xs*20*px,mt+H*px-(y-s.y0)/s.ys*20*px];
  const toData=(X,Y,s)=>[s.x0+(X-ml)/(20*px)*s.xs,s.y0+(mt+H*px-Y)/(20*px)*s.ys];
  const snap=(v,st)=>Math.round(v/st)*st;
  function need(n){if(n==="L1")return q("l1s")&&q("l1s").checked?2:(o.l1n||3);return q("l2c")&&q("l2c").checked?3:2;}
  function fn(L){if(L.length===2){const[a,b]=L;if(Math.abs(b[0]-a[0])<1e-9)return null;const k=(b[1]-a[1])/(b[0]-a[0]);return x=>a[1]+k*(x-a[0]);}
    if(L.length===3){const[[x0,y0],[x1,y1],[x2,y2]]=L;if(new Set([x0,x1,x2].map(v=>v.toFixed(6))).size<3)return null;
      return x=>y0*(x-x1)*(x-x2)/((x0-x1)*(x0-x2))+y1*(x-x0)*(x-x2)/((x1-x0)*(x1-x2))+y2*(x-x0)*(x-x1)/((x2-x0)*(x2-x1));}return null;}
  function range(L){const xs=L.map(p=>p[0]);return[Math.min(...xs),Math.max(...xs)];}
  function intersect(){const f1=fn(G.L1),f2=fn(G.L2);if(!f1||!f2||G.L1.length!==need("L1")||G.L2.length!==need("L2"))return null;const r1=range(G.L1),r2=range(G.L2);
    const a=Math.max(r1[0],r2[0]),b=Math.min(r1[1],r2[1]);if(a>=b)return null;const N=4000;let prev=f1(a)-f2(a);
    for(let i=1;i<=N;i++){const x=a+(b-a)*i/N;const d=f1(x)-f2(x);if(prev===0||d===0||prev*d<0){let lo=x-(b-a)/N,hi=x;for(let j=0;j<40;j++){const mm=(lo+hi)/2;if((f1(lo)-f2(lo))*(f1(mm)-f2(mm))<=0)hi=mm;else lo=mm;}const xi=(lo+hi)/2;return[xi,f1(xi)];}prev=d;}return null;}
  function draw(){const s=sc();const Wp=W*px,Hp=H*px;let g=\`<rect x="0" y="0" width="\${VW}" height="\${VH}" fill="#fff"/>\`;
    for(let i=0;i<=W;i++){const x=ml+i*px;g+=\`<line x1="\${x}" y1="\${mt}" x2="\${x}" y2="\${mt+Hp}" stroke="\${i%10?'#e6edf4':'#b9c6d4'}" stroke-width="\${i%10?0.6:1}"/>\`;}
    for(let j=0;j<=H;j++){const y=mt+j*px;g+=\`<line x1="\${ml}" y1="\${y}" x2="\${ml+Wp}" y2="\${y}" stroke="\${j%10?'#e6edf4':'#b9c6d4'}" stroke-width="\${j%10?0.6:1}"/>\`;}
    if(s.ok){for(let i=0;i<=W;i+=20)g+=\`<text x="\${ml+i*px}" y="\${mt+Hp+16}" font-size="12" text-anchor="middle" fill="#333" font-family="monospace">\${+(s.x0+i/20*s.xs).toFixed(3)}</text>\`;
      for(let j=0;j<=H;j+=20)g+=\`<text x="\${ml-6}" y="\${mt+Hp-j*px+4}" font-size="12" text-anchor="end" fill="#333" font-family="monospace">\${+(s.y0+j/20*s.ys).toFixed(3)}</text>\`;}
    else g+=\`<text x="\${ml+Wp/2}" y="\${mt+Hp/2}" font-size="15" text-anchor="middle" fill="#9a6400">@@First choose your scales (starting value, per 20 squares)|||Эхлээд масштабаа (эхлэх утга, 20 нүдэнд) сонгоно уу@@</text>\`;
    g+=\`<text x="\${ml+Wp/2}" y="\${mt+Hp+36}" font-size="13" text-anchor="middle" fill="#222">\${esc(q("xl").value||"")}</text><text transform="translate(14 \${mt+Hp/2}) rotate(-90)" font-size="13" text-anchor="middle" fill="#222">\${esc(q("yl").value||"")}</text>\`;
    if(s.ok){g+=\`<clipPath id="gc\${P}"><rect x="\${ml}" y="\${mt}" width="\${Wp}" height="\${Hp}"/></clipPath><g clip-path="url(#gc\${P})">\`;
      [["L1","#1f5f9a"],["L2","#b3261e"]].forEach(([n,c])=>{const L=G[n];const f=fn(L);if(f&&L.length===need(n)){const[a,b]=range(L);let d="";
          for(let i=0;i<=200;i++){const x=a+(b-a)*i/200;const[X,Y]=toPx(x,f(x),s);d+=(i?"L":"M")+X.toFixed(1)+" "+Y.toFixed(1);}g+=\`<path d="\${d}" fill="none" stroke="\${c}" stroke-width="1.6"/>\`;}
        L.forEach((p,i)=>{const[X,Y]=toPx(p[0],p[1],s);g+=\`<circle data-h="\${n}:\${i}" cx="\${X}" cy="\${Y}" r="6" fill="\${c}" fill-opacity=".25" stroke="\${c}" style="cursor:move"/>\`;});});
      G.pts.forEach(p=>{const[X,Y]=toPx(p.x,p.y,s);g+=\`<path d="M\${X-4} \${Y-4}L\${X+4} \${Y+4}M\${X-4} \${Y+4}L\${X+4} \${Y-4}" stroke="#111" stroke-width="1.5"/>\`;
        if(p.anom)g+=\`<circle cx="\${X}" cy="\${Y}" r="9" fill="none" stroke="#d97706" stroke-width="1.5"/><text x="\${X+11}" y="\${Y-8}" font-size="11" fill="#d97706">anomalous</text>\`;});
      const X=intersect();if(X){const[a,b]=toPx(X[0],X[1],s);g+=\`<circle cx="\${a}" cy="\${b}" r="3" fill="#6b2f8f"/>\`;}g+=\`</g>\`;}
    svg.innerHTML=g;store.set(P+"pts",G.pts);store.set(P+"L1",G.L1);store.set(P+"L2",G.L2);}
  const ev=e=>{const r=svg.getBoundingClientRect();return[(e.clientX-r.left)*VW/r.width,(e.clientY-r.top)*VH/r.height];};
  svg.addEventListener("pointerdown",e=>{const s=sc();if(!s.ok){toast("@@First choose your scales.|||Эхлээд масштабаа сонгоно уу.@@");return;}
    const h=e.target.getAttribute&&e.target.getAttribute("data-h");if(h){const[n,i]=h.split(":");G.drag={n,i:+i};svg.setPointerCapture(e.pointerId);return;}
    const[X,Y]=ev(e);if(X<ml-3||X>ml+W*px+3||Y<mt-3||Y>mt+H*px+3)return;let[x,y]=toData(X,Y,s);x=snap(x,s.xs/40);y=snap(y,s.ys/40);
    if(G.mode==="plot")G.pts.push({x,y,anom:false});
    else if(G.mode==="erase"||G.mode==="anom"){let bi=-1,bd=1e9;G.pts.forEach((p,i)=>{const[a,b]=toPx(p.x,p.y,s);const d=Math.hypot(a-X,b-Y);if(d<bd){bd=d;bi=i;}});
      if(bi>=0&&bd<14){if(G.mode==="erase")G.pts.splice(bi,1);else G.pts[bi].anom=!G.pts[bi].anom;}}
    else{const L=G[G.mode];if(L.length>=need(G.mode)){toast("@@This line is complete. Drag a control point to move it, or clear the lines.|||Энэ шугам бүрэн. Хяналтын цэгийг чирж зөө эсвэл шугамуудыг арилга.@@");return;}L.push([x,y]);}draw();});
  svg.addEventListener("pointermove",e=>{if(!G.drag)return;const s=sc();const[X,Y]=ev(e);const[x,y]=toData(X,Y,s);G[G.drag.n][G.drag.i]=[snap(x,s.xs/80),snap(y,s.ys/80)];draw();});
  ["pointerup","pointercancel"].forEach(t=>svg.addEventListener(t,()=>{G.drag=null;}));
  const hints={plot:"@@Plotting mode: click on the grid to plot each point from the table (to half a small square).|||Цэг тавих горим: хүснэгтийн цэг бүрийг тор дээр дарж тавина (хагас нүдний нарийвчлалтай).@@",erase:"@@Click on the point you want to remove.|||Арилгах цэг дээрээ дарна уу.@@",anom:"@@Click on a point to mark it as anomalous (click again to undo).|||Гажуудсан цэг дээрээ дарж тэмдэглэнэ (дахин дарвал болино).@@",
    L1:o.l1hint||"@@Line 1: place the control points. The line passes through them: extend it beyond the crossing.|||Шугам 1: хяналтын цэгүүдийг тавина. Шугам хяналтын цэгүүдээр дамжина — огтлолцлоос цааш сунгаарай.@@",L2:o.l2hint||"@@Line 2: place the two end points, before the crossing and beyond the last point.|||Шугам 2: хоёр төгсгөлийн цэгийг тавина — огтлолцлоос өмнөх ба сүүлийн цэгээс цааш.@@"};
  $$("[data-gm]",$(box)).forEach(b=>b.onclick=()=>{G.mode=b.dataset.gm;$$("[data-gm]",$(box)).forEach(x=>x.classList.toggle("on",x===b));q("hint").textContent=hints[G.mode];});
  $$("[data-gc]",$(box)).forEach(b=>b.onclick=()=>{if(b.dataset.gc==="all"){if(!confirm("@@Clear all points and lines from the graph?|||Графикийн бүх цэг, шугамыг арилгах уу?@@"))return;G.pts=[];}G.L1=[];G.L2=[];draw();});
  draw();
  /* ---- marking primitives ---- */
  const API={G,sc,draw,intersect,fn,need,
    labels(xre,yre){const a=q("xl").value.toLowerCase(),b=q("yl").value.toLowerCase();return{x:xre.test(a),y:yre.test(b)};},
    goodScale(){const s=sc();const ok=[0.1,0.2,0.5,1,2,5,10,20,50,100];return s.ok&&ok.includes(s.xs)&&ok.includes(s.ys);},
    inGrid(x,y){const s=sc();return s.ok&&x>=s.x0-1e-9&&x<=s.x0+W/20*s.xs+1e-9&&y>=s.y0-1e-9&&y<=s.y0+H/20*s.ys+1e-9;},
    yTop(){const s=sc();return s.y0+H/20*s.ys;},
    half(data){const s=sc();if(!s.ok||!data.length)return false;const xs=data.map(d=>d[0]),ys=data.map(d=>d[1]);
      return(Math.max(...xs)-Math.min(...xs))/(W/20*s.xs)>=0.5&&(Math.max(...ys)-Math.min(...ys))/(H/20*s.ys)>=0.5;},
    points(data){const s=sc();if(!s.ok)return false;const tx=s.xs/40+1e-9,ty=s.ys/40+1e-9;return data.every(([x,y])=>G.pts.some(p=>Math.abs(p.x-x)<=tx&&Math.abs(p.y-y)<=ty));},
    fit(Lname,data,tolMin){const s=sc();const f=fn(G[Lname]);if(!f||G[Lname].length!==need(Lname)||data.length<2)return false;
      const r=data.map(([x,y])=>y-f(x));const mean=r.reduce((a,b)=>a+Math.abs(b),0)/r.length;return mean<=Math.max(s.ys/20*1.5,tolMin||0)&&Math.max(...r.map(Math.abs))<=Math.max(s.ys/20*4,(tolMin||0)*2.3);},
    curved(Lname){const L=G[Lname];if(L.length!==3)return false;const s=sc();const[a,b,c]=L;return Math.abs(b[1]-(a[1]+(c[1]-a[1])*(b[0]-a[0])/(c[0]-a[0])))>s.ys/40;},
    nonAnom(data){const s=sc();return data.filter(([x,y])=>!G.pts.some(p=>p.anom&&Math.abs(p.x-x)<=s.xs/40+1e-9&&Math.abs(p.y-y)<=s.ys/40+1e-9));},
    halfSq(){const s=sc();return{x:s.xs/40,y:s.ys/40};}};
  return API;}

/* ============ QUAL BENCH ============ */
const COL={colourless:"rgba(210,230,245,.45)",purple:"#6a1b7a",palepink:"rgba(245,215,228,.6)",green:"#1f6b3a",palegreen:"rgba(160,205,150,.6)",yellow:"rgba(240,215,120,.75)",white:"#fbfbf7",offwhite:"#ece4d4",brown:"#7a4a1e",redbrown:"#8a3b12",black:"#222",darkbrown:"#3a2412",blue:"#2c66c7",paleblue:"rgba(150,190,240,.65)",darkblue:"#1b3f9a",greenppt:"#5d7a3a",greygreen:"#6f7f62",orange:"rgba(235,140,40,.75)",cream:"#efe2b8",paleyellow:"#f4e7a1"};
function drawTube(svg,s){s=s||{};let g=\`<rect width="200" height="300" fill="none"/>\`;
  g+=\`<path d="M70 30 L70 250 Q70 280 100 280 Q130 280 130 250 L130 30" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>\`;
  if(s.liq)g+=\`<path d="M72 170 L128 170 L128 250 Q128 278 100 278 Q72 278 72 250Z" fill="\${s.liq}"/>\`;
  if(s.ppt){g+=\`<path d="M72 235 L128 235 L128 250 Q128 278 100 278 Q72 278 72 250Z" fill="\${s.ppt}"/>\`;for(let i=0;i<14;i++)g+=\`<circle cx="\${78+Math.random()*44}" cy="\${185+Math.random()*48}" r="1.6" fill="\${s.ppt}" opacity=".85"/>\`;}
  if(s.solid){g+=\`<path d="M74 258 L126 258 Q124 278 100 278 Q76 278 74 258Z" fill="\${s.solid}" stroke="#0003"/>\`;for(let i=0;i<8;i++)g+=\`<rect x="\${80+Math.random()*36}" y="\${250+Math.random()*10}" width="5" height="4" fill="\${s.solid}" stroke="#0003"/>\`;}
  if(s.foil)g+=\`<rect x="92" y="200" width="16" height="30" fill="#c9ccd1" stroke="#888" transform="rotate(12 100 215)"/>\`;
  if(s.bub)for(let i=0;i<16;i++){const x=78+Math.random()*44,y=180+Math.random()*90;g+=\`<circle cx="\${x}" cy="\${y}" r="\${1.5+Math.random()*2.5}" fill="none" stroke="var(--ink)" stroke-width=".8"><animate attributeName="cy" from="\${y}" to="172" dur="\${0.8+Math.random()}s" repeatCount="indefinite"/></circle>\`;}
  if(s.gas)g+=\`<rect x="72" y="32" width="56" height="120" fill="\${s.gas}" opacity=".45"/>\`;
  if(s.cond)for(let i=0;i<10;i++)g+=\`<circle cx="\${73+Math.random()*54}" cy="\${40+Math.random()*50}" r="\${1.2+Math.random()*1.6}" fill="#9fd0ff" stroke="#5c8fbf" stroke-width=".5"/>\`;
  if(s.flame)g+=\`<path d="M100 286 Q85 292 100 300 Q115 292 100 286" fill="#3b7bff" opacity=".85"/>\`;
  if(s.splint){g+=\`<line x1="100" y1="18" x2="170" y2="-30" stroke="#a7783f" stroke-width="5"/><circle cx="100" cy="20" r="\${s.splint==="relight"||s.splint==="lit"?7:3}" fill="\${s.splint==="relight"||s.splint==="lit"?"#ffb02e":"#c4512b"}"/>\`;
    if(s.splint==="relight"||s.splint==="lit")g+=\`<path d="M100 2 Q92 14 100 22 Q108 14 100 2" fill="#ff7a1a"/>\`;if(s.splint==="pop")g+=\`<text x="140" y="40" font-size="18" font-weight="700" fill="#b3261e">POP!</text>\`;}
  if(s.litmus)g+=\`<rect x="95" y="0" width="12" height="40" fill="\${s.litmus}" stroke="#555" stroke-width=".6"/>\`;
  if(s.lime)g+=\`<path d="M150 120 L150 230 Q150 250 165 250 Q180 250 180 230 L180 120" fill="\${s.lime}" stroke="var(--ink)" stroke-width="1.5"/><path d="M130 60 Q160 60 165 125" fill="none" stroke="var(--ink)" stroke-width="2"/><text x="165" y="265" font-size="9" text-anchor="middle" fill="var(--muted)">limewater</text>\`;
  if(s.label)g+=\`<text x="100" y="296" font-size="11" text-anchor="middle" fill="var(--muted)">\${esc(s.label)}</text>\`;
  svg.innerHTML=g;}
function Bench(box,SAMPLES,ACT){const key="bench_"+box.replace(/\\W/g,"");
  $(box).innerHTML=\`<div class="btnrow samples"></div><div class="bench"><div><p class="small b-info"></p><div class="btnrow b-act"></div>
    <div class="obsbox b-obs"><span class="muted">@@Choose a sample, then do a test.|||Дээжээ сонгоод сорил хийнэ үү.@@</span></div>
    <label class="small"><input type="checkbox" class="b-rev"> @@If you get stuck: show the observations described in English (practice mode)|||Хэрэв гацвал: ажиглалтыг англиар тайлбарлан харуулах (дадлагын горим)@@</label></div>
    <div><svg class="tube-svg" viewBox="0 0 200 300" aria-label="@@Test-tube|||Хуруу шил@@"></svg></div></div>\`;
  const R=$(box);const tube=$("svg",R);const done=store.get(key,{});let cur=Object.keys(SAMPLES)[0];let tok=0;
  function samples(){const b=$(".samples",R);b.innerHTML="";Object.keys(SAMPLES).forEach(k=>b.insertAdjacentHTML("beforeend",\`<button class="btn \${k===cur?"sel":""}" data-s="\${k}">\${SAMPLES[k].name}</button>\`));
    $$("button",b).forEach(x=>x.onclick=()=>{tok++;cur=x.dataset.s;samples();acts();drawTube(tube,SAMPLES[cur].init);$(".b-obs",R).innerHTML='<span class="muted">@@Choose a test.|||Сорил сонгоно уу.@@</span>';});}
  function acts(){const a=$(".b-act",R);a.innerHTML="";$(".b-info",R).textContent=SAMPLES[cur].info;
    ACT[cur].forEach(x=>a.insertAdjacentHTML("beforeend",\`<button class="btn" data-a="\${x.id}">\${x.label}</button>\`));
    $$("button",a).forEach(b=>b.onclick=()=>run(ACT[cur].find(x=>x.id===b.dataset.a)));}
  function run(act){if(act.need&&!done[cur+act.need]){const pre=ACT[cur].find(x=>x.id===act.need);toast(\`@@First:|||Эхлээд:@@ \${pre?pre.label:act.need}\`);return;}
    done[cur+act.id]=true;store.set(key,done);let i=0;const my=++tok;const show=()=>{if(my!==tok)return;drawTube(tube,act.steps[i]);i++;if(i<act.steps.length)setTimeout(show,act.slow?2300:1300);};show();
    $(".b-obs",R).innerHTML=\`<b>\${esc(act.label)}</b><br>\`+($(".b-rev",R).checked?\`<span class="small">@@Note:|||Тайлбар:@@ <i>\${esc(act.obs)}</i></span>\`:\`<span class="small muted">@@Record what you saw, in English, in the table below.|||Харсан зүйлээ англиар доорх хүснэгтэд бүртгэ.@@</span>\`);}
  samples();acts();drawTube(tube,SAMPLES[cur].init);return{done};}
function A(id,label,steps,obs,extra){return Object.assign({id,label,steps,obs},extra||{});}

/* ============ THERMOMETRIC TITRATION (base in cup, acid from burette) ============ */
function Thermo(box,o){/* o:{key,baseVol,nBase,acidConc,ratio(mol base per mol acid),step,maxV,acidName,baseName,eff} */
  const EFF=o.eff||0.88,LOSS=0.0008,DH=57100;const heat=V=>Math.min(o.ratio*o.acidConc*V/1000,o.nBase)*DH*EFF;
  let supD=0;for(let V=0;V<=o.maxV+1e-9;V+=o.step)supD=Math.max(supD,heat(V)/((o.baseVol+V)*4.18));
  $(box).innerHTML=\`<div class="grid-sim"><div><svg class="app-svg t-svg" viewBox="0 0 360 440"></svg>
    <div class="readouts"><div class="readout"><b>@@Total added:|||Нийт нэмсэн@@ \${o.acidName}</b><span class="t-vol">—</span></div><div class="readout"><b>@@Stirring|||Хутгаж байна уу@@</b><span class="t-st">@@no|||үгүй@@</span></div></div></div>
   <div><ol class="steps t-steps"><li data-s="cup"><button class="btn" data-t="cup">@@Stand the cup in the beaker|||Аягыг стакан дотор тавих@@</button></li>
    <li data-s="base"><button class="btn" data-t="base">\${o.baseVol.toFixed(1)} cm³ \${o.baseName} @@by pipette|||пипеткээр хийх@@</button></li>
    <li data-s="therm"><button class="btn" data-t="therm">@@Put the thermometer in|||Термометрийг дүрэх@@</button> <span class="small muted">@@→ read and record the starting temperature|||→ эхний температурыг уншиж бич@@</span></li>
    <li data-s="fill"><button class="btn" data-t="fill">@@Fill the burette with|||Бюретийг@@ \${o.acidName}@@|||-оор дүүргэх@@</button></li>
    <li data-s="add"><button class="btn" data-t="add">\${o.step.toFixed(2)} cm³ \${o.acidName} @@(add)|||нэмэх@@</button> <button class="btn t-stir">@@Stir (press and hold)|||Хутгах (дарж барих)@@</button></li></ol>
   <div class="grid2" style="gap:10px;align-items:start"><div><svg class="lens t-lens" viewBox="0 0 170 300"></svg>
     <p class="small muted" style="max-width:180px">@@Close-up of the thermometer (1 °C divisions). Read it to 0.5 °C. After each addition the temperature rises and then slowly falls: catch the|||Томруулсан термометр (1 °C-ийн хуваарь). 0.5 °C хүртэл уншина. Нэмсний дараа температур өсөөд аажим буурна —@@ <b>@@highest|||хамгийн их@@</b> @@value.|||утгыг барьж ав.@@</p></div>
    <div><div class="note small"><b class="t">@@Observation|||Ажиглалт@@</b><span class="t-obs">@@Start by standing the cup in the beaker.|||Аягыг стакан дотор тавьж эхэлнэ үү.@@</span></div><div class="note warn small t-warn" hidden></div>
     <div class="btnrow"><button class="btn ghost" data-t="reset">@@Start again|||Шинээр эхлэх@@</button></div></div></div></div></div>\`;
  const R=$(box);let S;
  function init(){S={cup:false,base:false,therm:false,filled:false,V:0,T0:+(19.5+Math.random()*4).toFixed(2),H:0,step:-1,peaks:[],noStir:0,mixed:1,stir:false};S.T=S.T0;}
  init();const obs=t=>$(".t-obs",R).textContent=t;const warn=t=>{const w=$(".t-warn",R);w.hidden=!t;w.textContent=t||"";};
  const st=(s,on)=>{const el=$(\`.t-steps li[data-s="\${s}"]\`,R);if(el)el.classList.toggle("done",!!on);};
  const Teq=()=>S.T0+S.H/((o.baseVol+S.V)*4.18);
  const act={cup(){S.cup=true;st("cup",1);obs("@@The cup is standing steady in the beaker.|||Аяга стакан дотор тогтвортой байна.@@");},
    base(){if(!S.cup)return toast("@@First stand the cup in the beaker.|||Эхлээд аягыг стакан дотор тавина уу.@@");S.base=true;st("base",1);obs(\`@@In the cup:|||Аяганд@@ \${o.baseVol.toFixed(1)} cm³ \${o.baseName} @@.|||байна.@@\`);},
    therm(){if(!S.base)return toast("@@The cup is empty.|||Аяга хоосон байна.@@");S.therm=true;st("therm",1);S.step=0;S.peaks[0]=S.T0;obs("@@The thermometer is in. Read the scale and record it in the 0.00 cm³ box.|||Термометр дүрэгдлээ. Хуваарийг уншиж 0.00 cm³-ийн нүдэнд бич.@@");},
    fill(){S.filled=true;st("fill",1);obs(\`@@The burette is filled with|||Бюрет@@ \${o.acidName}@@(0.00 cm³).|||-оор дүүрлээ (0.00 cm³).@@\`);},
    add(){if(!S.therm)return toast("@@First put the thermometer in and record the starting temperature.|||Эхлээд термометрийг дүрж, эхний температурыг бич.@@");if(!S.filled)return toast("@@The burette is empty.|||Бюрет хоосон.@@");if(S.V>=o.maxV-1e-9)return toast(\`\${o.maxV.toFixed(2)} @@cm³ reached: the experiment is complete.|||cm³ хүрсэн — туршилт дууслаа.@@\`);
      if(S.step>0&&!S.stirred)S.noStir++;const V0=S.V;S.V=+(S.V+o.step).toFixed(2);S.H+=heat(S.V)-heat(V0);
      S.T=(S.T*(o.baseVol+V0)+S.T0*o.step)/(o.baseVol+S.V);S.mixed=0;S.stirred=false;S.step=Math.round(S.V/o.step);S.peaks[S.step]=S.T;st("add",S.V>=o.maxV-1e-9);
      obs(\`@@In total|||Нийт@@ \${S.V.toFixed(2)} @@cm³ added. Stir, then read and record the highest temperature.|||cm³ нэмэгдлээ. Хутгаж, хамгийн их температурыг уншаад бич.@@\`);warn("");},
    reset(){if(!confirm("@@Start the simulation again?|||Симуляцийг шинээр эхлүүлэх үү?@@"))return;init();["cup","base","therm","fill","add"].forEach(s=>st(s,0));obs("@@Start by standing the cup in the beaker.|||Аягыг стакан дотор тавьж эхэлнэ үү.@@");warn("");}};
  $$("[data-t]",R).forEach(b=>b.onclick=()=>{act[b.dataset.t]();draw();});
  const sb=$(".t-stir",R);sb.addEventListener("pointerdown",e=>{e.preventDefault();if(!S.therm)return toast("@@There is no thermometer in the cup.|||Аяганд термометр алга.@@");S.stir=true;$(".t-st",R).textContent="@@yes|||тийм@@";});
  ["pointerup","pointerleave","pointercancel"].forEach(t=>sb.addEventListener(t,()=>{S.stir=false;$(".t-st",R).textContent="@@no|||үгүй@@";}));
  function draw(){let s="";const bx=230,by=10,bh=200,bw=18;const lvl=S.filled?by+14+(S.V/50)*(bh-24):null;
    s+=\`<rect x="300" y="10" width="8" height="420" fill="var(--muted)"/><rect x="\${bx+bw}" y="60" width="\${300-bx-bw}" height="6" fill="var(--muted)"/><rect x="\${bx}" y="\${by}" width="\${bw}" height="\${bh}" rx="4" fill="var(--glass)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.5"/>\`;
    if(lvl!=null)s+=\`<rect x="\${bx+2}" y="\${lvl}" width="\${bw-4}" height="\${by+bh-lvl-2}" fill="rgba(200,225,240,.8)"/>\`;
    s+=\`<rect x="\${bx-5}" y="\${by+bh}" width="\${bw+10}" height="7" rx="2" fill="var(--ink)"/><path d="M\${bx+bw/2-3} \${by+bh+7} L\${bx+bw/2+3} \${by+bh+7} L\${bx+bw/2+1} \${by+bh+30} L\${bx+bw/2-1} \${by+bh+30}Z" fill="var(--glass)" stroke="var(--ink)"/><text x="\${bx-6}" y="\${by+20}" font-size="11" text-anchor="end" fill="var(--muted)">\${o.acidName}</text>\`;
    s+=\`<path d="M60 290 L60 420 Q60 430 70 430 L250 430 Q260 430 260 420 L260 290" fill="var(--glass)" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/>\`;
    if(S.cup){s+=\`<path d="M100 300 L220 300 L206 410 L114 410Z" fill="#f2efe8" stroke="#9a937f" stroke-width="1.6"/>\`;if(S.base){const top=380-S.V*1.4;const w=(410-top)/110*14;s+=\`<path d="M\${100+w} \${top} L\${220-w} \${top} L206 410 L114 410Z" fill="rgba(180,215,240,.6)"/>\`;}}
    if(S.therm){s+=\`<rect x="165" y="140" width="8" height="262" rx="4" fill="#fff" stroke="var(--ink)"/><circle cx="169" cy="400" r="7" fill="#c62828"/>\`;const h=Math.max(0,Math.min(250,(S.T+10)/120*250));s+=\`<rect x="167" y="\${400-h}" width="4" height="\${h}" fill="#c62828"/>\`;}
    if(S.stir)s+=\`<path d="M140 330 q20 -12 40 0 q-20 12 -40 0" fill="none" stroke="var(--accent)" stroke-width="2"/>\`;
    $(".t-svg",R).innerHTML=s;$(".t-vol",R).textContent=S.therm?\`\${S.V.toFixed(2)} cm³\`:"—";lens();}
  const lens=()=>drawScale($(".t-lens",R),S.therm?S.T:null,{k:30,min:-10,max:110,minor:1,major:5,liquid:"#c62828",empty:"@@no thermometer|||термометр алга@@"});
  let lt=performance.now();(function loop(now){const dt=Math.min(0.2,(now-lt)/1000);lt=now;
    if(S.therm){S.H*=Math.exp(-LOSS*dt);const te=Teq();if(S.stir){S.mixed=Math.min(1,S.mixed+dt*0.9);S.stirred=true;}
      const mix=S.step>0?(0.55+0.45*S.mixed):1;const target=S.step>0?S.T0+(te-S.T0)*mix:te;S.T+=(target-S.T)*(1-Math.exp(-dt/(S.stir?0.9:3.5)));
      if(S.step>=0&&(S.peaks[S.step]==null||S.T>S.peaks[S.step]))S.peaks[S.step]=S.T;store.set(o.key+"peaks",S.peaks);
      if(!loop.l||now-loop.l>90){loop.l=now;lens();if(!loop.f||now-loop.f>400){loop.f=now;draw();}}}
    requestAnimationFrame(loop);})(lt);draw();
  return{supD,peaks:()=>store.get(o.key+"peaks",[]),noStir:()=>S.noStir};}

/* ============ TITRATION (burette into flask) + results table ============ */
function Titration(box,o){/* o:{key,titrant,analyte,aVol,E,ind:{start,end,over,flash},indName,hot,titrantColour,readTop,note} */
  const K=o.key;const truth=store.get(K+"truth",[null,null,null,null,null]);
  $(box).innerHTML=\`<div class="grid-sim"><div><svg class="app-svg ti-svg" viewBox="0 0 360 520"></svg><div class="readouts"><div class="readout"><b>@@Current titration|||Одоогийн титрлэлт@@</b><span class="ti-run">—</span></div>\${o.hot?'<div class="readout"><b>@@Flask temperature|||Колбын температур@@</b><span class="ti-temp">—</span></div>':""}</div></div>
   <div><div class="btnrow"><label class="small">@@Record in column:|||Аль баганад бүртгэх вэ:@@ <select class="ti-col" data-nopersist><option value="0">Rough</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></label></div>
    <ol class="steps ti-steps"><li data-s="fill"><button class="btn" data-ti="fill">@@Fill the burette with|||Бюретийг@@ \${o.titrant}@@|||-оор дүүргэх@@</button></li>
     <li data-s="pip"><button class="btn" data-ti="pip">\${o.aVol.toFixed(1)} cm³ \${o.analyte} @@by pipette|||пипеткээр хийх@@</button></li>
     \${o.indName?\`<li data-s="ind"><button class="btn" data-ti="ind">\${o.indName}@@: add a few drops|||-оос хэдэн дусал нэмэх@@</button></li>\`:""}
     \${o.hot?\`<li data-s="heat"><button class="btn" data-ti="heat">@@Heat (+≈6 °C)|||Халаах (+≈6 °C)@@</button></li>\`:""}
     <li data-s="add">\${o.titrant} @@to add:|||нэмэх:@@ <div class="btnrow"><button class="btn" data-add="1">+1.00</button><button class="btn" data-add="0.5">+0.50</button><button class="btn" data-add="0.1">+0.10</button><button class="btn" data-add="0.05">@@1 drop|||1 дусал@@</button><button class="btn ti-stream">@@Run (press and hold)|||Урсгах (дарж барих)@@</button></div></li>
     <li data-s="end"><button class="btn primary" data-ti="end">@@End point: finish|||Төгсгөлийн цэг — дуусгах@@</button> <button class="btn ghost" data-ti="discard">@@Empty the flask|||Колбыг асгах@@</button></li></ol>
    <div class="grid2" style="gap:10px;align-items:start"><div><svg class="lens ti-lens" viewBox="0 0 170 300"></svg><p class="small muted" style="max-width:180px">@@Close-up of the burette.|||Томруулсан бюрет.@@ \${o.readTop?"@@Dark solution, so read the meniscus at its|||Бараан уусмал тул менискийн@@ <b>@@top|||дээд@@</b> @@edge.|||ирмэгээр@@":"@@Read the meniscus at its|||Менискийн@@ <b>@@bottom|||доод@@</b> @@edge.|||ирмэгээр@@"} @@Read to 0.05 cm³.|||уншина. 0.05 cm³ нарийвчлалтай.@@</p></div>
     <div><div class="note small"><b class="t">@@Observation|||Ажиглалт@@</b><span class="ti-obs">@@Fill the burette to start.|||Эхлэхийн тулд бюретийг дүүргэнэ үү.@@</span></div><div class="note warn small ti-warn" hidden></div></div></div></div></div>\`;
  const R=$(box);const T={level:null,filled:false,pip:false,ind:!o.indName,temp:22,added:0,E:null,flash:0,col:0,start:null,ended:false,stream:false};
  const obs=t=>$(".ti-obs",R).textContent=t,warn=t=>{const w=$(".ti-warn",R);w.hidden=!t;w.textContent=t||"";};
  const st=(s,on)=>{const e=$(\`.ti-steps li[data-s="\${s}"]\`,R);if(e)e.classList.toggle("done",!!on);};
  function flask(){T.pip=false;T.ind=!o.indName;T.added=0;T.flash=0;T.ended=false;T.start=null;T.E=null;T.temp=22;["pip","ind","heat","add","end"].forEach(s=>st(s,0));}
  const can=()=>{if(!T.filled){toast("@@The burette is empty.|||Бюрет хоосон.@@");return false;}if(!T.pip){toast(\`@@In the flask:|||Колбонд@@ \${o.analyte} @@is missing.|||алга.@@\`);return false;}if(T.ended){toast("@@This titration is finished. Prepare a new flask.|||Энэ титрлэлт дууссан. Шинэ колбо бэлтгэнэ үү.@@");return false;}if(!T.ind){toast("@@No indicator added!|||Индикатор нэмээгүй байна!@@");return false;}if(o.hot&&T.temp<55){toast("@@First heat to about 70 °C.|||Эхлээд ~70 °C хүртэл халаа.@@");return false;}return true;};
  function add(v){if(!can())return;if(T.level+v>50){warn("@@The burette is empty! Refill it and start with a new flask.|||Бюрет хоосорлоо! Дахин дүүргэж, шинэ колбоор эхэл.@@");T.level=50;return draw();}
    if(T.start==null)T.start=T.level;T.level+=v;T.added+=v;st("add",1);if(T.added<T.E){T.flash=Math.min(1,T.flash+v*1.5);}draw();}
  const act={fill(){T.level=Math.random()*1.9;T.filled=true;st("fill",1);obs("@@The burette is filled. Read the starting value in the close-up and record it.|||Бюрет дүүрлээ. Томруулсан хэсгээс эхний заалтыг уншиж бич.@@");warn("");},
    pip(){flask();T.pip=true;T.col=+$(".ti-col",R).value;T.E=o.E+gauss()*0.035;st("pip",1);$(".ti-run",R).textContent=T.col===0?"Rough":"@@Accurate #|||Нарийн #@@"+T.col;obs(\`@@In the flask:|||Колбонд@@ \${o.aVol.toFixed(1)} cm³ \${o.analyte} @@.|||байна.@@\`);warn("");},
    ind(){if(!T.pip)return toast("@@The flask is empty.|||Колбо хоосон.@@");T.ind=true;st("ind",1);obs(o.indObs||"@@Indicator added.|||Индикатор нэмэгдлээ.@@");},
    heat(){if(!T.pip)return toast("@@The flask is empty.|||Колбо хоосон.@@");T.temp=Math.min(95,T.temp+5+Math.random()*2.5);st("heat",T.temp>=60);if(T.temp>85)warn("@@Too hot: keep it at about 70 °C.|||Хэт халлаа — ~70 °C орчимд барь.@@");else warn("");},
    end(){if(!T.pip||T.start==null)return toast("@@The titration has not started.|||Титрлэлт эхлээгүй байна.@@");T.ended=true;st("end",1);truth[T.col]={init:T.start,fin:T.level,E:T.E};store.set(K+"truth",truth);
      const ex=T.added-T.E;let m="@@Titration finished. Read the final value and record it in the table.|||Титрлэлт дууслаа. Эцсийн заалтыг уншиж хүснэгтэд бич.@@ ";if(T.col>0){if(ex<-0.02)m+="@@(Note: the end point may not have been reached.)|||(Анхаар: төгсгөлийн цэгт хүрээгүй байж магадгүй.)@@";else if(ex>0.25)m+="@@(The end point seems to have been passed. Add drop by drop near the end.)|||(Төгсгөлийн цэгийг давсан бололтой. Төгсгөлд дуслаар нэм.)@@";}obs(m);},
    discard(){flask();$(".ti-run",R).textContent="—";obs(\`@@Flask rinsed and emptied. Put in fresh|||Колбыг угааж асгалаа. Шинээр@@ \${o.analyte} @@.|||хийнэ үү.@@\`);warn("");}};
  $$("[data-ti]",R).forEach(b=>b.onclick=()=>{act[b.dataset.ti]();draw();});$$("[data-add]",R).forEach(b=>b.onclick=()=>add(+b.dataset.add));
  const sb=$(".ti-stream",R);sb.addEventListener("pointerdown",e=>{e.preventDefault();if(can())T.stream=true;});["pointerup","pointerleave","pointercancel"].forEach(t=>sb.addEventListener(t,()=>T.stream=false));
  function colour(){if(!T.pip)return null;if(!T.ind)return"rgba(210,230,245,.45)";const ex=T.added-(T.E??99);const c=o.ind;
    if(ex>=0.12)return c.over;if(ex>=-0.01)return c.end;return T.flash>0.15?c.flash||c.end:c.start;}
  function draw(){const L=T.level;const bx=160,by=10,bh=330,bw=22;const y=v=>by+20+(v/50)*(bh-40);let s="";
    s+=\`<rect x="40" y="500" width="160" height="10" rx="2" fill="var(--muted)"/><rect x="58" y="20" width="8" height="482" fill="var(--muted)"/><rect x="62" y="150" width="\${bx-62}" height="6" fill="var(--muted)"/><rect x="\${bx}" y="\${by}" width="\${bw}" height="\${bh}" rx="4" fill="var(--glass)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.5"/>\`;
    if(T.filled)s+=\`<rect x="\${bx+2}" y="\${y(L)}" width="\${bw-4}" height="\${by+bh-y(L)-2}" fill="\${o.titrantColour||"rgba(200,225,240,.85)"}"/>\`;
    for(let v=0;v<=50;v+=5)s+=\`<line x1="\${bx}" x2="\${bx+8}" y1="\${y(v)}" y2="\${y(v)}" stroke="var(--ink)"/><text x="\${bx-4}" y="\${y(v)+4}" font-size="9" text-anchor="end" fill="var(--muted)" font-family="monospace">\${v}</text>\`;
    s+=\`<rect x="\${bx-6}" y="\${by+bh}" width="\${bw+12}" height="8" rx="2" fill="var(--ink)"/><path d="M\${bx+bw/2-3} \${by+bh+8} L\${bx+bw/2+3} \${by+bh+8} L\${bx+bw/2+1} \${by+bh+34} L\${bx+bw/2-1} \${by+bh+34}Z" fill="var(--glass)" stroke="var(--ink)"/>\`;
    if(T.stream)s+=\`<line x1="\${bx+bw/2}" x2="\${bx+bw/2}" y1="\${by+bh+34}" y2="440" stroke="\${o.titrantColour||"#9cc"}" stroke-width="2"/>\`;
    s+=\`<rect x="105" y="488" width="140" height="10" fill="#f4f4f4" stroke="var(--line)"/>\`;const cx=bx+bw/2;
    s+=\`<path d="M\${cx-11} 400 L\${cx-11} 430 L\${cx-55} 486 L\${cx+55} 486 L\${cx+11} 430 L\${cx+11} 400" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.6"/>\`;
    const fc=colour();if(fc){const lv=452;const dx=11+44*(lv-430)/56;s+=\`<path d="M\${cx-dx} \${lv} L\${cx-55} 486 L\${cx+55} 486 L\${cx+dx} \${lv}Z" fill="\${fc}"/>\`;}
    s+=\`<text x="\${bx+bw+8}" y="\${by+16}" font-size="11" fill="var(--muted)">\${o.titrant}</text>\`;$(".ti-svg",R).innerHTML=s;if(o.hot)$(".ti-temp",R).textContent=T.pip?\`\${T.temp.toFixed(0)} °C\`:"—";
    drawScale($(".ti-lens",R),T.level,{k:110,min:0,max:50,minor:0.1,major:1,mid:0.5,down:true,liquid:o.titrantColour||"rgba(170,205,235,.85)",meniscus:o.readTop?"down":"down",empty:"@@empty|||хоосон@@",fmt:v=>v.toFixed(0)});}
  let lt=performance.now();(function loop(now){const dt=Math.min(0.1,(now-lt)/1000);lt=now;let rd=false;
    if(T.stream){if(!can())T.stream=false;else{const v=0.9*dt;if(T.level+v>50)T.stream=false;else{if(T.start==null)T.start=T.level;T.level+=v;T.added+=v;st("add",1);if(T.added<T.E)T.flash=Math.min(1,T.flash+dt*1.5);}}rd=true;}
    if(T.flash>0&&!T.stream){const near=T.E-T.added<0.4;T.flash=Math.max(0,T.flash-dt/(near?2:0.6));rd=true;}
    if(o.hot&&T.pip&&T.temp>22.05){T.temp-=0.0025*dt*(T.temp-22);}
    if(rd&&(!loop.l||now-loop.l>70)){loop.l=now;draw();}requestAnimationFrame(loop);})(lt);draw();
  return{truth:()=>store.get(K+"truth",[])};}

function TitrTable(box,o){/* o:{key,titrant,E,partA,partB,analyteVol} */
  const K=o.key;$(box).innerHTML=\`<p class="small">@@Write the row|||Мөрийн@@ <b>@@headings, with units,|||гарчгийг нэгжтэй нь@@</b> @@in English (for example:|||англиар бичнэ (жишээ:@@ <span class="mono">initial burette reading / cm3</span>@@). Record readings to 0.05 cm³, to 2 decimal places.|||). Заалтуудыг 0.05 cm³-ийн нарийвчлалтай, 2 аравтын оронтой бичнэ.@@</p>
   <div class="tablewrap"><table class="rt tt"><thead><tr><th>@@Heading (with unit)|||Гарчиг (нэгжтэй)@@</th><th>Rough</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead><tbody>
   \${[0,1,2].map(r=>\`<tr><td><input class="head" id="\${K}h\${r}" placeholder="..."></td>\${[0,1,2,3,4].map(c=>\`<td><input id="\${K}r\${r}c\${c}"></td>\`).join("")}</tr>\`).join("")}</tbody></table></div>
   <div class="btnrow"><button class="btn primary tt-a">@@Check the results table|||Үр дүнгийн хүснэгтийг шалгах@@</button></div><div class="fb tt-fa"></div>
   <h3>@@Mean titre|||Дундаж титр@@</h3><p class="small">@@Tick (✓) the accurate titres to use in the calculation and write their mean to 2 decimal places.|||Тооцоонд ашиглах нарийн титрүүдээ сонгож (✓), дунджийг 2 аравтын оронтой бичнэ.@@</p><div class="btnrow tt-pick"></div>
   <div class="calc"><div class="row">\${o.analyteVol||"25.0 cm³"}@@:|||-т@@ <input id="\${K}mean" placeholder="@@e.g. 24.60|||жишээ 24.60@@"> cm³ \${o.titrant} @@used.|||зарцуулагдсан.@@</div><div class="fb tt-fb"></div></div>
   <button class="btn primary tt-b">@@Check the mean|||Дундажийг шалгах@@</button>\`;
  const R=$(box);const g=(r,c)=>$(\`#\${K}r\${r}c\${c}\`).value;
  const read=()=>[0,1,2,3,4].map(c=>{const a=g(0,c),b=g(1,c),t=g(2,c);return{c,a,b,t,an:num(a),bn:num(b),tn:num(t),filled:a!==""||b!==""||t!==""};});
  function picks(){const cols=read();const pk=store.get(K+"picks",[]);const bx=$(".tt-pick",R);bx.innerHTML="";
    cols.slice(1).forEach(x=>{if(!x.filled)return;const ti=isFinite(x.bn)&&isFinite(x.an)?r2(x.bn-x.an):x.tn;bx.insertAdjacentHTML("beforeend",\`<label class="btn"><input type="checkbox" data-c="\${x.c}" \${pk.includes(x.c)?"checked":""}> #\${x.c}: \${isFinite(ti)?ti.toFixed(2):"?"}</label>\`);});
    if(!bx.children.length)bx.innerHTML='<span class="small muted">@@This appears once accurate titration data are in the table.|||Хүснэгтэд нарийн титрлэлтийн өгөгдөл оруулсны дараа энд гарна.@@</span>';
    $$("input",bx).forEach(i=>i.addEventListener("change",()=>store.set(K+"picks",$$("input:checked",bx).map(x=>+x.dataset.c))));}
  $("table",R).addEventListener("input",picks);
  function best(ts){const t=ts.slice().sort((a,b)=>a-b);if(t.length<2)return NaN;for(let tol=0;tol<=5;tol+=0.05){let bb=null;for(let i=0;i<t.length;i++){let j=i;while(j+1<t.length&&t[j+1]-t[i]<=tol+1e-9)j++;if(j>i&&(!bb||j-i>bb[1]-bb[0]))bb=[i,j];}
    if(bb){const s=t.slice(bb[0],bb[1]+1);return s.reduce((a,b)=>a+b,0)/s.length;}}return NaN;}
  const ok05=s=>dp(s)===2&&Math.round(num(s)*100)%5===0;
  $(".tt-a",R).onclick=()=>{const cols=read();const H=[0,1,2].map(i=>$(\`#\${K}h\${i}\`).value.toLowerCase());const L=[];let m=0;const rough=cols[0];const acc=cols.slice(1).filter(x=>isFinite(x.an)&&isFinite(x.bn));
    const I=isFinite(rough.an)&&isFinite(rough.bn)&&isFinite(rough.tn)&&acc.length>=2;L.push(li(I,"<b>I</b> @@Rough: 2 readings + titre, and initial/final readings of at least 2 accurate titrations.|||Rough: 2 заалт + титр, ба ≥2 нарийн титрлэлтийн эхний/эцсийн заалт.@@"));m+=I;
    const unit=h=>/(\\/\\s*cm\\s*(3|³)|\\(\\s*cm\\s*(3|³)\\s*\\)|in\\s*cm\\s*(3|³))/.test(h);const h0=/(initial|start)/.test(H[0])&&/(reading|volume)/.test(H[0]),h1=/(final|end)/.test(H[1])&&/(reading|volume)/.test(H[1]);
    const tre=new RegExp("titre|volume.*(used|added)|"+o.titrant.toLowerCase().replace(/\\s+/,"\\\\s*")+".*(used|added)");const h2=tre.test(H[2]);const tr=acc.every(x=>isFinite(x.tn));
    const II=tr&&h0&&h1&&h2&&H.every(unit);L.push(li(II,"<b>II</b> @@Accurate titres recorded, with correct headings and units.|||Нарийн титрүүд бичигдсэн ба гарчиг + нэгж зөв.@@"+(II?"":\` <span class="small muted">(\${[!h0&&"@@row 1 «initial burette reading»|||1-р мөр «initial burette reading»@@",!h1&&"@@row 2 «final burette reading»|||2-р мөр «final burette reading»@@",!h2&&\`@@row 3 «titre» or «volume of|||3-р мөр «titre» эсвэл «volume of@@ \${o.titrant} added»\`,!H.every(unit)&&"@@unit «/ cm3» in every heading|||нэгж «/ cm3» гарчиг бүрт@@",!tr&&"@@titre missing|||титр дутуу@@"].filter(Boolean).join("; ")})</span>\`)));m+=II;
    const III=acc.length>=1&&acc.flatMap(x=>[x.a,x.b]).every(ok05);L.push(li(III,"<b>III</b> @@Every accurate reading to 0.05 cm³.|||Нарийн титрлэлтийн бүх заалт 0.05 cm³-ийн нарийвчлалтай.@@"));m+=III;
    const ts=acc.map(x=>r2(x.bn-x.an));let IV=false;if(ts.length>=2){const last=ts[ts.length-1];IV=ts.slice(0,-1).some(t=>Math.abs(t-last)<=0.10+1e-9);}
    L.push(li(IV,"<b>IV</b> @@The last accurate titre is within 0.10 cm³ of another.|||Хамгийн сүүлийн нарийн титр өөр нэгээс ≤0.10 cm³ зөрүүтэй.@@"));m+=IV;
    const tru=store.get(K+"truth",[]);const wrong=[];cols.forEach(x=>{const t=tru[x.c];if(!t)return;const nm=x.c?"#"+x.c:"Rough";if(isFinite(x.an)&&Math.abs(x.an-t.init)>0.051)wrong.push(nm+" @@initial|||эхний@@");if(isFinite(x.bn)&&Math.abs(x.bn-t.fin)>0.051)wrong.push(nm+" @@final|||эцсийн@@");if(isFinite(x.an)&&isFinite(x.bn)&&isFinite(x.tn)&&Math.abs(x.bn-x.an-x.tn)>0.005)wrong.push(nm+" @@subtraction|||хасах үйлдэл@@");});
    const mean=best(ts);let q=0,dt="@@At least 2 accurate titres are needed.|||Дор хаяж 2 нарийн титр хэрэгтэй.@@";if(isFinite(mean)){const d=Math.abs(mean-o.E);q=d<=0.20?3:d<=0.30?2:d<=0.50?1:0;dt=\`@@Your best mean|||Таны хамгийн сайн дундаж@@ \${mean.toFixed(2)} @@cm³, supervisor’s|||cm³, хянагчийнх@@ \${o.E.toFixed(2)} @@cm³, difference δ =|||cm³, зөрүү δ =@@ \${d.toFixed(2)} cm³.\`;}
    L.push(li(q>=1,"<b>V</b> δ ≤ 0.50 cm³"),li(q>=2,"<b>VI</b> δ ≤ 0.30 cm³"),li(q>=3,"<b>VII</b> δ ≤ 0.20 cm³"),\`<div class="small muted">\${dt}</div>\`);m+=q;
    $(".tt-fa",R).innerHTML=fbBlock(L,m,7)+(wrong.length?\`<div class="note warn small">@@Mismatch in the burette readings or calculation:|||Бюретийн уншилт/тооцоонд зөрүү:@@ \${wrong.join(", ")}.</div>\`:"");setScore(o.partA,m);picks();};
  $(".tt-b",R).onclick=()=>{const cols=read();const pk=$$(".tt-pick input:checked",R).map(x=>+x.dataset.c);const ts=pk.map(c=>{const x=cols[c];return isFinite(x.bn)&&isFinite(x.an)?r2(x.bn-x.an):x.tn;}).filter(isFinite);
    const s=$(\`#\${K}mean\`).value;let ok=false,why="";if(ts.length<2)why="@@Tick (✓) at least 2 titres.|||Дор хаяж 2 титр сонгоно уу (✓).@@";else{const sp=Math.max(...ts)-Math.min(...ts);const mean=r2(ts.reduce((a,b)=>a+b,0)/ts.length);
      if(sp>0.20+1e-9)why=\`@@Spread of the chosen titres|||Сонгосон титрүүдийн тархалт@@ \${sp.toFixed(2)} cm³ > 0.20 cm³.\`;else if(dp(s)!==2)why="@@Write the mean to exactly 2 decimal places.|||Дундажийг яг 2 аравтын оронтой бич.@@";else if(Math.abs(num(s)-mean)>1e-4)why=\`@@The mean of the chosen titres should be|||Сонгосон титрүүдийн дундаж@@ \${mean.toFixed(2)} @@cm³.|||cm³ байх ёстой.@@\`;else ok=true;}
    $(".tt-fb",R).innerHTML=fbBlock([li(ok,ok?"@@Correct: titres within 0.20 cm³, mean to 2 decimal places.|||Зөв: титрүүд ≤0.20 cm³ тархалттай, дундаж 2 аравтын оронтой.@@":why)],ok?1:0,1);setScore(o.partB,ok?1:0);};
  setTimeout(picks,0);return{mean:()=>num($(\`#\${K}mean\`).value)};}

/* ============ GAS COLLECTION over water (inverted 250 cm3 cylinder) ============ */
function GasCollect(box,o){/* o:{key,acid,acidVol,solid,mass:[lo,hi],molGas(m,acidVol),Mr,retain:[lo,hi],solidColour,leftover:true/false,first:"weigh"|"set"} */
  const K=o.key;$(box).innerHTML=\`<div class="grid-sim"><div><svg class="app-svg gc-svg" viewBox="0 0 360 380"></svg><div class="readouts"><div class="readout"><b>@@Fizzing|||Хийн бөмбөлөг@@</b><span class="gc-fizz">—</span></div></div></div>
   <div><p><span class="balance gc-bal">--.--</span> <span class="small muted">@@g · balance|||g · жинлүүр@@</span></p><ol class="steps gc-steps">
    <li data-s="set"><button class="btn" data-gc="set">@@Set up the trough, the upturned 250 cm³ cylinder and the flask|||Тэвш, хөмөрсөн 250 cm³ цилиндр, колбыг угсрах@@</button></li>
    <li data-s="acid">@@Into the 50 cm³ cylinder|||50 cm³ цилиндрт@@ \${o.acid}: <button class="btn" data-pour="5">+5</button> <button class="btn" data-pour="1">+1</button> <button class="btn" data-pour="0.2">+0.2</button> <button class="btn" data-pour="-0.2">−0.2</button> <button class="btn" data-gc="xfer">@@Pour into the flask|||Колбонд хийх@@</button></li>
    <li data-s="w"><button class="btn primary" data-gc="weigh">@@Weigh the container (with contents)|||Савыг (агуулгатай нь) жинлэх@@</button></li>
    <li data-s="add"><button class="btn" data-gc="add">\${o.solid}@@: add it and stopper at once|||-ийг хийгээд тэр даруй бөглөх@@</button> <button class="btn ghost" data-gc="addslow">@@Add it, stopper slowly|||Хийж, удаан бөглөх@@</button></li>
    <li data-s="wait"><button class="btn" data-gc="wait">@@Swirl and wait 1 min|||Эргүүлээд 1 мин хүлээх@@</button></li></ol>
    <div class="grid2" style="gap:10px;align-items:start"><div><svg class="lens gc-lens" viewBox="0 0 170 300"></svg><p class="small muted" style="max-width:180px">@@A 50 cm³ cylinder for measuring the acid; an upside-down 250 cm³ cylinder for collecting the gas (scale|||Хүчил хэмжих үед 50 cm³ цилиндр; хий цуглуулах үед хөмөрсөн 250 cm³ цилиндр (хуваарь@@ <b>@@increasing downwards|||доош өснө@@</b>@@, every 2 cm³). Read to 1 cm³ at the water level.|||, 2 cm³ тутамд). Усны түвшнээр 1 cm³ хүртэл уншина.@@</p></div>
     <div><div class="note small"><b class="t">@@Observation|||Ажиглалт@@</b><span class="gc-obs">@@Start by setting up the apparatus.|||Төхөөрөмжөө угсарч эхэлнэ үү.@@</span></div><div class="note warn small gc-warn" hidden></div><p class="small muted">@@Action log:|||Үйлдлийн бүртгэл:@@</p><div class="log gc-log"></div>
      <div class="btnrow"><button class="btn ghost" data-gc="reset">@@Start again|||Шинээр эхлэх@@</button></div></div></div></div></div>\`;
  const R=$(box);let Q;const Lg={arr:[],add(t){this.arr.push(t);$(".gc-log",R).innerHTML=this.arr.map(esc).join("<br>");$(".gc-log",R).scrollTop=1e6;}};
  function nw(){Q={set:false,cyl:0,acid:0,cont:+(9+Math.random()*6).toFixed(2),m:+(o.mass[0]+Math.random()*(o.mass[1]-o.mass[0])).toFixed(3),resid:o.residual?+(o.residual*Math.random()).toFixed(3):0.002,added:false,ext:0,lost:0,ret:o.retain[0]+Math.random()*(o.retain[1]-o.retain[0]),reads:[],log:[]};}
  nw();{const sv=store.get(K,null);if(sv&&sv.cont){Q=sv;Q.log.forEach(t=>Lg.add(t));if(Q.reads.length)$(".gc-bal",R).textContent=Q.reads[Q.reads.length-1];}}
  const obs=t=>$(".gc-obs",R).textContent=t,warn=t=>{const w=$(".gc-warn",R);w.hidden=!t;w.textContent=t||"";};const st=(s,on)=>{const e=$(\`.gc-steps li[data-s="\${s}"]\`,R);if(e)e.classList.toggle("done",!!on);};
  const log=t=>{Q.log.push(t);Lg.add(t);};const total=()=>Math.max(0,o.molGas(Q.m-Q.resid,Q.acid)*24000*Q.ret-Q.lost);const now=()=>Q.added?total()*Q.ext:0;
  function draw(){let g=\`<path d="M170 250 L170 350 L350 350 L350 250" fill="rgba(170,205,235,.35)" stroke="var(--ink)" stroke-width="1.6"/><rect x="171" y="262" width="178" height="87" fill="rgba(150,195,235,.45)"/>\`;
    if(Q.set){const V=now(),top=40,bot=330,lv=top+Math.min(250,V)/250*(bot-top);g+=\`<rect x="240" y="\${top}" width="40" height="\${bot-top}" fill="var(--glass)" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.5"/><rect x="241" y="\${lv}" width="38" height="\${bot-lv}" fill="rgba(150,195,235,.75)"/>\`;
      for(let v=0;v<=250;v+=50)g+=\`<line x1="280" x2="290" y1="\${top+v/250*(bot-top)}" y2="\${top+v/250*(bot-top)}" stroke="var(--ink)"/><text x="294" y="\${top+v/250*(bot-top)+4}" font-size="9" fill="var(--muted)">\${v}</text>\`;
      g+=\`<path d="M110 120 Q150 120 160 330 L250 330" fill="none" stroke="var(--ink)" stroke-width="2.5"/>\`;if(Q.added&&Q.ext<0.995)for(let i=0;i<5;i++)g+=\`<circle cx="\${256+Math.random()*10}" cy="\${300-Math.random()*30}" r="2.5" fill="#fff" stroke="var(--ink)" stroke-width=".6"/>\`;}
    g+=\`<path d="M60 110 L60 150 L20 230 L130 230 L90 150 L90 110" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.6"/>\`;if(Q.acid>0)g+=\`<path d="M33 205 L117 205 L130 230 L20 230Z" fill="rgba(200,225,240,.75)"/>\`;
    if(Q.set)g+=\`<rect x="56" y="98" width="38" height="16" rx="3" fill="#666"/>\`;
    if(Q.added){if(o.leftover||Q.ext<0.995)for(let i=0;i<6;i++)g+=\`<rect x="\${40+i*12}" y="222" width="7" height="5" fill="\${o.solidColour}" opacity="\${Q.ext<0.995?1:0.6}"/>\`;if(Q.ext<0.995)for(let i=0;i<12;i++)g+=\`<circle cx="\${30+Math.random()*90}" cy="\${208+Math.random()*20}" r="1.6" fill="none" stroke="var(--ink)" stroke-width=".7"/>\`;}
    g+=\`<rect x="20" y="300" width="40" height="40" rx="4" fill="#eee" stroke="var(--ink)"/><text x="40" y="295" font-size="10" text-anchor="middle" fill="var(--muted)">\${o.solid}</text>\`;if(!Q.added)for(let i=0;i<4;i++)g+=\`<rect x="\${26+i*7}" y="330" width="6" height="5" fill="\${o.solidColour}"/>\`;
    g+=\`<rect x="110" y="270" width="40" height="80" rx="3" fill="var(--glass)" fill-opacity=".2" stroke="var(--ink)"/><text x="130" y="362" font-size="9" text-anchor="middle" fill="var(--muted)">50 cm³</text>\`;if(Q.cyl>0)g+=\`<rect x="112" y="\${348-Q.cyl/50*76}" width="36" height="\${Q.cyl/50*76}" fill="rgba(200,225,240,.85)"/>\`;
    $(".gc-svg",R).innerHTML=g;$(".gc-fizz",R).textContent=!Q.added?"—":Q.ext<0.98?"@@fizzing|||ялгарч байна@@":Q.ext<0.999?"@@slight|||бага зэрэг@@":"@@stopped|||зогссон@@";
    if(Q.cyl>0&&!Q.acid)drawScale($(".gc-lens",R),Q.cyl,{k:40,min:0,max:50,minor:1,major:5,liquid:"rgba(150,190,220,.8)"});
    else if(Q.set&&Q.acid>0)drawScale($(".gc-lens",R),now(),{k:12,min:0,max:250,minor:2,major:10,down:true,liquid:"rgba(150,195,235,.75)",meniscus:"up"});else drawScale($(".gc-lens",R),null,{empty:"—"});}
  $$("[data-pour]",R).forEach(b=>b.onclick=()=>{if(Q.acid>0)return toast("@@The acid is already in the flask.|||Хүчил аль хэдийн колбонд байна.@@");Q.cyl=Math.max(0,Math.min(50,Q.cyl+(+b.dataset.pour)*(0.9+Math.random()*0.2)));obs(\`@@Read the 50 cm³ cylinder in the close-up and adjust it to|||50 cm³ цилиндрийг томруулсан хэсгээс уншиж@@ \${o.acidVol.toFixed(1)} @@cm³.|||cm³ хүртэл тааруул.@@\`);draw();store.set(K,Q);});
  const a={set(){Q.set=true;st("set",1);obs("@@The cylinder is full of water and upturned, with the delivery tube inside it.|||Цилиндр усаар дүүрэн, хөмөрсөн, хоолой нь цилиндр дотор байна.@@");log("@@apparatus set up|||төхөөрөмж угсарсан@@");},
    xfer(){if(Q.cyl<=0)return toast("@@The cylinder is empty.|||Цилиндр хоосон.@@");if(Q.acid>0)return toast("@@Already added.|||Аль хэдийн хийсэн.@@");if(!Q.set)return toast("@@First set up the apparatus.|||Эхлээд төхөөрөмжөө угсар.@@");Q.acid=Q.cyl;Q.cyl=0;st("acid",1);log(\`\${o.acid} @@poured into the flask (~|||колбонд хийв (~@@\${Q.acid.toFixed(1)} cm³)\`);warn(Math.abs(Q.acid-o.acidVol)>0.6?\`@@In the cylinder:|||Цилиндрт@@ \${Q.acid.toFixed(1)} @@cm³, which differs from|||cm³ орчим байсан —@@ \${o.acidVol.toFixed(1)} @@cm³.|||cm³-ээс зөрүүтэй.@@\`:"");obs(\`@@In the flask:|||Колбонд@@ \${o.acid} @@.|||байна.@@\`);},
    weigh(){const r=(Q.cont+(Q.added?Q.resid:Q.m)).toFixed(2);$(".gc-bal",R).textContent=r;Q.reads.push(r);st("w",1);const l=Q.added?"@@container (with residue)|||сав (үлдэгдэлтэй)@@":\`@@container +|||сав +@@ \${o.solid}\`;log(\`@@weighed (|||жинлэв (@@\${l}): \${r} g\`);obs(\`\${l}: \${r} @@g. Record it in the table.|||g. Хүснэгтэд бүртгэ.@@\`);},
    add(slow){if(!Q.acid)return toast("@@There is no acid in the flask.|||Колбонд хүчил алга.@@");if(Q.added)return toast("@@Already added.|||Аль хэдийн хийсэн.@@");if(!Q.reads.length)return toast(\`@@First weigh the container with|||Эхлээд@@ \${o.solid}@@.|||-тэй савыг жинлэнэ үү.@@\`);Q.added=true;Q.ext=0.45;
      if(slow){Q.lost=12+Math.random()*12;warn("@@The stopper went on slowly, so the first gas escaped: the volume will come out too low.|||Бөглөөг удаан тавьсан тул эхний хий гадагшиллаа — эзлэхүүн бага гарна.@@");}else warn("");st("add",1);log(slow?"@@added, stoppered slowly|||хийж, удаан бөглөв@@":"@@added, stoppered at once|||хийж, тэр даруй бөглөв@@");obs(o.addObs||"@@Vigorous fizzing; the solid is reacting.|||Хүчтэй хийн бөмбөлөг ялгарч, хатуу бодис урвалд орж байна.@@");},
    addslow(){a.add(true);},wait(){if(!Q.added)return toast("@@The reaction has not started.|||Урвал эхлээгүй.@@");Q.ext=1-(1-Q.ext)*0.2;if(Q.ext>0.9995)Q.ext=1;st("wait",Q.ext>=1);log("@@swirled and waited 1 min|||эргүүлж 1 мин хүлээв@@");obs(Q.ext<0.98?"@@Gas is still being given off.|||Хий ялгарсаар байна.@@":Q.ext<1?"@@The fizzing has almost stopped.|||Хийн бөмбөлөг бараг зогсож байна.@@":(o.endObs||"@@The fizzing has stopped. Read the volume to 1 cm³.|||Хийн бөмбөлөг зогслоо. Эзлэхүүнийг 1 cm³ хүртэл уншина уу.@@"));},
    reset(){if(!confirm("@@Start the simulation again?|||Симуляцийг шинээр эхлүүлэх үү?@@"))return;nw();Lg.arr=[];$(".gc-log",R).innerHTML="";$(".gc-bal",R).textContent="--.--";["set","acid","w","add","wait"].forEach(s=>st(s,0));warn("");obs("@@Start by setting up the apparatus.|||Төхөөрөмжөө угсарч эхэлнэ үү.@@");}};
  $$("[data-gc]",R).forEach(b=>b.onclick=()=>{a[b.dataset.gc]();draw();store.set(K,Q);});draw();
  return{reads:()=>Q.reads,V:()=>now(),done:()=>Q.added&&Q.ext>=1};}

/* simple heading/value results list */
function ResultsList(box,o){const K=o.key;const sv=store.get(K,[]);$(box).innerHTML=\`<div class="tablewrap" data-nopersist><table class="rt"><thead><tr><th>@@Heading (with unit)|||Гарчиг (нэгжтэй)@@</th><th>@@Value|||Утга@@</th></tr></thead><tbody>\${[...Array(o.n).keys()].map(i=>\`<tr><td><input class="head" data-h="\${i}" placeholder="..." value="\${esc(sv[i]?.h||"")}"></td><td><input data-v="\${i}" value="\${esc(sv[i]?.v||"")}"></td></tr>\`).join("")}</tbody></table></div>\`;
  const R=$(box);R.addEventListener("input",()=>store.set(K,[...Array(o.n).keys()].map(i=>({h:$(\`[data-h="\${i}"]\`,R).value,v:$(\`[data-v="\${i}"]\`,R).value}))));
  return{rows(){return[...Array(o.n).keys()].map(i=>({h:$(\`[data-h="\${i}"]\`,R).value.toLowerCase(),v:$(\`[data-v="\${i}"]\`,R).value})).filter(r=>r.h||r.v);},
    pick(rows,tests){const used=new Set();return tests.map(f=>{const i=rows.findIndex((r,j)=>!used.has(j)&&f(r.h));if(i>=0)used.add(i);return i;});}};}
const UNIT={g:h=>/(\\/\\s*g\\b|\\(\\s*g\\s*\\)|\\bin\\s*g(ram)?s?\\b)/.test(h),cm3:h=>/(\\/\\s*cm\\s*(3|³)|\\(\\s*cm\\s*(3|³)\\s*\\)|in\\s*cm\\s*(3|³))/.test(h),s:h=>/(\\/\\s*s\\b|\\(\\s*s\\s*\\)|in\\s*s(ec(ond)?s?)?\\b)/.test(h),C:h=>/(\\/\\s*°?\\s*c\\b|\\(\\s*°?\\s*c\\s*\\)|in\\s*°\\s*c)/.test(h),bad:h=>/\\b(ml|cc|weight|gm)\\b/.test(h)};

/* ================= 9701/35 O/N 2023 ================= */
const XT=7.6,MRT=106+18*XT,ET=+(25*14.30/MRT*2/0.100).toFixed(2);
/* ---------- Q1(a) gas ---------- */
const GC=GasCollect("#gasBox",{key:"gc1",acid:"FA 1",acidVol:50.0,solid:"FA 2",mass:[1.82,1.98],molGas:(m,v)=>Math.min(m/MRT,0.5*v/1000/2),retain:[0.80,0.88],solidColour:"#f6f6f2",residual:0.03,
  addObs:"@@Gas bubbles are given off and the white crystals are dissolving. Shake the flask well.|||Хийн бөмбөлөг ялгарч, цагаан талстууд уусаж байна. Колбыг сайн сэгсэр.@@",endObs:"@@The fizzing has stopped. Read the volume to 1 cm³.|||Хийн бөмбөлөг зогслоо. Эзлэхүүнийг 1 cm³ хүртэл уншина уу.@@"});
const RL1=ResultsList("#res1",{key:"r1",n:5});
const C1=/(container|bottle|tube|vessel|weighing|boat)/,F2=/(fa\\s*2|carbonate|na2co3)/;
function r1(){const rows=RL1.rows();const[iF,iE,iM,iV]=RL1.pick(rows,[h=>C1.test(h)&&F2.test(h)&&!/(residu|empty|after|remain)/.test(h),h=>C1.test(h)&&/(residu|empty|after|remain)/.test(h),h=>F2.test(h)&&!C1.test(h),h=>/(vol|gas|co2|carbon dioxide)/.test(h)]);return{rows,iF,iE,iM,iV};}
$("#q1checkA").onclick=()=>{const{rows,iF,iE,iM,iV}=r1();const L=[];const all=[iF,iE,iM,iV].every(i=>i>=0);
  const I=all&&[iF,iE,iM].every(i=>UNIT.g(rows[i].h))&&UNIT.cm3(rows[iV].h)&&!rows.some(r=>UNIT.bad(r.h));
  L.push(li(I,"<b>I</b> @@Headings and units: container + FA 2 / g; container (+ residue) / g; FA 2 used / g; volume of CO₂ / cm3.|||Гарчиг ба нэгж: container + FA 2 / g; container (+ residue) / g; FA 2 used / g; volume of CO₂ / cm3.@@"+(all?"":" <span class='small muted'>@@(rows not recognised)|||(мөр танигдсангүй)@@</span>")));
  let II=false,III=false;if(all){const a=rows[iF].v,b=rows[iE].v;II=dp(a)===dp(b)&&(dp(a)===2||dp(a)===3)&&Math.abs(num(rows[iM].v)-(num(a)-num(b)))<0.0006&&/^\\d+$/.test(clean(rows[iV].v));const v=num(rows[iV].v);III=v>=100&&v<=200;
    if(GC.done()&&Math.abs(v-GC.V())>1.6)L.push(\`<div class="note warn small">@@Volume collected in the simulation ≈|||Симуляцид цуглуулсан эзлэхүүн ≈@@ \${Math.round(GC.V())} @@cm³: read the cylinder again.|||cm³ — цилиндрийг дахин уншаарай.@@</div>\`);
    const ns=[a,b].filter(x=>x!==""&&!GC.reads().includes(Number(x).toFixed(2)));if(ns.length)L.push(\`<div class="note warn small">@@Not in the balance record:|||Жинлүүрийн бүртгэлд алга:@@ \${ns.map(esc).join(", ")}</div>\`);}
  L.push(li(II,"<b>II</b> @@Weighings to the same number of decimal places (2/3), volume a whole number, mass of FA 2 correct.|||Жинлэлтүүд ижил аравтын оронтой (2/3), эзлэхүүн бүхэл тоо, FA 2-ын масс зөв.@@"),li(III,"<b>III</b> @@Volume of gas 100–200 cm³.|||Хийн эзлэхүүн 100–200 cm³.@@"));
  const m=I+II+III;$("#q1fbA").innerHTML=fbBlock(L,m,3);setScore("q1a",m);};
$("#q1checkB").onclick=()=>{const{rows,iM,iV}=r1();let mF=iM>=0?num(rows[iM].v):NaN,V=iV>=0?num(rows[iV].v):NaN,note="";if(!isFinite(mF)||!isFinite(V)){mF=1.90;V=160;note="<div class='small muted'>@@1(a) incomplete, so checked with example values (1.90 g, 160 cm³).|||1(a) бүрэн биш тул жишээ утга (1.90 g, 160 cm³)-аар шалгав.@@</div>";}
  const L=[];const a=$("#c1ia").value,b=$("#c1ib").value,c=$("#c1ii").value,d=$("#c1iiia").value,e=$("#c1iiib").value;
  const n=V/24000;const i=close(num(a),n,0.012)&&close(num(b),num(a),0.001)&&sfIn(a,2,4)&&sfIn(b,2,4);L.push(li(i,\`<b>(i)</b> n(CO₂) = \${V} / 24 000 = \${n.toPrecision(3)} mol = n(Na₂CO₃)\`));
  const A=isFinite(num(b))?num(b):n;const Mr=mF/A;const ii=close(num(c),Mr,0.012)&&sfIn(c,2,4);L.push(li(ii,\`<b>(ii)</b> M<sub>r</sub> = \${mF.toFixed(2)} / \${A.toPrecision(3)} = \${Mr.toPrecision(3)}\`));
  const M=isFinite(num(c))?num(c):Mr;const M1=close(num(d),M-106,0.012);const X=(isFinite(num(d))?num(d):M-106)/18;const M2=close(num(e),X,0.012)&&sfIn(e,2,4);
  L.push(li(M1,\`<b>(iii) M1</b> M<sub>r</sub>(xH₂O) = \${M.toPrecision(3)} − 106 = \${(M-106).toPrecision(3)}\`),li(M2,\`<b>(iii) M2</b> x = \${(isFinite(num(d))?num(d):M-106).toPrecision(3)} / 18 = \${X.toPrecision(3)} (2–4 s.f.)\`+(/^\\d+$/.test(clean(e))&&!close(num(e),X,0.012)?" <span class='small'>@@(x is not a whole number, so do not round it!)|||— x бүхэл биш тул бүү тоймло!@@</span>":"")));
  const m=i+ii+M1+M2;$("#q1fbB").innerHTML=fbBlock(L,m,4)+note;setScore("q1b",m);};
$("#q1checkC").onclick=()=>{const t=$("#q1ci").value.toLowerCase();const a=/(yes|improve|better)/.test(t)&&!/not (an )?improve/.test(t)&&/(less|lower|not as|decrease).{0,25}(soluble|solubility|dissolve)|(soluble|solubility).{0,25}(less|lower|decrease)/.test(t)&&/(co2|carbon dioxide|gas)/.test(t);
  const b=$("#q1cii").value==="s";const L=[li(a,"<b>(i)</b> @@An improvement: CO₂ is less soluble in hot water.|||Сайжруулалт — CO₂ халуун усанд бага уусна.@@"),li(b,"<b>(ii)</b> @@More CO₂ → M|||Илүү их CO₂ → M@@<sub>r</sub> @@smaller → x decreases.|||бага → x багасна.@@")];
  $("#q1fbC").innerHTML=fbBlock(L,a+b,2);setScore("q1c",a+b);};
/* ---------- Q1(d) titration ---------- */
Titration("#titBox",{key:"ti1",titrant:"FA 3",analyte:"FA 4",aVol:25.0,E:ET,indName:"FA 5",indObs:"@@The solution has turned blue.|||Уусмал хөх өнгөтэй боллоо.@@",ind:{start:"#3f6fd6",flash:"#5f9a6a",end:"#6f9f55",over:"#e3c84a"}});
const TT=TitrTable("#ttBox",{key:"tt1",titrant:"FA 3",E:ET,partA:"q1d",partB:"q1e",analyteVol:"25.0 cm³ FA 4"});
$("#q1checkF").onclick=()=>{const L=[];let V=num($("#tt1mean").value),note="";if(!isFinite(V)){V=ET;note=\`<div class='small muted'>@@No mean in 1(e), so|||1(e)-ийн дундаж алга тул@@ \${ET.toFixed(2)} @@cm³.|||cm³-ээр шалгав.@@</div>\`;}
  const a=$("#c1fii").value,b=$("#c1fiiia").value,c=$("#c1fiiib").value,d=$("#c1fiva").value,e=$("#c1fivb").value;
  const sf=[a,b].every(s=>s!==""&&sfIn(s,3,4));L.push(li(sf,"<b>(i)</b> @@Answers to (ii) and (iii) to 3–4 s.f.|||(ii), (iii)-ийн хариултууд 3–4 s.f.@@"));
  const n=0.1*V/1000;const ii=close(num(a),n,0.006);L.push(li(ii,\`<b>(ii)</b> n(HCl) = 0.100 × \${V.toFixed(2)} / 1000 = \${n.toPrecision(4)} mol\`));
  const A=isFinite(num(a))?num(a):n;const iii=close(num(b),A/2,0.006)&&close(num(c),(isFinite(num(b))?num(b):A/2)*40,0.006);
  L.push(li(iii,\`<b>(iii)</b> ÷ 2 = \${(A/2).toPrecision(4)} mol; × 40 = \${(A/2*40).toPrecision(4)} mol dm⁻³\`+(close(num(b),A*2,0.006)?" <span class='small'>@@(you should divide by 2: Na₂CO₃ : HCl = 1 : 2)|||— 2-т хуваах ёстой (Na₂CO₃ : HCl = 1 : 2)@@</span>":"")));
  const C=isFinite(num(c))?num(c):A/2*40;const Mr=14.30/C;const X=(Mr-106)/18;const iv=close(num(d),Mr,0.006)&&close(num(e),((isFinite(num(d))?num(d):Mr)-106)/18,0.012);
  L.push(li(iv,\`<b>(iv)</b> M<sub>r</sub> = 14.30 / \${C.toPrecision(4)} = \${Mr.toPrecision(4)}; x = (M<sub>r</sub> − 106) / 18 = \${X.toPrecision(3)}\`));
  const m=sf+ii+iii+iv;$("#q1fbF").innerHTML=fbBlock(L,m,4)+note;setScore("q1f",m);};
$("#q1checkG").onclick=()=>{const u=num($("#c1gu").value),p=num($("#c1gp").value),q=num($("#c1gii").value);const L=[];
  const uok=[0.001,0.0005].some(x=>Math.abs(u-x)<1e-9);const e=2*u/14.3*100;const i=uok&&close(p,e,0.03);
  L.push(li(i,\`<b>(i)</b> @@U = 0.0005 (or 0.001) g; % = 2U / 14.3 × 100|||U = 0.0005 (эсвэл 0.001) g; % = 2U / 14.3 × 100@@\${uok?\` = \${e.toPrecision(2)} %\`:""}\`+(uok&&close(p,u/14.3*100,0.03)?" <span class='small'>@@(two readings, so 2U!)|||— хоёр заалт тул 2U!@@</span>":"")));
  const P=isFinite(p)?p:0.00699;const eq=242.2*(100+P)/100;const ii=Math.abs(q-eq)<=0.006;L.push(li(ii,\`<b>(ii)</b> 242.2 × (100 + \${P.toPrecision(2)}) / 100 = \${eq.toFixed(3)}\`));
  $("#q1fbG").innerHTML=fbBlock(L,i+ii,2);setScore("q1g",i+ii);};

/* ---------- Q2 ---------- */
const lit=c=>({litmus:c});
const S3={FA6:{name:"FA 6",info:"@@FA 6: white solid salt.|||FA 6 — цагаан хатуу давс.@@",init:{solid:"#f7f7f2",label:"FA 6 (s)"}},FA7:{name:"FA 7",info:"@@FA 7: pale yellowish-white solid salt.|||FA 7 — цайвар шаргал цагаан хатуу давс.@@",init:{solid:"#f5efd2",label:"FA 7 (s)"}},
  FA8:{name:"FA 8",info:"@@FA 8: white solid salt.|||FA 8 — цагаан хатуу давс.@@",init:{solid:"#fafafa",label:"FA 8 (s)"}},FA9:{name:"FA 9",info:"@@FA 9: dark purple crystals.|||FA 9 — бараан нил ягаан талст.@@",init:{solid:"#3a1048",label:"FA 9 (s)"}},
  FA10:{name:"FA 10",info:"@@FA 10: very pale pink solid.|||FA 10 — маш цайвар ягаан хатуу бодис.@@",init:{solid:"#f3dfe6",label:"FA 10 (s)"}}};
const nTests=(id,o)=>[
  A("naoh","@@Add NaOH(aq) and heat, test with damp red litmus|||NaOH(aq) нэмж халаах, чийгтэй улаан лакмусаар шалгах@@",o.naoh,o.naohObs),
  A("al","@@Then add aluminium foil and heat, test with litmus|||Дараа нь Al тугалган цаас нэмж халаах, лакмусаар шалгах@@",o.al,o.alObs,{need:"naoh",slow:true}),
  A("mno4","@@Add acidified KMnO₄(aq) to a fresh sample and warm|||Шинэ дээжинд хүчиллэг KMnO₄(aq) нэмж бүлээсгэх@@",o.mn,o.mnObs),
  A("hcl","@@Add dilute HCl to a fresh sample|||Шинэ дээжинд шингэрүүлсэн HCl нэмэх@@",o.hcl,o.hclObs)];
const A3={
 FA6:nTests("6",{naoh:[{liq:COL.colourless,flame:true,litmus:"#d9534f",label:"@@+ NaOH, heating|||+ NaOH, халааж@@"}],naohObs:"No (visible) reaction; damp red litmus stays red.",
   al:[{liq:COL.colourless,foil:true,flame:true,bub:true,litmus:"#d9534f",label:"+ Al"},{liq:COL.colourless,foil:true,flame:true,bub:true,litmus:"#3d6fd1",label:"@@litmus turned blue|||лакмус хөхрөв@@"}],alObs:"Effervescence; gas turns damp red litmus blue (ammonia).",
   mn:[{liq:"#7a2a8a",label:"+ KMnO₄"}],mnObs:"Purple colour remains (no decolourisation).",hcl:[{liq:COL.colourless,label:"+ HCl"}],hclObs:"No (visible) reaction."}),
 FA7:nTests("7",{naoh:[{liq:COL.colourless,flame:true,litmus:"#d9534f",label:"@@+ NaOH, heating|||+ NaOH, халааж@@"}],naohObs:"No (visible) reaction; damp red litmus stays red.",
   al:[{liq:COL.colourless,foil:true,flame:true,bub:true,litmus:"#d9534f",label:"+ Al"},{liq:COL.colourless,foil:true,flame:true,bub:true,litmus:"#3d6fd1",label:"@@litmus turned blue|||лакмус хөхрөв@@"}],alObs:"Effervescence; gas turns damp red litmus blue (ammonia).",
   mn:[{liq:"#7a2a8a",label:"+ KMnO₄"},{liq:COL.colourless,label:"@@turned colourless|||өнгөгүй болов@@"}],mnObs:"Purple KMnO₄ is decolourised (turns colourless).",hcl:[{liq:"rgba(190,215,235,.6)",bub:true,label:"+ HCl"},{liq:"rgba(190,215,235,.6)",bub:true,gas:"#a0522d",label:"@@brown gas|||хүрэн хий@@"}],hclObs:"Effervescence; brown gas given off (above the solution)."}),
 FA8:nTests("8",{naoh:[{liq:COL.colourless,flame:true,litmus:"#d9534f",label:"@@+ NaOH, heating|||+ NaOH, халааж@@"},{liq:COL.colourless,flame:true,litmus:"#3d6fd1",label:"@@litmus turned blue|||лакмус хөхрөв@@"}],naohObs:"Gas (pungent smell) turns damp red litmus blue — ammonia.",
   al:[{liq:COL.colourless,foil:true,flame:true,bub:true,litmus:"#3d6fd1",label:"+ Al"}],alObs:"Ammonia still given off (already detected).",
   mn:[{liq:"#7a2a8a",label:"+ KMnO₄"}],mnObs:"Purple colour remains.",hcl:[{liq:COL.colourless,label:"+ HCl"}],hclObs:"No (visible) reaction."}),
 FA9:[A("heat","@@Test 1: heat until the reaction stops|||Test 1: урвал зогстол халаах@@",[{solid:"#3a1048",flame:true,label:"@@heating|||халааж байна@@"},{solid:"#1a1a1a",flame:true,label:"@@spits|||үсэрнэ@@"},{solid:"#121212",label:"@@black residue|||хар үлдэгдэл@@"}],"Crystals jump about / crackle; black solid (residue) forms."),
   A("splint","@@Test 1: test the gas with a glowing splint|||Test 1: хийг цогтой хэлтэрхийгээр шалгах@@",[{solid:"#121212",flame:true,splint:"relight",label:"O₂?"}],"Glowing splint relights (oxygen).",{need:"heat"}),
   A("water","@@Test 2: add water to the cooled residue and shake|||Test 2: хөргөсөн үлдэгдэлд ус нэмж сэгсрэх@@",[{liq:"#1f5a33",solid:"#121212",label:"+ H₂O"}],"Dark green solution; black solid settles.",{need:"heat"}),
   A("aq","@@Make FA 9(aq) (H₂SO₄ + water)|||FA 9(aq) бэлтгэх (H₂SO₄ + ус)@@",[{liq:"#6a1b7a",label:"FA 9 (aq)"}],"Purple solution."),
   A("fe","@@Test 3: a few drops of FA 9(aq) into FeSO₄(aq)|||Test 3: FeSO₄(aq)-д хэдэн дусал FA 9(aq)@@",[{liq:COL.palegreen,label:"FeSO₄"},{liq:"rgba(240,225,170,.7)",label:"+ FA 9(aq)"}],"Purple colour disappears; pale yellow (colourless) solution.",{need:"aq"}),
   A("ki","@@Test 4: a few drops of FA 9(aq) into KI(aq)|||Test 4: KI(aq)-д хэдэн дусал FA 9(aq)@@",[{liq:COL.colourless,label:"KI"},{liq:"rgba(150,85,30,.8)",label:"+ FA 9(aq)"}],"Purple colour disappears; brown solution forms.",{need:"aq"})],
 FA10:[A("dis","@@Dissolve in water|||Усанд уусгах@@",[{liq:"rgba(245,232,238,.6)",label:"FA 10 (aq)"}],"Very pale pink / colourless solution."),
   A("naoh","@@NaOH(aq), then excess, leave to stand|||NaOH(aq), дараа нь илүүдэл, түр байлгах@@",[{liq:COL.colourless,ppt:COL.offwhite,label:"+ NaOH"},{liq:COL.colourless,ppt:COL.brown,label:"@@after waiting|||хүлээсний дараа@@"}],"Off-white ppt; insoluble in excess; turns brown on standing.",{need:"dis",slow:true})]};
Bench("#benchBox",S3,A3);
const ION=s=>N(s);function N(s){return String(s||"").toLowerCase().replace(/\\s+/g,"").replace(/[\\^]/g,"").replace(/[⁺]/g,"+").replace(/[⁻−–]/g,"-").replace(/[₂²]/g,"2").replace(/[₃³]/g,"3").replace(/₄/g,"4");}
$("#q2checkA").onclick=()=>{const L=[];const ions=["n1","n2","n3"].map(i=>ION($("#"+i).value));
  const M1=ions.includes("nh4+")&&ions.includes("no3-")&&ions.includes("no2-");
  const rows=[1,2,3].map(r=>({rg:$("#rg"+r).value.toLowerCase(),o:{6:$(\`#o\${r}6\`).value,7:$(\`#o\${r}7\`).value,8:$(\`#o\${r}8\`).value}}));
  const filled=rows.filter(r=>r.rg&&(r.o[6]||r.o[7]||r.o[8]));const M2=filled.length>=2;
  const rN=rows.find(r=>/(naoh|sodium hydroxide)/.test(r.rg)&&/(heat|warm)/.test(r.rg)&&!/(\\bal\\b|alumin)/.test(r.rg));
  const rA=rows.find(r=>/(\\bal\\b|alumin)/.test(r.rg));const rK=rows.find(r=>/(kmno4|manganate|permanganate|hydrochloric|\\bhcl\\b|sulfuric|h2so4|nitric|hno3|acid)/.test(r.rg)&&!/(naoh|alumin)/.test(r.rg));
  const blue=t=>RX.LITBLUE.test(t);const no=t=>RX.NC.test(t)||/(no gas|stays red|remains red|no reaction)/i.test(t);
  const M3=!!rN,M4=!!rN&&blue(rN.o[8])&&no(rN.o[6])&&no(rN.o[7]),M5=!!rA&&/(naoh|sodium hydroxide)/.test(rA.rg+(rN?rN.rg:""))&&/(heat|warm)/.test(rA.rg+(rN?rN.rg:"")),M6=!!rA&&blue(rA.o[6]);
  const M7=!!rK;const dec=t=>/(colourless|colorless|decolou?ri)/i.test(t)||/brown gas/i.test(t);const stay=t=>/(purple|no change|remains|stays|no reaction)/i.test(t)&&!/(colourless|decolou?ri|brown gas)/i.test(t);
  const M8=!!rK&&dec(rK.o[7])&&stay(rK.o[6])&&stay(rK.o[8]);
  [[M1,"@@M1 The three ions: NH₄⁺, NO₃⁻, NO₂⁻|||M1 Гурван ион: NH₄⁺, NO₃⁻, NO₂⁻@@"],[M2,"@@M2 A table with FA 6/7/8 and reagents|||M2 FA 6/7/8 ба урвалжтай хүснэгт@@"],[M3,"@@M3 NaOH + heat as a reagent|||M3 NaOH + халаах урвалж@@"],[M4,"@@M4 Only the gas from FA 8 turns red litmus blue|||M4 Зөвхөн FA 8-ын хий улаан лакмусыг хөхрүүлнэ@@"],[M5,"@@M5 Add Al to the NaOH and heat|||M5 NaOH-д Al нэмж халаах@@"],[M6,"@@M6 The gas from FA 6 (with Al) turns litmus blue|||M6 FA 6-ийн хий (Al-тай) лакмусыг хөхрүүлнэ@@"],[M7,"@@M7 Acidified KMnO₄ or a named acid on a fresh sample|||M7 Шинэ дээжинд хүчиллэг KMnO₄ эсвэл нэрлэсэн хүчил@@"],[M8,"@@M8 Only FA 7 decolourises KMnO₄ / gives a brown gas with acid|||M8 Зөвхөн FA 7 KMnO₄-ийг өнгөгүйжүүлнэ / хүчилтэй хүрэн хий@@"]].forEach(([ok,t])=>L.push(li(ok,"<b>"+t.slice(0,2)+"</b>"+t.slice(2))));
  const m=[M1,M2,M3,M4,M5,M6,M7,M8].filter(Boolean).length;$("#q2fbA").innerHTML=fbBlock(L,m,8);setScore("q2a1",m);};
$("#q2checkA2").onclick=()=>{const ok=ION($("#f6").value)==="no3-"&&ION($("#f7").value)==="no2-"&&ION($("#f8").value)==="nh4+";
  $("#q2fbA2").innerHTML=fbBlock([li(ok,"FA 6 = NO₃⁻, FA 7 = NO₂⁻, FA 8 = NH₄⁺")],ok?1:0,1);setScore("q2a2",ok?1:0);};
$("#q2checkB").onclick=()=>{const v=id=>$("#"+id).value;const L=["<b>(i)</b>"];
  const items=[[/black/i.test(v("t1o")),"black solid / residue"],[/(pop|jump|crackl|spit|move)/i.test(v("t1o")),"pops / jumps about"],[/glowing/i.test(v("t1o"))&&RX.RELIGHT.test(v("t1o")),"glowing splint relights"],
    [/(oxygen|\\bo2\\b|manganese\\s*\\(?iv\\)?\\s*oxide|mno2|manganate\\s*\\(?vi\\)?|k2mno4)/i.test(v("t1p")),"product: oxygen / MnO₂ / K₂MnO₄"],[/green/i.test(v("t2o")),"Test 2: (dark) green"],[/green/i.test(v("t2o"))&&/solution/i.test(v("t2o")),"Test 2: solution"]];
  const a=starMark(L,items,3);
  const b1=/purple/i.test(v("t3o"))&&/(colourless|colorless|pale yellow|yellow|decolou?ri)/i.test(v("t3o"));const b2=/brown/i.test(v("t4o"));
  const c1=/(off.?white|cream|buff|beige|pale pink|white)/i.test(v("t5o"))&&RX.PPT.test(v("t5o"));const c2=/brown/i.test(v("t5o"))&&/(insoluble|does ?n[o']t dissolve|not dissolve)/i.test(v("t5o"));const d=/mangan|^\\s*mn\\s*$/i.test(v("t6"));
  L.push(li(b1,"<b>(ii) M1</b> @@Test 3: purple → colourless / pale yellow|||Test 3: нил ягаан → өнгөгүй / цайвар шар@@"),li(b2,"<b>(ii) M2</b> @@Test 4: purple → brown|||Test 4: нил ягаан → хүрэн@@"),li(c1,"<b>(iii) M1</b> @@Off-white ppt|||Цайвар (off-white) тунадас@@"),li(c2,"<b>(iii) M2</b> @@Turns brown and is insoluble in excess|||Хүрэн болно ба илүүдэлд уусахгүй@@"),li(d,"<b>(iv)</b> manganese"));
  const b=b1+b2,c=c1+c2+d;$("#q2fbB").innerHTML=fbBlock(L,a+b+c,8);setScore("q2b1",a);setScore("q2b2",b);setScore("q2b3",c);};

{
/* =====================================================================
   WHITEBOARD
   ===================================================================== */
const WB={page:"Q1",tool:"pen",color:"#1d2433",size:3.5,grid:true,data:{},redo:{}};
const COLORS=["#1d2433","#b3261e","#1f5f9a","#1f7a4c","#6b2f8f","#d97706"];
const cv=$("#wbCanvas"),ctx=cv.getContext("2d");let drawing=null;
function wbLoad(p){if(!WB.data[p])WB.data[p]=store.get("_wb_"+p,[]);if(!WB.redo[p])WB.redo[p]=[];}
function wbSave(){store.set("_wb_"+WB.page,WB.data[WB.page]);}
function wbSize(){const r=$("#wbStage").getBoundingClientRect();const d=window.devicePixelRatio||1;cv.width=Math.max(1,r.width*d);cv.height=Math.max(1,r.height*d);ctx.setTransform(d,0,0,d,0,0);wbDraw();}
function strokeDraw(st){if(!st.pts.length)return;ctx.save();ctx.lineCap="round";ctx.lineJoin="round";
  if(st.tool==="eraser"){ctx.globalCompositeOperation="destination-out";ctx.strokeStyle="#000";ctx.lineWidth=st.size*5;}
  else if(st.tool==="hl"){ctx.globalAlpha=.3;ctx.strokeStyle=st.color;ctx.lineWidth=st.size*5;}
  else{ctx.strokeStyle=st.color;ctx.lineWidth=st.size;}
  ctx.beginPath();ctx.moveTo(st.pts[0][0],st.pts[0][1]);
  if(st.tool==="line"){const p=st.pts[st.pts.length-1];ctx.lineTo(p[0],p[1]);}
  else{for(let i=1;i<st.pts.length;i++){const a=st.pts[i-1],b=st.pts[i];ctx.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2);}if(st.pts.length===1)ctx.lineTo(st.pts[0][0]+.1,st.pts[0][1]);}
  ctx.stroke();ctx.restore();}
function wbDraw(){const w=cv.width/(window.devicePixelRatio||1),h=cv.height/(window.devicePixelRatio||1);ctx.clearRect(0,0,w,h);
  (WB.data[WB.page]||[]).forEach(strokeDraw);if(drawing)strokeDraw(drawing);}
function wbBg(){const st=$("#wbStage");st.style.backgroundColor="#fff";
  st.style.backgroundImage=WB.grid?"linear-gradient(#e3e9f0 1px,transparent 1px),linear-gradient(90deg,#e3e9f0 1px,transparent 1px)":"none";
  st.style.backgroundSize="24px 24px";$("#wbGrid").classList.toggle("on",WB.grid);}
function pos(e){const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top];}
cv.addEventListener("pointerdown",e=>{cv.setPointerCapture(e.pointerId);const p=pos(e);drawing={tool:WB.tool,color:WB.color,size:WB.size*(e.pointerType==="pen"&&e.pressure?0.6+e.pressure:1),pts:[p]};wbDraw();});
cv.addEventListener("pointermove",e=>{if(!drawing)return;const p=pos(e);if(drawing.tool==="line")drawing.pts=[drawing.pts[0],p];else drawing.pts.push(p);wbDraw();});
const endStroke=()=>{if(!drawing)return;WB.data[WB.page].push(drawing);WB.redo[WB.page]=[];drawing=null;wbSave();wbDraw();};
cv.addEventListener("pointerup",endStroke);cv.addEventListener("pointercancel",endStroke);
function openWB(page){if(page){WB.page=page;$("#wbPage").value=page;}wbLoad(WB.page);$("#wb").classList.add("open");$("#wb").setAttribute("aria-hidden","false");wbBg();requestAnimationFrame(wbSize);}
function closeWB(){$("#wb").classList.remove("open");$("#wb").setAttribute("aria-hidden","true");}
$("#wbFab").onclick=()=>{const t=store.get("tab","ov");openWB({q1:"Q1",q2:"Q2",q3:"Q3"}[t]||WB.page);};
$$("[data-wb]").forEach(b=>b.addEventListener("click",()=>openWB(b.dataset.wb)));
$("#wbClose").onclick=closeWB;$("#wb").addEventListener("click",e=>{if(e.target.id==="wb")closeWB();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#wb").classList.contains("open"))closeWB();});
$("#wbPage").onchange=e=>{WB.page=e.target.value;wbLoad(WB.page);wbDraw();};
$$(".wb-bar .tool").forEach(b=>b.onclick=()=>{WB.tool=b.dataset.tool;$$(".wb-bar .tool").forEach(x=>x.classList.toggle("on",x===b));});
{const cs=$("#wbColors");COLORS.forEach((c,i)=>{cs.insertAdjacentHTML("beforeend",\`<button class="sw \${i===0?"on":""}" data-col="\${c}" style="background:\${c}" aria-label="@@colour|||өнгө@@"></button> \`);});
 $$("#wbColors .sw").forEach(b=>b.onclick=()=>{WB.color=b.dataset.col;$$("#wbColors .sw").forEach(x=>x.classList.toggle("on",x===b));if(WB.tool==="eraser"){WB.tool="pen";$$(".wb-bar .tool").forEach(x=>x.classList.toggle("on",x.dataset.tool==="pen"));}});}
$("#wbSize").onchange=e=>WB.size=+e.target.value;
$("#wbGrid").onclick=()=>{WB.grid=!WB.grid;wbBg();};
$("#wbUndo").onclick=()=>{const a=WB.data[WB.page];if(a&&a.length){WB.redo[WB.page].push(a.pop());wbSave();wbDraw();}};
$("#wbRedo").onclick=()=>{const r=WB.redo[WB.page];if(r&&r.length){WB.data[WB.page].push(r.pop());wbSave();wbDraw();}};
$("#wbClear").onclick=()=>{if(!confirm("@@Clear this whole page?|||Энэ хуудсыг бүхэлд нь арилгах уу?@@"))return;WB.data[WB.page]=[];WB.redo[WB.page]=[];wbSave();wbDraw();};
$("#wbSave").onclick=()=>{const t=document.createElement("canvas");t.width=cv.width;t.height=cv.height;const c=t.getContext("2d");c.fillStyle="#fff";c.fillRect(0,0,t.width,t.height);c.drawImage(cv,0,0);
  const a=document.createElement("a");a.href=t.toDataURL("image/png");a.download=\`9701-35-"+CFG.id+"-\${WB.page}.png\`;a.click();};
window.addEventListener("resize",()=>{if($("#wb").classList.contains("open"))wbSize();});


}
persistInputs();renderScore();showTab(store.get("tab","ov"));
})();
<\/script>
</body>
</html>
`;export{e as default};
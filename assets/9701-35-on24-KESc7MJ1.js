var e=`<!DOCTYPE html>
<html lang="__LANG__">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>@@9701/35 O/N 2024 Practical|||9701/35 O/N 2024 Практик@@</title>
<meta name="description" content="@@Cambridge AS Chemistry 9701/35 October/November 2024: interactive practical simulation, interactive graph, checking based on the mark scheme, and a whiteboard.|||Cambridge AS Chemistry 9701/35 October/November 2024 — интерактив практик симуляци, интерактив график, mark scheme-д суурилсан шалгалт, самбар.@@">
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
</style>
<style>
.graphwrap{overflow-x:auto;border:1px solid var(--line);border-radius:8px;background:#fff}
#graph{display:block;width:100%;max-width:760px;min-width:520px;margin:auto;touch-action:none;cursor:crosshair}
.gtools{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.gtools .tool.on{background:var(--accent);color:#fff;border-color:var(--accent)}
.scalebox{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px 14px;margin:8px 0}
.scalebox label{display:flex;flex-direction:column;font-size:.86rem;gap:2px}
.scalebox input,.scalebox select{width:100%}
table.rt input.tin{min-width:56px}
.mini{font-size:.82rem}
</style>
</head>
<body>
<header class="top">
  <div class="top-inner">
  <nav class="tabs" role="tablist" id="tabs">
    <button role="tab" data-tab="ov" aria-selected="true">@@Overview|||Тойм@@</button>
    <button role="tab" data-tab="q1">@@1. Thermometric titration|||1. Дулааны титрлэлт@@</button>
    <button role="tab" data-tab="q2">@@2. Mass of CO₂|||2. CO₂-ын масс@@</button>
    <button role="tab" data-tab="q3">@@3. Qualitative analysis|||3. Чанарын шинжилгээ@@</button>
    <button role="tab" data-tab="ref">@@Reference|||Лавлах@@</button>
    <button role="tab" data-tab="score">@@Results|||Дүн@@</button>
  </nav>
    <div class="brand"><b>9701/35 · O/N 2024</b><span>AS Chemistry — Advanced Practical Skills 1</span></div>
    <span class="scorechip" id="scoreChip">0 / 40</span>
  </div>
</header>

<main>
<!-- ===================== OVERVIEW ===================== -->
<section class="tab active" id="tab-ov">
  <div class="card">
    <h2>@@Practical Exam Practice|||Практик шалгалтын интерактив дадлага@@</h2>
    <p>@@This page takes you step by step through the tasks of the practical exam <b>Cambridge International AS &amp; A Level Chemistry 9701/35, October/November 2024</b> as simulations, and checks your answers straight away against the rules of that year’s <b>mark scheme</b>. 40 marks in total, 2 hours.|||Энэ хуудас <b>Cambridge International AS &amp; A Level Chemistry 9701/35, 2024 оны 10/11-р сар</b>-ын практик шалгалтын даалгавруудыг алхам алхмаар симуляци хэлбэрээр хийлгэж, хариултыг тухайн оны <b>mark scheme</b>-ийн дүрмээр шууд шалгана. Нийт 40 оноо, 2 цаг.@@</p>
    <div class="qcards" id="qcards"></div>
    <div class="grid2">
      <div>
        <h3>@@Structure|||Бүтэц@@</h3>
        <table class="rt">
          <tr><th>@@Question|||Асуулт@@</th><th>@@Content|||Агуулга@@</th><th>@@Marks|||Оноо@@</th></tr>
          <tr><td>1</td><td style="text-align:left">@@Adding H₂SO₄ to NaOH and using the temperature change (thermometric titration) to find the acid concentration; <b>graph</b>|||NaOH-д H₂SO₄ нэмж температурын өөрчлөлтөөр (дулааны титрлэлт) хүчлийн концентрацыг олох; <b>график</b>@@</td><td>12</td></tr>
          <tr><td>2</td><td style="text-align:left">@@Finding the same acid concentration from the mass of CO₂ given off in the reaction of Na₂CO₃ with H₂SO₄; uncertainty calculation|||Na₂CO₃ + H₂SO₄ урвалд ялгарсан CO₂-ын массаар мөн хүчлийн концентрацыг олох; алдааны тооцоо@@</td><td>14</td></tr>
          <tr><td>3</td><td style="text-align:left">@@Three compounds of one metal: deducing the oxidation states|||Нэг металлын гурван нэгдэл — исэлдэлтийн зэргийг тогтоох@@</td><td>14</td></tr>
        </table>
      </div>
      <div>
        <h3>@@Assessment objectives (syllabus)|||Үнэлгээний ангилал (syllabus)@@</h3>
        <table class="rt">
          <tr><th>@@Skill|||Ур чадвар@@</th><th>@@Minimum marks|||Хамгийн бага оноо@@</th></tr>
          <tr><td style="text-align:left">@@MMO: making measurements and observations|||MMO — хэмжилт, ажиглалт хийх@@</td><td>12</td></tr>
          <tr><td style="text-align:left">@@PDO: presenting data and observations|||PDO — өгөгдөл, ажиглалтыг бүртгэх@@</td><td>6</td></tr>
          <tr><td style="text-align:left">@@ACE: analysis, conclusions and evaluation|||ACE — анализ, дүгнэлт, үнэлгээ@@</td><td>10</td></tr>
        </table>
        <p class="small muted">@@The remaining 12 marks are shared among these in varying amounts.|||Үлдсэн 12 оноо эдгээрт харилцан адилгүй хуваарилагдана.@@</p>
      </div>
    </div>
    <h3>Grade threshold (component 35, Nov 2024)</h3>
    <div class="tablewrap"><table class="rt">
      <tr><th>Max</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
      <tr><td>40</td><td>24</td><td>22</td><td>19</td><td>16</td><td>14</td></tr>
    </table></div>
    <p class="small muted">@@Source: Cambridge grade threshold table for 9701, November 2024. These are the thresholds for this component only. Compared with 2025 (A 28), they show that this year’s paper was harder, especially the graph and the uncertainty calculation.|||Эх сурвалж: Cambridge-ийн Nov 2024 оны 9701 grade threshold хүснэгт. Энэ нь зөвхөн энэ хэсгийн (component) босго. 2025 оныхтой (A 28) харьцуулахад энэ жилийн шалгалт хүндэвтэр байсныг харуулна — ялангуяа график, алдааны тооцоо.@@</p>
  </div>

  <div class="card">
    <h3>@@How to use it|||Хэрхэн ашиглах вэ@@</h3>
    <ol class="steps">
      <li>@@Open each question’s tab and do the experiment <b>in the simulation</b>. You read and record the thermometer, balance and measuring cylinder yourself.|||Асуулт бүрийн табыг нээж, <b>симуляцийн дагуу</b> туршилтаа хийнэ. Термометр, жинлүүр, хэмжээст цилиндрийг та өөрөө уншиж бүртгэнэ.@@</li>
      <li>@@Write table headings and observations <b>in English</b>, as you would on the exam paper (for example <span class="mono">mass of flask + acid / g</span>).|||Хүснэгтийн гарчиг, ажиглалтыг шалгалтын хуудсан дээр бичдэгтэйгээ адил <b>англиар</b> бичнэ (жишээ нь <span class="mono">mass of flask + acid / g</span>).@@</li>
      <li>@@In 1(b) you <b>draw the graph yourself</b>: choose axis labels and scales, plot the points, draw two lines and read where they cross.|||1(b)-д <b>графикаа өөрөө</b> зурна: тэнхлэгийн нэр, масштаб сонгоно, цэг тавина, хоёр шугам татаж огтлолцлыг уншина.@@</li>
      <li>@@The <b>Check</b> button shows each mark of the mark scheme (I, II, M1…) separately and explains why you earned or lost it.|||<b>Шалгах</b> товч mark scheme-ийн оноо бүрийг (I, II, M1…) тусад нь харуулж, яагаад авсан/алдсаныг тайлбарлана.@@</li>
      <li>@@<b>Whiteboard</b> (bottom right corner): a whiteboard for writing out your working by hand. Each question has its own page.|||<b>Самбар</b> (баруун доод булан) — тооцоогоо гараар бичих цагаан самбар. Асуулт бүр өөрийн хуудастай.@@</li>
    </ol>
    <div class="note exam">@@<b class="t">Suggested timing</b> Question 1 about 40 min (graph 15 min), question 2 about 35 min (you can start question 3 while you wait for the fizzing to stop), question 3 about 35 min, checking 10 min. Questions 1 and 2 use <b>the same acid, FA 2</b>: do not pour away the FA 2 left after question 1.|||<b class="t">Цаг хуваарилалтын зөвлөмж</b>
      1-р асуулт ~40 мин (график 15 мин), 2-р асуулт ~35 мин (хийн бөмбөлөг зогсохыг хүлээх хооронд 3-р асуултаа эхэлж болно), 3-р асуулт ~35 мин, шалгах 10 мин. 1 ба 2-р асуулт <b>ижил FA 2</b> хүчлийг хэрэглэдэг — 1-р асуултын дараа үлдсэн FA 2-оо асгаж болохгүй.@@</div>
    <div class="note">@@<b class="t">About this material</b> Every marking point of the mark scheme (9701/35/O/N/24) is explained here. The real identities of the substances are taken from the Confidential Instructions (9701/35/CI/O/N/24). The question text is not copied word for word, for copyright reasons; it is summarised in its meaning. The <i>Principal Examiner Report</i> for this session is not publicly available, so the “Examiner’s advice” notes are based on the practical requirements of the syllabus and on mistakes that recur in Paper 3 reports from earlier years.|||<b class="t">Материалын тухай</b>
      Mark scheme (9701/35/O/N/24)-ийн бүх онооны цэгийг монголоор тайлбарлаж ашигласан. Бодисуудын жинхэнэ нэрийг таны төслийн Confidential Instructions (9701/35/CI/O/N/24)-аас авсан. Асуултын текстийг зохиогчийн эрхийн улмаас үг үсгээр нь хуулаагүй, утгаар нь товчлон буулгасан. Энэ сессийн <i>Principal Examiner Report</i> олон нийтэд нээлттэй байршаагүй тул «Шалгагчийн зөвлөмж» хэсгүүд нь syllabus-ын практик шаардлага болон өмнөх жилүүдийн Paper 3 тайлангуудад байнга давтагддаг алдаан дээр тулгуурласан.@@</div>
  </div>
</section>

<!-- ===================== Q1 ===================== -->
<section class="tab" id="tab-q1">
  <div class="partnav" id="partnav-q1"></div>
  <div class="card">
    <div class="qhead"><h2>@@1. Thermometric titration|||1. Дулааны (термометрийн) титрлэлт@@</h2><span class="marks">[12]</span></div>
    <p>@@Neutralisation of an alkali by an acid is <b>exothermic</b>. As acid is added a little at a time, the temperature rises and is highest at the neutral point; further cold acid then cools the mixture. Where the two lines cross gives the neutralisation volume.|||Хүчил шүлтээр саармагжих урвал <b>экзотерм</b>. Шүлтэд хүчлийг бага багаар нэмэхэд температур өсч, саармагжилтын цэгт хамгийн их болно; цааш нэмэх хүйтэн хүчил холимгийг хөргөнө. Хоёр шулууны огтлолцол — саармагжилтын эзлэхүүн.@@</p>
    <div class="eq">2NaOH(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + 2H₂O(l)</div>
    <ul>
      <li><b>FA 1</b> — 2.01 mol dm⁻³ NaOH</li>
      <li>@@<b>FA 2</b>: H₂SO₄ (concentration unknown; used again in question 2)|||<b>FA 2</b> — H₂SO₄ (концентрац нь тодорхойгүй; 2-р асуултад дахин хэрэглэнэ)@@</li>
    </ul>
    <details class="teach"><summary>@@Method (summary): read it all first|||Аргачлал (товч) — эхлээд бүтэн уншина уу@@</summary><div>
      <ol>
        <li>@@Stand the plastic cup in a 250 cm³ beaker.|||Хуванцар аягыг 250 cm³ стакан дотор тавьж тогтооно.@@</li>
        <li>@@Pipette 25.0 cm³ of FA 1 into the cup.|||25.0 cm³ FA 1-ийг пипеткээр аяганд хийнэ.@@</li>
        <li>@@With the thermometer bulb fully covered, record the temperature of FA 1 in the 0.00 cm³ box.|||Термометрийн бөмбөлөг бүрэн дүрэгдсэн байхаар хийж, FA 1-ийн температурыг 0.00 cm³-ийн нүдэнд бичнэ.@@</li>
        <li>@@Fill the burette with FA 2.|||Бюретийг FA 2-оор дүүргэнэ.@@</li>
        <li>@@Add 5.00 cm³ of FA 2 to the cup, <b>stir</b> and record the highest temperature.|||5.00 cm³ FA 2-ыг аяганд нэмж, <b>хутгаад</b> хамгийн их температурыг бичнэ.@@</li>
        <li>@@Carry on adding 5.00 cm³ at a time up to 40.00 cm³ in total; stir after each addition and record the highest temperature.|||Дахин 5.00 cm³-ээр нэмсээр нийт 40.00 cm³ хүртэл үргэлжлүүлнэ; нэмэлт бүрийн дараа хутгаж, хамгийн их температурыг бичнэ.@@</li>
        <li>@@Keep the rest of FA 2 for question 2.|||Үлдсэн FA 2-ыг 2-р асуултад хадгална.@@</li>
      </ol>
    </div></details>
  </div>

  <div class="card">
    <h3>@@1(a) Simulation|||1(a) Симуляци@@</h3>
    <div class="grid-sim">
      <div>
        <svg id="q1svg" class="app-svg" viewBox="0 0 360 440" aria-label="@@Cup, thermometer and burette|||Аяга, термометр, бюрет@@"></svg>
        <div class="readouts">
          <div class="readout">@@<b>Total FA 2 added</b><span id="q1vol">—</span>|||<b>Нийт нэмсэн FA 2</b><span id="q1vol">—</span>@@</div>
          <div class="readout">@@<b>Stirring</b><span id="q1stirlbl">no</span>|||<b>Хутгаж байна уу</b><span id="q1stirlbl">үгүй</span>@@</div>
        </div>
      </div>
      <div>
        <ol class="steps" id="q1steps">
          <li data-s="cup"><button class="btn" id="q1cup">@@Stand the cup in the beaker|||Аягыг стакан дотор тавих@@</button></li>
          <li data-s="fa1"><button class="btn" id="q1fa1">@@Pipette 25.0 cm³ of FA 1|||25.0 cm³ FA 1 пипеткээр хийх@@</button></li>
          <li data-s="therm"><button class="btn" id="q1therm">@@Put the thermometer in|||Термометрийг дүрэх@@</button> @@<span class="small muted">→ read and record the starting temperature</span>|||<span class="small muted">→ эхний температурыг уншиж бич</span>@@</li>
          <li data-s="fill"><button class="btn" id="q1fill">@@Fill the burette with FA 2|||Бюретийг FA 2-оор дүүргэх@@</button></li>
          <li data-s="add"><button class="btn" id="q1add">@@Add 5.00 cm³ of FA 2|||5.00 cm³ FA 2 нэмэх@@</button>
            <button class="btn" id="q1stir" title="@@Press and hold|||Дарж барина@@">@@Stir (press and hold)|||Хутгах (дарж барих)@@</button></li>
        </ol>
        <div class="grid2" style="gap:10px;align-items:start">
          <div>
            <svg id="q1lens" class="lens" viewBox="0 0 170 300" aria-label="@@Close-up of the thermometer|||Термометрийн томруулсан харагдац@@"></svg>
            <p class="small muted" style="max-width:180px">@@Close-up of the thermometer (1 °C divisions). Read it to 0.5 °C. After each addition the temperature rises and then slowly falls: catch the <b>highest</b> value.|||Томруулсан термометр (1 °C-ийн хуваарь). 0.5 °C хүртэл уншина. Нэмсний дараа температур өсөөд аажим буурна — <b>хамгийн их</b> утгыг барьж ав.@@</p>
          </div>
          <div>
            <div class="note small">@@<b class="t">Observation</b><span id="q1obs">Start by standing the cup in the beaker.</span>|||<b class="t">Ажиглалт</b><span id="q1obs">Аягыг стакан дотор тавьж эхэлнэ үү.</span>@@</div>
            <div class="note warn small" id="q1warn" hidden></div>
            <div class="btnrow"><button class="btn ghost" id="q1reset">@@Start again|||Шинээр эхлэх@@</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@1(a) Table 1.1|||1(a) Хүснэгт 1.1@@</h3><span class="marks">[4]</span></div>
    <p class="small">@@Record temperatures to the nearest 0.5 °C, to one decimal place (for example <span class="mono">21.0</span>, <span class="mono">25.5</span>).|||Температурыг 0.5 °C-ийн нарийвчлалтай, нэг аравтын оронтой бичнэ (жишээ: <span class="mono">21.0</span>, <span class="mono">25.5</span>).@@</p>
    <div class="tablewrap"><table class="rt" id="q1table">
      <thead><tr><th>total volume of FA 2 / cm³</th><th>0.00</th><th>5.00</th><th>10.00</th><th>15.00</th><th>20.00</th><th>25.00</th><th>30.00</th><th>35.00</th><th>40.00</th></tr></thead>
      <tbody><tr><th>temperature / °C</th>
        <td><input class="tin" data-i="0"></td><td><input class="tin" data-i="1"></td><td><input class="tin" data-i="2"></td><td><input class="tin" data-i="3"></td><td><input class="tin" data-i="4"></td><td><input class="tin" data-i="5"></td><td><input class="tin" data-i="6"></td><td><input class="tin" data-i="7"></td><td><input class="tin" data-i="8"></td></tr></tbody>
    </table></div>
    <div class="btnrow"><button class="btn primary" id="q1checkA">@@Check 1(a)|||1(a)-г шалгах@@</button></div>
    <div id="q1fbA" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: marking points for 1(a)|||Багшийн тайлбар: 1(a)-ийн онооны цэгүүд@@</summary><div>
      <p>@@<b>I</b>: a temperature is recorded for all 9 volumes.|||<b>I</b> — 9 эзлэхүүн бүрт температур бичигдсэн.@@</p>
      <p>@@<b>II</b>: every reading ends in <span class="mono">.0</span> or <span class="mono">.5</span> (a thermometer with 1 °C divisions is read to 0.5 °C). Writing <span class="mono">22</span> or <span class="mono">22.3</span> loses the mark.|||<b>II</b> — Бүх заалт <span class="mono">.0</span> эсвэл <span class="mono">.5</span>-аар төгссөн (1 °C-ийн хуваарьтай термометрийг 0.5 °C хүртэл уншина). <span class="mono">22</span>, <span class="mono">22.3</span> гэвэл оноо алдана.@@</p>
      <p>@@<b>III, IV (accuracy)</b>: your largest temperature rise Δ = T<sub>max</sub> − T(0.00) is compared with the supervisor’s: difference ≤ 2.0 °C → III, ≤ 1.0 °C → IV. In this simulation the supervisor’s Δ ≈ <b>12.0 °C</b> (worked out from the concentrations in the CI).|||<b>III, IV (нарийвчлал)</b> — Таны температурын хамгийн их өсөлт Δ = T<sub>max</sub> − T(0.00)-ийг хянагчийнхтай харьцуулна: зөрүү ≤ 2.0 °C → III, ≤ 1.0 °C → IV. Энэ симуляцид хянагчийн Δ ≈ <b>12.0 °C</b> (CI-ийн концентрацаас тооцсон).@@</p>
      <div class="note exam">@@<b class="t">Examiner’s advice</b>If you do not stir well after each addition, the heat does not spread evenly and the highest value comes out too low. If you wait a long time between additions, the cup loses heat and the curve drops. Do not rest the thermometer on the bottom of the cup; keep the bulb fully covered.|||<b class="t">Шалгагчийн зөвлөмж</b>Нэмэлт бүрийн дараа сайн хутгахгүй бол дулаан жигд тархахгүй, хамгийн их утга бага гарна. Нэмэлтүүдийн хооронд удаан хүлээвэл аяга дулаан алдаж, муруй доошилно. Термометрийг аяганы ёроолд тулгахгүй, бөмбөлгийг бүрэн дүрнэ.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@1(b) Graph|||1(b) График@@</h3><span class="marks">[5]</span></div>
    <p class="small">@@y: temperature of the solution; x: total volume of FA 2 added. The y-axis must include a value <b>3 °C above</b> your highest temperature. Mark any anomalous point. Draw one line through the points while the temperature rises and a separate line after the maximum, and <b>extend them until they cross</b>. Grid: 120 × 160 small squares (bold lines every 10 squares).|||y — уусмалын температур, x — нэмсэн FA 2-ын нийт эзлэхүүн. y тэнхлэг таны хамгийн их температураас <b>3 °C дээш</b> утгыг багтаах ёстой. Гажуудсан (anomalous) цэг байвал тэмдэглэ. Температур өсөх үеийн шугам ба хамгийн ихэд хүрсний дараах шугамыг тус тусад нь татаж, <b>огтлолцох хүртэл сунгана</b>. Тор: 120 × 160 жижиг нүд (тод шугам 10 нүд тутамд).@@</p>
    <div class="scalebox">
      <label>@@x-axis label (with unit)|||x тэнхлэгийн нэр (нэгжтэй)@@<input id="gxl" placeholder="..."></label>
      <label>@@x starting value|||x эхлэх утга@@<input id="gx0" value="0"></label>
      <label>@@x: per 20 small squares|||x: 20 жижиг нүдэнд@@
        <select id="gxs"><option value="">@@choose|||сонго@@</option><option>2</option><option>2.5</option><option>4</option><option>5</option><option>10</option><option>20</option></select></label>
      <label>@@y-axis label (with unit)|||y тэнхлэгийн нэр (нэгжтэй)@@<input id="gyl" placeholder="..."></label>
      <label>@@y starting value|||y эхлэх утга@@<input id="gy0" placeholder="@@e.g. 18|||жишээ 18@@"></label>
      <label>@@y: per 20 small squares|||y: 20 жижиг нүдэнд@@
        <select id="gys"><option value="">@@choose|||сонго@@</option><option>0.5</option><option>1</option><option>2</option><option>2.5</option><option>3</option><option>4</option><option>5</option></select></label>
    </div>
    <div class="gtools">
      <button class="btn tool on" data-gm="plot">@@× Plot points|||× Цэг тавих@@</button>
      <button class="btn tool" data-gm="erase">@@Remove a point|||Цэг арилгах@@</button>
      <button class="btn tool" data-gm="anom">@@Mark as anomalous|||Гажуудсан гэж тэмдэглэх@@</button>
      <button class="btn tool" data-gm="L1">@@Line 1 (rise: curve, 3 points)|||Шугам 1 (өсөлт — муруй, 3 цэг)@@</button>
      <button class="btn tool" data-gm="L2">@@Line 2 (cooling: straight, 2 points)|||Шугам 2 (хөргөлт — шулуун, 2 цэг)@@</button>
      <label class="small" style="align-self:center"><input type="checkbox" id="l2curve"> @@Make line 2 a curve (3 points)|||Шугам 2-ыг муруй (3 цэг) болгох@@</label>
      <button class="btn ghost" id="gclearL">@@Clear the lines|||Шугамуудыг арилгах@@</button>
      <button class="btn ghost" id="gclearAll">@@Clear everything|||Бүгдийг арилгах@@</button>
    </div>
    <p class="small muted" id="ghint">@@Plotting mode: click on the grid to plot each point from the table (to half a small square). You can drag the control points of a line to move them.|||Цэг тавих горим: хүснэгтийн цэг бүрийг тор дээр дарж тавина (хагас нүдний нарийвчлалтай). Шугамын хяналтын цэгүүдийг чирж зөөж болно.@@</p>
    <div class="graphwrap"><svg id="graph" viewBox="0 0 760 900" aria-label="@@Graph grid|||Графикийн тор@@"></svg></div>
    <div class="calc"><div class="row">@@For 25.0 cm³ of FA 1,|||25.0 cm³ FA 1-д@@ <input id="q1vint" placeholder="@@e.g. 25.3|||жишээ 25.3@@"> @@cm³ of FA 2 is needed (from where the lines cross).|||cm³ FA 2 шаардлагатай (огтлолцлоос).@@</div></div>
    <div class="btnrow"><button class="btn primary" id="q1checkB">@@Check 1(b)|||1(b)-г шалгах@@</button> <button class="wb-link" data-wb="Q1">@@Open the whiteboard|||Самбар нээх@@</button></div>
    <div id="q1fbB" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: marking points for the 1(b) graph|||Багшийн тайлбар: 1(b) графикийн онооны цэгүүд@@</summary><div>
      <p>@@<b>I</b>: axes clearly labelled with units (<span class="mono">total volume of FA 2 / cm3</span>, <span class="mono">temperature / °C</span>) <i>and</i> linear scales that are a multiple of <b>1, 2 or 5 per 20 small squares</b> (for example 10 cm³ per 20 squares). The crossing point must also fit inside the grid.|||<b>I</b> — Тэнхлэгүүд тодорхой нэр, нэгжтэй (<span class="mono">total volume of FA 2 / cm3</span>, <span class="mono">temperature / °C</span>) <i>ба</i> масштаб шугаман, <b>20 жижиг нүдэнд 1, 2 эсвэл 5</b>-ын үржвэр (жишээ: 20 нүдэнд 10 cm³). Огтлолцлын цэг ч тор дотор багтах ёстой.@@</p>
      <p>@@<b>II</b>: every point plotted accurately (within half a small square).|||<b>II</b> — Бүх цэг нарийвчлалтай (хагас жижиг нүдний дотор) тавигдсан.@@</p>
      <p>@@<b>III</b>: both lines drawn. <b>The rising line should be a smooth curve</b> (MS); the cooling line may be straight or a smooth curve.|||<b>III</b> — Хоёр шугам хоёулаа зурагдсан. <b>Өсөлтийн шугам гөлгөр муруй</b> байх ёстой (MS); хөргөлтийн шугам шулуун эсвэл гөлгөр муруй байж болно.@@</p>
      <p>@@<b>IV</b>: both lines extended to cross at or above the highest measured temperature.|||<b>IV</b> — Хоёр шугамыг сунгаж, хамгийн их хэмжсэн температур эсвэл түүнээс дээш цэгт огтлолцуулна.@@</p>
      <p>@@<b>V</b>: the volume where the lines cross read correctly to 1 decimal place.|||<b>V</b> — Огтлолцлын эзлэхүүнийг 1 аравтын оронтой зөв уншина.@@</p>
      <div class="note">@@<b class="t">Why is the rise a curve?</b>Each addition neutralises a small amount of NaOH, but the total mass of solution (25 + V) g grows, so the temperature rise per addition gets gradually smaller. The cup also loses heat.|||<b class="t">Яагаад өсөлт нь муруй вэ?</b>Нэмэлт бүр бага хэмжээний NaOH-ийг саармагжуулах ч уусмалын нийт масс (25 + V) g өсөх тул нэг нэмэлтэд ногдох температурын өсөлт аажмаар багасна. Мөн аяга дулаан алддаг.@@</div>
      <div class="note exam">@@<b class="t">Examiner’s advice</b>There is no need to force the highest measured point onto either line: the true maximum temperature lies at the crossing point, <i>above</i> the measured one. Scales such as 3, 4 or 2.5 are hard to read and lose the mark. The y-axis does not need to start at 0.|||<b class="t">Шалгагчийн зөвлөмж</b>Хамгийн их хэмжсэн цэгийг хоёр шугамын аль алинд нь албадаж оруулах шаардлагагүй — жинхэнэ хамгийн их температур хэмжсэнээс <i>дээр</i> огтлолцол дээр байдаг. Масштабын 3, 4, 2.5 гэх мэт сонголт уншихад төвөгтэй тул оноо алдана. y тэнхлэгийг 0-ээс эхлүүлэх шаардлагагүй.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@1(c) Calculation|||1(c) Тооцоо@@</h3><span class="marks">[3]</span></div>
    <p class="small">@@Enter as <span class="mono">0.05025</span> or <span class="mono">5.025e-2</span>. Part (ii) is checked with your volume from 1(b) (ECF).|||<span class="mono">0.05025</span> эсвэл <span class="mono">5.025e-2</span> хэлбэрээр оруулна. (ii)-г таны 1(b)-ийн эзлэхүүнээр шалгана (ECF).@@</p>
    <div class="calc"><b>(i)</b><div class="row">n(NaOH) = <input id="c1i"> mol</div></div>
    <div class="calc"><b>(ii)</b>
      <div class="row">n(H₂SO₄) = <input id="c1iia"> mol</div>
      <div class="row">@@[H₂SO₄] in FA 2 =|||[H₂SO₄] FA 2-т =@@ <input id="c1iib"> mol dm⁻³</div></div>
    <div class="btnrow"><button class="btn primary" id="q1checkC">@@Check 1(c)|||1(c)-г шалгах@@</button> <button class="wb-link" data-wb="Q1">@@Work it out on the whiteboard|||Самбар дээр бодох@@</button></div>
    <div id="q1fbC" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: worked solution (example: lines cross at 25.1 cm³)|||Багшийн тайлбар: алхамчилсан бодолт (жишээ: огтлолцол 25.1 cm³)@@</summary><div>
      <p>@@<b>(i)</b> n(NaOH) = 25.0 × 2.01 / 1000 = <b>5.025 × 10⁻² mol</b> (or 5.03 × 10⁻²; 3–4 s.f.)|||<b>(i)</b> n(NaOH) = 25.0 × 2.01 / 1000 = <b>5.025 × 10⁻² mol</b> (эсвэл 5.03 × 10⁻²; 3–4 s.f.)@@</p>
      <p>@@<b>(ii) M1</b> From the equation 2NaOH : 1H₂SO₄ → n(H₂SO₄) = 0.05025 / 2 = <b>2.513 × 10⁻² mol</b>|||<b>(ii) M1</b> Тэгшитгэлээс 2NaOH : 1H₂SO₄ → n(H₂SO₄) = 0.05025 / 2 = <b>2.513 × 10⁻² mol</b>@@</p>
      <p>@@<b>(ii) M2</b> [H₂SO₄] = 0.02513 × 1000 / 25.1 = <b>1.00 mol dm⁻³</b> (3–4 s.f., working shown)|||<b>(ii) M2</b> [H₂SO₄] = 0.02513 × 1000 / 25.1 = <b>1.00 mol dm⁻³</b> (3–4 s.f., ажиллагааг харуулна)@@</p>
      <div class="note exam">@@<b class="t">Examiner’s advice</b>Forgetting the 2:1 ratio (getting 0.05025 × 1000/25.1 = 2.00) is the most common mistake. Divide by the <i>crossing point</i> volume from 1(b), not by 25.0 cm³ (the volume of FA 1).|||<b class="t">Шалгагчийн зөвлөмж</b>2:1 харьцааг мартах (0.05025 × 1000/25.1 = 2.00 гэж гаргах) — хамгийн түгээмэл алдаа. Хувааж буй эзлэхүүн нь 1(b)-ийн <i>огтлолцлын</i> утга — 25.0 cm³ (FA 1-ийн эзлэхүүн) биш.@@</div>
    </div></details>
  </div>
</section>

<!-- ===================== Q2 ===================== -->
<section class="tab" id="tab-q2">
  <div class="partnav" id="partnav-q2"></div>
  <div class="card">
    <div class="qhead"><h2>@@2. Finding the acid concentration from the mass of CO₂ given off|||2. Ялгарсан CO₂-ын массаар хүчлийн концентрацыг олох@@</h2><span class="marks">[14]</span></div>
    <div class="eq">Na₂CO₃(s) + H₂SO₄(aq) → Na₂SO₄(aq) + CO₂(g) + H₂O(l)</div>
    <ul><li>@@<b>FA 2</b>: the acid from question 1|||<b>FA 2</b> — 1-р асуултын хүчил@@</li><li>@@<b>FA 3</b>: Na₂CO₃ (solid)|||<b>FA 3</b> — Na₂CO₃ (хатуу)@@</li></ul>
    <details class="teach"><summary>@@Method (summary)|||Аргачлал (товч)@@</summary><div>
      <ol>
        <li>@@Use a 25 cm³ measuring cylinder to put 25.0 cm³ of FA 2 into a conical flask.|||25 cm³ хэмжээст цилиндрээр 25.0 cm³ FA 2-ыг конус колбонд хийнэ.@@</li>
        <li>@@Weigh the flask + acid and record the mass.|||Колбо + хүчлийг жинлэж бүртгэнэ.@@</li>
        <li>@@Weigh the container of FA 3 and record the mass.|||FA 3-тай савыг жинлэж бүртгэнэ.@@</li>
        <li>@@Carefully tip all the FA 3 into the flask and swirl from time to time until the fizzing stops.|||FA 3-ыг бүгдийг нь колбонд болгоомжтой хийж, хийн бөмбөлөг зогстол үе үе эргүүлнэ.@@</li>
        <li>@@Weigh the container with any FA 3 left in it and record the mass.|||Үлдэгдэл FA 3-тай савыг жинлэж бүртгэнэ.@@</li>
        <li>@@Calculate and record the mass of FA 3 added and the total mass of flask + acid + FA 3.|||Нэмсэн FA 3-ын масс, колбо + хүчил + FA 3-ын нийт массыг тооцож бүртгэнэ.@@</li>
        <li>@@When the fizzing has stopped, weigh the flask and its contents.|||Хийн бөмбөлөг зогссоны дараа колбо + агуулгыг жинлэнэ.@@</li>
        <li>@@Calculate and record the mass of CO₂ given off.|||Ялгарсан CO₂-ын массыг тооцож бүртгэнэ.@@</li>
      </ol>
    </div></details>
  </div>

  <div class="card">
    <h3>@@2(a) Simulation|||2(a) Симуляци@@</h3>
    <div class="grid-sim">
      <div>
        <svg id="q2svg" class="app-svg" viewBox="0 0 360 360" aria-label="@@Flask, measuring cylinder and balance|||Колбо, цилиндр, жинлүүр@@"></svg>
        <div class="readouts">
          <div class="readout">@@<b>Fizzing</b><span id="q2fizz">—</span>|||<b>Хийн бөмбөлөг</b><span id="q2fizz">—</span>@@</div>
        </div>
      </div>
      <div>
        <p>@@<span class="balance" id="q2bal">--.--</span> <span class="small muted">g · balance</span>|||<span class="balance" id="q2bal">--.--</span> <span class="small muted">g · жинлүүр</span>@@</p>
        <div class="btnrow">
          @@<span class="small" style="align-self:center">Pour FA 2 into the cylinder:</span>|||<span class="small" style="align-self:center">Цилиндрт FA 2 хийх:</span>@@
          <button class="btn" data-pour="5">+5</button><button class="btn" data-pour="1">+1</button><button class="btn" data-pour="0.2">+0.2</button><button class="btn" data-pour="-0.2">−0.2</button>
          <button class="btn" id="q2xfer">@@Pour into the flask|||Колбонд шилжүүлэх@@</button>
        </div>
        <div class="btnrow">
          <button class="btn primary" data-weigh="flask">@@Weigh the flask|||Колбыг жинлэх@@</button>
          <button class="btn primary" data-weigh="cont">@@Weigh the FA 3 container|||FA 3-ын савыг жинлэх@@</button>
        </div>
        <div class="btnrow">
          <button class="btn" id="q2tip">@@Add FA 3 to the flask|||FA 3-ыг колбонд хийх@@</button>
          <button class="btn" id="q2swirl">@@Swirl and wait 30 s|||Эргүүлээд 30 с хүлээх@@</button>
          <button class="btn ghost" id="q2reset">@@Start again|||Шинээр эхлэх@@</button>
        </div>
        <div class="grid2" style="gap:10px;align-items:start">
          <div><svg id="q2lens" class="lens" viewBox="0 0 170 300" aria-label="@@Close-up of the measuring cylinder|||Цилиндрийн томруулсан харагдац@@"></svg>
            <p class="small muted" style="max-width:180px">@@Measuring cylinder (0.5 cm³ divisions). Read from the <b>bottom</b> of the meniscus.|||Хэмжээст цилиндр (0.5 cm³ хуваарь). Менискийн <b>доод</b> ирмэгээр уншина.@@</p></div>
          <div>
            <div class="note small">@@<b class="t">Observation</b><span id="q2obs">Start by measuring 25.0 cm³ of FA 2 in the cylinder.</span>|||<b class="t">Ажиглалт</b><span id="q2obs">Цилиндрт 25.0 cm³ FA 2 хэмжиж эхэлнэ үү.</span>@@</div>
            <div class="note warn small" id="q2warn" hidden></div>
            <p class="small muted">@@Action log:|||Үйлдлийн бүртгэл:@@</p><div class="log" id="q2log"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@2(a) Results|||2(a) Үр дүн@@</h3><span class="marks">[5]</span></div>
    <p class="small">@@Seven rows: four weighings and three calculated masses. Write the headings, with units, in English.|||Долоон мөр: дөрвөн жинлэлт + гурван тооцоолсон масс. Гарчгийг нэгжтэй нь англиар бич.@@</p>
    <div class="tablewrap"><table class="rt" id="q2table"><thead><tr><th>@@Heading (with unit)|||Гарчиг (нэгжтэй)@@</th><th>@@Value|||Утга@@</th></tr></thead><tbody></tbody></table></div>
    <div class="btnrow"><button class="btn primary" id="q2checkA">@@Check 2(a)|||2(a)-г шалгах@@</button></div>
    <div id="q2fbA" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: marking points for 2(a)|||Багшийн тайлбар: 2(a)-ийн онооны цэгүүд@@</summary><div>
      <p>@@<b>I</b>: correct headings and units: (1) <span class="mono">mass of flask + acid / g</span>; (2) <span class="mono">mass of container + FA 3 / g</span>; (3) <span class="mono">mass of container (with residue) / g</span>; <span class="mono">mass of FA 3 added / g</span>; <span class="mono">mass of flask + acid + FA 3 / g</span>; (4) <span class="mono">mass of flask and contents after reaction / g</span>; <span class="mono">mass of carbon dioxide / g</span>.|||<b>I</b> — Гарчиг, нэгж зөв: (1) <span class="mono">mass of flask + acid / g</span>; (2) <span class="mono">mass of container + FA 3 / g</span>; (3) <span class="mono">mass of container (with residue) / g</span>; <span class="mono">mass of FA 3 added / g</span>; <span class="mono">mass of flask + acid + FA 3 / g</span>; (4) <span class="mono">mass of flask and contents after reaction / g</span>; <span class="mono">mass of carbon dioxide / g</span>.@@</p>
      <p>@@<b>II</b>: all four weighings present <i>and</i> all to 2 or 3 decimal places.|||<b>II</b> — Дөрвөн жинлэлт бүгд байгаа <i>ба</i> бүгд 2 эсвэл 3 аравтын оронтой.@@</p>
      <p>@@<b>III</b>: mass of FA 3 = (2) − (3) <i>and</i> total mass = (1) + [(2) − (3)] correct.|||<b>III</b> — FA 3-ын масс = (2) − (3) <i>ба</i> нийт масс = (1) + [(2) − (3)] зөв.@@</p>
      <p>@@<b>IV</b>: mass of CO₂ = (1) + (2) − (3) − (4) correct.|||<b>IV</b> — CO₂-ын масс = (1) + (2) − (3) − (4) зөв.@@</p>
      <p>@@<b>V (accuracy)</b>: the ratio m(FA 3) / m(CO₂) is within ±15% of the supervisor’s. Here the supervisor’s ratio ≈ <b>5.72</b>.|||<b>V (нарийвчлал)</b> — m(FA 3) / m(CO₂) харьцаа хянагчийнхаас ±15%-ийн дотор. Энд хянагчийн харьцаа ≈ <b>5.72</b>.@@</p>
      <div class="note exam">@@<b class="t">Examiner’s advice</b>If you weigh before the fizzing has fully stopped, not all the CO₂ has escaped, so the mass loss comes out too small. Tipping the Na₂CO₃ in too fast makes the froth spray out and liquid is lost (the loss comes out too large). Do not forget to weigh the container with its residue: do not assume “mass of FA 3 = 6.0 g”.|||<b class="t">Шалгагчийн зөвлөмж</b>Хийн бөмбөлөг бүрэн зогсохоос өмнө жинлэвэл CO₂ бүрэн гараагүй тул массын алдагдал бага гарна. Na₂CO₃-ыг огцом асгавал хөөс үсэрч шингэн алдагдана (алдагдал их гарна). Үлдэгдэлтэй савыг жинлэхээ бүү мартаарай — «FA 3-ын масс = 6.0 g» гэж таамаглаж болохгүй.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@2(b) Calculation|||2(b) Тооцоо@@</h3><span class="marks">[4]</span></div>
    <p class="small">M<sub>r</sub>(CO₂) = 44.0, M<sub>r</sub>(Na₂CO₃) = 106.0. 2–4 s.f.</p>
    <div class="calc"><b>(i)</b><div class="row">n(CO₂) = <input id="c2i"> mol</div></div>
    <div class="calc">@@<b>(ii)</b> Show that Na₂CO₃ was in excess.|||<b>(ii)</b> Na₂CO₃ илүүдэл байсныг харуул.@@
      <div class="row">@@n(Na₂CO₃) added =|||n(Na₂CO₃) нэмсэн =@@ <input id="c2iia"> mol</div>
      <div class="row">@@Conclusion:|||Дүгнэлт:@@ <select id="c2iib" style="max-width:100%">
        <option value="">@@choose…|||сонго…@@</option>
        <option value="a">@@n(Na₂CO₃) added &gt; n(CO₂) = n(Na₂CO₃) that reacted → Na₂CO₃ in excess|||n(Na₂CO₃) нэмсэн &gt; n(CO₂) = урвалд орсон n(Na₂CO₃) → Na₂CO₃ илүүдэл@@</option>
        <option value="b">@@n(Na₂CO₃) added &lt; n(CO₂) → Na₂CO₃ in excess|||n(Na₂CO₃) нэмсэн &lt; n(CO₂) → Na₂CO₃ илүүдэл@@</option>
        <option value="c">@@n(Na₂CO₃) added = 2 × n(CO₂), so the acid is in excess|||n(Na₂CO₃) нэмсэн = 2 × n(CO₂) учраас хүчил илүүдэл@@</option>
      </select></div></div>
    <div class="calc"><b>(iii)</b><div class="row">@@[H₂SO₄] in FA 2 =|||[H₂SO₄] FA 2-т =@@ <input id="c2iii"> mol dm⁻³</div></div>
    <div class="btnrow"><button class="btn primary" id="q2checkB">@@Check 2(b)|||2(b)-г шалгах@@</button> <button class="wb-link" data-wb="Q2">@@Work it out on the whiteboard|||Самбар дээр бодох@@</button></div>
    <div id="q2fbB" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes (example: FA 3 = 5.98 g, CO₂ = 1.05 g)|||Багшийн тайлбар (жишээ: FA 3 = 5.98 g, CO₂ = 1.05 g)@@</summary><div>
      <p><b>(i)</b> n(CO₂) = 1.05 / 44.0 = <b>0.0239 mol</b></p>
      <p>@@<b>(ii) M1</b> n(Na₂CO₃) = 5.98 / 106 = <b>0.0564 mol</b> (or mass needed = 0.0239 × 106 = 2.53 g)|||<b>(ii) M1</b> n(Na₂CO₃) = 5.98 / 106 = <b>0.0564 mol</b> (эсвэл шаардлагатай масс = 0.0239 × 106 = 2.53 g)@@</p>
      <p>@@<b>(ii) M2</b> In the equation Na₂CO₃ : CO₂ = 1 : 1, so only 0.0239 mol reacted; 0.0564 &gt; 0.0239 → Na₂CO₃ <b>in excess</b>.|||<b>(ii) M2</b> Тэгшитгэлд Na₂CO₃ : CO₂ = 1 : 1, тиймээс урвалд 0.0239 mol л орсон; 0.0564 &gt; 0.0239 → Na₂CO₃ <b>илүүдэл</b>.@@</p>
      <p>@@<b>(iii)</b> n(H₂SO₄) = n(CO₂) = 0.0239 mol (in 25.0 cm³) → [H₂SO₄] = 0.0239 × 1000/25.0 = <b>0.955 mol dm⁻³</b>|||<b>(iii)</b> n(H₂SO₄) = n(CO₂) = 0.0239 mol (25.0 cm³-т) → [H₂SO₄] = 0.0239 × 1000/25.0 = <b>0.955 mol dm⁻³</b>@@</p>
      <p class="small muted">@@Why it comes out lower than the result of question 1 (~1.00): some CO₂ stays dissolved in the solution, and a measuring cylinder is less precise than a pipette.|||1-р асуултын үр дүнгээс (~1.00) бага гарах шалтгаан: CO₂-ын зарим нь уусмалд уусаж үлддэг, мөн цилиндрийн нарийвчлал пипеткээс муу.@@</p>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@2(c) Evaluating the method|||2(c) Аргын үнэлгээ@@</h3><span class="marks">[4]</span></div>
    <p class="small">@@<b>(i)</b> A student used a small beaker instead of a conical flask. Why is a conical flask better? [1]|||<b>(i)</b> Сурагч конус колбоны оронд жижиг стакан хэрэглэв. Конус колбо яагаад илүү вэ? [1]@@</p>
    <textarea id="q2ci" placeholder="@@In English…|||Англиар...@@"></textarea>
    <p class="small">@@<b>(ii)</b> Why would doing the method with a different reaction be unsuitable? (do not give reasons about the amounts of reagents) [3]|||<b>(ii)</b> Аргыг өөр урвалаар хийх санаа яагаад тохиромжгүй вэ? (урвалжийн хэмжээтэй холбоотой шалтгаан бичихгүй) [3]@@</p>
    <p class="small">@@Student 1: use <b>magnesium</b> instead of Na₂CO₃.|||Сурагч 1: Na₂CO₃-ын оронд <b>магни</b> хэрэглэх.@@</p><textarea id="q2cii1" placeholder="@@In English…|||Англиар...@@"></textarea>
    <p class="small">@@Student 2: use <b>calcium carbonate</b> instead of Na₂CO₃.|||Сурагч 2: Na₂CO₃-ын оронд <b>кальцийн карбонат</b> хэрэглэх.@@</p><textarea id="q2cii2" placeholder="@@In English…|||Англиар...@@"></textarea>
    <div class="btnrow"><button class="btn primary" id="q2checkC">@@Check 2(c)|||2(c)-г шалгах@@</button></div>
    <div id="q2fbC" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 2(c)|||Багшийн тайлбар: 2(c)@@</summary><div>
      <p>@@<b>(i)</b> The reaction froths strongly / gives lots of bubbles <i>and</i> is likely to <b>overflow / lose liquid</b> from a beaker. The narrow neck of a conical flask holds back the spray. (Both parts are needed.)|||<b>(i)</b> Урвал хүчтэй хөөсөрнө / их бөмбөлөг гарна <i>ба</i> стаканаас <b>халих / шингэн алдагдах</b> магадлал их. Конус колбоны нарийн хүзүү үсрэлтийг барина. (Хоёр хэсэг хоёулаа хэрэгтэй.)@@</p>
      <p>@@<b>Student 1, M1</b> hydrogen has a <b>very low density</b> (M<sub>r</sub> = 2); <b>M2</b> the mass loss is so small that the balance uncertainty becomes <b>very large as a percentage</b>. Example: 0.025 mol H₂ = 0.050 g ↔ 0.025 mol CO₂ = 1.10 g.|||<b>Сурагч 1 — M1</b> Устөрөгчийн <b>нягт маш бага</b> (M<sub>r</sub> = 2); <b>M2</b> массын алдагдал маш бага тул жинлүүрийн алдаа <b>хувиар маш том</b> болно. Жишээ: 0.025 mol H₂ = 0.050 g ↔ 0.025 mol CO₂ = 1.10 g.@@</p>
      <p>@@<b>Student 2, M3</b> <b>calcium sulfate is insoluble / only slightly soluble</b>, so it coats the CaCO₃ and stops the reaction.|||<b>Сурагч 2 — M3</b> <b>Кальцийн сульфат уусдаггүй / бага уусдаг</b> тул CaCO₃-ыг бүрхэж урвалыг зогсооно.@@</p>
      <div class="eq">Mg + H₂SO₄ → MgSO₄ + H₂ &nbsp;&nbsp;|&nbsp;&nbsp; CaCO₃ + H₂SO₄ → CaSO₄(s) + CO₂ + H₂O</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@2(d) Balance uncertainty|||2(d) Жинлүүрийн алдаа@@</h3><span class="marks">[1]</span></div>
    <div class="calc">
      <div class="row">@@Uncertainty of one reading = ±|||Нэг заалтын тодорхойгүй байдал = ±@@ <input id="c2d1" style="width:110px"> g</div>
      <div class="row">@@Maximum percentage uncertainty in the mass of FA 3 =|||FA 3-ын массын хамгийн их хувийн алдаа =@@ <input id="c2d2" style="width:110px"> %</div></div>
    <div class="btnrow"><button class="btn primary" id="q2checkD">@@Check 2(d)|||2(d)-г шалгах@@</button></div>
    <div id="q2fbD" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 2(d)|||Багшийн тайлбар: 2(d)@@</summary><div>
      <p>@@Balance reading to 2 decimal places: U = <b>0.005 g</b> (half the difference between two divisions) or 0.01 g. The mass of FA 3 was found as the difference of <b>two</b> weighings, so:|||2 аравтын оронтой жинлүүр: U = <b>0.005 g</b> (хоёр хуваарийн зөрүүний хагас) эсвэл 0.01 g. FA 3-ын масс <b>хоёр</b> жинлэлтийн зөрүүгээр олдсон тул:@@</p>
      <div class="eq">@@% uncertainty = (2 × U) / m(FA 3) × 100 = (2 × 0.005) / 5.98 × 100 = 0.17 %|||% алдаа = (2 × U) / m(FA 3) × 100 = (2 × 0.005) / 5.98 × 100 = 0.17 %@@</div>
      <p class="small muted">@@For a balance reading to 3 decimal places, U = 0.0005 or 0.001 g.|||3 аравтын оронтой жинлүүр бол U = 0.0005 эсвэл 0.001 g.@@</p>
    </div></details>
  </div>
</section>

<!-- ===================== Q3 ===================== -->
<section class="tab" id="tab-q3">
  <div class="partnav" id="partnav-q3"></div>
  <div class="card">
    <div class="qhead"><h2>@@3. Three compounds of one metal|||3. Нэг металлын гурван нэгдэл@@</h2><span class="marks">[14]</span></div>
    <p>@@<b>FA 4, FA 5 and FA 6</b> are compounds of one metal in different oxidation states.|||<b>FA 4, FA 5, FA 6</b> нь нэг металлын өөр өөр исэлдэлтийн зэрэгтэй нэгдлүүд.@@</p>
    <p class="small">@@Write every observation clearly: colour changes, any precipitate and whether it dissolves in excess reagent, any gas and the test that identified it. If nothing happens, write <b>no change</b>. Heat solutions in a boiling tube and solids in a hard-glass test-tube.|||Ажиглалт бүрийг тодорхой бич: өнгөний өөрчлөлт, тунадас ба илүүдэл реагентэд уусах эсэх, хий ба түүнийг илрүүлсэн сорил. Өөрчлөлтгүй бол <b>no change</b>. Уусмал халаах бол boiling tube, хатуу бодис халаах бол hard-glass test-tube хэрэглэнэ.@@</p>
    <div class="note warn small">@@<b class="t">Safety</b>Concentrated HCl is corrosive. Fill each test-tube with water as soon as you have made your observations. Chlorine is a toxic gas.|||<b class="t">Аюулгүй ажиллагаа</b>Төвлөрсөн HCl идэмхий. Ажиглалтаа хийсэн даруйдаа хуруу шилийг усаар дүүргэнэ. Хлор хортой хий.@@</div>
  </div>

  <div class="card">
    <h3>@@Test bench|||Туршилтын ширээ@@</h3>
    <div class="btnrow samples" id="q3samples"></div>
    <div class="bench">
      <div>
        <p id="q3sampleinfo" class="small"></p>
        <div class="btnrow" id="q3actions"></div>
        <div class="obsbox" id="q3obs">@@<span class="muted">Choose a sample, then do a test.</span>|||<span class="muted">Дээжээ сонгоод сорил хийнэ үү.</span>@@</div>
        <label class="small"><input type="checkbox" id="q3reveal"> @@If you get stuck: show the observations described in English (practice mode)|||Хэрэв гацвал: ажиглалтыг англиар тайлбарлан харуулах (дадлагын горим)@@</label>
      </div>
      <div><svg id="q3tube" class="tube-svg" viewBox="0 0 200 300" aria-label="@@Test-tube|||Хуруу шил@@"></svg></div>
    </div>
  </div>

  <div class="card">
    <div class="qhead"><h3>3(a) FA 4</h3><span class="marks">[5]</span></div>
    <p class="small">@@<b>(i)</b> Heat solid FA 4 in a hard-glass test-tube, gently at first and then strongly. Record all your observations. Let it cool and keep it for (iii). [2]|||<b>(i)</b> Хатуу FA 4-ийг hard-glass хуруу шилэнд эхлээд зөөлөн, дараа нь хүчтэй халаана. Бүх ажиглалтаа бич. Хөргөөд (iii)-д хадгална. [2]@@</p>
    <textarea id="q3ai" placeholder="Observations..."></textarea>
    <p class="small">@@<b>(ii)</b> Dissolve FA 4 in distilled water to a depth of about 5 cm and add about 1 cm of dilute H₂SO₄. Table 3.1 [2]|||<b>(ii)</b> FA 4-ийг ~5 cm гүн нэрмэл усанд уусгаж, ~1 cm шингэрүүлсэн H₂SO₄ нэмнэ. Хүснэгт 3.1 [2]@@</p>
    <div class="tablewrap"><table class="rt"><tr><th style="width:34%">test</th><th>observations</th></tr>
      <tr><th class="mini">Test 1: aqueous FA 4 + aqueous iron(II) sulfate</th><td><textarea id="q3aii1"></textarea></td></tr>
      <tr><th class="mini">Test 2: aqueous FA 4 + hydrogen peroxide</th><td><textarea id="q3aii2"></textarea></td></tr></table></div>
    <p class="small">@@<b>(iii)</b> Add distilled water to a depth of 5 cm to the cooled test-tube from (i). Colour: [1]|||<b>(iii)</b> (i)-ийн хөргөсөн хуруу шилэнд 5 cm гүн нэрмэл ус нэмнэ. Өнгө: [1]@@</p>
    <input id="q3aiii" placeholder="colour">
    <div class="btnrow"><button class="btn primary" id="q3checkA">@@Check 3(a)|||3(a)-г шалгах@@</button></div>
    <div id="q3fbA" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 3(a)|||Багшийн тайлбар: 3(a)@@</summary><div>
      <p>@@<b>How marks are counted:</b> each correct observation marked «*» earns one star; <b>2 stars = 1 mark</b> (rounded down).|||<b>Онооны тооцоо:</b> «*» бүхий зөв ажиглалт бүр нэг од; <b>2 од = 1 оноо</b> (доош тоймлоно).@@</p>
      <p>@@<b>(i)</b> (dark) purple crystals*; black powder/residue*; crystals spit and crackle*; the gas relights a glowing splint*.|||<b>(i)</b> (бараан) нил ягаан талст*; хар нунтаг/үлдэгдэл*; талст үсэрч шажигнана*; хий цогтой хэлтэрхийг дахин асаана*.@@</p>
      <div class="eq">2KMnO₄(s) → K₂MnO₄(s) + MnO₂(s) + O₂(g)</div>
      <p>@@<b>(ii)</b> Test 1: purple solution* → turns yellow*. Test 2: purple → colourless*; bubbles of gas*; the gas relights a glowing splint*.|||<b>(ii)</b> Test 1: нил ягаан уусмал* → шар уусмал* болно. Test 2: нил ягаан → өнгөгүй*; хийн бөмбөлөг*; хий цогтой хэлтэрхийг асаана*.@@</p>
      <div class="eq">MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</div>
      <div class="eq">2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O</div>
      <p>@@<b>(iii)</b> (dark) <b>green</b> solution: manganate(VI), MnO₄²⁻.|||<b>(iii)</b> (бараан) <b>ногоон</b> уусмал — манганат(VI), MnO₄²⁻.@@</p>
      <div class="note exam">@@<b class="t">Examiner’s advice</b>In Test 1 students often forget to record the first colour (purple): the mark scheme gives a star for this observation. Writing “clear” instead of “colourless” loses the mark.|||<b class="t">Шалгагчийн зөвлөмж</b>Test 1-д эхний өнгийг (нил ягаан) бичихийг мартдаг — mark scheme энэ ажиглалтад од өгсөн. «Өнгөгүй болсон» гэхийн оронд «clear» гэж бичвэл оноо алдана.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@3(b) FA 5: Table 3.2|||3(b) FA 5 — Хүснэгт 3.2@@</h3><span class="marks">[3]</span></div>
    <p class="small">@@Dissolve FA 5 in a half-filled boiling tube (you may need to warm it). Use a 1 cm depth of solution for each test.|||FA 5-ыг хагас дүүргэсэн boiling tube-д уусгана (халаах хэрэгтэй байж болно). Сорил бүрт 1 cm гүн уусмал авна.@@</p>
    <div class="tablewrap"><table class="rt"><tr><th style="width:34%">test</th><th>observations</th></tr>
      <tr><th class="mini">Test 1: dilute HNO₃, then AgNO₃(aq)</th><td><textarea id="q3b1"></textarea></td></tr>
      <tr><th class="mini">Test 2: BaCl₂(aq) or Ba(NO₃)₂(aq), then dilute HNO₃</th><td><textarea id="q3b2"></textarea></td></tr>
      <tr><th class="mini">Test 3: NaOH(aq), then H₂O₂</th><td><textarea id="q3b3"></textarea></td></tr></table></div>
    <div class="btnrow"><button class="btn primary" id="q3checkB">@@Check 3(b)|||3(b)-г шалгах@@</button></div>
    <div id="q3fbB" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 3(b)|||Багшийн тайлбар: 3(b)@@</summary><div>
      <p>@@Test 1: HNO₃, no change; AgNO₃, no change* (no halide ion).<br> Test 2: Ba²⁺, white precipitate; HNO₃, insoluble* → SO₄²⁻.<br> Test 3: NaOH, pale (off-white / cream / buff) precipitate*; the precipitate darkens / is insoluble in excess*; H₂O₂, black / dark brown solid*; bubbles of gas or the splint relights*.|||Test 1: HNO₃ — no change, AgNO₃ — no change* (галоген ион алга).<br>
      Test 2: Ba²⁺ — цагаан тунадас, HNO₃ — уусахгүй* → SO₄²⁻.<br>
      Test 3: NaOH — цайвар (off-white / cream / buff) тунадас*; тунадас бараантна / илүүдэлд уусахгүй*; H₂O₂ — хар / бараан хүрэн хатуу бодис*; хийн бөмбөлөг эсвэл хэлтэрхий асна*.@@</p>
      <div class="eq">Mn²⁺ + 2OH⁻ → Mn(OH)₂(s) &nbsp;|&nbsp; Mn(OH)₂ + H₂O₂ → MnO₂ + 2H₂O &nbsp;|&nbsp; 2H₂O₂ —MnO₂→ 2H₂O + O₂</div>
      <p class="small muted">@@6 stars, at most 3 marks (2 stars = 1 mark).|||Од 6, дээд тал нь 3 оноо (2 од = 1 оноо).@@</p>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@3(c) FA 6: Table 3.3|||3(c) FA 6 — Хүснэгт 3.3@@</h3><span class="marks">[3]</span></div>
    <p class="small">@@Use one spatula tip of solid FA 6 for each test. Identify any gas given off.|||Сорил бүрт нэг халбагын үзүүр хатуу FA 6. Ялгарсан хийг тодорхойл.@@</p>
    <div class="tablewrap"><table class="rt"><tr><th style="width:34%">test</th><th>observations and gases produced</th></tr>
      <tr><th class="mini">Test 1: 1 cm dilute HNO₃</th><td><textarea id="q3c1"></textarea></td></tr>
      <tr><th class="mini">Test 2: a few drops concentrated HCl</th><td><textarea id="q3c2"></textarea></td></tr>
      <tr><th class="mini">Test 3: 1 cm hydrogen peroxide</th><td><textarea id="q3c3"></textarea></td></tr></table></div>
    <div class="btnrow"><button class="btn primary" id="q3checkC">@@Check 3(c)|||3(c)-г шалгах@@</button></div>
    <div id="q3fbC" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 3(c)|||Багшийн тайлбар: 3(c)@@</summary><div>
      <p>@@Test 1: no change / the solid does not dissolve*.<br> Test 2: bubbles of gas*; bleaches damp litmus*; <b>chlorine</b>*.<br> Test 3: bubbles of gas or the splint relights*; <b>oxygen</b>*.|||Test 1: no change / хатуу бодис уусахгүй*.<br>
      Test 2: хийн бөмбөлөг*; чийгтэй лакмусыг цайруулна*; <b>хлор</b>*.<br>
      Test 3: хийн бөмбөлөг эсвэл хэлтэрхий асна*; <b>хүчилтөрөгч</b>*.@@</p>
      <div class="eq">MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O</div>
      <p class="small muted">@@Testing for chlorine: damp blue litmus first turns red, then is bleached. Chlorine is not in the “Tests for gases” table of the exam paper, but it is part of the syllabus.|||Хлорыг илрүүлэх: чийгтэй цэнхэр лакмус эхлээд улайж, дараа нь цайрна. Шалгалтын «Tests for gases» хүснэгтэд хлор байхгүй ч энэ нь syllabus-д багтдаг.@@</p>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@3(d) Conclusions|||3(d) Дүгнэлт@@</h3><span class="marks">[3]</span></div>
    <div class="calc"><b>(i)</b><div class="row">@@Metal:|||Металл:@@ <input id="q3di" placeholder="metal"> <span class="marks">[1]</span></div></div>
    <div class="calc"><b>(ii)</b><div class="row">FA 4 <input id="q3d4" style="width:80px"> FA 5 <input id="q3d5" style="width:80px"> FA 6 <input id="q3d6" style="width:80px"> <span class="marks">[2]</span></div></div>
    <div class="btnrow"><button class="btn primary" id="q3checkD">@@Check 3(d)|||3(d)-г шалгах@@</button> <button class="wb-link" data-wb="Q3">@@Whiteboard|||Самбар@@</button></div>
    <div id="q3fbD" class="fb"></div>
    <details class="teach"><summary>@@Teacher’s notes: 3(d)|||Багшийн тайлбар: 3(d)@@</summary><div>
      <p>@@<b>(i)</b> manganese (Mn). <b>(ii)</b> FA 4 = KMnO₄: <b>+7</b>; FA 5 = MnSO₄: <b>+2</b>; FA 6 = MnO₂: <b>+4</b>. All three correct = 2 marks, two correct = 1 mark.|||<b>(i)</b> manganese (Mn). <b>(ii)</b> FA 4 = KMnO₄: <b>+7</b>; FA 5 = MnSO₄: <b>+2</b>; FA 6 = MnO₂: <b>+4</b>. Гурвуулаа зөв = 2 оноо, хоёр нь зөв = 1 оноо.@@</p>
      <p class="small">@@Evidence: purple, an oxidising agent (oxidises Fe²⁺) → +7; a pale precipitate that darkens in air → Mn²⁺; black, catalyses the decomposition of H₂O₂, oxidises concentrated HCl to Cl₂ → MnO₂ (+4).|||Нотолгоо: нил ягаан, исэлдүүлэгч (Fe²⁺-ийг исэлдүүлнэ) → +7; цайвар тунадас агаарт бараантдаг → Mn²⁺; хар, H₂O₂-ыг катализаар задлах, төвлөрсөн HCl-ийг Cl₂ болгон исэлдүүлэх → MnO₂ (+4).@@</p>
    </div></details>
  </div>
</section>

<!-- ===================== REFERENCE ===================== -->
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
      <tr><td>Cl₂</td><td>bleaches damp litmus paper</td></tr>
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
    <p class="mono small">H 1.0 · C 12.0 · O 16.0 · Na 23.0 · S 32.1 · Mn 54.9 · K 39.1<br>CO₂ = 44.0 · Na₂CO₃ = 106.0 · NaOH = 40.0</p>
  </div>
</section>

<!-- ===================== SCORE ===================== -->
<section class="tab" id="tab-score">
  <div class="card">
    <h2>@@Summary of results|||Дүнгийн хураангуй@@</h2>
    <div id="scoreBody"></div>
    <div class="btnrow"><button class="btn ghost" id="resetAll">@@Clear all answers|||Бүх хариултыг арилгах@@</button></div>
  </div>
</section>
</main>

<footer>@@Independent study tool, not an official Cambridge product. Practice material. Questions and mark scheme © Cambridge University Press &amp; Assessment 2024; paraphrased here with added explanations. Values in the simulation are modelled and will not match real laboratory results exactly.|||Бие даасан сургалтын хэрэгсэл, Cambridge-ийн албан ёсны бүтээгдэхүүн биш. Дадлагын материал. Асуулт ба mark scheme © Cambridge University Press &amp; Assessment 2024; энд утгачилан, монгол тайлбартай ашигласан. Симуляцийн тоон утгууд нь загварчлал бөгөөд бодит лабораторийн үр дүнтэй яг таарахгүй.@@</footer>

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
const PFX="chem9701_35w24_";
/* ---------------- helpers ---------------- */
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
  if(c.includes(".")){const d=c.replace(".","").replace(/^0+/,"");return d.length;}
  const d=c.replace(/^0+/,"").replace(/0+$/,"");return d.length||0;}
function dp(s){const c=clean(s);if(/e/i.test(c))return -1;const i=c.indexOf(".");return i<0?0:c.length-i-1;}
function close(a,b,rel){if(!isFinite(a)||!isFinite(b))return false;return Math.abs(a-b)<=Math.abs(b)*rel+1e-12;}
function r2(v){return Math.round((v+1e-9)*100)/100;}
function f2(v){return r2(v).toFixed(2);}
function gauss(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function li(ok,text){return \`<div>\${ok?'<span class="y">✓</span>':'<span class="n">✗</span>'} \${text}</div>\`;}
function fbBlock(lines,got,max){return lines.join("")+\`@@<div style="margin-top:6px">Marks: <span class="markbox">\${got} / \${max}</span></div>|||<div style="margin-top:6px">Оноо: <span class="markbox">\${got} / \${max}</span></div>@@\`;}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

/* ---------------- tabs & theme ---------------- */
function showTab(id){$$("#tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.tab===id?"true":"false"));
  $$("section.tab").forEach(s=>s.classList.toggle("active",s.id==="tab-"+id));store.set("tab",id);window.scrollTo({top:0});}
$$("#tabs button").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
showTab(store.get("tab","ov"));


/* ---------------- score ---------------- */
const PARTS=[["q1a","1(a)",4],["q1b","1(b)",5],["q1c","1(c)",3],["q2a","2(a)",5],["q2b","2(b)",4],["q2c","2(c)",4],["q2d","2(d)",1],
 ["q3a","3(a)",5],["q3b","3(b)",3],["q3c","3(c)",3],["q3d","3(d)",3]];
const SCORE=store.get("score",{});
function setScore(k,g){SCORE[k]=g;store.set("score",SCORE);renderScore();}
function grade(t){return t>=24?"A":t>=22?"B":t>=19?"C":t>=16?"D":t>=14?"E":"U";}
/* parts marked by matching words in written answers: a teacher should confirm these */
const KEYWORD_PARTS=new Set(["q2c","q3a","q3b","q3c"]);
const PART_BUTTON={q1a:"q1checkA",q1b:"q1checkB",q1c:"q1checkC",q2a:"q2checkA",q2b:"q2checkB",q2c:"q2checkC",q2d:"q2checkD",q3a:"q3checkA",q3b:"q3checkB",q3c:"q3checkC",q3d:"q3checkD"};
const QUESTIONS=[
 {id:"q1",n:1,title:"@@Thermometric titration|||Дулааны титрлэлт@@",text:"@@Adding H₂SO₄ to NaOH and using the temperature change to find the acid concentration; graph|||NaOH-д H₂SO₄ нэмж температурын өөрчлөлтөөр хүчлийн концентрацыг олох; график@@",marks:12,min:40},
 {id:"q2",n:2,title:"@@Mass of CO₂|||CO₂-ын масс@@",text:"@@Finding the acid concentration from the mass of CO₂ given off by Na₂CO₃; uncertainty|||Na₂CO₃-аас ялгарсан CO₂-ын массаар хүчлийн концентрацыг олох; алдааны тооцоо@@",marks:14,min:35},
 {id:"q3",n:3,title:"@@Qualitative analysis|||Чанарын шинжилгээ@@",text:"@@Three compounds of one metal: deducing the oxidation states|||Нэг металлын гурван нэгдэл: исэлдэлтийн зэргийг тогтоох@@",marks:14,min:35}];
function goPart(k){showTab("q"+k[1]);$("#"+PART_BUTTON[k]).closest(".card").scrollIntoView({block:"start"});}
document.addEventListener("click",e=>{const go=e.target.closest("[data-go]");if(go){showTab(go.dataset.go);return;}const p=e.target.closest("[data-part]");if(p)goPart(p.dataset.part);});
function renderProgress(){
  $("#qcards").innerHTML=QUESTIONS.map(Q=>{const parts=PARTS.filter(([k])=>k[1]===String(Q.n));const seen=parts.filter(([k])=>SCORE[k]!=null);const got=seen.reduce((a,[k])=>a+SCORE[k],0);
    return \`<div class="qcard"><h3>\${Q.n}. \${Q.title}</h3><p class="small muted">\${Q.text}</p><div class="meta"><span>≈\${Q.min} @@min</span><span>|||мин</span><span>@@\${seen.length?got:"–"} / \${Q.marks} @@marks</span></div><div class="bar"><i style="width:|||оноо</span></div><div class="bar"><i style="width:@@\${got/Q.marks*100}%"></i></div><button class="btn \${seen.length?"":"primary"}" data-go="\${Q.id}">\${seen.length?"@@Continue|||Үргэлжлүүлэх@@":"@@Start|||Эхлэх@@"}</button></div>\`;}).join("");
  QUESTIONS.forEach(Q=>{const parts=PARTS.filter(([k])=>k[1]===String(Q.n));
    $("#partnav-"+Q.id).innerHTML=parts.map(([k,l,m])=>{const g=SCORE[k];const tone=g==null?"":g===m?"full":g>0?"some":"none";return \`<button class="\${tone}" data-part="\${k}">\${l} \${g==null?"–":g}/\${m}</button>\`;}).join("");
    const tab=$(\`#tabs button[data-tab="\${Q.id}"]\`);const seen=parts.filter(([k])=>SCORE[k]!=null);const got=seen.reduce((a,[k])=>a+SCORE[k],0);
    let mark=tab.querySelector(".tabscore");if(!mark){mark=document.createElement("span");mark.className="tabscore";tab.appendChild(mark);}mark.textContent=seen.length?\`\${got}/\${Q.marks}\`:"";});}
QUESTIONS.forEach((Q,i)=>{const next=QUESTIONS[i+1];$("#tab-"+Q.id).insertAdjacentHTML("beforeend",\`<div class="nextrow"><button class="btn primary" data-go="\${next?next.id:"score"}">\${next?"@@Question |||@@"+next.n+"@@|||-р асуулт руу@@":"@@See your results|||Дүнгээ харах@@"} →</button></div>\`);});
function renderScore(){let tot=0;let rows="";const q={1:[0,12],2:[0,14],3:[0,14]};
  PARTS.forEach(([k,l,m])=>{const g=SCORE[k];if(g!=null){tot+=g;q[l[0]][0]+=g;}
    rows+=\`<tr><td>\${l}\${KEYWORD_PARTS.has(k)?'@@<span class="tag">keyword</span>|||<span class="tag">түлхүүр үг</span>@@':""}</td><td>\${g==null?'@@<span class="muted">not checked</span>|||<span class="muted">шалгаагүй</span>@@':g}</td><td>\${m}</td><td style="width:40%"><div class="bar"><i style="width:\${g==null?0:g/m*100}%"></i></div></td></tr>\`;});
  $("#scoreChip").textContent=\`\${tot} / 40\`;
  const checked=PARTS.filter(([k])=>SCORE[k]!=null).length;
  const lost=p=>p.g==null?-1:p.m-p.g;
  const todo=PARTS.map(([k,l,m])=>({k,l,m,g:SCORE[k]})).filter(p=>p.g==null||p.g<p.m).sort((a,b)=>lost(b)-lost(a));
  const todoHtml=todo.length?\`<ul class="todo">\${todo.slice(0,4).map(p=>\`<li><span>\${p.l} <span class="small muted">\${p.g==null?\`@@not checked · \${p.m} marks|||шалгаагүй · \${p.m} оноо@@\`:\`@@\${p.m-p.g} marks lost|||\${p.m-p.g} оноо алдсан@@\`}</span></span><button class="btn" data-part="\${p.k}@@">Go</button></li>|||">Очих</button></li>@@\`).join("")}</ul>\`:'@@<p class="small">Full marks on every part. Now try it again against the clock.</p>|||<p class="small">Бүх хэсэгт бүтэн оноо авлаа. Одоо цагаа барин дахин хийж үзээрэй.</p>@@';
  $("#scoreBody").innerHTML=\`<p>\${checked===PARTS.length?\`@@Total: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span>: about level <b>\${grade(tot)}</b> by the thresholds for this component (A 24, B 22, C 19, D 16, E 14).|||Нийт: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span> — энэ хэсгийн босгоор ойролцоогоор <b>\${grade(tot)}</b> түвшин (A 24, B 22, C 19, D 16, E 14).@@\`:\`@@Current marks: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span>. Parts checked: \${checked} / \${PARTS.length}. A level appears once every part has been checked.|||Одоогийн оноо: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span>. Шалгасан хэсэг: \${checked} / \${PARTS.length}. Түвшин бүх хэсгийг шалгасны дараа гарна.@@\`}@@</p>
   <h3>What to repeat next</h3>|||</p>
   <h3>Дараа нь юуг давтах вэ</h3>@@\${todoHtml}
   @@<p class="small muted">Question 1|||<p class="small muted">1-р асуулт@@ \${q[1][0]}@@/12 · Question 2|||/12 · 2-р асуулт@@ \${q[2][0]}@@/14 · Question 3|||/14 · 3-р асуулт@@ \${q[3][0]}@@/14</p>
   <div class="tablewrap"><table class="rt scoretable"><tr><th>Part</th><th>Earned</th><th>Max</th><th></th></tr>|||/14</p>
   <div class="tablewrap"><table class="rt scoretable"><tr><th>Хэсэг</th><th>Авсан</th><th>Max</th><th></th></tr>@@\${rows}@@</table></div>
   <p class="small muted">In parts labelled “keyword” the program checks written answers only by matching words. Ask a teacher to confirm the final judgement.</p>|||</table></div>
   <p class="small muted">«Түлхүүр үг» гэсэн хэсгийн бичгэн хариултыг программ зөвхөн үгээр нь таньж шалгадаг. Эцсийн дүгнэлтийг багшаар баталгаажуулна уу.</p>@@\`;renderProgress();}
$("#resetAll").addEventListener("click",()=>{if(!confirm("@@Clear all marks and answers?|||Бүх оноо, хариултыг арилгах уу?@@"))return;try{Object.keys(localStorage).filter(k=>k.startsWith(PFX)&&!k.includes("_wb_")).forEach(k=>localStorage.removeItem(k));}catch(e){}location.reload();});
function persistInputs(){$$("main input:not([type=checkbox]), main textarea, main select").forEach(el=>{
  if(el.closest("#q2table"))return;let key=el.id?"in_"+el.id:(el.dataset.i!=null?"in_q1t_"+el.dataset.i:null);if(!key)return;
  const v=store.get(key,null);if(v!=null)el.value=v;const save=()=>store.set(key,el.value);el.addEventListener("input",save);el.addEventListener("change",save);});}

/* generic magnified scale */
function drawScale(svg,val,o){const W=170,H=300,mid=150,k=o.k;let s=\`<rect width="\${W}" height="\${H}" fill="var(--paper)"/>\`;
  if(val==null||!isFinite(val)){svg.innerHTML=s+\`<text x="85" y="150" text-anchor="middle" font-size="12" fill="var(--muted)">\${o.empty||"—"}</text>\`;return;}
  const dir=o.down?1:-1;const yy=v=>mid+dir*(v-val)*k;const x0=o.x0||60,x1=o.x1||110;
  s+=\`<rect x="\${x0}" y="0" width="\${x1-x0}" height="\${H}" fill="var(--glass)" fill-opacity=".3"/>\`;
  if(o.liquid){const curve=o.meniscus==="up"?-7:9; if(o.down)s+=\`<path d="M\${x0} \${mid} Q\${(x0+x1)/2} \${mid+curve} \${x1} \${mid} L\${x1} \${H} L\${x0} \${H}Z" fill="\${o.liquid}"/>\`;
    else s+=\`<path d="M\${x0} \${mid} Q\${(x0+x1)/2} \${mid+(o.meniscus==="up"?-6:6)} \${x1} \${mid} L\${x1} \${H} L\${x0} \${H}Z" fill="\${o.liquid}"/>\`;}
  const span=H/2/k+0.5;const lo=Math.max(o.min,val-span),hi=Math.min(o.max,val+span);
  const st=o.minor;for(let t=Math.ceil(lo/st-1e-9);t<=Math.floor(hi/st+1e-9);t++){const v=+(t*st).toFixed(4);const Y=yy(v);
    const isMaj=Math.abs(v/o.major-Math.round(v/o.major))<1e-6;const isMid=o.mid&&Math.abs(v/o.mid-Math.round(v/o.mid))<1e-6;
    const len=isMaj?34:(isMid?24:14);s+=\`<line x1="\${x0}" x2="\${x0+len}" y1="\${Y}" y2="\${Y}" stroke="var(--ink)" stroke-width="\${isMaj?1.6:1}"/>\`;
    if(isMaj)s+=\`<text x="\${x0-6}" y="\${Y+4}" font-size="13" text-anchor="end" fill="var(--ink)" font-family="monospace">\${o.fmt?o.fmt(v):v}</text>\`;}
  s+=\`<line x1="\${x0}" x2="\${x0}" y1="0" y2="\${H}" stroke="var(--ink)" stroke-width="2"/><line x1="\${x1}" x2="\${x1}" y1="0" y2="\${H}" stroke="var(--ink)" stroke-width="2"/>\`;
  svg.innerHTML=s;}

/* =====================================================================
   Q1  THERMOMETRIC TITRATION
   ===================================================================== */
const CNA=2.01,CAC=1.00,EFF=0.88,DH=57100,LOSS=0.0008;
const nB=25*CNA/1000;
function heatAt(V){return Math.min(2*CAC*V/1000,nB)*DH*EFF;}
function supDelta(){let m=0;for(let V=0;V<=40;V+=5)m=Math.max(m,heatAt(V)/((25+V)*4.18));return m;}
const SUPD=supDelta();
let S1;
function newS1(){S1={cup:false,fa1:false,therm:false,filled:false,V:0,T0:+(19.5+Math.random()*4).toFixed(2),H:0,T:null,stir:false,step:-1,peaks:[null,null,null,null,null,null,null,null,null],noStirAdds:0};S1.T=S1.T0;}
newS1();
const q1svg=$("#q1svg"),q1lens=$("#q1lens");
function q1obs(t){$("#q1obs").textContent=t;}
function q1warn(t){const w=$("#q1warn");w.hidden=!t;w.textContent=t||"";}
function st1(s,on){const el=$(\`#q1steps li[data-s="\${s}"]\`);if(el)el.classList.toggle("done",!!on);}
function Teq(){return S1.T0+S1.H/((25+S1.V)*4.18);}
$("#q1cup").onclick=()=>{S1.cup=true;st1("cup",1);q1obs("@@The cup is standing steady in the beaker.|||Аяга стакан дотор тогтвортой байна.@@");draw1();};
$("#q1fa1").onclick=()=>{if(!S1.cup){toast("@@First stand the cup in the beaker.|||Эхлээд аягыг стакан дотор тавина уу.@@");return;}S1.fa1=true;st1("fa1",1);q1obs("@@The cup holds 25.0 cm³ of colourless FA 1.|||Аяганд 25.0 cm³ өнгөгүй FA 1 байна.@@");draw1();};
$("#q1therm").onclick=()=>{if(!S1.fa1){toast("@@The cup is empty.|||Аяга хоосон байна.@@");return;}S1.therm=true;st1("therm",1);S1.step=0;S1.peaks[0]=S1.T0;
  q1obs("@@The thermometer is in FA 1. Read the close-up scale and record it in the 0.00 cm³ box.|||Термометр FA 1-д дүрэгдлээ. Томруулсан хуваарийг уншиж 0.00 cm³-ийн нүдэнд бич.@@");draw1();};
$("#q1fill").onclick=()=>{S1.filled=true;st1("fill",1);q1obs("@@The burette is filled with FA 2.|||Бюрет FA 2-оор дүүрлээ.@@");draw1();};
$("#q1add").onclick=()=>{if(!S1.therm){toast("@@First put the thermometer in and record the starting temperature.|||Эхлээд термометрийг дүрж, эхний температурыг бич.@@");return;}if(!S1.filled){toast("@@The burette is empty.|||Бюрет хоосон.@@");return;}
  if(S1.V>=40){toast("@@40.00 cm³ reached: the experiment is complete.|||40.00 cm³ хүрсэн — туршилт дууслаа.@@");return;}
  if(S1.step>0&&!S1.stirredSince){S1.noStirAdds++;}
  const Hold=S1.H;S1.V+=5;S1.H=Hold+(heatAt(S1.V)-heatAt(S1.V-5));
  // mixing: new cold acid lowers T immediately a little until stirred
  S1.T=(S1.T*(20+S1.V)+S1.T0*5)/(25+S1.V);S1.mixed=0;S1.stirredSince=false;S1.step=S1.V/5;S1.peaks[S1.step]=S1.T;st1("add",S1.V>=40);
  q1obs(\`@@In total|||Нийт@@ \${S1.V.toFixed(2)} @@cm³ of FA 2 added. Stir, then read and record the highest temperature.|||cm³ FA 2 нэмэгдлээ. Хутгаж, хамгийн их температурыг уншаад бич.@@\`);q1warn("");draw1();};
const stb=$("#q1stir");
stb.addEventListener("pointerdown",e=>{e.preventDefault();if(!S1.therm){toast("@@There is no thermometer in the cup.|||Аяганд термометр алга.@@");return;}S1.stir=true;$("#q1stirlbl").textContent="@@yes|||тийм@@";});
["pointerup","pointerleave","pointercancel"].forEach(ev=>stb.addEventListener(ev,()=>{S1.stir=false;$("#q1stirlbl").textContent="@@no|||үгүй@@";}));
$("#q1reset").onclick=()=>{if(!confirm("@@Start the question 1 simulation again?|||1-р асуултын симуляцийг шинээр эхлүүлэх үү?@@"))return;newS1();["cup","fa1","therm","fill","add"].forEach(s=>st1(s,0));q1obs("@@Start by standing the cup in the beaker.|||Аягыг стакан дотор тавьж эхэлнэ үү.@@");q1warn("");draw1();};
function draw1(){let s="";
  // burette
  const bx=230,by=10,bh=200,bw=18;const lvl=S1.filled?by+14+(S1.V/50)*(bh-24):null;
  s+=\`<rect x="300" y="10" width="8" height="420" fill="var(--muted)"/><rect x="\${bx+bw}" y="60" width="\${300-bx-bw}" height="6" fill="var(--muted)"/>\`;
  s+=\`<rect x="\${bx}" y="\${by}" width="\${bw}" height="\${bh}" rx="4" fill="var(--glass)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.5"/>\`;
  if(lvl!=null)s+=\`<rect x="\${bx+2}" y="\${lvl}" width="\${bw-4}" height="\${by+bh-lvl-2}" fill="rgba(200,225,240,.8)"/>\`;
  s+=\`<rect x="\${bx-5}" y="\${by+bh}" width="\${bw+10}" height="7" rx="2" fill="var(--ink)"/><path d="M\${bx+bw/2-3} \${by+bh+7} L\${bx+bw/2+3} \${by+bh+7} L\${bx+bw/2+1} \${by+bh+30} L\${bx+bw/2-1} \${by+bh+30}Z" fill="var(--glass)" stroke="var(--ink)"/>\`;
  s+=\`<text x="\${bx-6}" y="\${by+20}" font-size="11" text-anchor="end" fill="var(--muted)">FA 2</text>\`;
  // beaker + cup
  s+=\`<path d="M60 290 L60 420 Q60 430 70 430 L250 430 Q260 430 260 420 L260 290" fill="var(--glass)" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/><text x="70" y="425" font-size="10" fill="var(--muted)">@@250 cm³ beaker|||250 cm³ стакан@@</text>\`;
  if(S1.cup){s+=\`<path d="M100 300 L220 300 L206 410 L114 410Z" fill="#f2efe8" stroke="#9a937f" stroke-width="1.6"/>\`;
    if(S1.fa1){const top=380-S1.V*1.5;const w=(410-top)/110*14;s+=\`<path d="M\${114-14+w} \${top} L\${206+14-w} \${top} L206 410 L114 410Z" fill="\${S1.stir?'rgba(160,200,230,.65)':'rgba(190,220,240,.55)'}"/>\`;}}
  if(S1.therm){s+=\`<rect x="165" y="140" width="8" height="262" rx="4" fill="#fff" stroke="var(--ink)"/><circle cx="169" cy="400" r="7" fill="#c62828"/>\`;
    const h=Math.max(0,Math.min(250,(S1.T+10)/120*250));s+=\`<rect x="167" y="\${400-h}" width="4" height="\${h}" fill="#c62828"/>\`;}
  if(S1.stir)s+=\`<path d="M140 330 q20 -12 40 0 q-20 12 -40 0" fill="none" stroke="var(--accent)" stroke-width="2"/>\`;
  q1svg.innerHTML=s;$("#q1vol").textContent=S1.therm?\`\${S1.V.toFixed(2)} cm³\`:"—";
  drawScale(q1lens,S1.therm?S1.T:null,{k:30,min:-10,max:110,minor:1,major:5,liquid:"#c62828",empty:"@@no thermometer|||термометр алга@@"});}
let lt=performance.now();
function loop1(now){const dt=Math.min(0.2,(now-lt)/1000);lt=now;
  if(S1.therm){S1.H*=Math.exp(-LOSS*dt);const te=Teq();
    // unstirred: only partial mixing → effective target lower
    if(S1.stir){S1.mixed=Math.min(1,(S1.mixed||0)+dt*0.9);S1.stirredSince=true;}
    const mix=S1.step>0?(0.55+0.45*(S1.mixed==null?1:S1.mixed)):1;
    const prev=S1.peaks[S1.step]??S1.T;const target=S1.step>0?(S1.T0+(te-S1.T0)*mix):te;
    const tau=S1.stir?0.9:3.5;S1.T+= (target-S1.T)*(1-Math.exp(-dt/tau));
    if(S1.step>=0&&(S1.peaks[S1.step]==null||S1.T>S1.peaks[S1.step]))S1.peaks[S1.step]=S1.T;
    store.set("q1peaks",S1.peaks);
    if(!loop1.l||now-loop1.l>90){loop1.l=now;drawScale(q1lens,S1.T,{k:30,min:-10,max:110,minor:1,major:5,liquid:"#c62828"});
      if(!loop1.f||now-loop1.f>400){loop1.f=now;draw1();}}}
  requestAnimationFrame(loop1);}
requestAnimationFrame(loop1);draw1();

const tins=()=>$$("#q1table input").map(i=>i.value);
$("#q1checkA").onclick=()=>{const v=tins();const n=v.map(num);const L=[];let m=0;
  const I=n.every(isFinite);L.push(li(I,"<b>I</b> @@A temperature is recorded for all 9 volumes.|||9 эзлэхүүн бүрт температур бичигдсэн.@@"));m+=I;
  const II=I&&v.every(s=>dp(s)===1&&/\\.(0|5)$/.test(clean(s)));L.push(li(II,"<b>II</b> @@Every reading ends in .0 or .5.|||Бүх заалт .0 эсвэл .5-аар төгссөн.@@"+(II?"":" <span class='small muted'>@@(record to one decimal place: 21.0, 25.5)|||(нэг аравтын оронтой бич: 21.0, 25.5)@@</span>")));m+=II;
  let q=0,txt="";if(I){const d=Math.max(...n)-n[0];const diff=Math.abs(d-SUPD);q=(diff<=2.0?1:0)+(diff<=1.0?1:0);
    txt=\`@@Your Δ =|||Таны Δ =@@ \${Math.max(...n).toFixed(1)} − \${n[0].toFixed(1)} = \${d.toFixed(1)} @@°C; supervisor’s Δ ≈|||°C; хянагчийн Δ ≈@@ \${SUPD.toFixed(1)} @@°C; difference|||°C; зөрүү@@ \${diff.toFixed(1)} °C.\`;}
  L.push(li(q>=1,"<b>III</b> @@difference in Δ ≤ 2.0 °C|||Δ-ийн зөрүү ≤ 2.0 °C@@"));L.push(li(q>=2,"<b>IV</b> @@difference in Δ ≤ 1.0 °C|||Δ-ийн зөрүү ≤ 1.0 °C@@"));if(txt)L.push(\`<div class="small muted">\${txt}</div>\`);m+=q;
  const pk=store.get("q1peaks",null);let extra="";if(pk&&I){const bad=[];n.forEach((x,i)=>{if(pk[i]!=null&&Math.abs(x-pk[i])>0.6)bad.push(\`\${(i*5).toFixed(2)} cm³\`);});
    if(bad.length)extra=\`<div class="note warn small">@@The values recorded for these volumes differ by more than 0.5 °C from the highest temperature reached in the simulation:|||Эдгээр эзлэхүүнд бичсэн утга симуляцид хүрсэн хамгийн их температураас 0.5 °C-ээс илүү зөрүүтэй:@@ \${bad.join(", ")}@@. Did you catch the highest reading?|||. Хамгийн их утгыг барьж уншсан уу?@@</div>\`;}
  if(S1.noStirAdds>0)extra+=\`<div class="note warn small">\${S1.noStirAdds} @@time(s) the next portion of acid was added without stirring, so the highest values may be too low.|||удаа хутгалгүйгээр дараагийн хүчлээ нэмсэн — хамгийн их утга бага гарсан байж болно.@@</div>\`;
  $("#q1fbA").innerHTML=fbBlock(L,m,4)+extra;setScore("q1a",m);};

/* ---------------- GRAPH ---------------- */
const G={W:120,H:160,px:5,ml:62,mt:16,mode:"plot",pts:store.get("gpts",[]),L1:store.get("gL1",[]),L2:store.get("gL2",[]),drag:null};
const gsvg=$("#graph");
function sc(){const xs=num($("#gxs").value),ys=num($("#gys").value),x0=num($("#gx0").value),y0=num($("#gy0").value);
  return {ok:isFinite(xs)&&isFinite(ys)&&isFinite(x0)&&isFinite(y0),xs,ys,x0,y0};}
function toPx(x,y,s){return[G.ml+(x-s.x0)/s.xs*20*G.px,G.mt+G.H*G.px-(y-s.y0)/s.ys*20*G.px];}
function toData(px,py,s){return[s.x0+(px-G.ml)/(20*G.px)*s.xs,s.y0+(G.mt+G.H*G.px-py)/(20*G.px)*s.ys];}
function snap(v,step){return Math.round(v/step)*step;}
function lineFn(L){if(L.length===2){const[a,b]=L;if(Math.abs(b[0]-a[0])<1e-9)return null;const k=(b[1]-a[1])/(b[0]-a[0]);return x=>a[1]+k*(x-a[0]);}
  if(L.length===3){const[[x0,y0],[x1,y1],[x2,y2]]=L;if(new Set([x0,x1,x2].map(v=>v.toFixed(6))).size<3)return null;
    return x=>y0*(x-x1)*(x-x2)/((x0-x1)*(x0-x2))+y1*(x-x0)*(x-x2)/((x1-x0)*(x1-x2))+y2*(x-x0)*(x-x1)/((x2-x0)*(x2-x1));}return null;}
function need(Lname){return Lname==="L1"?3:($("#l2curve").checked?3:2);}
function intersect(){const f1=lineFn(G.L1),f2=lineFn(G.L2);if(!f1||!f2)return null;
  const r1=[Math.min(...G.L1.map(p=>p[0])),Math.max(...G.L1.map(p=>p[0]))],r2=[Math.min(...G.L2.map(p=>p[0])),Math.max(...G.L2.map(p=>p[0]))];
  const a=Math.max(r1[0],r2[0]),b=Math.min(r1[1],r2[1]);if(a>=b)return null;const N=4000;let prev=f1(a)-f2(a);
  for(let i=1;i<=N;i++){const x=a+(b-a)*i/N;const d=f1(x)-f2(x);if(prev===0||d===0||prev*d<0){let lo=x-(b-a)/N,hi=x;for(let j=0;j<40;j++){const mm=(lo+hi)/2;const dm=f1(mm)-f2(mm);if((f1(lo)-f2(lo))*dm<=0)hi=mm;else lo=mm;}const xi=(lo+hi)/2;return[xi,f1(xi)];}prev=d;}return null;}
function drawGraph(){const s=sc();const Wp=G.W*G.px,Hp=G.H*G.px;let g=\`<rect x="0" y="0" width="760" height="900" fill="#fff"/>\`;
  for(let i=0;i<=G.W;i++){const x=G.ml+i*G.px;g+=\`<line x1="\${x}" y1="\${G.mt}" x2="\${x}" y2="\${G.mt+Hp}" stroke="\${i%10?'#e6edf4':'#b9c6d4'}" stroke-width="\${i%10?0.6:1}"/>\`;}
  for(let j=0;j<=G.H;j++){const y=G.mt+j*G.px;g+=\`<line x1="\${G.ml}" y1="\${y}" x2="\${G.ml+Wp}" y2="\${y}" stroke="\${j%10?'#e6edf4':'#b9c6d4'}" stroke-width="\${j%10?0.6:1}"/>\`;}
  if(s.ok){for(let i=0;i<=G.W;i+=20){const v=s.x0+i/20*s.xs;g+=\`<text x="\${G.ml+i*G.px}" y="\${G.mt+Hp+16}" font-size="12" text-anchor="middle" fill="#333" font-family="monospace">\${+v.toFixed(3)}</text>\`;}
    for(let j=0;j<=G.H;j+=20){const v=s.y0+j/20*s.ys;g+=\`<text x="\${G.ml-6}" y="\${G.mt+Hp-j*G.px+4}" font-size="12" text-anchor="end" fill="#333" font-family="monospace">\${+v.toFixed(3)}</text>\`;}}
  else g+=\`<text x="\${G.ml+Wp/2}" y="\${G.mt+Hp/2}" font-size="15" text-anchor="middle" fill="#9a6400">@@First choose your scales (starting value, per 20 squares)|||Эхлээд масштабаа (эхлэх утга, 20 нүдэнд) сонгоно уу@@</text>\`;
  g+=\`<text x="\${G.ml+Wp/2}" y="\${G.mt+Hp+36}" font-size="13" text-anchor="middle" fill="#222">\${esc($("#gxl").value||"")}</text>\`;
  g+=\`<text transform="translate(14 \${G.mt+Hp/2}) rotate(-90)" font-size="13" text-anchor="middle" fill="#222">\${esc($("#gyl").value||"")}</text>\`;
  if(s.ok){const clip=\`<clipPath id="gc"><rect x="\${G.ml}" y="\${G.mt}" width="\${Wp}" height="\${Hp}"/></clipPath>\`;g+=clip+\`<g clip-path="url(#gc)">\`;
    [["L1","#1f5f9a"],["L2","#b3261e"]].forEach(([n,c])=>{const L=G[n];const f=lineFn(L);if(f&&L.length===need(n)){const xs=L.map(p=>p[0]);const a=Math.min(...xs),b=Math.max(...xs);let d="";
        for(let i=0;i<=200;i++){const x=a+(b-a)*i/200;const[px,py]=toPx(x,f(x),s);d+=(i?"L":"M")+px.toFixed(1)+" "+py.toFixed(1);}g+=\`<path d="\${d}" fill="none" stroke="\${c}" stroke-width="1.6"/>\`;}
      L.forEach((p,i)=>{const[px,py]=toPx(p[0],p[1],s);g+=\`<circle data-h="\${n}:\${i}" cx="\${px}" cy="\${py}" r="6" fill="\${c}" fill-opacity=".25" stroke="\${c}" style="cursor:move"/>\`;});});
    G.pts.forEach((p,i)=>{const[px,py]=toPx(p.x,p.y,s);g+=\`<path d="M\${px-4} \${py-4}L\${px+4} \${py+4}M\${px-4} \${py+4}L\${px+4} \${py-4}" stroke="#111" stroke-width="1.5"/>\`;
      if(p.anom)g+=\`<circle cx="\${px}" cy="\${py}" r="9" fill="none" stroke="#d97706" stroke-width="1.5"/><text x="\${px+11}" y="\${py-8}" font-size="11" fill="#d97706">anomalous</text>\`;});
    const X=intersect();if(X){const[px,py]=toPx(X[0],X[1],s);g+=\`<circle cx="\${px}" cy="\${py}" r="3" fill="#6b2f8f"/>\`;}
    g+=\`</g>\`;}
  gsvg.innerHTML=g;store.set("gpts",G.pts);store.set("gL1",G.L1);store.set("gL2",G.L2);}
function evPt(e){const r=gsvg.getBoundingClientRect();return[(e.clientX-r.left)*760/r.width,(e.clientY-r.top)*900/r.height];}
gsvg.addEventListener("pointerdown",e=>{const s=sc();if(!s.ok){toast("@@First choose your scales.|||Эхлээд масштабаа сонгоно уу.@@");return;}
  const h=e.target.getAttribute&&e.target.getAttribute("data-h");if(h){const[n,i]=h.split(":");G.drag={n,i:+i};gsvg.setPointerCapture(e.pointerId);return;}
  const[px,py]=evPt(e);if(px<G.ml-3||px>G.ml+G.W*G.px+3||py<G.mt-3||py>G.mt+G.H*G.px+3)return;
  let[x,y]=toData(px,py,s);x=snap(x,s.xs/40);y=snap(y,s.ys/40);
  if(G.mode==="plot"){G.pts.push({x,y,anom:false});}
  else if(G.mode==="erase"||G.mode==="anom"){let bi=-1,bd=1e9;G.pts.forEach((p,i)=>{const[a,b]=toPx(p.x,p.y,s);const d=Math.hypot(a-px,b-py);if(d<bd){bd=d;bi=i;}});
    if(bi>=0&&bd<14){if(G.mode==="erase")G.pts.splice(bi,1);else G.pts[bi].anom=!G.pts[bi].anom;}}
  else{const L=G[G.mode];if(L.length>=need(G.mode)){toast("@@This line is complete. Drag a control point to move it, or clear the lines.|||Энэ шугам бүрэн. Хяналтын цэгийг чирж зөө эсвэл шугамуудыг арилга.@@");return;}L.push([x,y]);}
  drawGraph();});
gsvg.addEventListener("pointermove",e=>{if(!G.drag)return;const s=sc();const[px,py]=evPt(e);let[x,y]=toData(px,py,s);G[G.drag.n][G.drag.i]=[snap(x,s.xs/80),snap(y,s.ys/80)];drawGraph();});
["pointerup","pointercancel"].forEach(ev=>gsvg.addEventListener(ev,()=>{G.drag=null;}));
$$("[data-gm]").forEach(b=>b.onclick=()=>{G.mode=b.dataset.gm;$$("[data-gm]").forEach(x=>x.classList.toggle("on",x===b));
  $("#ghint").textContent={plot:"@@Plotting mode: click on the grid to plot each point from the table (to half a small square).|||Цэг тавих горим: хүснэгтийн цэг бүрийг тор дээр дарж тавина (хагас нүдний нарийвчлалтай).@@",erase:"@@Click on the point you want to remove.|||Арилгах цэг дээрээ дарна уу.@@",anom:"@@Click on a point to mark it as anomalous (click again to undo).|||Гажуудсан цэг дээрээ дарж тэмдэглэнэ (дахин дарвал болино).@@",
   L1:"@@Line 1: place 3 control points of a curve that follows the rising points: the start, the middle and beyond the crossing. The line passes through the control points.|||Шугам 1: өсөлтийн цэгүүдийг дагасан муруйн 3 хяналтын цэгийг тавина — эхлэл, дунд, огтлолцлоос цааш. Шугам хяналтын цэгүүдээр дамжина.@@",L2:"@@Line 2: place 2 points of a straight line that follows the cooling points: before the crossing and beyond the last point.|||Шугам 2: хөргөлтийн цэгүүдийг дагасан шулууны 2 цэгийг тавина — огтлолцлоос өмнөх ба хамгийн сүүлийн цэгээс цааш.@@"}[G.mode];});
$("#l2curve").onchange=()=>{G.L2=[];drawGraph();};
$("#gclearL").onclick=()=>{G.L1=[];G.L2=[];drawGraph();};
$("#gclearAll").onclick=()=>{if(!confirm("@@Clear all points and lines from the graph?|||Графикийн бүх цэг, шугамыг арилгах уу?@@"))return;G.pts=[];G.L1=[];G.L2=[];drawGraph();};
["gxl","gyl","gx0","gy0","gxs","gys"].forEach(id=>$("#"+id).addEventListener("input",drawGraph));["gxs","gys"].forEach(id=>$("#"+id).addEventListener("change",drawGraph));

$("#q1checkB").onclick=()=>{const s=sc();const v=tins().map(num);const L=[];let m=0;
  const xl=$("#gxl").value.toLowerCase(),yl=$("#gyl").value.toLowerCase();
  const xlab=/vol/.test(xl)&&/cm\\s*(3|³)/.test(xl);const ylab=/temp/.test(yl)&&/(°\\s*c|\\/\\s*o?c\\b|\\(\\s*o?c\\s*\\)|in\\s*°?c\\b|deg)/.test(yl);
  const good=[1,2,5,10,20,0.5,0.2,0.1];const sx=good.includes(s.xs),sy=good.includes(s.ys);
  const X=intersect();const inGrid=(x,y)=>x>=s.x0-1e-9&&x<=s.x0+G.W/20*s.xs+1e-9&&y>=s.y0-1e-9&&y<=s.y0+G.H/20*s.ys+1e-9;
  const dataIn=s.ok&&v.every(isFinite)&&v.every((t,i)=>inGrid(i*5,t))&&(!X||inGrid(X[0],X[1]));
  const I=s.ok&&xlab&&ylab&&sx&&sy&&dataIn;
  L.push(li(I,"<b>I</b> @@Axes labelled with units; scales a multiple of 1, 2 or 5 per 20 squares; all data and the crossing inside the grid.|||Тэнхлэг нэр, нэгжтэй; масштаб 20 нүдэнд 1, 2, 5-ын үржвэр; бүх өгөгдөл ба огтлолцол тор дотор.@@"+(I?"":\` <span class="small muted">(\${[!xlab&&"x: «volume … / cm3»",!ylab&&"y: «temperature / °C»",!(sx&&sy)&&"@@use scales of 1, 2 or 5 (×10ⁿ), not 3, 4 or 2.5|||масштаб 3, 4, 2.5 биш — 1, 2, 5 (×10ⁿ)@@",!dataIn&&"@@some data / the crossing lies outside the grid|||зарим өгөгдөл/огтлолцол тороос гадуур@@"].filter(Boolean).join("; ")})</span>\`)));m+=I;
  if(s.ok&&v.every(isFinite)){const ymax=Math.max(...v);if(s.y0+G.H/20*s.ys<ymax+3)L.push(\`<div class="note warn small">@@the y-axis does not include the value 3 °C above your highest temperature (|||y тэнхлэг таны хамгийн их температураас 3 °C дээш утгыг (@@\${(ymax+3).toFixed(1)} @@°C).|||°C) багтаахгүй байна.@@</div>\`);
    const spanY=(ymax-Math.min(...v))/(G.H/20*s.ys);if(spanY<0.5)L.push(\`<div class="note small">@@The data cover less than half of the y-axis: the syllabus expects the points to fill at least half of the grid.|||Өгөгдөл y тэнхлэгийн хагасаас бага хэсгийг эзэлж байна — syllabus-аар торны дор хаяж хагасыг эзлэх нь зүйтэй.@@</div>\`);}
  // II
  let II=false;if(s.ok&&v.every(isFinite)){const tolx=s.xs/40+1e-9,toly=s.ys/40+1e-9;II=v.every((t,i)=>G.pts.some(p=>Math.abs(p.x-i*5)<=tolx&&Math.abs(p.y-t)<=toly))&&G.pts.length>=9;}
  L.push(li(II,"<b>II</b> @@All 9 points from the table plotted to within half a small square.|||Хүснэгтийн 9 цэг бүгд хагас нүдний нарийвчлалтай тавигдсан.@@"));m+=II;
  // III
  let III=false,why="";const f1=lineFn(G.L1),f2=lineFn(G.L2);
  if(!(f1&&G.L1.length===3))why="@@Line 1 (curve, 3 points) is missing.|||Шугам 1 (муруй, 3 цэг) дутуу.@@";else if(!(f2&&G.L2.length===need("L2")))why="@@Line 2 is missing.|||Шугам 2 дутуу.@@";
  else if(s.ok){const good=G.pts.filter(p=>!p.anom);const imax=v.indexOf(Math.max(...v));const vmax=imax*5;
    const rise=good.filter(p=>p.x<=vmax+1e-9),cool=good.filter(p=>p.x>vmax+1e-9);
    const chk=(arr,f)=>{if(arr.length<2)return false;const r=arr.map(p=>p.y-f(p.x));const mean=r.reduce((a,b)=>a+Math.abs(b),0)/r.length;return mean<=Math.max(s.ys/20*1.5,0.35)&&Math.max(...r.map(Math.abs))<=Math.max(s.ys/20*4,0.8);};
    const curved=Math.abs(G.L1[1][1]-(G.L1[0][1]+(G.L1[2][1]-G.L1[0][1])*(G.L1[1][0]-G.L1[0][0])/(G.L1[2][0]-G.L1[0][0])))>s.ys/40;
    const a=chk(rise,f1),b=chk(cool,f2);III=a&&b&&curved;
    why=III?"":[!curved&&"@@the rising line is straight: it should be a smooth curve|||өсөлтийн шугам шулуун байна — гөлгөр муруй хэрэгтэй@@",!a&&"@@line 1 does not follow the rising points closely|||шугам 1 өсөлтийн цэгүүдийг сайн дагахгүй байна@@",!b&&"@@line 2 does not follow the cooling points closely|||шугам 2 хөргөлтийн цэгүүдийг сайн дагахгүй байна@@"].filter(Boolean).join("; ");}
  L.push(li(III,"<b>III</b> @@Two lines; the rising line a smooth curve; both follow the points closely.|||Хоёр шугам; өсөлтийнх гөлгөр муруй; цэгүүдийг сайн дагасан.@@"+(why?\` <span class="small muted">(\${why})</span>\`:"")));m+=III;
  // IV
  let IV=false;if(X&&v.every(isFinite))IV=X[1]>=Math.max(...v)-s.ys/40;
  L.push(li(IV,"<b>IV</b> @@Both lines extended and crossing at or above the highest measured temperature.|||Хоёр шугам сунгагдаж, хамгийн их хэмжсэн температураас доошгүй цэгт огтлолцсон.@@"+(X?\` <span class="small muted">@@(crossing:|||(огтлолцол:@@ \${X[0].toFixed(2)} cm³, \${X[1].toFixed(2)} °C)</span>\`:" <span class='small muted'>@@(the lines do not cross: extend the control points further)|||(шугамууд огтлолцохгүй байна — хяналтын цэгүүдийг цааш сунга)@@</span>")));m+=IV;
  const vi=$("#q1vint").value;const V=X&&dp(vi)===1&&Math.abs(num(vi)-X[0])<=Math.max(0.1,s.xs/40)+1e-9;
  L.push(li(V,"<b>V</b> @@Volume at the crossing read correctly to 1 decimal place.|||Огтлолцлын эзлэхүүнийг 1 аравтын оронтой зөв уншсан.@@"+(X&&!V?\` <span class="small muted">@@(from the graph ≈|||(графикаас ≈@@ \${X[0].toFixed(1)} cm³)</span>\`:"")));m+=V;
  $("#q1fbB").innerHTML=fbBlock(L,m,5);setScore("q1b",m);};

$("#q1checkC").onclick=()=>{const L=[];let m=0;const a=$("#c1i").value,b=$("#c1iia").value,c=$("#c1iib").value;
  const e1=0.05025;const ok1=(close(num(a),e1,0.002)||close(num(a),0.0503,0.0005))&&sigFigs(a)>=3&&sigFigs(a)<=4;
  L.push(li(ok1,"<b>(i)</b> n(NaOH) = 25.0 × 2.01 / 1000 = 5.025 × 10⁻² mol (3–4 s.f.)"));m+=ok1;
  const A=isFinite(num(a))?num(a):e1;const ok2=close(num(b),A/2,0.006);
  L.push(li(ok2,\`<b>(ii) M1</b> n(H₂SO₄) = (i) / 2 = \${(A/2).toPrecision(4)} mol\`+(close(num(b),A*2,0.006)?" <span class='small'>@@: you multiplied by 2; it is 2NaOH : 1H₂SO₄!|||— 2-оор үржүүлсэн байна; 2NaOH : 1H₂SO₄!@@</span>":"")));m+=ok2;
  const Vb=num($("#q1vint").value);const vb=isFinite(Vb)?Vb:25.1;const B=isFinite(num(b))?num(b):A/2;const e3=B*1000/vb;
  const ok3=close(num(c),e3,0.006)&&sigFigs(c)>=3&&sigFigs(c)<=4;
  L.push(li(ok3,\`<b>(ii) M2</b> [H₂SO₄] = n × 1000 / \${vb.toFixed(1)} = \${e3.toPrecision(3)} mol dm⁻³ (3–4 s.f.)\`+(isFinite(Vb)?"":" <span class='small muted'>@@(no volume from 1(b), so checked with 25.1 cm³)|||(1(b)-ийн эзлэхүүн алга тул 25.1 cm³-ээр шалгав)@@</span>")+(close(num(c),B*1000/25,0.006)&&Math.abs(vb-25)>0.05?" <span class='small'>@@: divide by the crossing volume, not by 25.0 (FA 1)!|||— 25.0 (FA 1) биш, огтлолцлын эзлэхүүнээр хуваа!@@</span>":"")));m+=ok3;
  $("#q1fbC").innerHTML=fbBlock(L,m,3);setScore("q1c",m);};

/* =====================================================================
   Q2  MASS LOSS
   ===================================================================== */
const SUP2=5.72;
let C2;
function newC2(){C2={flask:+(95+Math.random()*30).toFixed(2),cont:+(8+Math.random()*6).toFixed(2),fa3:+(5.95+Math.random()*0.1).toFixed(3),resid:+(0.01+Math.random()*0.04).toFixed(3),
  cyl:0,acid:0,tipped:false,ext:0,lost:0,splash:0,swirls:0,log:[],reads:[]};}
newC2();
function q2log(t){C2.log.push(t);$("#q2log").innerHTML=C2.log.map(esc).join("<br>");$("#q2log").scrollTop=1e6;}
function q2obs(t){$("#q2obs").textContent=t;}
function q2warn(t){const w=$("#q2warn");w.hidden=!t;w.textContent=t||"";}
function co2Total(){return Math.min(C2.acid*CAC/1000,(C2.fa3-C2.resid)/106)*44*C2.ret;}
function draw2(){let g="";
  // balance
  g+=\`<rect x="40" y="300" width="200" height="40" rx="6" fill="#3b4250"/><rect x="60" y="292" width="160" height="8" fill="#9aa3b2"/>\`;
  // flask on balance
  const cx=140;g+=\`<path d="M\${cx-10} 170 L\${cx-10} 205 L\${cx-55} 290 L\${cx+55} 290 L\${cx+10} 205 L\${cx+10} 170" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.6"/>\`;
  if(C2.acid>0){const top=290-C2.acid*1.3-(C2.tipped?6:0);const dx=10+45*(top-205)/85;g+=\`<path d="M\${cx-dx} \${top} L\${cx-55} 290 L\${cx+55} 290 L\${cx+dx} \${top}Z" fill="rgba(200,225,240,.7)"/>\`;}
  if(C2.tipped&&C2.ext<0.999){for(let i=0;i<18;i++){const x=cx-40+Math.random()*80,y=245+Math.random()*40;g+=\`<circle cx="\${x}" cy="\${y}" r="\${1.5+Math.random()*2}" fill="none" stroke="var(--ink)" stroke-width=".7"/>\`;}}
  if(C2.tipped&&C2.ext<0.98)g+=\`<path d="M\${cx-5} 165 q-8 -14 0 -28 M\${cx+5} 165 q8 -14 0 -28" stroke="var(--muted)" fill="none"/>\`;
  if(C2.tipped)g+=\`<path d="M\${cx-45} 290 Q\${cx} 282 \${cx+45} 290Z" fill="#f4f4ef"/>\`;
  // cylinder
  g+=\`<rect x="270" y="80" width="30" height="210" rx="3" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.4"/><rect x="262" y="288" width="46" height="6" fill="var(--ink)"/>\`;
  if(C2.cyl>0){const h=C2.cyl/25*180;g+=\`<rect x="272" y="\${288-h}" width="26" height="\${h}" fill="rgba(200,225,240,.8)"/>\`;}
  g+=\`<text x="285" y="72" font-size="10" text-anchor="middle" fill="var(--muted)">25 cm³</text>\`;
  // container
  g+=\`<rect x="20" y="230" width="34" height="50" rx="5" fill="#eee" stroke="var(--ink)"/><text x="37" y="226" font-size="10" text-anchor="middle" fill="var(--muted)">FA 3</text>\`;
  if(!C2.tipped)g+=\`<rect x="23" y="252" width="28" height="26" fill="#fff" stroke="#bbb"/>\`;
  $("#q2svg").innerHTML=g;$("#q2fizz").textContent=!C2.tipped?"—":C2.ext<0.98?"@@fizzing|||ялгарч байна@@":C2.ext<0.999?"@@slight|||бага зэрэг@@":"@@stopped|||зогссон@@";
  drawScale($("#q2lens"),C2.cyl>0?C2.cyl:null,{k:60,min:0,max:25.5,minor:0.5,major:1,mid:null,liquid:"rgba(150,190,220,.8)",meniscus:"down",empty:"@@empty|||хоосон@@",fmt:v=>v.toFixed(0)});}
C2.ret=0.95;
$$("[data-pour]").forEach(b=>b.onclick=()=>{if(C2.acid>0){toast("@@The acid is already in the flask.|||Хүчил аль хэдийн колбонд байна.@@");return;}const d=+b.dataset.pour*(0.9+Math.random()*0.2);C2.cyl=Math.max(0,Math.min(26,C2.cyl+d));
  q2obs("@@Read the cylinder in the close-up and adjust it to 25.0 cm³.|||Цилиндрийг томруулсан хэсгээс уншиж, 25.0 cm³ хүртэл тааруул.@@");draw2();store.set("q2",C2);});
$("#q2xfer").onclick=()=>{if(C2.cyl<=0){toast("@@The cylinder is empty.|||Цилиндр хоосон.@@");return;}if(C2.acid>0){toast("@@Already poured in.|||Аль хэдийн шилжүүлсэн.@@");return;}
  C2.acid=C2.cyl*0.985;q2log(\`@@poured from the cylinder into the flask (~|||цилиндрээс колбонд хийв (~@@\${C2.cyl.toFixed(1)} cm³)\`);if(Math.abs(C2.cyl-25)>0.5)q2warn(\`@@The cylinder held about|||Цилиндрт@@ \${C2.cyl.toFixed(1)} @@cm³, which differs from 25.0 cm³.|||cm³ орчим байсан — 25.0 cm³-ээс зөрүүтэй.@@\`);else q2warn("");C2.cyl=0;
  q2obs("@@FA 2 is in the flask. Weigh the flask.|||Колбонд FA 2 байна. Колбыг жинлэнэ үү.@@");draw2();store.set("q2",C2);};
function flaskMass(){return C2.flask+C2.acid*1.06+(C2.tipped?(C2.fa3-C2.resid):0)-C2.lost-C2.splash;}
$$("[data-weigh]").forEach(b=>b.onclick=()=>{let r,label;if(b.dataset.weigh==="flask"){r=flaskMass();label=C2.acid<=0?"@@empty flask|||хоосон колбо@@":!C2.tipped?"@@flask + acid|||колбо + хүчил@@":C2.ext<0.999?"@@flask + contents (reaction not finished!)|||колбо + агуулга (урвал дуусаагүй!)@@":"@@flask + contents (after reaction)|||колбо + агуулга (урвалын дараа)@@";
    if(C2.tipped&&C2.ext<0.999)q2warn("@@The fizzing has not fully stopped: the mass will keep falling.|||Хийн бөмбөлөг бүрэн зогсоогүй байна — масс цааш буурна.@@");else q2warn("");}
  else{r=C2.cont+(C2.tipped?C2.resid:C2.fa3);label=C2.tipped?"@@container + residue|||сав + үлдэгдэл@@":"@@container + FA 3|||сав + FA 3@@";}
  const shown=r.toFixed(2);$("#q2bal").textContent=shown;C2.reads.push(shown);q2log(\`@@weighed (|||жинлэв (@@\${label}): \${shown} g\`);q2obs(\`\${label}: \${shown} @@g. Record it in the table.|||g. Хүснэгтэд бүртгэ.@@\`);store.set("q2",C2);});
$("#q2tip").onclick=()=>{if(C2.acid<=0){toast("@@There is no acid in the flask.|||Колбонд хүчил алга.@@");return;}if(C2.tipped){toast("@@Already added.|||Аль хэдийн хийсэн.@@");return;}
  C2.tipped=true;C2.ext=0.55;C2.lost=co2Total()*C2.ext;q2log("@@FA 3 added to the flask|||FA 3-ыг колбонд хийв@@");q2obs("@@Vigorous fizzing, and the white solid is dissolving. Swirl from time to time.|||Хүчтэй хийн бөмбөлөг ялгарч, цагаан хатуу бодис уусаж байна. Үе үе эргүүл.@@");draw2();store.set("q2",C2);};
$("#q2swirl").onclick=()=>{if(!C2.tipped){toast("@@The reaction has not started.|||Урвал эхлээгүй.@@");return;}C2.swirls++;C2.ext=1-(1-C2.ext)*0.18;if(C2.ext>0.9995)C2.ext=1;C2.lost=co2Total()*C2.ext;
  if(C2.swirls===1&&Math.random()<0.25){C2.splash=0.02+Math.random()*0.03;q2warn("@@Swirled too hard, so a few drops sprayed out: a little more mass will be lost.|||Хэт хүчтэй эргүүлсэн тул хэдэн дусал үсэрч гарлаа — масс бага зэрэг илүү алдагдана.@@");}
  q2log("@@swirled and waited 30 s|||эргүүлж 30 с хүлээв@@");q2obs(C2.ext<0.98?"@@Still fizzing.|||Хийн бөмбөлөг ялгарсаар байна.@@":C2.ext<0.999?"@@The fizzing has almost stopped.|||Хийн бөмбөлөг бараг зогсож байна.@@":"@@The fizzing has stopped. Excess white solid is left at the bottom.|||Хийн бөмбөлөг зогслоо. Цагаан хатуу бодисын илүүдэл ёроолд үлдсэн.@@");draw2();store.set("q2",C2);};
$("#q2reset").onclick=()=>{if(!confirm("@@Start the question 2 simulation again?|||2-р асуултын симуляцийг шинээр эхлүүлэх үү?@@"))return;newC2();C2.ret=0.93+Math.random()*0.04;$("#q2bal").textContent="--.--";$("#q2log").innerHTML="";q2warn("");q2obs("@@Start by measuring 25.0 cm³ of FA 2 in the cylinder.|||Цилиндрт 25.0 cm³ FA 2 хэмжиж эхэлнэ үү.@@");draw2();store.set("q2",C2);};
{const sv=store.get("q2",null);if(sv&&sv.flask){C2=sv;$("#q2log").innerHTML=C2.log.map(esc).join("<br>");if(C2.reads.length)$("#q2bal").textContent=C2.reads[C2.reads.length-1];}else C2.ret=0.93+Math.random()*0.04;}
draw2();
{const tb=$("#q2table tbody");const saved=store.get("q2t",[]);for(let i=0;i<7;i++)tb.insertAdjacentHTML("beforeend",\`<tr><td><input class="head" data-h="\${i}" placeholder="..." value="\${esc(saved[i]?.h||"")}"></td><td><input data-v="\${i}" value="\${esc(saved[i]?.v||"")}"></td></tr>\`);
  tb.addEventListener("input",()=>{const a=[];for(let i=0;i<7;i++)a.push({h:$(\`#q2table [data-h="\${i}"]\`).value,v:$(\`#q2table [data-v="\${i}"]\`).value});store.set("q2t",a);});}
function q2rows(){const rows=[...Array(7).keys()].map(i=>({h:$(\`#q2table [data-h="\${i}"]\`).value.toLowerCase(),v:$(\`#q2table [data-v="\${i}"]\`).value}));
  const used=new Set();const pick=f=>{const i=rows.findIndex((r,j)=>!used.has(j)&&f(r.h));if(i>=0)used.add(i);return i;};
  const fa3=/fa\\s*3|carbonate|na2co3/;
  const i4=pick(h=>/flask/.test(h)&&/(after|end|final|fizz|stopp|reaction)/.test(h));
  const i7=pick(h=>/(co2|carbon dioxide|loss|lost)/.test(h));
  const i5=pick(h=>/flask/.test(h)&&fa3.test(h));
  const i1=pick(h=>/flask/.test(h)&&/(acid|fa\\s*2)/.test(h));
  const i3=pick(h=>/(container|bottle|tube|vessel|weighing)/.test(h)&&/(residu|empty|after|remain)/.test(h));
  const i2=pick(h=>/(container|bottle|tube|vessel|weighing)/.test(h)&&fa3.test(h));
  const iM=pick(h=>fa3.test(h)&&!/(container|bottle|flask|vessel)/.test(h));
  return{rows,idx:[i1,i2,i3,iM,i5,i4,i7]};}
$("#q2checkA").onclick=()=>{const{rows,idx}=q2rows();const L=[];let m=0;const gU=h=>/(\\/\\s*g\\b|\\(\\s*g\\s*\\)|\\bin\\s*g(ram)?s?\\b)/.test(h);
  const allH=idx.every(i=>i>=0);const units=allH&&idx.every(i=>gU(rows[i].h));const I=allH&&units;
  L.push(li(I,"<b>I</b> @@7 headings (flask + acid; container + FA 3; container + residue; mass of FA 3; flask + acid + FA 3; flask + contents after reaction; mass of CO₂) with units.|||7 гарчиг (колбо+хүчил; сав+FA 3; сав+үлдэгдэл; FA 3-ын масс; колбо+хүчил+FA 3; урвалын дараах колбо+агуулга; CO₂-ын масс) нэгжтэй.@@"+(I?"":\` <span class="small muted">(\${allH?"@@unit “/ g” missing|||нэгж «/ g» дутуу@@":"@@some headings were not recognised: use words such as “flask”, “acid”, “container”, “FA 3”, “residue”, “after reaction” and “carbon dioxide”|||зарим гарчиг танигдсангүй — «flask», «acid», «container», «FA 3», «residue», «after reaction», «carbon dioxide» гэх үгсийг ашигла@@"})</span>\`)));m+=I;
  let II=false,III=false,IV=false,q=0,rt="";
  if(allH){const[r1,r2,r3,rM,r5,r4,r7]=idx.map(i=>rows[i].v);const W=[r1,r2,r3,r4];const wn=W.map(num);const dps=W.map(dp);
    II=wn.every(isFinite)&&dps.every(d=>d===dps[0])&&(dps[0]===2||dps[0]===3);L.push(li(II,"<b>II</b> @@All four weighings present, all to 2 (or all to 3) decimal places.|||Дөрвөн жинлэлт бүгд байгаа ба бүгд 2 (эсвэл бүгд 3) аравтын оронтой.@@"));m+=II;
    const[a,b,c,d]=wn;const eM=b-c,e5=a+eM,e7=e5-d;
    III=Math.abs(num(rM)-eM)<0.0051&&Math.abs(num(r5)-e5)<0.0051;L.push(li(III,\`<b>III</b> @@Mass of FA 3 (|||FA 3-ын масс (@@\${isFinite(eM)?eM.toFixed(2):"?"} @@g) and total mass (|||g) ба нийт масс (@@\${isFinite(e5)?e5.toFixed(2):"?"} @@g) correct.|||g) зөв.@@\`));m+=III;
    IV=Math.abs(num(r7)-(a+b-c-d))<0.0051;L.push(li(IV,\`<b>IV</b> @@Mass of CO₂ = (1)+(2)−(3)−(4) =|||CO₂-ын масс = (1)+(2)−(3)−(4) =@@ \${isFinite(e7)?e7.toFixed(2):"?"} @@g, correct.|||g зөв.@@\`));m+=IV;
    const mF=num(rM),mC=num(r7);if(isFinite(mF)&&isFinite(mC)&&mC>0){const ratio=mF/mC;q=Math.abs(ratio-SUP2)/SUP2<=0.15?1:0;rt=\`@@Your ratio m(FA 3)/m(CO₂) =|||Таны харьцаа m(FA 3)/m(CO₂) =@@ \${ratio.toFixed(2)}@@; supervisor’s ≈|||; хянагчийнх ≈@@ \${SUP2.toFixed(2)}@@; difference|||; зөрүү@@ \${(Math.abs(ratio-SUP2)/SUP2*100).toFixed(1)}%.\`;}
    const notSeen=W.filter(x=>x!==""&&!C2.reads.includes(Number(x).toFixed(2)));if(notSeen.length)L.push(\`<div class="note warn small">@@These weighings are not in the balance log:|||Эдгээр жинлэлт жинлүүрийн бүртгэлд алга:@@ \${notSeen.map(esc).join(", ")}.</div>\`);}
  else{["II","III","IV"].forEach(k=>L.push(li(false,\`<b>\${k}</b> @@(headings not recognised, so this cannot be checked)|||(гарчиг танигдаагүй тул шалгах боломжгүй)@@\`)));}
  L.push(li(q>=1,"<b>V</b> @@ratio within ±15% of the supervisor’s|||харьцаа хянагчийнхаас ±15%-ийн дотор@@"));if(rt)L.push(\`<div class="small muted">\${rt}</div>\`);m+=q;
  $("#q2fbA").innerHTML=fbBlock(L,m,5);setScore("q2a",m);};
function q2m(){const{rows,idx}=q2rows();return{F:idx[3]>=0?num(rows[idx[3]].v):NaN,C:idx[6]>=0?num(rows[idx[6]].v):NaN};}
$("#q2checkB").onclick=()=>{let{F,C}=q2m();let note="";if(!isFinite(F)||!isFinite(C)){F=5.98;C=1.05;note="<div class='small muted'>@@The 2(a) table is not complete, so this was checked with example values (5.98 g, 1.05 g).|||2(a)-ийн хүснэгт бүрэн биш тул жишээ утга (5.98 g, 1.05 g)-аар шалгав.@@</div>";}
  const L=[];const a=$("#c2i").value,b=$("#c2iia").value,ch=$("#c2iib").value,c=$("#c2iii").value;const sf=s=>sigFigs(s)>=2&&sigFigs(s)<=4;
  const e1=C/44;const m1=close(num(a),e1,0.012)&&sf(a);L.push(li(m1,\`<b>(i)</b> n(CO₂) = \${C.toFixed(2)} / 44 = \${e1.toPrecision(3)} mol (2–4 s.f.)\`));
  const e2=F/106;const m2=close(num(b),e2,0.012);L.push(li(m2,\`<b>(ii) M1</b> n(Na₂CO₃) = \${F.toFixed(2)} / 106 = \${e2.toPrecision(3)} mol\`));
  const A=isFinite(num(a))?num(a):e1;const m3=ch==="a"&&(isFinite(num(b))?num(b):e2)>A;L.push(li(m3,"<b>(ii) M2</b> @@Comparison: n(Na₂CO₃) added &gt; n(CO₂) (1:1) → excess.|||Харьцуулалт: нэмсэн n(Na₂CO₃) &gt; n(CO₂) (1:1) → илүүдэл.@@"));
  const e4=A*1000/25;const m4=close(num(c),e4,0.012)&&sf(c);L.push(li(m4,\`<b>(iii)</b> [H₂SO₄] = \${A.toPrecision(3)} × 1000 / 25.0 = \${e4.toPrecision(3)} mol dm⁻³\`+(close(num(c),2*e4,0.012)?" <span class='small'>@@: H₂SO₄ : CO₂ = 1 : 1, there is no need to multiply by 2.|||— H₂SO₄ : CO₂ = 1 : 1, 2-оор үржүүлэх хэрэггүй.@@</span>":"")));
  const m=m1+m2+m3+m4;$("#q2fbB").innerHTML=fbBlock(L,m,4)+note;setScore("q2b",m);};
$("#q2checkC").onclick=()=>{const t1=$("#q2ci").value.toLowerCase(),s1=$("#q2cii1").value.toLowerCase(),s2=$("#q2cii2").value.toLowerCase();const L=[];
  const c1=/(froth|foam|effervesc|fizz|bubbl|spray|splash|vigorous)/.test(t1)&&/(overflow|spill|lost|loss|escape|spit|splash(es)? out|out of)/.test(t1);
  L.push(li(c1,"<b>(i)</b> @@Froths / vigorous bubbling|||Хөөсөрнө / хүчтэй бөмбөлөг@@ <i>@@and|||ба@@</i> @@overflows / liquid is lost.|||халиж / шингэн алдагдана.@@"));
  const M1=/hydrogen|h2/.test(s1)&&/(dens|light|small mass|low mass|m\\s*r|molar mass)/.test(s1);L.push(li(M1,"<b>M1</b> @@Hydrogen has a very low density / mass.|||Устөрөгчийн нягт / масс маш бага.@@"));
  const M2=/(percentage|%|large|big|significant|high).{0,25}(error|uncertaint)|(error|uncertaint).{0,25}(large|big|significant|high)|(difficult|hard|cannot|can't).{0,20}(measur|detect|weigh)|inaccura|not (be )?(accurate|precise)/.test(s1);L.push(li(M2,"<b>M2</b> @@The mass lost is small, so the percentage uncertainty is large.|||Масс бага алдагдах тул алдаа хувиар их.@@"));
  const M3=/(calcium sulfate|calcium sulphate|caso4)/.test(s2)&&/(insoluble|sparingly|slightly soluble|not soluble|coat|layer|cover|prevent|stop|precipit)/.test(s2);L.push(li(M3,"<b>M3</b> @@CaSO₄ is insoluble / coats the CaCO₃ and stops the reaction.|||CaSO₄ уусдаггүй / CaCO₃-ыг бүрхэж урвалыг зогсооно.@@"));
  const m=(c1?1:0)+(M1?1:0)+(M2?1:0)+(M3?1:0);
  L.push(\`<div class="small muted">@@Model answer:|||Загвар:@@ <i>(i) The mixture froths / effervesces vigorously and is more likely to overflow (be lost) from a beaker. (ii) Hydrogen has a very low density/mass, so the small mass loss gives a large percentage error. Calcium sulfate is insoluble and coats the calcium carbonate, stopping the reaction.</i></div>\`);
  $("#q2fbC").innerHTML=fbBlock(L,m,4);setScore("q2c",m);};
$("#q2checkD").onclick=()=>{let{F}=q2m();if(!isFinite(F))F=5.98;const u=num($("#c2d1").value),p=num($("#c2d2").value);
  const uok=[0.01,0.005,0.001,0.0005].some(x=>Math.abs(u-x)<1e-9);const pok=uok&&close(p,2*u/F*100,0.03);
  $("#q2fbD").innerHTML=fbBlock([li(uok,"@@Uncertainty: ±0.005 or ±0.01 g for a balance reading to 2 decimal places (±0.0005 / ±0.001 g for 3 places).|||Тодорхойгүй байдал: 2 аравтын оронтой жинлүүрт ±0.005 эсвэл ±0.01 g (3 оронтод ±0.0005 / ±0.001 g).@@"),li(pok,\`@@% uncertainty = 2 × U / m(FA 3) × 100|||% алдаа = 2 × U / m(FA 3) × 100@@\${uok?\` = 2 × \${u} / \${F.toFixed(2)} × 100 = \${(2*u/F*100).toPrecision(2)} %\`:""}\`+(uok&&close(p,u/F*100,0.03)?" <span class='small'>@@: the mass is the difference of two weighings, so use 2 × U!|||— масс хоёр жинлэлтийн зөрүү тул 2 × U!@@</span>":""))],uok&&pok?1:0,1);setScore("q2d",uok&&pok?1:0);};

/* =====================================================================
   Q3  BENCH
   ===================================================================== */
const COL={colourless:"rgba(210,230,245,.45)",purple:"#6a1b7a",palepink:"rgba(245,215,228,.6)",green:"#1f6b3a",yellow:"rgba(240,215,120,.75)",white:"#fbfbf7",offwhite:"#ece4d4",brown:"#7a4a1e",black:"#222",darkbrown:"#3a2412"};
const tubeEl=$("#q3tube");
function drawTube(st){const s=st||{};let g=\`<rect width="200" height="300" fill="none"/>\`;
  g+=\`<path d="M70 30 L70 250 Q70 280 100 280 Q130 280 130 250 L130 30" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>\`;
  if(s.liq)g+=\`<path d="M72 170 L128 170 L128 250 Q128 278 100 278 Q72 278 72 250Z" fill="\${s.liq}"/>\`;
  if(s.ppt){g+=\`<path d="M72 235 L128 235 L128 250 Q128 278 100 278 Q72 278 72 250Z" fill="\${s.ppt}"/>\`;for(let i=0;i<14;i++)g+=\`<circle cx="\${78+Math.random()*44}" cy="\${185+Math.random()*48}" r="1.6" fill="\${s.ppt}" opacity=".85"/>\`;}
  if(s.solid){g+=\`<path d="M74 258 L126 258 Q124 278 100 278 Q76 278 74 258Z" fill="\${s.solid}" stroke="#0003"/>\`;for(let i=0;i<8;i++)g+=\`<rect x="\${80+Math.random()*36}" y="\${250+Math.random()*10}" width="5" height="4" fill="\${s.solid}" stroke="#0003"/>\`;}
  if(s.bub)for(let i=0;i<16;i++){const x=78+Math.random()*44,y=180+Math.random()*90;g+=\`<circle cx="\${x}" cy="\${y}" r="\${1.5+Math.random()*2.5}" fill="none" stroke="var(--ink)" stroke-width=".8"><animate attributeName="cy" from="\${y}" to="172" dur="\${0.8+Math.random()}s" repeatCount="indefinite"/></circle>\`;}
  if(s.gas)g+=\`<rect x="72" y="32" width="56" height="120" fill="\${s.gas}" opacity=".45"/>\`;
  if(s.flame)g+=\`<path d="M100 286 Q85 292 100 300 Q115 292 100 286" fill="#3b7bff" opacity=".85"/>\`;
  if(s.splint){g+=\`<line x1="100" y1="18" x2="170" y2="-30" stroke="#a7783f" stroke-width="5"/><circle cx="100" cy="20" r="\${s.splint==="relight"?7:3}" fill="\${s.splint==="relight"?"#ffb02e":"#c4512b"}"/>\`;if(s.splint==="relight")g+=\`<path d="M100 2 Q92 14 100 22 Q108 14 100 2" fill="#ff7a1a"/>\`;}
  if(s.litmus)g+=\`<rect x="95" y="0" width="12" height="40" fill="\${s.litmus}" stroke="#555" stroke-width=".6"/>\`;
  if(s.label)g+=\`<text x="100" y="296" font-size="11" text-anchor="middle" fill="var(--muted)">\${esc(s.label)}</text>\`;
  tubeEl.innerHTML=g;}
const SAMPLES={
 FA4:{name:"FA 4",info:"@@Solid FA 4: dark purple crystals.|||Хатуу FA 4 — бараан нил ягаан талст.@@",init:{solid:"#3a1048",label:"FA 4 (s)"}},
 FA5:{name:"FA 5",info:"@@Solid FA 5: very pale pink (almost white) crystals.|||Хатуу FA 5 — маш цайвар ягаавтар (бараг цагаан) талст.@@",init:{solid:"#f6e9ee",label:"FA 5 (s)"}},
 FA6:{name:"FA 6",info:"@@Solid FA 6: black powder.|||Хатуу FA 6 — хар нунтаг.@@",init:{solid:COL.black,label:"FA 6 (s)"}}};
function A(id,label,steps,obs,extra){return Object.assign({id,label,steps,obs},extra||{});}
const ACT={
 FA4:[
  A("heat","@@(a)(i) Heat gently, then strongly|||(a)(i) Зөөлөн, дараа нь хүчтэй халаах@@",[{solid:"#3a1048",flame:true,label:"@@gently|||зөөлөн@@"},{solid:"#1a1a1a",flame:true,label:"@@spits and crackles|||шажигнаж үсэрнэ@@"},{solid:"#151515",label:"@@black residue|||хар үлдэгдэл@@"}],"Dark purple crystals crackle / jump about; gas given off; black residue (solid) remains."),
  A("splint","@@(a)(i) Test the gas with a glowing splint|||(a)(i) Хийг цогтой хэлтэрхийгээр шалгах@@",[{solid:"#151515",flame:true,splint:"relight",label:"O₂"}],"Glowing splint relights → oxygen.",{need:"heat"}),
  A("dissolve","@@(a)(ii) Dissolve in water and add dilute H₂SO₄|||(a)(ii) Усанд уусгаж, шингэрүүлсэн H₂SO₄ нэмэх@@",[{liq:COL.purple,label:"FA 4 (aq) + H⁺"}],"Dissolves to give a (deep) purple solution."),
  A("fe","@@(a)(ii) Test 1: add FeSO₄(aq)|||(a)(ii) Test 1: FeSO₄(aq) нэмэх@@",[{liq:COL.purple,label:"+ Fe²⁺"},{liq:COL.yellow,label:"+ Fe²⁺"}],"Purple solution turns (pale) yellow / purple colour disappears.",{need:"dissolve"}),
  A("h2o2","@@(a)(ii) Test 2: add H₂O₂|||(a)(ii) Test 2: H₂O₂ нэмэх@@",[{liq:COL.purple,bub:true,label:"+ H₂O₂"},{liq:COL.colourless,bub:true,label:"+ H₂O₂"}],"Effervescence; purple solution becomes colourless.",{need:"dissolve"}),
  A("h2o2s","@@(a)(ii) Test the gas from Test 2 with a splint|||(a)(ii) Test 2-ын хийг хэлтэрхийгээр шалгах@@",[{liq:COL.colourless,bub:true,splint:"relight",label:"O₂"}],"Glowing splint relights (oxygen).",{need:"h2o2"}),
  A("water","@@(a)(iii) Add 5 cm of water to the cooled residue|||(a)(iii) Хөргөсөн үлдэгдэлд 5 cm ус нэмэх@@",[{liq:COL.green,solid:"#151515",label:"+ H₂O"}],"(Dark) green solution; black solid remains.",{need:"heat"})],
 FA5:[
  A("dissolve","@@Dissolve (in warm water)|||Уусгах (бүлээн усанд)@@",[{liq:"rgba(245,232,238,.6)",label:"FA 5 (aq)"}],"Dissolves (on warming) to give a very pale pink / colourless solution."),
  A("t1","@@Test 1: HNO₃, then AgNO₃(aq)|||Test 1: HNO₃, дараа нь AgNO₃(aq)@@",[{liq:"rgba(245,232,238,.6)",label:"+ HNO₃"},{liq:"rgba(245,232,238,.6)",label:"+ AgNO₃"}],"No change with HNO₃; no change (no ppt) with AgNO₃.",{need:"dissolve"}),
  A("t2","@@Test 2: Ba²⁺(aq), then HNO₃|||Test 2: Ba²⁺(aq), дараа нь HNO₃@@",[{liq:COL.colourless,ppt:COL.white,label:"+ Ba²⁺"},{liq:COL.colourless,ppt:COL.white,label:"+ HNO₃"}],"White ppt; ppt does not dissolve in nitric acid (insoluble).",{need:"dissolve"}),
  A("t3","Test 3: NaOH(aq)",[{liq:COL.colourless,ppt:COL.offwhite,label:"+ NaOH"},{liq:COL.colourless,ppt:COL.brown,label:"@@after a while|||хэсэг хугацааны дараа@@"}],"Off-white / cream ppt; insoluble in excess; darkens (turns brown) on standing.",{need:"dissolve",slow:true}),
  A("t3b","@@Test 3: then add H₂O₂|||Test 3: дараа нь H₂O₂ нэмэх@@",[{liq:COL.colourless,ppt:COL.darkbrown,bub:true,label:"+ H₂O₂"}],"Black / dark brown solid forms; effervescence.",{need:"t3"}),
  A("t3s","@@Test the gas from Test 3 with a splint|||Test 3-ын хийг хэлтэрхийгээр шалгах@@",[{liq:COL.colourless,ppt:COL.darkbrown,bub:true,splint:"relight",label:"O₂"}],"Glowing splint relights (oxygen).",{need:"t3b"})],
 FA6:[
  A("t1","@@Test 1: dilute HNO₃|||Test 1: шингэрүүлсэн HNO₃@@",[{liq:COL.colourless,solid:COL.black,label:"+ HNO₃"}],"No change; black solid does not dissolve."),
  A("t2","@@Test 2: a few drops of concentrated HCl|||Test 2: төвлөрсөн HCl хэдэн дусал@@",[{solid:COL.black,liq:"rgba(90,60,30,.7)",bub:true,label:"+ conc. HCl"},{solid:COL.black,liq:"rgba(90,60,30,.7)",bub:true,gas:"#c8e65a",label:"@@yellow-green gas|||шар-ногоон хий@@"}],"Effervescence; (dark brown solution); pale yellow-green gas with a pungent smell."),
  A("t2l","@@Test the gas from Test 2 with damp blue litmus|||Test 2-ын хийг чийгтэй цэнхэр лакмусаар шалгах@@",[{solid:COL.black,liq:"rgba(90,60,30,.7)",gas:"#c8e65a",litmus:"#3d6fd1",label:"@@damp litmus|||чийгтэй лакмус@@"},{solid:COL.black,liq:"rgba(90,60,30,.7)",gas:"#c8e65a",litmus:"#d9534f",label:"@@turns red|||улайна@@"},{solid:COL.black,liq:"rgba(90,60,30,.7)",gas:"#c8e65a",litmus:"#f7f7f2",label:"@@is bleached|||цайрна@@"}],"Damp blue litmus turns red, then is bleached → chlorine.",{need:"t2",slow:true}),
  A("t3","Test 3: H₂O₂",[{liq:COL.colourless,solid:COL.black,bub:true,label:"+ H₂O₂"}],"Vigorous effervescence; black solid remains (catalyst)."),
  A("t3s","@@Test the gas from Test 3 with a splint|||Test 3-ын хийг хэлтэрхийгээр шалгах@@",[{liq:COL.colourless,solid:COL.black,bub:true,splint:"relight",label:"O₂"}],"Glowing splint relights → oxygen.",{need:"t3"})]};
const done=store.get("q3done",{});let cur="FA4";
function renderSamples(){const b=$("#q3samples");b.innerHTML="";Object.keys(SAMPLES).forEach(k=>b.insertAdjacentHTML("beforeend",\`<button class="btn \${k===cur?"sel":""}" data-s="\${k}">\${SAMPLES[k].name}</button>\`));
  $$("#q3samples button").forEach(x=>x.onclick=()=>{cur=x.dataset.s;renderSamples();renderActions();drawTube(SAMPLES[cur].init);$("#q3obs").innerHTML='<span class="muted">@@Choose a test.|||Сорил сонгоно уу.@@</span>';});}
function renderActions(){const a=$("#q3actions");a.innerHTML="";$("#q3sampleinfo").textContent=SAMPLES[cur].info;
  ACT[cur].forEach(x=>a.insertAdjacentHTML("beforeend",\`<button class="btn" data-a="\${x.id}">\${x.label}</button>\`));
  $$("#q3actions button").forEach(b=>b.onclick=()=>run(ACT[cur].find(x=>x.id===b.dataset.a)));}
function run(act){if(act.need&&!done[cur+act.need]){const pre=ACT[cur].find(x=>x.id===act.need);toast(\`@@First:|||Эхлээд:@@ \${pre?pre.label:act.need}\`);return;}
  done[cur+act.id]=true;store.set("q3done",done);let i=0;const show=()=>{drawTube(act.steps[i]);i++;if(i<act.steps.length)setTimeout(show,act.slow?2300:1300);};show();
  $("#q3obs").innerHTML=\`<b>\${esc(act.label)}</b><br>\`+($("#q3reveal").checked?\`<span class="small">@@Note:|||Тайлбар:@@ <i>\${esc(act.obs)}</i></span>\`:\`<span class="small muted">@@Record what you saw, in English, in the table below.|||Харсан зүйлээ англиар доорх хүснэгтэд бүртгэ.@@</span>\`);}
renderSamples();renderActions();drawTube(SAMPLES[cur].init);

const BUB=/(bubbl|effervesc|fizz)/i,RELIGHT=/(relight|re-light|reignit|glows? (more )?bright)/i,NC=/(no (visible )?change|no (observable |visible )?reaction|nothing happens|no ppt|no precipitate|does ?n[o']t dissolve|insoluble)/i;
function starBlock(L,stars,max){const m=Math.min(max,Math.floor(stars/2));L.push(\`<div class="small muted">@@Total stars:|||Нийт од:@@ \${stars} @@→ 2 stars = 1 mark (max|||→ 2 од = 1 оноо (max@@ \${max}).</div>\`);return m;}
$("#q3checkA").onclick=()=>{const L=[];const t=$("#q3ai").value;let s1=0;const st=(ok,txt,arr)=>{L.push(li(ok,txt));if(ok)arr.n++;};
  const A1={n:0};L.push("<b>(i)</b>");
  st(/(purple|violet)/i.test(t),"(dark) purple crystals / solid*",A1);st(/black/i.test(t),"black powder / residue / solid*",A1);st(/(jump|crackl|pop|spit|decrepit|move)/i.test(t),"solid jumps about / crackles / pops*",A1);st(/glowing/i.test(t)&&RELIGHT.test(t),"gas relights glowing splint*",A1);
  const mi=starBlock(L,A1.n,2);
  const a1=$("#q3aii1").value,a2=$("#q3aii2").value;const A2={n:0};L.push("<b>(ii)</b>");
  st(/purple/i.test(a1),"Test 1: purple (solution)*",A2);st(/yellow/i.test(a1),"Test 1: becomes yellow solution*",A2);
  st(/(colourless|colorless|decolou?ri[sz])/i.test(a2),"Test 2: purple becomes colourless / decolourises*",A2);st(BUB.test(a2),"Test 2: effervescence*",A2);st(RELIGHT.test(a2),"Test 2: gas relights glowing splint*",A2);
  const mii=starBlock(L,A2.n,2);
  const g=/green/i.test($("#q3aiii").value);L.push("<b>(iii)</b>");L.push(li(g,"(dark) green solution"));
  const m=mi+mii+(g?1:0);$("#q3fbA").innerHTML=fbBlock(L,m,5);setScore("q3a",m);};
$("#q3checkB").onclick=()=>{const L=[];const S={n:0};const st=(ok,t)=>{L.push(li(ok,t));if(ok)S.n++;};const t1=$("#q3b1").value,t2=$("#q3b2").value,t3=$("#q3b3").value;
  st(NC.test(t1)&&!/white ppt|white precipitate|cream/i.test(t1),"@@Test 1: no change with HNO₃ and AgNO₃*|||Test 1: HNO₃ ба AgNO₃-тай no change*@@");
  st(/white/i.test(t2)&&/(ppt|precipit)/i.test(t2)&&/(insoluble|does ?n[o']t dissolve|not dissolve|no change|remains|stays|persist)/i.test(t2),"@@Test 2: white precipitate, insoluble in HNO₃*|||Test 2: цагаан тунадас ба HNO₃-т уусахгүй*@@");
  st(/(off.?white|cream|fawn|buff|pale brown|beige|pale pink)/i.test(t3)&&/(ppt|precipit)/i.test(t3),"@@Test 3: NaOH, off-white / cream / buff precipitate*|||Test 3: NaOH — off-white / cream / buff тунадас*@@");
  st(/(darken|turns? (dark|brown)|brown on standing|goes brown|becomes brown|insoluble in excess)/i.test(t3),"@@Test 3: the precipitate darkens / is insoluble in excess*|||Test 3: тунадас бараантна / илүүдэлд уусахгүй*@@");
  st(/(black|dark brown)/i.test(t3),"@@Test 3: H₂O₂, black / dark brown solid*|||Test 3: H₂O₂ — хар / бараан хүрэн хатуу бодис*@@");
  st(BUB.test(t3)||RELIGHT.test(t3),"@@Test 3: bubbles of gas or the splint relights*|||Test 3: хийн бөмбөлөг эсвэл хэлтэрхий асна*@@");
  const m=starBlock(L,S.n,3);$("#q3fbB").innerHTML=fbBlock(L,m,3);setScore("q3b",m);};
$("#q3checkC").onclick=()=>{const L=[];const S={n:0};const st=(ok,t)=>{L.push(li(ok,t));if(ok)S.n++;};const t1=$("#q3c1").value,t2=$("#q3c2").value,t3=$("#q3c3").value;
  st(NC.test(t1),"@@Test 1: no change / the solid does not dissolve*|||Test 1: no change / хатуу бодис уусахгүй*@@");
  st(BUB.test(t2),"@@Test 2: bubbles of gas*|||Test 2: хийн бөмбөлөг*@@");st(/bleach/i.test(t2),"@@Test 2: bleaches the litmus*|||Test 2: лакмусыг цайруулна*@@");st(/(chlorine|cl\\s*2|cl₂)/i.test(t2),"Test 2: chlorine*");
  st(BUB.test(t3)||RELIGHT.test(t3),"@@Test 3: bubbles of gas / the splint relights*|||Test 3: хийн бөмбөлөг / хэлтэрхий асна*@@");st(/(oxygen|\\bo\\s*2\\b|o₂)/i.test(t3),"Test 3: oxygen*");
  const m=starBlock(L,S.n,3);$("#q3fbC").innerHTML=fbBlock(L,m,3);setScore("q3c",m);};
$("#q3checkD").onclick=()=>{const L=[];const mn=/mangan|^\\s*mn\\s*$/i.test($("#q3di").value);L.push(li(mn,"<b>(i)</b> manganese / Mn"));
  const o=s=>clean(s).replace(/^\\+/,"").toUpperCase();const ans=[["#q3d4",["7","VII"]],["#q3d5",["2","II"]],["#q3d6",["4","IV"]]];const c=ans.filter(([id,ok])=>ok.includes(o($(id).value))).length;
  const mii=c===3?2:c===2?1:0;L.push(li(c===3,\`<b>(ii)</b> FA 4 = +7, FA 5 = +2, FA 6 = +4 — \${c}@@/3 correct →|||/3 зөв →@@ \${mii} @@marks|||оноо@@\`));
  const m=(mn?1:0)+mii;$("#q3fbD").innerHTML=fbBlock(L,m,3);setScore("q3d",m);};

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
  const a=document.createElement("a");a.href=t.toDataURL("image/png");a.download=\`9701-35-w24-\${WB.page}.png\`;a.click();};
window.addEventListener("resize",()=>{if($("#wb").classList.contains("open"))wbSize();});


persistInputs();drawGraph();renderScore();
})();
<\/script>
</body>
</html>
`;export{e as default};
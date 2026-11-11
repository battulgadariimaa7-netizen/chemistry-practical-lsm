var e=`<!DOCTYPE html>
<html lang="__LANG__">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>@@9701/35 O/N 2025 Practical|||9701/35 O/N 2025 Практик@@</title>
<meta name="description" content="@@Cambridge AS Chemistry 9701/35 October/November 2025: interactive practical simulation, checking based on the mark scheme, and a whiteboard.|||Cambridge AS Chemistry 9701/35 October/November 2025 — интерактив практик симуляци, mark scheme-д суурилсан шалгалт, самбар.@@">
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
</head>
<body>
<header class="top">
  <div class="top-inner">
  <nav class="tabs" role="tablist" id="tabs">
    <button role="tab" data-tab="ov" aria-selected="true">@@Overview|||Тойм@@</button>
    <button role="tab" data-tab="q1">@@1. Titration|||1. Титрлэлт@@</button>
    <button role="tab" data-tab="q2">2. ZnSO₄·yH₂O</button>
    <button role="tab" data-tab="q3">@@3. Qualitative analysis|||3. Чанарын шинжилгээ@@</button>
    <button role="tab" data-tab="ref">@@Reference|||Лавлах@@</button>
    <button role="tab" data-tab="score">@@Results|||Дүн@@</button>
  </nav>
    <div class="brand"><b>9701/35 · O/N 2025</b><span>AS Chemistry — Advanced Practical Skills 1</span></div>
    <span class="scorechip" id="scoreChip">0 / 40</span>
  </div>
</header>

<main>
<!-- ===================== OVERVIEW ===================== -->
<section class="tab active" id="tab-ov">
  <div class="card">
    <h2>@@Practical Exam Practice|||Практик шалгалтын дадлага@@</h2>
    <p class="muted">@@Cambridge 9701/35, October/November 2025 · 40 marks · 2 hours. Do each experiment in the simulation and check your answers straight away against the mark scheme rules.|||Cambridge 9701/35, 2025 оны 10/11-р сар · 40 оноо · 2 цаг. Туршилтаа симуляцаар хийж, хариултаа mark scheme-ийн дүрмээр шууд шалгана.@@</p>
    <div class="qcards" id="qcards"></div>
  </div>

  <div class="card">
    <h3>@@How to prepare|||Хэрхэн бэлтгэх вэ@@</h3>
    <ol class="flow">
      <li>@@<b>Do.</b> Work through each experiment step by step in the simulation. You read the burette, balance and test-tubes yourself.|||<b>Хий.</b> Симуляцаар туршилтаа алхам алхмаар хийнэ. Бюрет, жин, хуруу шилийг та өөрөө уншина.@@</li>
      <li>@@<b>Write.</b> Write table headings, units and observations <b>in English</b>, as on the exam paper (for example <span class="mono">final burette reading / cm3</span>).|||<b>Бич.</b> Хүснэгтийн гарчиг, нэгж, ажиглалтаа шалгалтын хуудсан дээрх шиг <b>англиар</b> бичнэ (жишээ нь <span class="mono">final burette reading / cm3</span>).@@</li>
      <li>@@<b>Check.</b> The “Check” button shows each mark (M1, M2…) and why you earned or lost it.|||<b>Шалга.</b> «Шалгах» товч оноо бүрийг (M1, M2…) яагаад авсан, алдсантай нь харуулна.@@</li>
      <li>@@<b>Repeat.</b> Find the parts where you lost marks on the “Results” tab, read the teacher's explanation and try again.|||<b>Давт.</b> «Дүн» табаас алдсан хэсгээ олж, багшийн тайлбарыг уншаад дахин хийнэ.@@</li>
    </ol>
    <p class="small muted">@@You can work out calculations on the “Whiteboard” at the bottom right. Each question has its own page.|||Тооцоогоо баруун доод буланд байх «Самбар» дээр бодож болно. Асуулт бүр өөрийн хуудастай.@@</p>
  </div>

  <details class="teach"><summary>@@Time planning advice|||Цаг хуваарилалтын зөвлөмж@@</summary><div>@@The exam paper itself suggests starting Question 3 while the crucible in Question 2 cools. There is one balance for every 8–12 students, so the supervisor may sometimes tell you to start with Question 2. As a rough guide: Question 1, 45 min; Question 2, 25 min (do Question 3 during cooling); Question 3, 40 min; checking, 10 min.|||Шалгалтын хуудас өөрөө санал болгодог: 2-р асуултын тигелийг хөргөх хооронд 3-р асуултаа эхлүүл. Жинлүүр 8–12 сурагчид 1 байдаг тул заримдаа 2-р асуултаас эхлэхийг хянагч зааж болно. Ойролцоогоор: 1-р асуулт 45 мин, 2-р 25 мин (хөргөх хугацаанд 3-аа хийнэ), 3-р 40 мин, шалгах 10 мин.@@</div></details>
  <details class="teach"><summary>@@Mark structure and grade thresholds|||Онооны бүтэц ба босго оноо@@</summary><div><div class="grid2">
      <div>
        <h3>@@Structure|||Бүтэц@@</h3>
        <table class="rt">
          <tr><th>@@Question|||Асуулт@@</th><th>@@Content|||Агуулга@@</th><th>@@Marks|||Оноо@@</th></tr>
          <tr><td>1</td><td style="text-align:left">@@Hot titration of (COOH)₂·xH₂O with KMnO₄ to find <i>x</i>|||KMnO₄-ээр (COOH)₂·xH₂O-г халуунаар титрлэж <i>x</i>-ийг олох@@</td><td>15</td></tr>
          <tr><td>2</td><td style="text-align:left">@@Heating ZnSO₄·yH₂O in a crucible to find <i>y</i>|||ZnSO₄·yH₂O-г тигельд халааж <i>y</i>-ийг олох@@</td><td>10</td></tr>
          <tr><td>3</td><td style="text-align:left">@@Testing for ions and water; oxidation states of Mn|||Ион, ус илрүүлэх; Mn-ийн исэлдэлтийн зэргүүд@@</td><td>15</td></tr>
        </table>
      </div>
      <div>
        <h3>@@Assessment categories (syllabus)|||Үнэлгээний ангилал (syllabus)@@</h3>
        <table class="rt">
          <tr><th>@@Skill|||Ур чадвар@@</th><th>@@Minimum marks|||Хамгийн бага оноо@@</th></tr>
          <tr><td style="text-align:left">@@MMO: making measurements and observations|||MMO — хэмжилт, ажиглалт хийх@@</td><td>12</td></tr>
          <tr><td style="text-align:left">@@PDO: presenting data and observations|||PDO — өгөгдөл, ажиглалтыг бүртгэх@@</td><td>6</td></tr>
          <tr><td style="text-align:left">@@ACE: analysis, conclusions and evaluation|||ACE — анализ, дүгнэлт, үнэлгээ@@</td><td>10</td></tr>
        </table>
        <p class="small muted">@@The remaining 12 marks are shared unevenly among these.|||Үлдсэн 12 оноо эдгээрт харилцан адилгүй хуваарилагдана.@@</p>
      </div>
    </div>
    <h3>Grade threshold (component 35, Nov 2025)</h3>
    <div class="tablewrap"><table class="rt">
      <tr><th>Max</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
      <tr><td>40</td><td>28</td><td>26</td><td>22</td><td>18</td><td>15</td></tr>
    </table></div>
    <p class="small muted">@@Source: Cambridge's November 2025 grade threshold table for 9701. These are thresholds for this component only; the final AS/A Level grade comes from all components together.|||Эх сурвалж: Cambridge-ийн Nov 2025 оны 9701 grade threshold хүснэгт. Эдгээр нь зөвхөн энэ хэсгийн (component) босго; AS/A-level-ийн эцсийн үнэлгээ бүх хэсгийн нийлбэрээр гарна.@@</p></div></details>
  <details class="teach"><summary>@@About this material|||Материалын тухай@@</summary><div>@@All the mark points in the mark scheme (9701/35/O/N/25) are explained here in our own words. For copyright reasons the question text is not copied word for word but summarised by meaning, so keep the real paper open beside you. The <i>Principal Examiner Report</i> for this session is not publicly available, so the “Examiner's tip” sections are based on the practical requirements of the syllabus and on mistakes that recur in Paper 3 reports from earlier years.|||Mark scheme (9701/35/O/N/25)-ийн бүх онооны цэгийг монголоор тайлбарлаж ашигласан. Асуултын текстийг зохиогчийн эрхийн улмаас үг үсгээр нь хуулаагүй, утгаар нь товчлон буулгасан — бодит хуудсыг хажууд нь нээж ажиллахыг зөвлөе. Энэ сессийн <i>Principal Examiner Report</i> олон нийтэд нээлттэй байршаагүй тул «Шалгагчийн зөвлөмж» хэсгүүд нь syllabus-ын практик шаардлага болон өмнөх жилүүдийн Paper 3 тайлангуудад байнга давтагддаг алдаан дээр тулгуурласан.@@</div></details>
</section>

<!-- ===================== Q1 ===================== -->
<section class="tab" id="tab-q1">
  <div class="partnav" id="partnav-q1"></div>
  <div class="card">
    <div class="qhead"><h2>@@1. Finding <i>x</i> in hydrated ethanedioic acid|||1. Ус агуулсан этандиойн хүчлийн <i>x</i>-ийг тодорхойлох@@</h2><span class="marks">[15]</span></div>
    <p>@@Hydrated ethanedioic (oxalic) acid <b>(COOH)₂·xH₂O</b> (<i>x</i> is a whole number) reacts with manganate(VII) ions when hot:|||Ус агуулсан этандиойн (оксалийн) хүчил <b>(COOH)₂·xH₂O</b> (<i>x</i> — бүхэл тоо) нь халуунд манганат(VII) ионтой урвална:@@</p>
    <div class="eq">5(COOH)₂(aq) + 2MnO₄⁻(aq) + 6H⁺(aq) → 10CO₂(g) + 2Mn²⁺(aq) + 8H₂O(l)</div>
    <ul>
      <li>@@<b>FA 1</b>: solution containing 6.20 g of (COOH)₂·xH₂O in 1 dm³|||<b>FA 1</b> — 1 dm³-т 6.20 g (COOH)₂·xH₂O агуулсан уусмал@@</li>
      <li><b>FA 2</b> — 0.0200 mol dm⁻³ KMnO₄</li>
      <li><b>FA 3</b> — 1.0 mol dm⁻³ H₂SO₄</li>
    </ul>
    <details class="teach"><summary>@@Method (summary): read it all first|||Аргачлал (товч) — эхлээд бүтэн уншина уу@@</summary><div>
      <ol>
        <li>@@Fill the burette with FA 2.|||Бюретийг FA 2-оор дүүргэнэ.@@</li>
        <li>@@Pipette 25.0 cm³ of FA 1 into a conical flask.|||25.0 cm³ FA 1-ийг пипеткээр конус колбонд хийнэ.@@</li>
        <li>@@Add about 20 cm³ of FA 3 using a measuring cylinder.|||Хэмжээст цилиндрээр ~20 cm³ FA 3 нэмнэ.@@</li>
        <li>@@Carefully heat the flask on a tripod and gauze to about 70 °C, remove the flame, and place the flask on a white tile under the burette.|||Колбыг тулгуур, торон дээр ~70 °C хүртэл болгоомжтой халаагаад, галыг холдуулж, цагаан хавтан дээр бюретийн доор тавина.@@</li>
        <li>@@Add the first 2–3 cm³ drop by drop. The pink colour may stay for a few seconds before it disappears.|||Эхний 2–3 cm³-ийг дуслаар нэмнэ — ягаан өнгө хэдэн секунд байж байгаад алга болж болно.@@</li>
        <li>@@If a brown colour appears, reheat to about 70 °C. If it disappears, carry on; if not, discard the flask and start again.|||Хүрэн өнгө гарвал ~70 °C хүртэл дахин халаана; алга болвол үргэлжлүүлнэ, үгүй бол колбыг асгаж шинээр эхэлнэ.@@</li>
        <li>@@End-point: a <b>permanent pale pink</b> colour.|||Төгсгөлийн цэг: <b>байнгын цайвар ягаан</b> өнгө.@@</li>
        <li>@@Do a rough titration, then accurate titrations until you have concordant results. Record all readings.|||Rough титрлэлт хийж, дараа нь нийцтэй (concordant) үр дүн гартал нарийн титрлэлтүүд хийнэ. Бүх заалтыг бүртгэнэ.@@</li>
      </ol>
    </div></details>
  </div>

  <div class="card">
    <h3>@@1(a) Simulation|||1(a) Симуляци@@</h3>
    <div class="grid-sim">
      <div>
        <svg id="q1svg" class="app-svg" viewBox="0 0 360 520" aria-label="@@Titration apparatus|||Титрлэлтийн төхөөрөмж@@"></svg>
        <div class="readouts">
          <div class="readout">@@<b>Flask temperature</b><span id="q1temp">—</span>|||<b>Колбын температур</b><span id="q1temp">—</span>@@</div>
          <div class="readout">@@<b>Current titration</b><span id="q1runlbl">—</span>|||<b>Одоогийн титрлэлт</b><span id="q1runlbl">—</span>@@</div>
        </div>
      </div>
      <div>
        <div class="btnrow">
          <label class="small">@@Record in column:|||Аль баганад бүртгэх вэ:@@
            <select id="q1col"><option value="0">Rough</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>
          </label>
        </div>
        <ol class="steps" id="q1steps">
          <li data-s="fill"><button class="btn" id="q1fill">@@Fill the burette with FA 2|||Бюретийг FA 2-оор дүүргэх@@</button></li>
          <li data-s="fa1"><button class="btn" id="q1fa1">@@Pipette 25.0 cm³ of FA 1|||25.0 cm³ FA 1 пипеткээр хийх@@</button></li>
          <li data-s="fa3"><button class="btn" id="q1fa3">@@Add about 20 cm³ of FA 3|||~20 cm³ FA 3 нэмэх@@</button></li>
          <li data-s="heat"><button class="btn" id="q1heat">@@Heat (+≈6 °C)|||Халаах (+≈6 °C)@@</button> @@<span class="small muted">reach about 70 °C</span>|||<span class="small muted">~70 °C хүрэх</span>@@</li>
          <li data-s="add">@@Add FA 2:|||FA 2 нэмэх:@@
            <div class="btnrow">
              <button class="btn" data-add="1">+1.00</button>
              <button class="btn" data-add="0.5">+0.50</button>
              <button class="btn" data-add="0.1">+0.10</button>
              <button class="btn" data-add="0.05">@@1 drop|||1 дусал@@</button>
              <button class="btn" id="q1stream" title="@@Press and hold|||Дарж барина@@">@@Run (press and hold)|||Урсгах (дарж барих)@@</button>
            </div>
          </li>
          <li data-s="end"><button class="btn primary" id="q1end">@@End-point: finish|||Төгсгөлийн цэг — дуусгах@@</button> <button class="btn ghost" id="q1discard">@@Discard the flask|||Колбыг асгах@@</button></li>
        </ol>
        <div class="grid2" style="gap:10px;align-items:start">
          <div>
            <svg id="q1lens" class="lens" viewBox="0 0 170 300" aria-label="@@Magnified view of the burette|||Бюретийн томруулсан харагдац@@"></svg>
            <p class="small muted" style="max-width:180px">@@Magnified burette. KMnO₄ is dark, so read the <b>top edge of the meniscus</b>. Read to the nearest 0.05 cm³.|||Томруулсан бюрет. KMnO₄ бараан тул <b>менискийн дээд ирмэгээр</b> уншина. 0.05 cm³ нарийвчлалтай.@@</p>
          </div>
          <div>
            <div class="note small">@@<b class="t">Observation</b><span id="q1obs">Fill the burette to begin.</span>|||<b class="t">Ажиглалт</b><span id="q1obs">Эхлэхийн тулд бюретийг дүүргэнэ үү.</span>@@</div>
            <div class="note warn small" id="q1warn" hidden></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@1(a) Results table|||1(a) Үр дүнгийн хүснэгт@@</h3><span class="marks">[7]</span></div>
    <p class="small">@@Write the row <b>headings with their units</b> yourself in English (for example <span class="mono">initial burette reading / cm3</span>). Record readings to the nearest 0.05 cm³, with 2 decimal places.|||Мөрийн <b>гарчгийг нэгжтэй нь</b> өөрөө англиар бичнэ (жишээ: <span class="mono">initial burette reading / cm3</span>). Заалтуудыг 0.05 cm³-ийн нарийвчлалтай, 2 аравтын оронтой бичнэ.@@</p>
    <div class="tablewrap"><table class="rt" id="q1table">
      <thead><tr><th>@@Heading (with unit)|||Гарчиг (нэгжтэй)@@</th><th>Rough</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>
      <tbody>
        <tr><td><input class="head" id="q1h0" placeholder="..."></td><td><input data-r="0" data-c="0"></td><td><input data-r="0" data-c="1"></td><td><input data-r="0" data-c="2"></td><td><input data-r="0" data-c="3"></td><td><input data-r="0" data-c="4"></td></tr>
        <tr><td><input class="head" id="q1h1" placeholder="..."></td><td><input data-r="1" data-c="0"></td><td><input data-r="1" data-c="1"></td><td><input data-r="1" data-c="2"></td><td><input data-r="1" data-c="3"></td><td><input data-r="1" data-c="4"></td></tr>
        <tr><td><input class="head" id="q1h2" placeholder="..."></td><td><input data-r="2" data-c="0"></td><td><input data-r="2" data-c="1"></td><td><input data-r="2" data-c="2"></td><td><input data-r="2" data-c="3"></td><td><input data-r="2" data-c="4"></td></tr>
      </tbody>
    </table></div>
    <div class="btnrow"><button class="btn primary" id="q1checkA">@@Check 1(a)|||1(a)-г шалгах@@</button> <button class="wb-link" data-wb="Q1">@@Open whiteboard|||Самбар нээх@@</button></div>
    <div id="q1fbA" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation: how to earn the marks in 1(a)|||Багшийн тайлбар: 1(a) хэрхэн оноо авах вэ@@</summary><div>
      <p>@@<b>I</b>: 2 readings <i>and</i> a titre for the rough titration, plus initial and final readings for at least 2 accurate titrations.|||<b>I</b> — Rough титрлэлтийн 2 заалт <i>ба</i> титр, мөн дор хаяж 2 нарийн титрлэлтийн эхний/эцсийн заалт бүртгэгдсэн байх.@@</p>
      <p>@@<b>II</b>: titres recorded for the accurate titrations <i>and</i> correct headings: <span class="mono">initial/start … reading/volume</span>, <span class="mono">final/end … reading/volume</span>, <span class="mono">titre</span> or <span class="mono">volume (of FA 2) used/added</span>, with the unit as <span class="mono">/ cm3</span>, <span class="mono">(cm3)</span> or <span class="mono">in cm3</span> in every heading.|||<b>II</b> — Нарийн титрлэлтийн титрүүд бичигдсэн <i>ба</i> гарчиг зөв: <span class="mono">initial/start … reading/volume</span>, <span class="mono">final/end … reading/volume</span>, <span class="mono">titre</span> эсвэл <span class="mono">volume (of FA 2) used/added</span>; нэгж <span class="mono">/ cm3</span>, <span class="mono">(cm3)</span>, <span class="mono">in cm3</span> хэлбэрээр гарчиг бүрт.@@</p>
      <p>@@<b>III</b>: all accurate readings to the nearest 0.05 cm³: <span class="mono">0.00, 23.45, 24.60</span>. Writing <span class="mono">0</span>, <span class="mono">24.6</span> or <span class="mono">23.47</span> loses the mark.|||<b>III</b> — Нарийн титрлэлтийн бүх заалт 0.05 cm³-ийн нарийвчлалтай: <span class="mono">0.00, 23.45, 24.60</span>. <span class="mono">0</span>, <span class="mono">24.6</span>, <span class="mono">23.47</span> гэвэл оноо алдана.@@</p>
      <p>@@<b>IV</b>: the <i>last</i> accurate titre is within 0.10 cm³ of another accurate titre. In other words, stop as soon as you have a concordant pair.|||<b>IV</b> — Хамгийн <i>сүүлийн</i> нарийн титр өөр аль нэг нарийн титрээс 0.10 cm³-ээс ихгүй зөрүүтэй байх. Өөрөөр хэлбэл нийцтэй хос гармагц зогсох нь зөв.@@</p>
      <p>@@<b>V–VII (accuracy)</b>: the examiner compares your best mean titre with the supervisor's value: difference ≤0.50 gives 1, ≤0.30 gives 2, ≤0.20 gives 3 marks. In this simulation the supervisor's value is <b>24.60 cm³</b>, calculated from the concentrations in the confidential instructions.|||<b>V–VII (нарийвчлал)</b> — Шалгагч таны хамгийн сайн дундаж титрийг хянагчийн (supervisor) утгатай харьцуулна: зөрүү ≤0.50 → 1, ≤0.30 → 2, ≤0.20 → 3 оноо. Энэ симуляцид хянагчийн утга нь CI-ийн концентрациар тооцсон <b>24.60 cm³</b>.@@</p>
      <div class="note exam">@@<b class="t">Examiner's tip</b>Near the end-point add one drop (0.05 cm³) and wait 30 seconds. In a cold flask the pink colour fades slowly, so a common mistake is to take this as the end-point and stop too early. Do not include the rough titre in the mean.|||<b class="t">Шалгагчийн зөвлөмж</b>Төгсгөлийн цэгийн ойролцоо нэг дусал (0.05 cm³) нэмж, 30 секунд хүлээж үзээрэй. Хүйтэн колбонд ягаан өнгө удаан арилдаг тул «төгсгөлийн цэг» гэж андуурч эрт зогсох нь түгээмэл алдаа. Rough титрийг дундажид оруулахгүй.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@1(b) Mean titre|||1(b) Дундаж титр@@</h3><span class="marks">[1]</span></div>
    <p class="small">@@Choose (✓) the accurate titres to use in your calculation and write the mean to 2 decimal places.|||Тооцоонд ашиглах нарийн титрүүдээ сонгож (✓), дунджийг 2 аравтын оронтой бичнэ.@@</p>
    <div class="btnrow" id="q1pick"></div>
    <div class="calc"><div class="row">@@For 25.0 cm³ of FA 1,|||25.0 cm³ FA 1-д@@ <input id="q1mean" placeholder="@@e.g. 24.60|||жишээ 24.60@@"> @@cm³ of FA 2 was used.|||cm³ FA 2 зарцуулагдсан.@@</div><div id="q1fbB" class="fb"></div></div>
    <button class="btn primary" id="q1checkB">@@Check 1(b)|||1(b)-г шалгах@@</button>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@1(c) Calculations|||1(c) Тооцоо@@</h3><span class="marks">[6]</span></div>
    <p class="small">@@Give answers to 3–4 significant figures. You can type <span class="mono">4.92e-4</span> or <span class="mono">0.000492</span>. Each step is checked using <i>your own</i> value from the step before (ECF).|||Хариултыг 3–4 тэмдэгт оронтой (sig. fig.) бичнэ. <span class="mono">4.92e-4</span> эсвэл <span class="mono">0.000492</span> хэлбэрээр оруулж болно. Өмнөх алхмын <i>таны өөрийн</i> утгаар шалгана (ECF).@@</p>
    <div class="calc"><b>(ii)</b><div class="row">n(MnO₄⁻) = <input id="c1ii"> mol</div></div>
    <div class="calc"><b>(iii)</b>
      <div class="row">n((COOH)₂) = <input id="c1iiia"> mol</div>
      <div class="row">@@[(COOH)₂] in FA 1 =|||[(COOH)₂] FA 1-д =@@ <input id="c1iiib"> mol dm⁻³</div></div>
    <div class="calc"><b>(iv)</b><div class="row">M<sub>r</sub> = <input id="c1iv"></div></div>
    <div class="calc"><b>(v)</b><div class="row"><i>x</i> = <input id="c1v"></div></div>
    <div class="btnrow"><button class="btn primary" id="q1checkC">@@Check 1(c)|||1(c)-г шалгах@@</button> <button class="wb-link" data-wb="Q1">@@Work it out on the whiteboard|||Самбар дээр бодох@@</button></div>
    <div id="q1fbC" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation: worked solution (example: mean 24.60 cm³)|||Багшийн тайлбар: алхамчилсан бодолт (жишээ: дундаж 24.60 cm³)@@</summary><div>
      <p><b>(ii)</b> n(MnO₄⁻) = c × V = 0.0200 × 24.60 / 1000 = <b>4.920 × 10⁻⁴ mol</b></p>
      <p>@@<b>(iii)</b> From the equation, 5 (COOH)₂ : 2 MnO₄⁻, so n((COOH)₂) = 4.920 × 10⁻⁴ × 5/2 = <b>1.230 × 10⁻³ mol</b> (in 25.0 cm³).<br>
      Concentration = 1.230 × 10⁻³ × 1000 / 25.0 = <b>0.04920 mol dm⁻³</b>|||<b>(iii)</b> Тэгшитгэлээс 5 (COOH)₂ : 2 MnO₄⁻ → n((COOH)₂) = 4.920 × 10⁻⁴ × 5/2 = <b>1.230 × 10⁻³ mol</b> (25.0 cm³-т).<br>
      Концентраци = 1.230 × 10⁻³ × 1000 / 25.0 = <b>0.04920 mol dm⁻³</b>@@</p>
      <p>@@<b>(iv)</b> 1 dm³ of FA 1 contains 6.20 g, so M<sub>r</sub> = 6.20 / 0.04920 = <b>126</b> (126.0)|||<b>(iv)</b> FA 1-ийн 1 dm³-т 6.20 g байгаа тул M<sub>r</sub> = 6.20 / 0.04920 = <b>126</b> (126.0)@@</p>
      <p>@@<b>(v)</b> M<sub>r</sub>((COOH)₂) = 2(12.0 + 2×16.0 + 1.0) = 90.0, so <i>x</i> = (126 − 90)/18 = 2.0, giving <b>x = 2</b> (as a whole number)|||<b>(v)</b> M<sub>r</sub>((COOH)₂) = 2(12.0 + 2×16.0 + 1.0) = 90.0 → <i>x</i> = (126 − 90)/18 = 2.0 → <b>x = 2</b> (бүхэл тоогоор)@@</p>
      <div class="note exam">@@<b class="t">Examiner's tip</b>The (c)(i) mark is given only when <i>all</i> answers in (ii), (iii) and (iv) have 3–4 s.f.; one answer with 2 s.f. or 5 s.f. loses it. Do not round intermediate values. Using the 5/2 ratio upside down (2/5) is the most common mistake. If you write <i>x</i> as a non-integer (for example 2.03) you lose the (v) mark.|||<b class="t">Шалгагчийн зөвлөмж</b>(c)(i)-ийн оноо (ii), (iii), (iv)-ийн <i>бүх</i> хариулт 3–4 s.f. байхад л өгөгдөнө — нэг нь 2 s.f. эсвэл 5 s.f. бол алдана. Завсрын утгыг бүү тойрогло. 5/2 харьцааг урвуу (2/5) авах нь хамгийн түгээмэл алдаа. <i>x</i>-ийг бүхэл тоо биш (жишээ 2.03) бичвэл (v)-ийн оноо алдана.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@1(d) Why is FA 3 added?|||1(d) FA 3-ыг яагаад нэмэх вэ?@@</h3><span class="marks">[1]</span></div>
    <textarea id="q1d" placeholder="@@Explain in English...|||Англиар тайлбарла...@@"></textarea>
    <button class="btn primary" id="q1checkD">@@Check 1(d)|||1(d)-г шалгах@@</button>
    <div id="q1fbD" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation|||Багшийн тайлбар@@</summary><div>
      <p>@@<b>MS:</b> H⁺ ions are needed for the reaction / are used up in the reaction / appear in the equation.|||<b>MS:</b> H⁺ ион урвалд шаардлагатай / урвалд зарцуулагдана / тэгшитгэлд байна.@@</p>
      <p>@@Further note: without enough H⁺, MnO₄⁻ is reduced only as far as brown MnO₂, not to Mn²⁺, which is why a brown colour appears. HCl cannot be used because Cl⁻ is oxidised by MnO₄⁻ to Cl₂; HNO₃ is itself an oxidising agent. That is why H₂SO₄ is chosen.|||Нэмэлт ойлголт: H⁺ хүрэлцэхгүй бол MnO₄⁻ нь Mn²⁺ хүртэл бус, хүрэн MnO₂ хүртэл л ангижирна (тиймээс хүрэн өнгө гарна). HCl-ийг ашиглаж болохгүй — Cl⁻ нь MnO₄⁻-д исэлдэж Cl₂ болно; HNO₃ нь өөрөө исэлдүүлэгч. Тиймээс H₂SO₄ сонгодог.@@</p>
    </div></details>
  </div>
</section>

<!-- ===================== Q2 ===================== -->
<section class="tab" id="tab-q2">
  <div class="partnav" id="partnav-q2"></div>
  <div class="card">
    <div class="qhead"><h2>@@2. Finding <i>y</i> in ZnSO₄·yH₂O|||2. ZnSO₄·yH₂O-ийн <i>y</i>-ийг тодорхойлох@@</h2><span class="marks">[10]</span></div>
    <p>@@When hydrated zinc sulfate is heated it loses only its water of crystallisation, forming anhydrous ZnSO₄. <b>FA 4</b> is ZnSO₄·yH₂O.|||Ус агуулсан цайрын сульфатыг халаахад зөвхөн кристаллжилтын усаа алдаж, усгүй ZnSO₄ болно. <b>FA 4</b> — ZnSO₄·yH₂O.@@</p>
    <details class="teach"><summary>@@Method (summary)|||Аргачлал (товч)@@</summary><div>
      <ol>
        <li>@@Weigh the crucible with its lid and record the mass.|||Тигелийг тагтай нь жинлэж бүртгэнэ.@@</li>
        <li>@@Add 3.20–3.40 g of FA 4 and weigh again with the lid.|||3.20–3.40 g FA 4 хийж, тагтай нь дахин жинлэнэ.@@</li>
        <li>@@On a pipe-clay triangle, heat gently <b>with the lid on</b> for about 2 min.|||Шаазан гурвалжин дээр <b>тагтай</b>гаар ~2 мин зөөлөн халаана.@@</li>
        <li>@@<b>Remove the lid</b> and heat strongly for about 4 min.|||<b>Тагийг авч</b> ~4 мин хүчтэй халаана.@@</li>
        <li>@@Replace the lid, cool for at least 5 min and weigh.|||Тагийг тавиад дор хаяж 5 мин хөргөөд жинлэнэ.@@</li>
        <li>@@Remove the lid, heat strongly again for about 3 min, cool with the lid on for 5+ min and weigh.|||Тагийг авч дахин ~3 мин хүчтэй халаагаад, тагтай нь 5+ мин хөргөж жинлэнэ.@@</li>
        <li>@@Calculate and record the mass of FA 4 and the mass of residue.|||FA 4-ийн масс, үлдэгдлийн массыг тооцож бүртгэнэ.@@</li>
      </ol>
    </div></details>
  </div>

  <div class="card">
    <h3>@@2(a) Simulation|||2(a) Симуляци@@</h3>
    <div class="grid-sim">
      <div>
        <svg id="q2svg" class="app-svg" viewBox="0 0 360 380" aria-label="@@Heating a crucible|||Тигель халаах@@"></svg>
        <div class="readouts">
          <div class="readout">@@<b>Lid</b><span id="q2lid">on</span>|||<b>Таг</b><span id="q2lid">тагтай</span>@@</div>
          <div class="readout">@@<b>Crucible temperature</b><span id="q2temp">25 °C</span>|||<b>Тигелийн температур</b><span id="q2temp">25 °C</span>@@</div>
          <div class="readout">@@<b>Total heating time</b><span id="q2time">0 min</span>|||<b>Нийт халаасан</b><span id="q2time">0 мин</span>@@</div>
        </div>
      </div>
      <div>
        <p>@@<span class="balance" id="q2bal">--.--</span> <span class="small muted">g · balance</span>|||<span class="balance" id="q2bal">--.--</span> <span class="small muted">g · жинлүүр</span>@@</p>
        <div class="btnrow"><button class="btn primary" id="q2weigh">@@Weigh crucible + lid + contents|||Тигель + таг + агуулгыг жинлэх@@</button></div>
        <div class="btnrow">
          @@<span class="small" style="align-self:center">Add FA 4:</span>|||<span class="small" style="align-self:center">FA 4 нэмэх:</span>@@
          <button class="btn" data-fa4="0.5">≈0.5 g</button>
          <button class="btn" data-fa4="0.1">≈0.1 g</button>
          <button class="btn" data-fa4="-0.1">@@Take back ≈0.1 g|||≈0.1 g буцааж авах@@</button>
        </div>
        <div class="btnrow">
          <button class="btn" id="q2lidbtn">@@Remove / replace lid|||Тагийг авах / тавих@@</button>
          <button class="btn" data-heat="gentle">@@Heat gently 1 min|||Зөөлөн халаах 1 мин@@</button>
          <button class="btn" data-heat="strong">@@Heat strongly 1 min|||Хүчтэй халаах 1 мин@@</button>
          <button class="btn" id="q2cool">@@Cool 1 min|||Хөргөх 1 мин@@</button>
        </div>
        <div class="note small">@@<b class="t">Observation</b><span id="q2obs">First weigh the empty crucible with its lid.</span>|||<b class="t">Ажиглалт</b><span id="q2obs">Эхлээд хоосон тигелийг тагтай нь жинлэнэ.</span>@@</div>
        <div class="note warn small" id="q2warn" hidden></div>
        <p class="small muted">@@Action log:|||Үйлдлийн бүртгэл:@@</p>
        <div class="log" id="q2log"></div>
        <div class="btnrow"><button class="btn ghost" id="q2reset">@@Start again|||Шинээр эхлэх@@</button></div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@2(a) Results|||2(a) Үр дүн@@</h3><span class="marks">[5]</span></div>
    <p class="small">@@Six rows: four weighings + mass of FA 4 + mass of residue. Write the headings with their units in English.|||Зургаан мөр: дөрвөн жинлэлт + FA 4-ийн масс + үлдэгдлийн масс. Гарчгийг нэгжтэй нь англиар бич.@@</p>
    <div class="tablewrap"><table class="rt" id="q2table">
      <thead><tr><th>@@Heading (with unit)|||Гарчиг (нэгжтэй)@@</th><th>@@Value|||Утга@@</th></tr></thead>
      <tbody></tbody>
    </table></div>
    <div class="btnrow"><button class="btn primary" id="q2checkA">@@Check 2(a)|||2(a)-г шалгах@@</button></div>
    <div id="q2fbA" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation: the mark points in 2(a)|||Багшийн тайлбар: 2(a)-ийн онооны цэгүүд@@</summary><div>
      <p>@@<b>I</b>: 6 headings with units: <span class="mono">mass of crucible + lid / g</span>; <span class="mono">mass of crucible + lid + FA 4 / g</span>; <span class="mono">mass of crucible + lid + residue after first heating / g</span>; <span class="mono">… after second heating / g</span>; <span class="mono">mass of FA 4 / g</span>; <span class="mono">mass of residue / g</span>.|||<b>I</b> — 6 гарчиг нэгжтэй: <span class="mono">mass of crucible + lid / g</span>; <span class="mono">mass of crucible + lid + FA 4 / g</span>; <span class="mono">mass of crucible + lid + residue after first heating / g</span>; <span class="mono">… after second heating / g</span>; <span class="mono">mass of FA 4 / g</span>; <span class="mono">mass of residue / g</span>.@@</p>
      <p>@@<b>II</b>: all four weighings to the same number of decimal places (2 or 3) <i>and</i> the mass after the second heating within +0.02 / −0.05 g of the first (showing it is close to constant mass).|||<b>II</b> — Дөрвөн жинлэлт ижил аравтын оронтой (2 эсвэл 3) <i>ба</i> 2 дахь халаалтын дараах масс 1 дэхээс +0.02 / −0.05 g-ийн дотор (тогтмол масст ойртсоныг харуулна).@@</p>
      <p>@@<b>III</b>: subtractions correct <i>and</i> mass of FA 4 between 2.90 and 3.40 g.|||<b>III</b> — Хасах үйлдлүүд зөв <i>ба</i> FA 4-ийн масс 2.90–3.40 g.@@</p>
      <p>@@<b>IV, V (accuracy)</b>: the ratio m(FA 4)/m(residue). The theoretical value is 287.5/161.5 = <b>1.78</b>. 1.51–2.05 earns IV; 1.60–1.96 earns V.|||<b>IV, V (нарийвчлал)</b> — m(FA 4)/m(үлдэгдэл) харьцаа. Онолын утга 287.5/161.5 = <b>1.78</b>. 1.51–2.05 → IV; 1.60–1.96 → V.@@</p>
      <div class="note exam">@@<b class="t">Examiner's tip</b>Strong heating straight away makes the crystals break and jump out (mass is lost, so the ratio rises). Weighing a hot crucible gives a low reading because of air currents. Keeping the lid on while cooling stops the residue absorbing moisture from the air. Record balance readings exactly as shown (0.01 g).|||<b class="t">Шалгагчийн зөвлөмж</b>Шууд хүчтэй халаавал талст хагарч үсэрнэ (масс алдагдана → харьцаа өснө). Халуун тигелийг жинлэвэл агаарын урсгалаас болж бага заалт өгнө. Хөргөх үед таг тавих нь агаарын чийг шингээхээс сэргийлнэ. Жинлүүрийн заалтыг яг харагдсанаар нь (0.01 g) бүртгэ.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@2(b) Calculations|||2(b) Тооцоо@@</h3><span class="marks">[4]</span></div>
    <p class="small">M<sub>r</sub>(ZnSO₄) = 161.5, M<sub>r</sub>(H₂O) = 18.0. 2–4 s.f.</p>
    <div class="calc"><b>(i)</b>
      <div class="row">n(ZnSO₄) = <input id="c2a"> mol</div>
      <div class="row">n(H₂O) = <input id="c2b"> mol</div></div>
    <div class="calc"><b>(ii)</b>
      <div class="row">n(H₂O) / n(ZnSO₄) = <input id="c2c"> @@(calculated value)|||(тооцсон утга)@@</div>
      <div class="row"><i>y</i> = <input id="c2d"> @@(whole number)|||(бүхэл тоо)@@</div></div>
    <div class="btnrow"><button class="btn primary" id="q2checkB">@@Check 2(b)|||2(b)-г шалгах@@</button> <button class="wb-link" data-wb="Q2">@@Work it out on the whiteboard|||Самбар дээр бодох@@</button></div>
    <div id="q2fbB" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation (example: FA 4 = 3.30 g, residue = 1.85 g)|||Багшийн тайлбар (жишээ: FA 4 = 3.30 g, үлдэгдэл = 1.85 g)@@</summary><div>
      <p>n(ZnSO₄) = 1.85 / 161.5 = <b>0.0115 mol</b> (0.01146)</p>
      <p>m(H₂O) = 3.30 − 1.85 = 1.45 g → n(H₂O) = 1.45 / 18.0 = <b>0.0806 mol</b></p>
      <p><i>y</i> = 0.0806 / 0.01146 = 7.03 → <b>y = 7</b></p>
      <p class="small muted">@@The actual substance is ZnSO₄·7H₂O (given in the confidential instructions).|||Бодит бодис нь ZnSO₄·7H₂O (CI-д заасан).@@</p>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@2(c) Why is this method unsuitable for studying hydrated ethanedioic acid?|||2(c) Энэ аргаар ус агуулсан этандиойн хүчлийг судлах нь яагаад тохиромжгүй вэ?@@</h3><span class="marks">[1]</span></div>
    <textarea id="q2c" placeholder="@@In English...|||Англиар...@@"></textarea>
    <button class="btn primary" id="q2checkC">@@Check 2(c)|||2(c)-г шалгах@@</button>
    <div id="q2fbC" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation|||Багшийн тайлбар@@</summary><div>
      <p>@@<b>MS:</b> the (anhydrous ethanedioic) acid <b>decomposes</b> on heating / is flammable. So the loss in mass is not from water alone: it also breaks down into CO, CO₂ and H₂O.|||<b>MS:</b> (усгүй этандиойн) хүчил халаахад <b>задарна</b> / шатамхай. Тиймээс массын бууралт зөвхөн уснаас биш — CO, CO₂, H₂O болж задарснаас болно.@@</p>
    </div></details>
  </div>
</section>

<!-- ===================== Q3 ===================== -->
<section class="tab" id="tab-q3">
  <div class="partnav" id="partnav-q3"></div>
  <div class="card">
    <div class="qhead"><h2>@@3. Qualitative analysis|||3. Чанарын шинжилгээ@@</h2><span class="marks">[15]</span></div>
    <p class="small">@@Write each observation clearly: colour changes, precipitates and whether they dissolve in excess reagent, gases and the test that identifies them. If nothing changes, write <b>no change</b>. Use a boiling tube to heat solutions and a hard-glass test-tube to heat solids.|||Ажиглалт бүрийг тодорхой бич: өнгөний өөрчлөлт, тунадас ба илүүдэл реагентэд уусах эсэх, хий ба түүнийг илрүүлсэн сорил. Өөрчлөлтгүй бол <b>no change</b> гэж бич. Уусмал халаах бол буцалгах хуруу шил, хатуу бодис халаах бол халуунд тэсвэртэй хуруу шил хэрэглэнэ.@@</p>
    <div class="note warn small">@@<b class="t">Note</b>A label in the laboratory saying “possibly” is only a guess. Draw your conclusions from <i>your own observations</i>.|||<b class="t">Анхаар</b>Лабораторийн шошго «магадгүй» гэсэн таамаг л байдаг. Дүгнэлтээ <i>өөрийн ажиглалтаас</i> гарга.@@</div>
  </div>

  <div class="card">
    <h3>@@Test bench|||Туршилтын ширээ@@</h3>
    <div class="btnrow samples" id="q3samples"></div>
    <div class="bench">
      <div>
        <p id="q3sampleinfo" class="small"></p>
        <div class="btnrow" id="q3actions"></div>
        <div class="obsbox" id="q3obs">@@<span class="muted">Choose a sample and carry out a test.</span>|||<span class="muted">Дээжээ сонгоод сорил хийнэ үү.</span>@@</div>
        <label class="small"><input type="checkbox" id="q3reveal"> @@If you get stuck: show the observation written out in English (practice mode)|||Хэрэв гацвал: ажиглалтыг англиар тайлбарлан харуулах (дадлагын горим)@@</label>
      </div>
      <div><svg id="q3tube" class="tube-svg" viewBox="0 0 200 300" aria-label="@@Test-tube|||Хуруу шил@@"></svg></div>
    </div>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@3(a)(i) Testing FA 5 for Zn²⁺, SO₄²⁻ and water of crystallisation|||3(a)(i) FA 5-д Zn²⁺, SO₄²⁻, кристаллжилтын ус байгаа эсэхийг шалгах@@</h3><span class="marks">[5]</span></div>
    <p class="small">@@Each test you do on FA 5 is added here automatically. Write your observations <b>in English</b>.|||FA 5 дээр хийсэн сорил бүр энд автоматаар нэмэгдэнэ. Ажиглалтаа <b>англиар</b> бичнэ.@@</p>
    <div class="tablewrap"><table class="rt" id="q3atable"><thead><tr><th style="width:40%">test</th><th>observations</th></tr></thead><tbody></tbody></table></div>
    <div class="btnrow"><button class="btn primary" id="q3checkA">@@Check 3(a)(i)|||3(a)(i)-г шалгах@@</button></div>
    <div id="q3fbA" class="fb"></div>
    <h3>@@3(a)(ii) Table 3.1|||3(a)(ii) Хүснэгт 3.1@@</h3>
    <div class="tablewrap"><table class="rt" style="max-width:420px"><tr><th>Zn²⁺</th><th>SO₄²⁻</th><th>H₂O</th></tr>
      <tr><td><select id="t31a"><option value="">–</option><option>✓</option><option>✗</option></select></td><td><select id="t31b"><option value="">–</option><option>✓</option><option>✗</option></select></td><td><select id="t31c"><option value="">–</option><option>✓</option><option>✗</option></select></td></tr></table></div>
    <button class="btn primary" id="q3checkA2">@@Check 3(a)(ii)|||3(a)(ii)-г шалгах@@</button> <span class="marks">[1]</span>
    <div id="q3fbA2" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation: 3(a)|||Багшийн тайлбар: 3(a)@@</summary><div>
      <p>@@<b>M1</b> Heat solid FA 5 and observe <b>condensation / water droplets / steam</b> on the cooler part: water of crystallisation.|||<b>M1</b> Хатуу FA 5-ыг халааж, хүйтэн хэсэгт <b>конденсац / усны дусал / уур</b> ажиглах → кристаллжилтын ус.@@</p>
      <p>@@<b>M2</b> Prepare an <b>aqueous solution</b> for the tests.|||<b>M2</b> Сорилд ашиглах <b>усан уусмал</b> бэлтгэх.@@</p>
      <p>@@<b>M3</b> Adding <b>NH₃(aq)</b> to the solution gives a <b>white precipitate, insoluble in excess</b>, so it is <u>not</u> Zn²⁺ (Zn(OH)₂ dissolves in excess NH₃ forming [Zn(NH₃)₄]²⁺).|||<b>M3</b> Уусмалд <b>NH₃(aq)</b> нэмэхэд <b>цагаан тунадас, илүүдэлд уусахгүй</b> → Zn²⁺ <u>биш</u> (Zn(OH)₂ илүүдэл NH₃-т [Zn(NH₃)₄]²⁺ болж уусдаг).@@</p>
      <p>@@<b>M4</b> <b>BaCl₂(aq)</b> or <b>Ba(NO₃)₂(aq)</b> gives a <b>white precipitate</b>.|||<b>M4</b> <b>BaCl₂(aq)</b> эсвэл <b>Ba(NO₃)₂(aq)</b> → <b>цагаан тунадас</b>.@@</p>
      <p>@@<b>M5</b> Telling SO₄²⁻ from SO₃²⁻: the precipitate is <b>insoluble in HCl or HNO₃</b>, <i>or</i> acidified KMnO₄ is <b>not decolourised / stays purple</b>.|||<b>M5</b> SO₄²⁻-ыг SO₃²⁻-аас ялгах: тунадас <b>HCl эсвэл HNO₃-т уусахгүй</b>, <i>эсвэл</i> хүчиллэг KMnO₄ <b>өнгөгүй болохгүй / ягаан хэвээр</b>.@@</p>
      <p>@@<b>3(a)(ii)</b> Zn²⁺ ✗, SO₄²⁻ ✓, H₂O ✓. The actual substance is <b>MgSO₄·7H₂O</b>.|||<b>3(a)(ii)</b> Zn²⁺ ✗, SO₄²⁻ ✓, H₂O ✓. Бодит бодис: <b>MgSO₄·7H₂O</b>.@@</p>
      <div class="note exam">@@<b class="t">Examiner's tip</b>Do not add <b>H₂SO₄</b> after the Ba²⁺ test: it contains sulfate itself. Give reagents by name or correct formula (just “barium” is not enough). Write “colourless”, not “clear”: clear means transparent and does not state a colour.|||<b class="t">Шалгагчийн зөвлөмж</b>Ba²⁺-ийн сорилын дараа <b>H₂SO₄</b> нэмж болохгүй — өөрөө сульфат агуулдаг. Реагентыг нэрээр эсвэл зөв томьёогоор бичих ёстой («barium» гэж л бичвэл хангалтгүй). «Clear» биш «colourless» гэж бич: clear нь тунгалаг гэсэн утгатай, өнгө заахгүй.@@</div>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@3(b) Solid FA 6|||3(b) Хатуу FA 6@@</h3><span class="marks">[3]</span></div>
    <p class="small">@@<b>(i)</b> Heat a few crystals in a hard-glass test-tube until no more gas is given off, and record all your observations. Let the residue cool and keep it. [2]|||<b>(i)</b> Хэдэн талстыг халуунд тэсвэртэй хуруу шилэнд хий ялгарахаа болих хүртэл халааж, бүх ажиглалтаа бич. Үлдэгдлийг хөргөөд хадгална. [2]@@</p>
    <textarea id="q3bi" placeholder="Observations..."></textarea>
    <p class="small">@@<b>(ii)</b> Add distilled water to the cooled residue to a depth of about 3 cm, stir and filter. Colour of the solution: [1]|||<b>(ii)</b> Хөргөсөн үлдэгдэл дээр ~3 cm гүн нэрмэл ус нэмж хутгаад шүүнэ. Уусмалын өнгө: [1]@@</p>
    <input id="q3bii" placeholder="colour">
    <div class="btnrow"><button class="btn primary" id="q3checkB">@@Check 3(b)|||3(b)-г шалгах@@</button></div>
    <div id="q3fbB" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation: 3(b)|||Багшийн тайлбар: 3(b)@@</summary><div>
      <div class="eq">2KMnO₄(s) → K₂MnO₄(s) + MnO₂(s) + O₂(g)</div>
      <p>@@<b>Mark scheme points:</b> purple crystals at first; crystals jump about; black residue; test the gas with a glowing splint; the splint relights / glows brightly (O₂).|||<b>MS-ийн цэгүүд:</b> анх нил ягаан (purple) талст; талст үсэрч хөдөлнө; хар үлдэгдэл; хийг цогтой хэлтэрхийгээр шалгана; хэлтэрхий дахин асна / тод улайна (O₂).@@</p>
      <p>@@<b>(ii)</b> K₂MnO₄ (manganate(VI), Mn +6) dissolves in water to give a <b>(dark) green</b> solution; MnO₂ (black) is insoluble and stays on the filter paper.|||<b>(ii)</b> K₂MnO₄ (манганат(VI), Mn +6) усанд уусч <b>(бараан) ногоон</b> уусмал; MnO₂ (хар) уусахгүй тул шүүлтүүр дээр үлдэнэ.@@</p>
      <p class="small muted">@@The mark scheme does not spell out how the [2] marks are shared. This page counts the gas test and its result as 1 mark, and at least 2 of the other 3 observations as 1 mark.|||MS-д [2] онооны хуваарилалт тодорхой заагаагүй. Энэ хуудас: хийн сорил + үр дүн = 1 оноо, бусад 3 ажиглалтаас дор хаяж 2 = 1 оноо гэж тооцож байна.@@</p>
    </div></details>
  </div>

  <div class="card">
    <div class="qhead"><h3>@@3(c)(i) Table 3.2: FA 7, FA 8, FA 9|||3(c)(i) Хүснэгт 3.2 — FA 7, FA 8, FA 9@@</h3><span class="marks">[4]</span></div>
    <p class="small">@@FA 7 is an aqueous solution of FA 6. All three contain the same metal (oxidation states may differ). Use a 1 cm depth of solution or one spatula tip of solid.|||FA 7 бол FA 6-ийн усан уусмал. Гурвуулаа нэг ижил металл агуулдаг (исэлдэлтийн зэрэг өөр байж болно). Уусмалаас 1 cm гүн эсвэл нэг халбагын үзүүр хатуу бодис авна.@@</p>
    <div class="tablewrap"><table class="rt" id="t32">
      <thead><tr><th>test</th><th>FA 7</th><th>FA 8</th><th>FA 9</th></tr></thead>
      <tbody>
        <tr><th>Test 1<br><span class="small">add hydrogen peroxide</span></th><td><textarea data-c="7-1"></textarea></td><td><textarea data-c="8-1"></textarea></td><td><textarea data-c="9-1"></textarea></td></tr>
        <tr><th>Test 2<br><span class="small">add NaOH(aq), then leave to stand</span></th><td><textarea data-c="7-2"></textarea></td><td><textarea data-c="8-2"></textarea></td><td><textarea data-c="9-2"></textarea></td></tr>
        <tr><th>Test 3<br><span class="small">add FeSO₄(aq)</span></th><td><textarea data-c="7-3"></textarea></td><td><textarea data-c="8-3"></textarea></td><td><textarea data-c="9-3"></textarea></td></tr>
      </tbody>
    </table></div>
    <div class="btnrow"><button class="btn primary" id="q3checkC">@@Check 3(c)(i)|||3(c)(i)-г шалгах@@</button></div>
    <div id="q3fbC" class="fb"></div>
    <div class="calc"><b>(ii)</b><div class="row">@@Metal:|||Металл:@@ <input id="q3cii" placeholder="metal"> <span class="marks">[1]</span></div></div>
    <div class="calc"><b>(iii)</b><div class="row">@@Oxidation state: FA 6 / FA 7|||Исэлдэлтийн зэрэг: FA 6 / FA 7@@ <input id="q3ciii1" style="width:80px"> FA 8 <input id="q3ciii2" style="width:80px"> <span class="marks">[1]</span></div></div>
    <div class="btnrow"><button class="btn primary" id="q3checkC2">@@Check 3(c)(ii)(iii)|||3(c)(ii)(iii)-г шалгах@@</button> <button class="wb-link" data-wb="Q3">@@Whiteboard|||Самбар@@</button></div>
    <div id="q3fbC2" class="fb"></div>
    <details class="teach"><summary>@@Teacher's explanation: 3(c)|||Багшийн тайлбар: 3(c)@@</summary><div>
      <p>@@<b>How the marks work:</b> each correct observation marked “*” earns one star; 2 stars = 1 mark, up to 4. Two correct “no change” answers = 1 star, three = 2 stars.|||<b>Онооны тооцоо:</b> «*» бүхий зөв ажиглалт бүр нэг од; 2 од = 1 оноо, дээд тал нь 4. «No change» гэсэн 2 зөв хариулт = 1 од, 3 = 2 од.@@</p>
      <div class="tablewrap"><table class="rt small">
        <tr><th></th><th>FA 7 (MnO₄⁻/H⁺)</th><th>FA 8 (Mn²⁺)</th><th>FA 9 (MnO₂)</th></tr>
        <tr><th>H₂O₂</th><td>effervescence*; purple → colourless*; gas relights glowing splint*</td><td>no change</td><td>effervescence*; gas (O₂) relights glowing splint*</td></tr>
        <tr><th>NaOH, stand</th><td class="muted">@@(no mark in the MS)|||(MS-д оноогүй)@@</td><td>off-white ppt*; turns brown on standing*</td><td>no change</td></tr>
        <tr><th>FeSO₄</th><td>turns colourless / yellow*</td><td>no change</td><td class="muted">@@(no mark in the MS)|||(MS-д оноогүй)@@</td></tr>
      </table></div>
      <div class="eq">2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O</div>
      <div class="eq">@@2H₂O₂ —(MnO₂ catalyst)→ 2H₂O + O₂|||2H₂O₂ —(MnO₂ катализатор)→ 2H₂O + O₂@@</div>
      <div class="eq">MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</div>
      <div class="eq">@@Mn²⁺ + 2OH⁻ → Mn(OH)₂ (pale); oxidised in air and turns brown|||Mn²⁺ + 2OH⁻ → Mn(OH)₂ (цайвар) ; агаарт исэлдэж хүрэн болно@@</div>
      <p><b>(ii)</b> manganese (Mn). <b>(iii)</b> FA 6/FA 7: <b>+7</b>; FA 8: <b>+2</b>.</p>
      <p class="small">@@In FA 9, MnO₂ acts as a catalyst: the black solid remains unchanged after the reaction.|||FA 9-д MnO₂ катализаторын үүрэгтэй — хар хатуу бодис урвалын дараа хэвээр үлдэнэ.@@</p>
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
      <tr><td>H₂</td><td>pops with a lighted splint</td></tr>
      <tr><td>O₂</td><td>relights a glowing splint</td></tr>
    </table></div>
  </div>
  <div class="card">
    <h3>@@General mark scheme rules (Paper 3)|||Mark scheme-ийн ерөнхий дүрмүүд (Paper 3)@@</h3>
    <ul>
      <li>@@Burette readings to the nearest 0.05 cm³, with 2 decimal places (write 0.00).|||Бюретийн заалт 0.05 cm³-ийн нарийвчлалтай, 2 аравтын оронтой (0.00 гэж бичнэ).@@</li>
      <li>@@Concordant titres: within 0.10 cm³ of each other. The mean is taken from titres with a total spread of ≤0.20 cm³, to 2 decimal places.|||Нийцтэй (concordant) титр: хоорондоо ≤0.10 cm³. Дундаж нь нийт тархалт ≤0.20 cm³ титрүүдээс, 2 аравтын оронтой.@@</li>
      <li>@@Units in the heading: <span class="mono">/ cm3</span>, <span class="mono">(cm3)</span>, <span class="mono">in cm3</span>.|||Нэгж гарчигт: <span class="mono">/ cm3</span>, <span class="mono">(cm3)</span>, <span class="mono">in cm3</span>.@@</li>
      <li>@@S.f. of calculated values: equal to the lowest s.f. in the data, or one more.|||Тооцоолсон утгын s.f.: өгөгдлийн хамгийн бага s.f.-тэй тэнцүү эсвэл нэгээр илүү.@@</li>
      <li>@@A final answer that needs a unit usually loses the mark if the unit is missing or wrong.|||Нэгж шаардсан эцсийн хариултад нэгжгүй/буруу нэгж бол ихэвчлэн оноо алдана.@@</li>
      <li>@@ECF (error carried forward): a correct calculation using an earlier wrong value still earns the next mark.|||ECF (error carried forward): өмнөх алдаатай утгаар зөв тооцоо хийвэл дараагийн оноо авна.@@</li>
      <li>@@If asked for “n answers”, only the first n are marked; contradictory answers earn nothing.|||«n хариулт» гэвэл эхний n-ийг л дүгнэнэ; зөрчилтэй хариулт оноогүй.@@</li>
      <li>@@Balanced equations may use multiples or fractions of the coefficients; state symbols are ignored unless asked for.|||Тэнцүүлсэн тэгшитгэлд коэффициентийн үржвэр/хуваалт зөвшөөрөгдөнө; төлөвийн тэмдэглэгээг асуугаагүй бол үл тооно.@@</li>
    </ul>
    <h3>@@Sources of error and uncertainty (syllabus)|||Алдааны эх үүсвэр ба тодорхойгүй байдал (syllabus)@@</h3>
    <ul>
      <li>@@“Human error” is not accepted as an answer.|||«Human error» гэсэн хариулт хүлээн авахгүй.@@</li>
      <li>@@Maximum uncertainty = half the difference between the two nearest graduations. Burette: ±0.05 cm³ per reading, ±0.10 cm³ for a titre.|||Хамгийн их тодорхойгүй байдал = хамгийн ойрын хоёр хуваарийн зөрүүний хагас. Бюрет: ±0.05 cm³ нэг заалтад, титрт ±0.10 cm³.@@</li>
      <li>@@Percentage error = (uncertainty / quantity measured) × 100.|||Хувийн алдаа = (тодорхойгүй байдал / хэмжигдэхүүн) × 100.@@</li>
    </ul>
  </div>
  <div class="card">
    <h3>@@Relative masses (for this exam)|||Харьцангуй масс (энэ шалгалтад)@@</h3>
    <p class="mono small">H 1.0 · C 12.0 · O 16.0 · S 32.1 · Zn 65.4 · Mn 54.9 · K 39.1<br>(COOH)₂ = 90.0 · ZnSO₄ = 161.5 · H₂O = 18.0</p>
  </div>
</section>

<!-- ===================== SCORE ===================== -->
<section class="tab" id="tab-score">
  <div class="card">
    <h2>@@Results summary|||Дүнгийн хураангуй@@</h2>
    <div id="scoreBody"></div>
    <div class="btnrow"><button class="btn ghost" id="resetAll">@@Clear all answers|||Бүх хариултыг арилгах@@</button></div>
  </div>
</section>
</main>

<footer>@@Independent study tool, not an official Cambridge product. Practice material. Questions and mark scheme © Cambridge University Press &amp; Assessment 2025; paraphrased here with added explanations. Values in the simulation are modelled and will not match real laboratory results exactly.|||Бие даасан сургалтын хэрэгсэл, Cambridge-ийн албан ёсны бүтээгдэхүүн биш. Дадлагын материал. Асуулт ба mark scheme © Cambridge University Press &amp; Assessment 2025; энд утгачилан, монгол тайлбартай ашигласан. Симуляцийн тоон утгууд нь загварчлал бөгөөд бодит лабораторийн үр дүнтэй яг таарахгүй.@@</footer>

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
/* ---------------- helpers ---------------- */
const $=(s,el)=>(el||document).querySelector(s);
const $$=(s,el)=>Array.from((el||document).querySelectorAll(s));
const store={get(k,d){try{const v=localStorage.getItem("chem9701_35w25_"+k);return v==null?d:JSON.parse(v);}catch(e){return d;}},
  set(k,v){try{localStorage.setItem("chem9701_35w25_"+k,JSON.stringify(v));}catch(e){}}};
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
const PARTS=[["q1a","1(a)",7],["q1b","1(b)",1],["q1c","1(c)",6],["q1d","1(d)",1],["q2a","2(a)",5],["q2b","2(b)",4],["q2c","2(c)",1],
 ["q3a1","3(a)(i)",5],["q3a2","3(a)(ii)",1],["q3b","3(b)",3],["q3c1","3(c)(i)",4],["q3c2","3(c)(ii)(iii)",2]];
const SCORE=store.get("score",{});
function setScore(k,g){SCORE[k]=g;store.set("score",SCORE);renderScore();}
function grade(t){return t>=28?"A":t>=26?"B":t>=22?"C":t>=18?"D":t>=15?"E":"U";}
/* parts marked by matching words in written answers: a teacher should confirm these */
const KEYWORD_PARTS=new Set(["q1d","q2c","q3a1","q3b","q3c1"]);
const PART_BUTTON={q1a:"q1checkA",q1b:"q1checkB",q1c:"q1checkC",q1d:"q1checkD",q2a:"q2checkA",q2b:"q2checkB",q2c:"q2checkC",q3a1:"q3checkA",q3a2:"q3checkA2",q3b:"q3checkB",q3c1:"q3checkC",q3c2:"q3checkC2"};
const QUESTIONS=[
 {id:"q1",n:1,title:"@@Titration|||Титрлэлт@@",text:"@@Hot titration of (COOH)₂·xH₂O with KMnO₄ to find x|||KMnO₄-ээр (COOH)₂·xH₂O-г халуунаар титрлэж x-ийг олох@@",marks:15,min:45},
 {id:"q2",n:2,title:"ZnSO₄·yH₂O",text:"@@Heating ZnSO₄·yH₂O in a crucible to find y|||ZnSO₄·yH₂O-г тигельд халааж y-ийг олох@@",marks:10,min:25},
 {id:"q3",n:3,title:"@@Qualitative analysis|||Чанарын шинжилгээ@@",text:"@@Testing for ions and water; oxidation states of Mn|||Ион, ус илрүүлэх; Mn-ийн исэлдэлтийн зэргүүд@@",marks:15,min:40}];
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
function renderScore(){let tot=0;let rows="";const q={1:[0,15],2:[0,10],3:[0,15]};
  PARTS.forEach(([k,l,m])=>{const g=SCORE[k];if(g!=null){tot+=g;q[l[0]][0]+=g;}
    rows+=\`<tr><td>\${l}\${KEYWORD_PARTS.has(k)?'@@<span class="tag">keyword</span>|||<span class="tag">түлхүүр үг</span>@@':""}</td><td>\${g==null?'@@<span class="muted">not checked</span>|||<span class="muted">шалгаагүй</span>@@':g}</td><td>\${m}</td><td style="width:40%"><div class="bar"><i style="width:\${g==null?0:g/m*100}%"></i></div></td></tr>\`;});
  $("#scoreChip").textContent=\`\${tot} / 40\`;
  const checked=PARTS.filter(([k])=>SCORE[k]!=null).length;
  const lost=p=>p.g==null?-1:p.m-p.g;
  const todo=PARTS.map(([k,l,m])=>({k,l,m,g:SCORE[k]})).filter(p=>p.g==null||p.g<p.m).sort((a,b)=>lost(b)-lost(a));
  const todoHtml=todo.length?\`<ul class="todo">\${todo.slice(0,4).map(p=>\`<li><span>\${p.l} <span class="small muted">\${p.g==null?\`@@not checked · \${p.m} marks|||шалгаагүй · \${p.m} оноо@@\`:\`@@\${p.m-p.g} marks lost|||\${p.m-p.g} оноо алдсан@@\`}</span></span><button class="btn" data-part="\${p.k}@@">Go</button></li>|||">Очих</button></li>@@\`).join("")}</ul>\`:'@@<p class="small">Full marks on every part. Now try it again against the clock.</p>|||<p class="small">Бүх хэсэгт бүтэн оноо авлаа. Одоо цагаа барин дахин хийж үзээрэй.</p>@@';
  $("#scoreBody").innerHTML=\`<p>\${checked===PARTS.length?\`@@Total: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span>: about level <b>\${grade(tot)}</b> by the thresholds for this component (A 28, B 26, C 22, D 18, E 15).|||Нийт: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span> — энэ хэсгийн босгоор ойролцоогоор <b>\${grade(tot)}</b> түвшин (A 28, B 26, C 22, D 18, E 15).@@\`:\`@@Current marks: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span>. Parts checked: \${checked} / \${PARTS.length}. A level appears once every part has been checked.|||Одоогийн оноо: <span class="markbox" style="font-size:1.3rem">\${tot} / 40</span>. Шалгасан хэсэг: \${checked} / \${PARTS.length}. Түвшин бүх хэсгийг шалгасны дараа гарна.@@\`}@@</p>
   <h3>What to repeat next</h3>|||</p>
   <h3>Дараа нь юуг давтах вэ</h3>@@\${todoHtml}
   @@<p class="small muted">Question 1|||<p class="small muted">1-р асуулт@@ \${q[1][0]}@@/15 · Question 2|||/15 · 2-р асуулт@@ \${q[2][0]}@@/10 · Question 3|||/10 · 3-р асуулт@@ \${q[3][0]}@@/15</p>
   <div class="tablewrap"><table class="rt scoretable"><tr><th>Part</th><th>Earned</th><th>Max</th><th></th></tr>|||/15</p>
   <div class="tablewrap"><table class="rt scoretable"><tr><th>Хэсэг</th><th>Авсан</th><th>Max</th><th></th></tr>@@\${rows}@@</table></div>
   <p class="small muted">In parts labelled “keyword” the program checks written answers only by matching words. Ask a teacher to confirm the final judgement.</p>|||</table></div>
   <p class="small muted">«Түлхүүр үг» гэсэн хэсгийн бичгэн хариултыг программ зөвхөн үгээр нь таньж шалгадаг. Эцсийн дүгнэлтийг багшаар баталгаажуулна уу.</p>@@\`;renderProgress();}
let clearingAll=false;
$("#resetAll").addEventListener("click",()=>{if(!confirm("@@Clear all marks and answers?|||Бүх оноо, хариултыг арилгах уу?@@"))return;try{Object.keys(localStorage).filter(k=>k.startsWith("chem9701_35w25_")&&!k.includes("_wb_")).forEach(k=>localStorage.removeItem(k));}catch(e){}clearingAll=true;location.reload();});

/* persist plain inputs */
function persistInputs(){$$("main input:not([type=checkbox]), main textarea, main select").forEach((el,i)=>{const key="in_"+(el.id||(el.dataset.r!=null?\`q1t_\${el.dataset.r}_\${el.dataset.c}\`:el.dataset.c?\`t32_\${el.dataset.c}\`:null));
  if(key==="in_null"||el.id==="q1col"||el.closest("#q2table")||el.closest("#q3atable"))return;const v=store.get(key,null);if(v!=null)el.value=v;
  el.addEventListener("input",()=>store.set(key,el.value));el.addEventListener("change",()=>store.set(key,el.value));});}

/* =====================================================================
   Q1  TITRATION
   ===================================================================== */
const SUP=24.60; // supervisor titre from CI concentrations
const Q1=store.get("q1",{truth:[null,null,null,null,null]});
const T={level:null,filled:false,fa1:false,fa3:false,temp:22,added:0,E:null,brown:false,pink:0,pinkFade:0,col:0,startLevel:null,ended:false,streaming:false,last:performance.now(),lastAddAt:0};
const svg1=$("#q1svg"),lens=$("#q1lens");
function q1obs(t){$("#q1obs").textContent=t;}
function q1warn(t){const w=$("#q1warn");if(!t){w.hidden=true;return;}w.hidden=false;w.textContent=t;}
function stepDone(s,on){const el=$(\`#q1steps li[data-s="\${s}"]\`);if(el)el.classList.toggle("done",!!on);}
function newFlask(){T.fa1=false;T.fa3=false;T.temp=22;T.added=0;T.brown=false;T.pink=0;T.ended=false;T.startLevel=null;T.E=null;
  ["fa1","fa3","heat","add","end"].forEach(s=>stepDone(s,false));}
$("#q1fill").onclick=()=>{T.level=Math.random()*1.9;T.filled=true;stepDone("fill",true);q1obs("@@The burette is full of FA 2. Read the initial reading from the magnified view and write it in the table.|||Бюрет FA 2-оор дүүрлээ. Томруулсан хэсгээс эхний заалтыг уншиж хүснэгтэд бич.@@");q1warn("");draw1();};
$("#q1fa1").onclick=()=>{newFlask();T.fa1=true;T.col=+$("#q1col").value;T.E=SUP+gauss()*0.035;stepDone("fa1",true);
  $("#q1runlbl").textContent=T.col===0?"Rough":"@@Accurate #|||Нарийн #@@"+T.col;q1obs("@@The flask holds 25.0 cm³ of colourless FA 1.|||Колбонд 25.0 cm³ өнгөгүй FA 1 байна.@@");q1warn("");draw1();};
$("#q1fa3").onclick=()=>{if(!T.fa1){toast("@@Add FA 1 first.|||Эхлээд FA 1 хийнэ үү.@@");return;}T.fa3=true;stepDone("fa3",true);q1obs("@@About 20 cm³ of FA 3 added. Now heat to about 70 °C.|||~20 cm³ FA 3 нэмэгдлээ. Одоо ~70 °C хүртэл халаа.@@");draw1();};
$("#q1heat").onclick=()=>{if(!T.fa1){toast("@@The flask is empty.|||Колбо хоосон байна.@@");return;}T.temp=Math.min(98,T.temp+5+Math.random()*2.5);stepDone("heat",T.temp>=60);
  if(T.brown&&T.temp>=65){if(Math.random()<0.85){T.brown=false;q1obs("@@Reheating removed the brown colour. Carry on with the titration.|||Дахин халаахад хүрэн өнгө алга боллоо — титрлэлтээ үргэлжлүүл.@@");}else q1obs("@@The brown colour has not gone. Discard the flask and start again.|||Хүрэн өнгө арилсангүй. Колбыг асгаж шинээр эхлэх хэрэгтэй.@@");}
  else if(T.temp>85)q1warn("@@Overheated. Do not boil it (the solution spits and evaporates). Keep it near 70 °C.|||Хэт халлаа — буцалгаж болохгүй (уусмал үсэрч, ууршина). ~70 °C орчимд барь.@@");
  else q1warn("");draw1();};
function canAdd(){if(!T.filled){toast("@@The burette is empty.|||Бюрет хоосон.@@");return false;}if(!T.fa1){toast("@@There is no FA 1 in the flask.|||Колбонд FA 1 алга.@@");return false;}if(T.ended){toast("@@This titration has finished. Prepare a new flask.|||Энэ титрлэлт дууссан. Шинэ колбо бэлтгэнэ үү.@@");return false;}return true;}
function addVol(v){if(!canAdd())return;if(T.level+v>50){q1warn("@@The burette is empty! Refill it and start with a new flask.|||Бюрет хоосорлоо! Дахин дүүргэж, шинэ колбоор эхэл.@@");T.level=50;draw1();return;}
  if(T.startLevel==null){T.startLevel=T.level;}
  T.level+=v;T.added+=v;stepDone("add",true);
  if(!T.fa3){T.brown=true;q1warn("@@A brown colour (MnO₂) has formed: not enough H⁺, because FA 3 was not added. Discard this flask.|||Хүрэн өнгө (MnO₂) үүслээ: H⁺ хангалтгүй — FA 3 нэмээгүй байна. Энэ колбыг асга.@@");}
  else if(T.temp<50&&v>=0.5&&Math.random()<0.6){T.brown=true;q1warn("@@Adding quickly to a cold solution produced a brown colour. Reheat to about 70 °C.|||Хүйтэн уусмалд хурдан нэмсэн тул хүрэн өнгө гарлаа. ~70 °C хүртэл дахин халаа.@@");}
  if(T.added<T.E){const slow=T.added<2.6?6:(T.E-T.added<0.4?2.2:0.7);const tf=slow*(T.temp<55?2.8:1);
    T.pink=Math.min(1,T.pink+Math.min(1,v*2.2));T.pinkFade=tf;T.lastAddAt=performance.now();}
  draw1();}
$$("[data-add]").forEach(b=>b.addEventListener("click",()=>addVol(+b.dataset.add)));
const sb=$("#q1stream");
const stStart=e=>{e.preventDefault();if(!canAdd())return;T.streaming=true;};const stStop=()=>{T.streaming=false;};
sb.addEventListener("pointerdown",stStart);["pointerup","pointerleave","pointercancel"].forEach(ev=>sb.addEventListener(ev,stStop));
$("#q1discard").onclick=()=>{newFlask();$("#q1runlbl").textContent="—";q1obs("@@The flask has been washed out. Add FA 1 again.|||Колбыг угааж асгалаа. Шинээр FA 1 хийнэ үү.@@");q1warn("");draw1();};
$("#q1end").onclick=()=>{if(!T.fa1||T.startLevel==null){toast("@@The titration has not started.|||Титрлэлт эхлээгүй байна.@@");return;}
  T.ended=true;stepDone("end",true);
  Q1.truth[T.col]={init:T.startLevel,fin:T.level,E:T.E,brown:T.brown,temp:T.temp};store.set("q1",Q1);
  const ex=T.added-T.E;let msg="@@Titration finished. Read the final reading and write it in the table.|||Титрлэлт дууслаа. Эцсийн заалтыг уншиж хүснэгтэд бич.@@ ";
  if(T.brown)msg+="@@You finished while the solution was brown, so this result is unreliable.|||Хүрэн өнгөтэй үед дуусгасан тул энэ үр дүн найдваргүй.@@ ";
  if(T.col>0){if(ex<-0.02)msg+="@@(Careful: you may not have reached the end-point. Did you wait to see whether the pink colour fades?)|||(Анхаар: төгсгөлийн цэгт хүрээгүй байж магадгүй — ягаан өнгө арилах эсэхийг хүлээж үзсэн үү?)@@";else if(ex>0.25)msg+="@@(You seem to have passed the end-point: deep pink. Add drop by drop near the end.)|||(Төгсгөлийн цэгийг давсан бололтой — гүн ягаан. Төгсгөлд дуслаар нэм.)@@";}
  if(T.col<4){const sel=$("#q1col");sel.value=String(T.col+1);sel.dispatchEvent(new Event("input",{bubbles:true}));msg+=" @@The next titration will be recorded in the next column automatically.|||Дараагийн титрлэлт дараагийн баганад автоматаар бүртгэгдэнэ.@@";}
  q1obs(msg);draw1();};

function flaskColor(){if(T.brown)return"rgba(140,88,40,0.75)";
  const ex=T.added-(T.E||99);let a=0;if(T.fa1&&ex>=0){a=Math.min(0.85,0.18+ex*1.4);}else a=T.pink*0.55;
  if(!T.fa1)return null;return a>0.01?\`rgba(214,64,160,\${a.toFixed(3)})\`:"rgba(200,225,240,0.35)";}
function draw1(){
  const L=T.level;const bx=160,by=10,bh=330,bw=22;const y=v=>by+20+(v/50)*(bh-40);
  let s=\`<rect x="0" y="0" width="360" height="520" fill="none"/>\`;
  // stand
  s+=\`<rect x="40" y="500" width="160" height="10" rx="2" fill="var(--muted)"/><rect x="58" y="20" width="8" height="482" fill="var(--muted)"/><rect x="62" y="150" width="\${bx-62}" height="6" fill="var(--muted)"/>\`;
  // burette
  s+=\`<rect x="\${bx}" y="\${by}" width="\${bw}" height="\${bh}" rx="4" fill="var(--glass)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.5"/>\`;
  if(T.filled){s+=\`<rect x="\${bx+2}" y="\${y(L)}" width="\${bw-4}" height="\${by+bh-y(L)-2}" fill="#5b1a6e"/>\`;}
  for(let v=0;v<=50;v+=5){s+=\`<line x1="\${bx}" x2="\${bx+8}" y1="\${y(v)}" y2="\${y(v)}" stroke="var(--ink)" stroke-width="1"/><text x="\${bx-4}" y="\${y(v)+4}" font-size="9" text-anchor="end" fill="var(--muted)">\${v}</text>\`;}
  s+=\`<rect x="\${bx-6}" y="\${by+bh}" width="\${bw+12}" height="8" rx="2" fill="var(--ink)"/><path d="M\${bx+bw/2-3} \${by+bh+8} L\${bx+bw/2+3} \${by+bh+8} L\${bx+bw/2+1} \${by+bh+34} L\${bx+bw/2-1} \${by+bh+34}Z" fill="var(--glass)" stroke="var(--ink)"/>\`;
  if(T.streaming)s+=\`<line x1="\${bx+bw/2}" x2="\${bx+bw/2}" y1="\${by+bh+34}" y2="440" stroke="#5b1a6e" stroke-width="2"/>\`;
  // tile and flask
  s+=\`<rect x="105" y="488" width="140" height="10" fill="#f4f4f4" stroke="var(--line)"/>\`;
  const fc=flaskColor();const cx=bx+bw/2;
  s+=\`<path d="M\${cx-11} 400 L\${cx-11} 430 L\${cx-55} 486 L\${cx+55} 486 L\${cx+11} 430 L\${cx+11} 400" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.6"/>\`;
  if(fc){const lvl=T.fa3?452:466;const dx=11+44*(lvl-430)/56;s+=\`<path d="M\${cx-dx} \${lvl} L\${cx-55} 486 L\${cx+55} 486 L\${cx+dx} \${lvl}Z" fill="\${fc}"/>\`;}
  if(T.temp>40&&T.fa1)s+=\`<path d="M\${cx+60} 472 q3 -4 0 -8 q-3 -4 0 -8 M\${cx+67} 472 q3 -4 0 -8 q-3 -4 0 -8" fill="none" stroke="var(--bad)" stroke-width="1.5" stroke-linecap="round"/>\`;
  // labels
  s+=\`@@<text x="\${bx+bw+8}" y="\${by+16}" font-size="11" fill="var(--muted)">FA 2</text><text x="\${cx+60}" y="455" font-size="11" fill="var(--muted)">flask</text>|||<text x="\${bx+bw+8}" y="\${by+16}" font-size="11" fill="var(--muted)">FA 2</text><text x="\${cx+60}" y="455" font-size="11" fill="var(--muted)">колб</text>@@\`;
  svg1.innerHTML=s;
  $("#q1temp").textContent=T.fa1?\`\${T.temp.toFixed(0)} °C\`:"—";
  drawLens();}
function drawLens(){const W=170,H=300,mid=150,k=110;let s=\`<rect width="\${W}" height="\${H}" fill="var(--paper)"/>\`;
  if(T.level==null){lens.innerHTML=s+\`@@<text x="85" y="150" text-anchor="middle" font-size="12" fill="var(--muted)">empty</text>|||<text x="85" y="150" text-anchor="middle" font-size="12" fill="var(--muted)">хоосон</text>@@\`;return;}
  const L=T.level;const yy=v=>mid+(v-L)*k;const x0=40,x1=130;
  s+=\`<rect x="\${x0}" y="0" width="\${x1-x0}" height="\${H}" fill="var(--glass)" fill-opacity=".3"/>\`;
  // liquid below meniscus
  s+=\`<path d="M\${x0} \${mid} Q\${(x0+x1)/2} \${mid+9} \${x1} \${mid} L\${x1} \${H} L\${x0} \${H}Z" fill="#4a1259"/>\`;
  const vmin=Math.max(0,L-1.5),vmax=Math.min(50,L+1.5);
  for(let t=Math.ceil(vmin*10);t<=Math.floor(vmax*10);t++){const v=t/10;const Y=yy(v);const len=t%10===0?44:(t%5===0?30:18);
    s+=\`<line x1="\${x0}" x2="\${x0+len}" y1="\${Y}" y2="\${Y}" stroke="\${Y>mid?'#e9d7f2':'var(--ink)'}" stroke-width="\${t%10===0?1.6:1}"/>\`;
    if(t%10===0)s+=\`<text x="\${x0-6}" y="\${Y+4}" font-size="13" text-anchor="end" fill="var(--ink)">\${v.toFixed(0)}</text>\`;}
  s+=\`<line x1="\${x0}" x2="\${x0}" y1="0" y2="\${H}" stroke="var(--ink)" stroke-width="2"/><line x1="\${x1}" x2="\${x1}" y1="0" y2="\${H}" stroke="var(--ink)" stroke-width="2"/>\`;
  s+=\`<path d="M\${x1+4} \${mid} l10 -6 v12z" fill="var(--accent)"/>\`;
  lens.innerHTML=s;}
let lastT=performance.now();
function loop(now){const dt=Math.min(0.1,(now-lastT)/1000);lastT=now;let redraw=false;
  if(T.fa1&&T.temp>22.05){const o=Math.round(T.temp);T.temp=Math.max(22,T.temp-0.0025*dt*(T.temp-22));if(Math.round(T.temp)!==o)redraw=true;}
  if(T.streaming){if(!canAdd()){T.streaming=false;}else{const v=0.9*dt;if(T.level+v>50){T.streaming=false;q1warn("@@The burette is empty!|||Бюрет хоосорлоо!@@");}else{
      if(T.startLevel==null)T.startLevel=T.level;T.level+=v;T.added+=v;stepDone("add",true);
      if(!T.fa3)T.brown=true;else if(T.temp<50&&Math.random()<0.02){T.brown=true;q1warn("@@Running it quickly into a cold solution produced a brown colour. Reheat.|||Хүйтэн уусмалд хурдан урсгасан тул хүрэн өнгө гарлаа. Дахин халаа.@@");}
      if(T.added<T.E){T.pink=Math.min(1,T.pink+dt*1.5);T.pinkFade=(T.added<2.6?6:0.8)*(T.temp<55?2.8:1);T.lastAddAt=now;}}}redraw=true;}
  if(T.pink>0&&T.added<(T.E||99)&&!T.streaming){T.pink=Math.max(0,T.pink-dt/Math.max(0.3,T.pinkFade));redraw=true;}
  if(redraw&&!T.streaming&&now-(loop.lastDraw||0)<80)redraw=false;if(redraw)loop.lastDraw=now;
  if(redraw)draw1();requestAnimationFrame(loop);}
{const saved=store.get("run",null);if(saved){Object.assign(T,saved,{streaming:false,last:performance.now(),lastAddAt:0});
  stepDone("fill",T.filled);stepDone("fa1",T.fa1);stepDone("fa3",T.fa3);stepDone("heat",T.temp>=60);stepDone("add",T.added>0);stepDone("end",T.ended);
  if(T.fa1)$("#q1runlbl").textContent=T.col===0?"Rough":"@@Accurate #|||Нарийн #@@"+T.col;
  if(T.filled)q1obs("@@Your titration is still here. Carry on where you stopped.|||Титрлэлт тань хадгалагдсан. Зогссон газраасаа үргэлжлүүлнэ үү.@@");}}
window.addEventListener("pagehide",()=>{if(!clearingAll)store.set("run",T);});
requestAnimationFrame(loop);draw1();

/* picks for (b) */
function readTable(){const g=(r,c)=>$(\`#q1table input[data-r="\${r}"][data-c="\${c}"]\`).value;const cols=[];
  for(let c=0;c<5;c++){const a=g(0,c),b=g(1,c),t=g(2,c);cols.push({c,a,b,t,an:num(a),bn:num(b),tn:num(t),filled:a!==""||b!==""||t!==""});}return cols;}
function renderPicks(){const cols=readTable();const pk=store.get("q1picks",[]);const box=$("#q1pick");box.innerHTML="";
  cols.slice(1).forEach(o=>{if(!o.filled)return;const titre=isFinite(o.bn)&&isFinite(o.an)?r2(o.bn-o.an):o.tn;
    const id="pk"+o.c;box.insertAdjacentHTML("beforeend",\`<label class="btn"><input type="checkbox" id="\${id}" data-c="\${o.c}" \${pk.includes(o.c)?"checked":""}> #\${o.c}: \${isFinite(titre)?titre.toFixed(2):"?"}</label>\`);});
  if(!box.children.length)box.innerHTML='@@<span class="small muted">Your titres appear here once you enter accurate titration data in the table.</span>|||<span class="small muted">Хүснэгтэд нарийн титрлэлтийн өгөгдөл оруулсны дараа энд гарна.</span>@@';
  $$("#q1pick input").forEach(i=>i.addEventListener("change",()=>store.set("q1picks",$$("#q1pick input:checked").map(x=>+x.dataset.c))));}
$("#q1table").addEventListener("input",renderPicks);

function bestMean(titres){const t=titres.slice().sort((a,b)=>a-b);if(t.length<2)return t.length?t[0]:NaN;
  for(let tol=0;tol<=5;tol+=0.05){let best=null;for(let i=0;i<t.length;i++){let j=i;while(j+1<t.length&&t[j+1]-t[i]<=tol+1e-9)j++;
      if(j>i&&(!best||j-i>best[1]-best[0]))best=[i,j];}
    if(best){const sub=t.slice(best[0],best[1]+1);return sub.reduce((a,b)=>a+b,0)/sub.length;}}return NaN;}
const ok05=s=>dp(s)===2&&Math.round(num(s)*100)%5===0;

$("#q1checkA").onclick=()=>{const cols=readTable();const H=[0,1,2].map(i=>$("#q1h"+i).value.toLowerCase());const L=[];let m=0;
  const rough=cols[0];const acc=cols.slice(1).filter(o=>isFinite(o.an)&&isFinite(o.bn));
  const I=isFinite(rough.an)&&isFinite(rough.bn)&&isFinite(rough.tn)&&acc.length>=2;
  L.push(li(I,"@@<b>I</b> Rough: 2 readings + titre, and initial/final readings recorded for ≥2 accurate titrations.|||<b>I</b> Rough: 2 заалт + титр, ба ≥2 нарийн титрлэлтийн эхний/эцсийн заалт бүртгэгдсэн.@@"));m+=I;
  const unit=h=>/(\\/\\s*cm\\s*(3|³)|\\(\\s*cm\\s*(3|³)\\s*\\)|in\\s*cm\\s*(3|³))/.test(h);
  const h0=/(initial|start)/.test(H[0])&&/(reading|volume)/.test(H[0]);const h1=/(final|end)/.test(H[1])&&/(reading|volume)/.test(H[1]);
  const h2=/titre|volume.*(used|added)|fa\\s*2.*(used|added)/.test(H[2]);
  const titresRec=acc.every(o=>isFinite(o.tn));
  const II=titresRec&&h0&&h1&&h2&&H.every(unit);
  L.push(li(II,"@@<b>II</b> Accurate titres recorded, and headings + units correct.|||<b>II</b> Нарийн титрүүд бичигдсэн ба гарчиг + нэгж зөв.@@"+(II?"":\` <span class="small muted">(\${[!h0&&"@@heading in row 1|||1-р мөрийн гарчиг@@",!h1&&"@@heading in row 2|||2-р мөрийн гарчиг@@",!h2&&"@@row 3 “titre” or “volume of FA 2 added”|||3-р мөр «titre» эсвэл «volume of FA 2 added»@@",!H.every(unit)&&"@@unit “/ cm3” in every heading|||нэгж «/ cm3» гарчиг бүрт@@",!titresRec&&"@@titre missing|||титр дутуу@@"].filter(Boolean).join("; ")})</span>\`)));m+=II;
  const allReads=acc.flatMap(o=>[o.a,o.b]);const III=acc.length>=1&&allReads.every(ok05);
  L.push(li(III,"@@<b>III</b> All accurate readings to the nearest 0.05 cm³ (2 decimal places, last digit 0 or 5).|||<b>III</b> Нарийн титрлэлтийн бүх заалт 0.05 cm³-ийн нарийвчлалтай (2 аравтын орон, сүүлийн орон 0 эсвэл 5).@@"));m+=III;
  const titres=acc.map(o=>r2(o.bn-o.an));let IV=false;if(titres.length>=2){const last=titres[titres.length-1];IV=titres.slice(0,-1).some(t=>Math.abs(t-last)<=0.10+1e-9);}
  L.push(li(IV,"@@<b>IV</b> The last accurate titre is within 0.10 cm³ of another one.|||<b>IV</b> Хамгийн сүүлийн нарийн титр өөр нэгээс ≤0.10 cm³ зөрүүтэй.@@"));m+=IV;
  // reading accuracy vs truth
  const wrong=[];cols.forEach(o=>{const tr=Q1.truth[o.c];if(!tr)return;if(isFinite(o.an)&&Math.abs(o.an-tr.init)>0.051)wrong.push(\`@@\${o.c?"#"+o.c:"Rough"} initial|||\${o.c?"#"+o.c:"Rough"} эхний@@\`);if(isFinite(o.bn)&&Math.abs(o.bn-tr.fin)>0.051)wrong.push(\`@@\${o.c?"#"+o.c:"Rough"} final|||\${o.c?"#"+o.c:"Rough"} эцсийн@@\`);
    if(isFinite(o.an)&&isFinite(o.bn)&&isFinite(o.tn)&&Math.abs(o.bn-o.an-o.tn)>0.005)wrong.push(\`@@\${o.c?"#"+o.c:"Rough"} subtraction|||\${o.c?"#"+o.c:"Rough"} хасах үйлдэл@@\`);});
  let extra="";if(wrong.length)extra=\`@@<div class="note warn small">Differences in burette readings or subtractions: \${wrong.join(", ")}. The examiner corrects subtractions before judging accuracy.</div>|||<div class="note warn small">Бюретийн уншилт/тооцоонд зөрүү: \${wrong.join(", ")}. Шалгагч хасах үйлдлийг засаад нарийвчлалыг тооцдог.</div>@@\`;
  const mean=bestMean(titres);let q=0;let dtx="";
  if(isFinite(mean)&&titres.length>=2){const d=Math.abs(mean-SUP);q=d<=0.20?3:d<=0.30?2:d<=0.50?1:0;dtx=\`@@Your best mean is \${mean.toFixed(2)} cm³, the supervisor's is \${SUP.toFixed(2)} cm³, difference δ = \${d.toFixed(2)} cm³.|||Таны хамгийн сайн дундаж \${mean.toFixed(2)} cm³, хянагчийнх \${SUP.toFixed(2)} cm³, зөрүү δ = \${d.toFixed(2)} cm³.@@\`;}
  else dtx="@@You need at least 2 accurate titres.|||Дор хаяж 2 нарийн титр хэрэгтэй.@@";
  L.push(li(q>=1,"<b>V</b> δ ≤ 0.50 cm³"));L.push(li(q>=2,"<b>VI</b> δ ≤ 0.30 cm³"));L.push(li(q>=3,"<b>VII</b> δ ≤ 0.20 cm³"));
  L.push(\`<div class="small muted">\${dtx}</div>\`);m+=q;
  $("#q1fbA").innerHTML=fbBlock(L,m,7)+extra;setScore("q1a",m);renderPicks();};

$("#q1checkB").onclick=()=>{const cols=readTable();const picks=$$("#q1pick input:checked").map(x=>+x.dataset.c);const L=[];
  const ts=picks.map(c=>{const o=cols[c];return isFinite(o.bn)&&isFinite(o.an)?r2(o.bn-o.an):o.tn;}).filter(isFinite);
  const s=$("#q1mean").value;const v=num(s);let ok=false;let why="";
  if(ts.length<2)why="@@Choose at least 2 titres (✓).|||Дор хаяж 2 титр сонгоно уу (✓).@@";
  else{const spread=Math.max(...ts)-Math.min(...ts);const mean=r2(ts.reduce((a,b)=>a+b,0)/ts.length);
    if(spread>0.20+1e-9)why=\`@@The chosen titres have a spread of \${spread.toFixed(2)} cm³ > 0.20 cm³.|||Сонгосон титрүүдийн тархалт \${spread.toFixed(2)} cm³ > 0.20 cm³.@@\`;
    else if(dp(s)!==2)why="@@Write the mean to exactly 2 decimal places (for example 24.63).|||Дундажийг яг 2 аравтын оронтой бич (жишээ 24.63).@@";
    else if(Math.abs(v-mean)>0.0001)why=\`@@The mean of the chosen titres should be \${mean.toFixed(2)} cm³.|||Сонгосон титрүүдийн дундаж \${mean.toFixed(2)} cm³ байх ёстой.@@\`;
    else ok=true;}
  L.push(li(ok,ok?"@@Correct: the chosen titres are within 0.20 cm³, and the mean has 2 decimal places.|||Зөв: сонгосон титрүүд ≤0.20 cm³ тархалттай, дундаж 2 аравтын оронтой.@@":why));
  $("#q1fbB").innerHTML=fbBlock(L,ok?1:0,1);setScore("q1b",ok?1:0);};

$("#q1checkC").onclick=()=>{const L=[];let m=0;const V=isFinite(num($("#q1mean").value))?num($("#q1mean").value):SUP;
  const ii=$("#c1ii").value,a=$("#c1iiia").value,b=$("#c1iiib").value,iv=$("#c1iv").value,v=$("#c1v").value;
  const sfOK=[ii,a,b,iv].every(s=>s!==""&&sigFigs(s)>=3&&sigFigs(s)<=4);
  L.push(li(sfOK,"@@<b>(i)</b> All answers in (ii), (iii) and (iv) have 3–4 s.f.|||<b>(i)</b> (ii), (iii), (iv)-ийн бүх хариулт 3–4 s.f.@@"+(sfOK?"":" <span class='small muted'>(s.f.: "+[ii,a,b,iv].map(s=>s===""?"—":sigFigs(s)).join(", ")+")</span>")));m+=sfOK;
  const eii=0.0200*V/1000;const okii=close(num(ii),eii,0.006);L.push(li(okii,\`<b>(ii)</b> n(MnO₄⁻) = 0.0200 × \${V.toFixed(2)}/1000 = \${eii.toPrecision(4)} mol\`));m+=okii;
  const base=isFinite(num(ii))?num(ii):eii;const ea=base*5/2;const oka=close(num(a),ea,0.006);
  L.push(li(oka,\`<b>(iii) M1</b> n((COOH)₂) = (ii) × 5/2 = \${ea.toPrecision(4)} mol\`+(close(num(a),base*2/5,0.006)?" @@<span class='small'>(you used 2/5, which is upside down!)</span>|||<span class='small'>— 2/5 гэж урвуу авсан байна!</span>@@":"")));m+=oka;
  const baseA=isFinite(num(a))?num(a):ea;const eb=baseA*1000/25;const okb=close(num(b),eb,0.006);
  L.push(li(okb,\`@@<b>(iii) M2</b> concentration = n × 1000/25.0 = \${eb.toPrecision(4)} mol dm⁻³|||<b>(iii) M2</b> концентраци = n × 1000/25.0 = \${eb.toPrecision(4)} mol dm⁻³@@\`));m+=okb;
  const baseB=isFinite(num(b))?num(b):eb;const eiv=6.20/baseB;const okiv=close(num(iv),eiv,0.006);
  L.push(li(okiv,\`<b>(iv)</b> M<sub>r</sub> = 6.20 / \${baseB.toPrecision(4)} = \${eiv.toPrecision(4)}\`));m+=okiv;
  const baseM=isFinite(num(iv))?num(iv):eiv;const ex=Math.round((baseM-90)/18);const okv=/^\\d+$/.test(clean(v))&&+clean(v)===ex;
  L.push(li(okv,\`@@<b>(v)</b> x = (M<sub>r</sub> − 90)/18 = \${((baseM-90)/18).toFixed(2)} → whole number \${ex}|||<b>(v)</b> x = (M<sub>r</sub> − 90)/18 = \${((baseM-90)/18).toFixed(2)} → бүхэл тоо \${ex}@@\`+(okv?"":(/\\./.test(v)?" @@<span class='small'>(write a whole number)</span>|||<span class='small'>— бүхэл тоогоор бич.</span>@@":""))));m+=okv;
  $("#q1fbC").innerHTML=fbBlock(L,m,6);setScore("q1c",m);};

$("#q1checkD").onclick=()=>{const t=$("#q1d").value.toLowerCase();const ok=/(h\\s*\\+|h⁺|hydrogen ion|proton|acid)/.test(t)&&/(need|requir|react|equation|used|consum|provid|suppl|supply)/.test(t);
  $("#q1fbD").innerHTML=fbBlock([li(ok,ok?"@@You stated that H⁺ is needed for the reaction.|||H⁺ урвалд шаардлагатай гэдгийг дурдсан.@@":"@@Key idea: H⁺ (hydrogen ions) are needed for the reaction / react in the equation.|||Түлхүүр санаа: H⁺ (hydrogen ions) урвалд шаардлагатай / тэгшитгэлд урвалд ордог.@@"),\`@@<div class="small muted">Model answer: <i>H⁺ ions are needed for the reaction (they appear as a reactant in the equation).</i></div>|||<div class="small muted">Загвар: <i>H⁺ ions are needed for the reaction (they appear as a reactant in the equation).</i></div>@@\`],ok?1:0,1);setScore("q1d",ok?1:0);};

/* =====================================================================
   Q2  CRUCIBLE
   ===================================================================== */
const MR_H=287.5,MR_A=161.5;
let C2;
function newC2(){C2={empty:+(17+Math.random()*7).toFixed(2),m0:0,p:0,spat:0,moist:0,lid:true,temp:25,tmin:0,gentleDone:0,log:[],reads:[]};}
newC2();
function q2log(t){C2.log.push(t);$("#q2log").innerHTML=C2.log.map(x=>esc(x)).join("<br>");$("#q2log").scrollTop=1e6;}
function q2obs(t){$("#q2obs").textContent=t;}
function q2warn(t){const w=$("#q2warn");w.hidden=!t;w.textContent=t||"";}
function contents(){const w0=C2.m0*126/MR_H;return C2.m0-w0*C2.p-C2.spat+C2.moist;}
function draw2(){const s=$("#q2svg");const hot=C2.temp>150;const h=C2.p;let solid=C2.m0>0;
  const col=h<0.3?"#f4f7fa":h<0.9?"#f7f7f2":"#ffffff";
  let g=\`<rect x="0" y="0" width="360" height="380" fill="none"/>\`;
  // tripod
  g+=\`<line x1="110" y1="200" x2="80" y2="360" stroke="var(--muted)" stroke-width="5"/><line x1="250" y1="200" x2="280" y2="360" stroke="var(--muted)" stroke-width="5"/><line x1="180" y1="200" x2="180" y2="360" stroke="var(--muted)" stroke-width="5"/><rect x="100" y="194" width="160" height="8" fill="var(--muted)"/>\`;
  // triangle
  g+=\`<path d="M120 196 L240 196" stroke="#d9c7a7" stroke-width="6"/>\`;
  // crucible
  g+=\`<path d="M140 120 L220 120 L208 196 L152 196 Z" fill="\${hot?'#e8a07a':'#eceae4'}" stroke="var(--ink)" stroke-width="1.6"/>\`;
  if(solid)g+=\`<path d="M146 160 L214 160 L208 194 L152 194Z" fill="\${col}" stroke="#bbb"/>\`;
  if(C2.lid)g+=\`<path d="M132 118 Q180 100 228 118 L228 122 L132 122Z" fill="\${hot?'#e8a07a':'#eceae4'}" stroke="var(--ink)" stroke-width="1.6"/>\`;
  else g+=\`@@<path d="M262 118 Q300 104 338 118 L338 122 L262 122Z" fill="#eceae4" stroke="var(--ink)" stroke-width="1.4"/><text x="300" y="140" font-size="10" text-anchor="middle" fill="var(--muted)">lid</text>|||<path d="M262 118 Q300 104 338 118 L338 122 L262 122Z" fill="#eceae4" stroke="var(--ink)" stroke-width="1.4"/><text x="300" y="140" font-size="10" text-anchor="middle" fill="var(--muted)">таг</text>@@\`;
  if(C2.flame){const big=C2.flame==="strong";g+=\`<path d="M180 \${big?205:240} Q\${big?160:170} 300 180 330 Q\${big?200:190} 300 180 \${big?205:240}" fill="\${big?'#3b7bff':'#f5b33b'}" opacity=".8"/>\`;}
  g+=\`<rect x="165" y="330" width="30" height="40" fill="var(--muted)"/>\`;
  if(C2.steam)g+=\`<g fill="none" stroke="var(--muted)" stroke-width="2" opacity=".7"><path d="M170 100 q-8 -14 0 -28 q8 -14 0 -28"/><path d="M190 100 q-8 -14 0 -28 q8 -14 0 -28"/></g>\`;
  s.innerHTML=g;$("#q2lid").textContent=C2.lid?"@@on|||тагтай@@":"@@off|||тагагүй@@";$("#q2temp").textContent=\`\${Math.round(C2.temp)} °C\`;$("#q2time").textContent=\`@@\${C2.tmin} min|||\${C2.tmin} мин@@\`;}
$("#q2weigh").onclick=()=>{let r=C2.empty+contents();if(C2.temp>60){r-=0.03*Math.min(1,(C2.temp-40)/350);q2warn("@@The crucible is hot! Rising air makes the reading too low. Cool for 5+ min before weighing.|||Тигель халуун байна! Агаарын дээш урсгалаас болж заалт бага гарна. 5+ мин хөргөөд жинлэ.@@");}else q2warn("");
  const shown=r.toFixed(2);$("#q2bal").textContent=shown;C2.reads.push(shown);q2log(\`@@weighed: \${shown} g|||жинлэв: \${shown} g@@\`);
  const stage=C2.m0===0?"@@Empty crucible + lid|||Хоосон тигель + таг@@":C2.p===0?"@@Crucible + lid + FA 4|||Тигель + таг + FA 4@@":"@@Crucible + lid + residue|||Тигель + таг + үлдэгдэл@@";q2obs(\`@@\${stage}: balance reads \${shown} g. Record it in the table.|||\${stage}: жинлүүр \${shown} g. Хүснэгтэд бүртгэ.@@\`);store.set("q2",C2);};
$$("[data-fa4]").forEach(b=>b.addEventListener("click",()=>{if(C2.p>0){toast("@@FA 4 cannot be added once heating has started.|||Халааж эхэлсний дараа FA 4 нэмэхгүй.@@");return;}
  const d=+b.dataset.fa4*(0.8+Math.random()*0.4);C2.m0=Math.max(0,C2.m0+d);q2log(\`FA 4 \${d>0?"@@added|||нэмэв@@":"@@removed|||авав@@"} (~\${Math.abs(d).toFixed(2)} g)\`);
  q2obs("@@White, colourless crystals are in the crucible. It should be 3.20–3.40 g: check on the balance.|||Цагаан өнгөгүй талстууд тигельд байна. 3.20–3.40 g байх ёстой — жинлүүрээр шалга.@@");draw2();store.set("q2",C2);}));
$("#q2lidbtn").onclick=()=>{C2.lid=!C2.lid;q2log(C2.lid?"@@lid replaced|||тагийг тавив@@":"@@lid removed|||тагийг авав@@");draw2();store.set("q2",C2);};
function heat(kind){if(C2.m0<=0){toast("@@There is no FA 4 in the crucible.|||Тигельд FA 4 алга.@@");return;}const strong=kind==="strong";
  const k=strong?(C2.lid?0.5:0.9):(C2.lid?0.15:0.25);const before=C2.p;
  if(strong&&!C2.lid&&C2.p<0.2&&C2.spat===0){C2.spat=C2.m0*(0.02+Math.random()*0.02);q2warn("@@Strong heating straight away made the crystals break and jump out: material has been lost! (This is why you first heat gently with the lid on.)|||Шууд хүчтэй халаасан тул талстууд хагарч үсэрлээ — бодис алдагдсан! (Эхлээд тагтай зөөлөн халаадаг шалтгаан нь энэ.)@@");}else q2warn("");
  const left=1-C2.p;C2.p=1-left*Math.exp(-k);C2.temp=strong?430+Math.random()*60:150+Math.random()*30;C2.tmin++;C2.moist=0;
  C2.flame=kind;C2.steam=C2.p-before>0.01;draw2();setTimeout(()=>{C2.flame=null;C2.steam=false;draw2();},900);
  q2log(\`\${strong?"@@strong|||хүчтэй@@":"@@gentle|||зөөлөн@@"} @@heating 1 min (|||халаав 1 мин (@@\${C2.lid?"@@lid on|||тагтай@@":"@@lid off|||тагагүй@@"})\`);
  q2obs(C2.p<0.3?"@@The crystals are dissolving in their own water of crystallisation, and steam is coming off.|||Талстууд өөрийн кристаллжилтын усандаа уусч, уур гарч байна.@@":C2.p<0.97?"@@Steam is still coming off; a white powder is forming.|||Уур гарсаар байна; цагаан нунтаг үүсч байна.@@":"@@White powder; almost no steam is coming off.|||Цагаан нунтаг; уур бараг гарахгүй байна.@@");store.set("q2",C2);}
$$("[data-heat]").forEach(b=>b.addEventListener("click",()=>heat(b.dataset.heat)));
$("#q2cool").onclick=()=>{C2.temp=25+(C2.temp-25)*Math.exp(-0.6);if(!C2.lid&&C2.p>0.5)C2.moist+=0.002;q2log(\`@@cooled 1 min (|||хөргөв 1 мин (@@\${C2.lid?"@@lid on|||тагтай@@":"@@lid off|||тагагүй@@"}) → \${Math.round(C2.temp)} °C\`);
  if(!C2.lid&&C2.p>0.5)q2warn("@@Cooling without the lid lets the anhydrous salt absorb moisture from the air.|||Тагагүй хөргөхөд усгүй давс агаарын чийг шингээж болно.@@");else q2warn("");draw2();store.set("q2",C2);};
$("#q2reset").onclick=()=>{if(!confirm("@@Restart the Question 2 simulation?|||2-р асуултын симуляцийг шинээр эхлүүлэх үү?@@"))return;newC2();$("#q2bal").textContent="--.--";$("#q2log").innerHTML="";q2obs("@@First weigh the empty crucible with its lid.|||Эхлээд хоосон тигелийг тагтай нь жинлэнэ.@@");q2warn("");draw2();store.set("q2",C2);};
{const sv=store.get("q2",null);if(sv&&sv.empty){C2=sv;C2.flame=null;C2.steam=false;$("#q2log").innerHTML=C2.log.map(esc).join("<br>");if(C2.reads.length)$("#q2bal").textContent=C2.reads[C2.reads.length-1];}}
draw2();
// table
{const tb=$("#q2table tbody");const saved=store.get("q2t",[]);for(let i=0;i<6;i++){tb.insertAdjacentHTML("beforeend",\`<tr><td><input class="head" data-h="\${i}" placeholder="..." value="\${esc(saved[i]?.h||"")}"></td><td><input data-v="\${i}" value="\${esc(saved[i]?.v||"")}"></td></tr>\`);}
  tb.addEventListener("input",()=>{const a=[];for(let i=0;i<6;i++)a.push({h:$(\`[data-h="\${i}"]\`).value,v:$(\`[data-v="\${i}"]\`).value});store.set("q2t",a);});}
$("#q2checkA").onclick=()=>{const rows=[...Array(6).keys()].map(i=>({h:$(\`[data-h="\${i}"]\`).value.toLowerCase(),v:$(\`[data-v="\${i}"]\`).value}));const L=[];let m=0;
  const gU=h=>/(\\/\\s*g\\b|\\(\\s*g\\s*\\)|\\bin\\s*g(ram)?s?\\b)/.test(h);
  const find=f=>rows.findIndex(f);
  const iE=find(r=>/crucible/.test(r.h)&&/lid/.test(r.h)&&!/fa\\s*4|residue|heat|content/.test(r.h));
  const iF=find(r=>/crucible/.test(r.h)&&/fa\\s*4/.test(r.h));
  const i1=find(r=>/crucible/.test(r.h)&&/(residue|content|after)/.test(r.h)&&/(1st|first|\\b1\\b|one)/.test(r.h));
  const i2=find(r=>/crucible/.test(r.h)&&/(residue|content|after)/.test(r.h)&&/(2nd|second|\\b2\\b|two)/.test(r.h));
  const iM=find(r=>/fa\\s*4/.test(r.h)&&!/crucible/.test(r.h));
  const iR=find(r=>/residue/.test(r.h)&&!/crucible/.test(r.h));
  const idx=[iE,iF,i1,i2,iM,iR];const allH=idx.every(i=>i>=0)&&new Set(idx).size===6;const units=allH&&idx.every(i=>gU(rows[i].h));
  const I=allH&&units;L.push(li(I,"@@<b>I</b> 6 headings (crucible+lid; +FA 4; +residue after first heating; after second heating; mass of FA 4; mass of residue) with units.|||<b>I</b> 6 гарчиг (тигель+таг; +FA 4; +үлдэгдэл 1-р халаалтын дараа; 2-р халаалтын дараа; FA 4-ийн масс; үлдэгдлийн масс) нэгжтэй.@@"+(I?"":\` <span class="small muted">(\${allH?"@@unit “/ g” missing|||нэгж «/ g» дутуу@@":"@@some headings were not recognised: use the words “crucible”, “lid”, “FA 4”, “residue”, “first/second heating”|||зарим гарчиг танигдсангүй — «crucible», «lid», «FA 4», «residue», «first/second heating» гэх үгсийг ашигла@@"})</span>\`)));m+=I;
  let II=false,III=false,q=0,ratioTxt="";
  if(allH){const w=[iE,iF,i1,i2].map(i=>rows[i].v);const wn=w.map(num);const dps=w.map(dp);
    const same=wn.every(isFinite)&&dps.every(d=>d===dps[0])&&(dps[0]===2||dps[0]===3);const diff=wn[3]-wn[2];
    II=same&&diff<=0.02+1e-9&&diff>=-0.05-1e-9;
    L.push(li(II,"@@<b>II</b> 4 weighings to the same number of decimal places (2 or 3), and the mass after the second heating within +0.02/−0.05 g of the first.|||<b>II</b> 4 жинлэлт ижил аравтын оронтой (2 эсвэл 3) ба 2-р халаалтын дараах масс 1-р халаалтынхаас +0.02/−0.05 g-ийн дотор.@@"+(same&&!II?\` @@<span class="small muted">(difference \${diff.toFixed(3)} g: reheat to reach constant mass)</span>|||<span class="small muted">(зөрүү \${diff.toFixed(3)} g — дахин халааж тогтмол масст хүргэ)</span>@@\`:"")));m+=II;
    const mF=num(rows[iM].v),mR=num(rows[iR].v);const eF=wn[1]-wn[0],eR=wn[3]-wn[0];
    III=Math.abs(mF-eF)<0.0051&&Math.abs(mR-eR)<0.0051&&mF>=2.90-1e-9&&mF<=3.40+1e-9;
    L.push(li(III,\`@@<b>III</b> Subtractions correct (FA 4 = \${isFinite(eF)?eF.toFixed(2):"?"} g, residue = \${isFinite(eR)?eR.toFixed(2):"?"} g) and FA 4 is 2.90–3.40 g.|||<b>III</b> Хасах үйлдэл зөв (FA 4 = \${isFinite(eF)?eF.toFixed(2):"?"} g, үлдэгдэл = \${isFinite(eR)?eR.toFixed(2):"?"} g) ба FA 4 нь 2.90–3.40 g.@@\`));m+=III;
    if(isFinite(mF)&&isFinite(mR)&&mR>0){const ratio=mF/mR;q=(ratio>=1.51&&ratio<=2.05?1:0)+(ratio>=1.60&&ratio<=1.96?1:0);ratioTxt=\`@@Your ratio m(FA 4)/m(residue) = \${ratio.toFixed(3)} (theory 1.78).|||Таны харьцаа m(FA 4)/m(үлдэгдэл) = \${ratio.toFixed(3)} (онол 1.78).@@\`;}
    const notSeen=w.filter(x=>x!==""&&!C2.reads.includes(Number(x).toFixed(2)));if(notSeen.length)L.push(\`@@<div class="note warn small">These weighings are not in the balance log: \${notSeen.map(esc).join(", ")}. Copy the values exactly as you saw them.</div>|||<div class="note warn small">Эдгээр жинлэлт жинлүүрийн бүртгэлд алга: \${notSeen.map(esc).join(", ")}. Харсан утгаа яг хуулж бич.</div>@@\`);}
  else{L.push(li(false,"@@<b>II</b> (headings not recognised, so this cannot be checked)|||<b>II</b> (гарчиг танигдаагүй тул шалгах боломжгүй)@@"));L.push(li(false,"@@<b>III</b> (headings not recognised)|||<b>III</b> (гарчиг танигдаагүй)@@"));}
  L.push(li(q>=1,"@@<b>IV</b> ratio 1.51–2.05|||<b>IV</b> харьцаа 1.51–2.05@@"));L.push(li(q>=2,"@@<b>V</b> ratio 1.60–1.96|||<b>V</b> харьцаа 1.60–1.96@@"));if(ratioTxt)L.push(\`<div class="small muted">\${ratioTxt}</div>\`);m+=q;
  $("#q2fbA").innerHTML=fbBlock(L,m,5);setScore("q2a",m);};
function q2masses(){const rows=[...Array(6).keys()].map(i=>({h:$(\`[data-h="\${i}"]\`).value.toLowerCase(),v:num($(\`[data-v="\${i}"]\`).value)}));
  const iM=rows.findIndex(r=>/fa\\s*4/.test(r.h)&&!/crucible/.test(r.h));const iR=rows.findIndex(r=>/residue/.test(r.h)&&!/crucible/.test(r.h));
  return{F:iM>=0?rows[iM].v:NaN,R:iR>=0?rows[iR].v:NaN};}
$("#q2checkB").onclick=()=>{let {F,R}=q2masses();const L=[];let m=0;let note="";
  if(!isFinite(F)||!isFinite(R)){F=3.30;R=1.85;note="@@<div class='small muted'>The 2(a) table is incomplete, so this was checked with example values (3.30 g, 1.85 g).</div>|||<div class='small muted'>2(a)-ийн хүснэгт бүрэн биш тул жишээ утга (3.30 g, 1.85 g)-аар шалгав.</div>@@";}
  const a=$("#c2a").value,b=$("#c2b").value,c=$("#c2c").value,d=$("#c2d").value;const sfok=s=>sigFigs(s)>=2&&sigFigs(s)<=4;
  const ea=R/MR_A,eb=(F-R)/18;const m1=close(num(a),ea,0.012)&&sfok(a);const m2=close(num(b),eb,0.012)&&sfok(b);
  L.push(li(m1,\`<b>(i) M1</b> n(ZnSO₄) = \${R.toFixed(2)}/161.5 = \${ea.toPrecision(3)} mol (2–4 s.f.)\`));L.push(li(m2,\`<b>(i) M2</b> n(H₂O) = (\${F.toFixed(2)} − \${R.toFixed(2)})/18 = \${eb.toPrecision(3)} mol (2–4 s.f.)\`));
  const A=isFinite(num(a))?num(a):ea,B=isFinite(num(b))?num(b):eb;const ec=B/A;const m3=close(num(c),ec,0.012);
  L.push(li(m3,\`<b>(ii) M1</b> y = n(H₂O)/n(ZnSO₄) = \${ec.toFixed(2)}\`));
  const m4=/^\\d+$/.test(clean(d))&&+clean(d)===Math.round(isFinite(num(c))?num(c):ec);L.push(li(m4,\`@@<b>(ii) M2</b> as a whole number, y = \${Math.round(isFinite(num(c))?num(c):ec)}|||<b>(ii) M2</b> бүхэл тоогоор y = \${Math.round(isFinite(num(c))?num(c):ec)}@@\`));
  m=m1+m2+m3+m4;$("#q2fbB").innerHTML=fbBlock(L,m,4)+note;setScore("q2b",m);};
$("#q2checkC").onclick=()=>{const t=$("#q2c").value.toLowerCase();const ok=/(decompos|break(s)? down|flammab|burn|combust|\\bco2\\b|carbon (di|mon)oxide)/.test(t);
  $("#q2fbC").innerHTML=fbBlock([li(ok,ok?"@@You stated that the acid decomposes on heating / is flammable.|||Хүчил халаахад задрах/шатамхай гэдгийг дурдсан.@@":"@@Key idea: (anhydrous) ethanedioic acid would decompose on heating / is flammable.|||Түлхүүр санаа: (anhydrous) ethanedioic acid would decompose on heating / is flammable.@@"),\`@@<div class="small muted">Model answer: <i>The ethanedioic acid itself decomposes on heating, so the mass loss is not only water.</i></div>|||<div class="small muted">Загвар: <i>The ethanedioic acid itself decomposes on heating, so the mass loss is not only water.</i></div>@@\`],ok?1:0,1);setScore("q2c",ok?1:0);};

/* =====================================================================
   Q3  BENCH
   ===================================================================== */
const S={liq:null,ppt:null,solid:null,bub:false,cond:false,flame:false,splint:null,filter:null,label:""};
const tubeEl=$("#q3tube");
function drawTube(st){const s=Object.assign({},S,st);let g=\`<rect width="200" height="300" fill="none"/>\`;
  g+=\`<path d="M70 30 L70 250 Q70 280 100 280 Q130 280 130 250 L130 30" fill="var(--glass)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>\`;
  if(s.liq){g+=\`<path d="M72 170 L128 170 L128 250 Q128 278 100 278 Q72 278 72 250Z" fill="\${s.liq}" style="transition:fill 1.4s"/>\`;}
  if(s.ppt){g+=\`<path d="M72 235 L128 235 L128 250 Q128 278 100 278 Q72 278 72 250Z" fill="\${s.ppt}" style="transition:fill 2.5s"/>\`;
    for(let i=0;i<14;i++)g+=\`<circle cx="\${78+Math.random()*44}" cy="\${185+Math.random()*48}" r="1.6" fill="\${s.ppt}" opacity=".8"/>\`;}
  if(s.solid){g+=\`<path d="M74 258 L126 258 Q124 278 100 278 Q76 278 74 258Z" fill="\${s.solid}" stroke="#0003"/>\`;for(let i=0;i<8;i++)g+=\`<rect x="\${80+Math.random()*36}" y="\${250+Math.random()*10}" width="5" height="4" fill="\${s.solid}" stroke="#0003" transform="rotate(\${Math.random()*60} 100 255)"/>\`;}
  if(s.bub){for(let i=0;i<16;i++){const x=78+Math.random()*44,y=180+Math.random()*90;g+=\`<circle cx="\${x}" cy="\${y}" r="\${1.5+Math.random()*2.5}" fill="none" stroke="var(--ink)" stroke-width=".8"><animate attributeName="cy" from="\${y}" to="\${172}" dur="\${0.8+Math.random()}s" repeatCount="indefinite"/></circle>\`;}}
  if(s.cond){for(let i=0;i<10;i++)g+=\`<circle cx="\${73+Math.random()*54}" cy="\${40+Math.random()*50}" r="\${1.2+Math.random()*1.6}" fill="#9fd0ff" stroke="#5c8fbf" stroke-width=".5"/>\`;}
  if(s.flame)g+=\`<path d="M100 286 Q85 292 100 300 Q115 292 100 286" fill="#3b7bff" opacity=".85"/>\`;
  if(s.splint){g+=\`<line x1="100" y1="18" x2="170" y2="-30" stroke="#a7783f" stroke-width="5"/>\`;g+=\`<circle cx="100" cy="20" r="\${s.splint==="relight"?7:3}" fill="\${s.splint==="relight"?"#ffb02e":"#c4512b"}"/>\`;
    if(s.splint==="relight")g+=\`<path d="M100 2 Q92 14 100 22 Q108 14 100 2" fill="#ff7a1a"/>\`;}
  if(s.filter){g+=\`<path d="M60 10 L140 10 L104 60 L96 60Z" fill="#fff" stroke="var(--ink)"/><path d="M78 16 L122 16 L104 44 L96 44Z" fill="\${s.filter}"/>\`;}
  if(s.label)g+=\`<text x="100" y="296" font-size="11" text-anchor="middle" fill="var(--muted)">\${esc(s.label)}</text>\`;
  tubeEl.innerHTML=g;}
drawTube({});
const COL={colourless:"rgba(210,230,245,.45)",purple:"#6a1b7a",palepink:"rgba(245,215,228,.6)",green:"#1f6b3a",yellow:"rgba(240,215,120,.7)",white:"#fbfbf7",offwhite:"#ece4d4",brown:"#7a4a1e",black:"#222"};
// sample state
const Q3=store.get("q3",{fa5dissolved:false,ba:false,log:[]});
let cur="FA5";
const SAMPLES={
 FA5:{name:"FA 5",info:"@@Solid FA 5 (label: “possibly hydrated zinc sulfate”). White crystals.|||Хатуу FA 5 (шошго: «hydrated zinc sulfate байж магадгүй»). Цагаан талст.@@",init:{solid:COL.white,label:"FA 5 (s)"}},
 FA6:{name:"FA 6",info:"@@Solid FA 6: dark purple crystals.|||Хатуу FA 6 — бараан нил ягаан талст.@@",init:{solid:"#3a1048",label:"FA 6 (s)"}},
 FA7:{name:"FA 7",info:"@@FA 7: acidified aqueous solution of FA 6 (purple).|||FA 7 — FA 6-ийн хүчиллэг усан уусмал (нил ягаан).@@",init:{liq:COL.purple,label:"FA 7"}},
 FA8:{name:"FA 8",info:"@@FA 8: almost colourless (very pale pink) solution.|||FA 8 — бараг өнгөгүй (маш цайвар ягаан) уусмал.@@",init:{liq:COL.palepink,label:"FA 8"}},
 FA9:{name:"FA 9",info:"@@FA 9: black powdered solid.|||FA 9 — хар нунтаг хатуу бодис.@@",init:{solid:COL.black,label:"FA 9 (s)"}}};
function A(id,label,en,steps,obs,extra){return Object.assign({id,label,en,steps,obs},extra||{});}
const ACTIONS={
 FA5:[
  A("heat","@@Heat solid FA 5 in a hard-glass test-tube|||Хатуу FA 5-ыг халуунд тэсвэртэй хуруу шилэнд халаах@@","heat solid FA 5 in a hard-glass test-tube",[{solid:COL.white,flame:true,label:"FA 5 (s)"},{solid:COL.white,flame:true,cond:true,label:"FA 5 (s)"}],"Colourless liquid (droplets) condenses on the cooler upper part of the tube / steam given off; white solid remains."),
  A("dissolve","@@Dissolve in distilled water|||Нэрмэл усанд уусгах@@","dissolve FA 5 in distilled water",[{liq:COL.colourless,label:"FA 5 (aq)"}],"Dissolves to give a colourless solution.",{after:()=>{Q3.fa5dissolved=true;}}),
  A("naoh","@@NaOH(aq) dropwise, then in excess|||NaOH(aq) дуслаар, дараа нь илүүдэл@@","add NaOH(aq) dropwise, then in excess",[{liq:COL.colourless,ppt:COL.white,label:"+ NaOH"},{liq:COL.colourless,ppt:COL.white,label:"+ excess NaOH"}],"White ppt; insoluble in excess NaOH(aq).",{aq:true}),
  A("nh3","@@NH₃(aq) dropwise, then in excess|||NH₃(aq) дуслаар, дараа нь илүүдэл@@","add NH3(aq) dropwise, then in excess",[{liq:COL.colourless,ppt:COL.white,label:"+ NH₃"},{liq:COL.colourless,ppt:COL.white,label:"+ excess NH₃"}],"White ppt; insoluble in excess NH3(aq).",{aq:true}),
  A("ba","@@Add BaCl₂(aq) or Ba(NO₃)₂(aq)|||BaCl₂(aq) эсвэл Ba(NO₃)₂(aq) нэмэх@@","add aqueous barium chloride (or barium nitrate)",[{liq:COL.colourless,ppt:COL.white,label:"+ Ba²⁺"}],"White ppt.",{aq:true,after:()=>{Q3.ba=true;}}),
  A("acid","@@(On the Ba precipitate) excess dilute HCl or HNO₃|||(Ba тунадас дээр) шингэрүүлсэн HCl эсвэл HNO₃ илүүдлээр@@","then add excess dilute hydrochloric (or nitric) acid",[{liq:COL.colourless,ppt:COL.white,label:"+ HCl"}],"White ppt remains / is insoluble in excess acid.",{aq:true,needBa:true}),
  A("kmno4","@@Add acidified KMnO₄(aq)|||Хүчиллэг KMnO₄(aq) нэмэх@@","add acidified KMnO4(aq)",[{liq:"rgba(150,40,160,.8)",label:"+ KMnO₄"}],"Remains purple / KMnO4 is not decolourised.",{aq:true})],
 FA6:[
  A("heat","@@Heat in a hard-glass test-tube until no more gas is given off|||Халуунд тэсвэртэй хуруу шилэнд хий ялгарахаа болих хүртэл халаах@@","heat FA 6",[{solid:"#3a1048",flame:true,label:"@@heating|||халааж байна@@"},{solid:"#1a1a1a",flame:true,label:"@@crackling, jumping|||шажигнаж үсэрнэ@@"},{solid:"#151515",label:"@@black residue|||хар үлдэгдэл@@"}],"Purple(-black) crystals crackle / jump about (spit); gas given off; black residue remains."),
  A("splint","@@Test the gas given off with a glowing splint|||Ялгарч буй хийг цогтой хэлтэрхийгээр шалгах@@","test gas with a glowing splint",[{solid:"#151515",flame:true,splint:"relight",label:"O₂?"}],"Glowing splint relights → oxygen.",{needHeat:true}),
  A("water","@@Add about 3 cm of water to the residue, stir and filter|||Үлдэгдэлд ~3 cm ус нэмж хутгаад шүүх@@","add water to residue, stir and filter",[{liq:COL.green,filter:"#151515",label:"@@filtered solution|||шүүсэн уусмал@@"}],"Filtrate is (dark) green; black solid remains on the filter paper.",{needHeat:true})],
 FA7:[
  A("t1","@@Test 1: add H₂O₂|||Test 1: H₂O₂ нэмэх@@","add hydrogen peroxide",[{liq:COL.purple,bub:true,label:"+ H₂O₂"},{liq:COL.colourless,bub:true,label:"+ H₂O₂"}],"Effervescence; purple solution turns colourless.",{cell:"7-1"}),
  A("t1s","@@Test the gas from Test 1 with a glowing splint|||Test 1-ийн хийг цогтой хэлтэрхийгээр шалгах@@","test gas with glowing splint",[{liq:COL.colourless,bub:true,splint:"relight",label:"O₂"}],"Glowing splint relights (oxygen).",{cell:"7-1",needT1:true}),
  A("t2","@@Test 2: add NaOH(aq) and leave to stand|||Test 2: NaOH(aq) нэмээд түр байлгах@@","add NaOH(aq) then leave to stand",[{liq:COL.purple,label:"+ NaOH"},{liq:"#4a2a6a",label:"@@after waiting|||хүлээсний дараа@@"}],"@@No ppt; solution stays purple (may slowly darken/turn greenish). [no mark in the MS]|||No ppt; solution stays purple (may slowly darken/turn greenish). [MS-д оноогүй]@@",{cell:"7-2"}),
  A("t3","@@Test 3: add FeSO₄(aq)|||Test 3: FeSO₄(aq) нэмэх@@","add aqueous iron(II) sulfate",[{liq:COL.purple,label:"+ Fe²⁺"},{liq:COL.yellow,label:"+ Fe²⁺"}],"Purple colour disappears; colourless / pale yellow solution forms.",{cell:"7-3"})],
 FA8:[
  A("t1","@@Test 1: add H₂O₂|||Test 1: H₂O₂ нэмэх@@","add hydrogen peroxide",[{liq:COL.palepink,label:"+ H₂O₂"}],"No change.",{cell:"8-1"}),
  A("t1s","@@Test with a glowing splint|||Хэлтэрхийгээр шалгах@@","test with glowing splint",[{liq:COL.palepink,splint:"none",label:"@@no gas|||хий алга@@"}],"No gas — splint does not relight.",{cell:"8-1"}),
  A("t2","@@Test 2: add NaOH(aq) and leave to stand|||Test 2: NaOH(aq) нэмээд түр байлгах@@","add NaOH(aq) then leave to stand",[{liq:COL.colourless,ppt:COL.offwhite,label:"+ NaOH"},{liq:COL.colourless,ppt:COL.brown,label:"@@after some time in air|||агаарт хэсэг хугацааны дараа@@"}],"Off-white ppt, turns brown on standing (in air); insoluble in excess.",{cell:"8-2",slow:true}),
  A("t3","@@Test 3: add FeSO₄(aq)|||Test 3: FeSO₄(aq) нэмэх@@","add aqueous iron(II) sulfate",[{liq:"rgba(225,235,215,.6)",label:"+ Fe²⁺"}],"No change.",{cell:"8-3"})],
 FA9:[
  A("t1","@@Test 1: add H₂O₂|||Test 1: H₂O₂ нэмэх@@","add hydrogen peroxide",[{liq:COL.colourless,solid:COL.black,bub:true,label:"+ H₂O₂"}],"Vigorous effervescence; black solid remains (catalyst).",{cell:"9-1"}),
  A("t1s","@@Test the gas with a glowing splint|||Хийг цогтой хэлтэрхийгээр шалгах@@","test gas with glowing splint",[{liq:COL.colourless,solid:COL.black,bub:true,splint:"relight",label:"O₂"}],"Glowing splint relights (oxygen).",{cell:"9-1",needT1:true}),
  A("t2","@@Test 2: add NaOH(aq) and leave to stand|||Test 2: NaOH(aq) нэмээд түр байлгах@@","add NaOH(aq) then leave to stand",[{liq:COL.colourless,solid:COL.black,label:"+ NaOH"}],"No change (black solid does not dissolve).",{cell:"9-2"}),
  A("t3","@@Test 3: add FeSO₄(aq)|||Test 3: FeSO₄(aq) нэмэх@@","add aqueous iron(II) sulfate",[{liq:"rgba(225,235,215,.6)",solid:COL.black,label:"+ Fe²⁺"}],"@@Black solid remains; little or no visible change. [no mark in the MS]|||Black solid remains; little or no visible change. [MS-д оноогүй]@@",{cell:"9-3"})]
};
const done={};
function renderSamples(){const b=$("#q3samples");b.innerHTML="";Object.keys(SAMPLES).forEach(k=>{b.insertAdjacentHTML("beforeend",\`<button class="btn \${k===cur?"sel":""}" data-s="\${k}">\${SAMPLES[k].name}</button>\`);});
  $$("#q3samples button").forEach(x=>x.onclick=()=>{cur=x.dataset.s;renderSamples();renderActions();drawTube(SAMPLES[cur].init);$("#q3obs").innerHTML='@@<span class="muted">Choose a test.</span>|||<span class="muted">Сорил сонгоно уу.</span>@@';});}
function renderActions(){const a=$("#q3actions");a.innerHTML="";$("#q3sampleinfo").textContent=SAMPLES[cur].info;
  ACTIONS[cur].forEach(x=>{a.insertAdjacentHTML("beforeend",\`<button class="btn" data-a="\${x.id}">\${x.label}</button>\`);});
  $$("#q3actions button").forEach(b=>b.onclick=()=>run(ACTIONS[cur].find(x=>x.id===b.dataset.a)));}
function run(act){if(act.aq&&!Q3.fa5dissolved){toast("@@First dissolve FA 5 in water to make a solution.|||Эхлээд FA 5-ыг усанд уусгаж уусмал бэлтгэ.@@");return;}
  if(act.needBa&&!Q3.ba){toast("@@This step is done on the Ba²⁺ precipitate.|||Энэ алхам Ba²⁺-ийн тунадас дээр хийгдэнэ.@@");return;}
  if(act.needHeat&&!done[cur+"heat"]){toast("@@Heat FA 6 first.|||Эхлээд FA 6-ийг халаана уу.@@");return;}
  if(act.needT1&&!done[cur+"t1"]){toast("@@Add H₂O₂ first.|||Эхлээд H₂O₂ нэмнэ үү.@@");return;}
  done[cur+act.id]=true;const steps=act.steps;let i=0;
  const show=()=>{drawTube(steps[i]);i++;if(i<steps.length)setTimeout(show,act.slow?2600:1300);};show();
  const rev=$("#q3reveal").checked;
  $("#q3obs").innerHTML=\`<b>\${esc(act.label)}</b><br>\`+(rev?\`@@<span class="small">Observation: <i>\${esc(act.obs)}</i></span>|||<span class="small">Тайлбар: <i>\${esc(act.obs)}</i></span>@@\`:\`@@<span class="small muted">Record what you saw in English.|||<span class="small muted">Харсан зүйлээ англиар бүртгэ.@@\${act.cell?\` @@(Table 3.2: FA \${act.cell.replace("-"," / Test ")})|||(Хүснэгт 3.2: FA \${act.cell.replace("-"," / Test ")})@@\`:""}</span>\`);
  if(act.after)act.after();
  if(cur==="FA5"){Q3.log.push({id:act.id,test:act.en,obs:""});renderLog();}
  store.set("q3",Q3);}
function renderLog(){const tb=$("#q3atable tbody");tb.innerHTML="";Q3.log.forEach((r,i)=>{tb.insertAdjacentHTML("beforeend",\`<tr><td style="text-align:left">\${esc(r.test)}</td><td><input data-l="\${i}" class="head" value="\${esc(r.obs)}" placeholder="observations"></td></tr>\`);});
  if(!Q3.log.length)tb.innerHTML='@@<tr><td colspan="2" class="muted small">Tests you do on FA 5 are added here.</td></tr>|||<tr><td colspan="2" class="muted small">FA 5 дээр сорил хийхэд энд нэмэгдэнэ.</td></tr>@@';
  $$("#q3atable input").forEach(inp=>inp.addEventListener("input",()=>{Q3.log[+inp.dataset.l].obs=inp.value;store.set("q3",Q3);}));}
renderSamples();renderActions();renderLog();drawTube(SAMPLES[cur].init);
if(Q3.log.length)Q3.log.forEach(r=>{done["FA5"+r.id]=true;});

const re={white:/white/i,insol:/(insoluble|not soluble|does not dissolve|doesn'?t dissolve|no change in excess|remains|persists|stays)/i,
 cond:/(condens|droplet|steam|water vapou?r|vapou?r|moisture|liquid)/i,purpleStays:/(purple|not decolou?ri[sz]|no change|remains? (purple|pink))/i};
$("#q3checkA").onclick=()=>{const L=[];let m=0;const by=id=>Q3.log.filter(r=>r.id===id);
  const M1=by("heat").some(r=>re.cond.test(r.obs));L.push(li(M1,"@@<b>M1</b> Heated the solid and observed condensation / droplets / steam.|||<b>M1</b> Хатуу бодисыг халааж конденсац / дусал / уур ажигласан.@@"));
  const M2=by("dissolve").length>0;L.push(li(M2,"@@<b>M2</b> Prepared an aqueous solution for the tests.|||<b>M2</b> Сорилд зориулж усан уусмал бэлтгэсэн.@@"));
  const M3=by("nh3").some(r=>re.white.test(r.obs)&&/ppt|precipitat|solid/i.test(r.obs)&&re.insol.test(r.obs));
  L.push(li(M3,"@@<b>M3</b> NH₃(aq): white precipitate, insoluble in excess.|||<b>M3</b> NH₃(aq): цагаан тунадас, илүүдэлд уусахгүй.@@"+(by("nh3").length?"":" @@<span class='small muted'>(The NH₃ test was not done. The NaOH result also shows it is not Zn²⁺, but the MS names NH₃ for this mark.)</span>|||<span class='small muted'>(NH₃ сорил хийгдээгүй. NaOH-ийн үр дүн ч Zn²⁺ биш гэдгийг харуулдаг ч MS энэ оноонд NH₃-ыг заасан.)</span>@@")));
  const M4=by("ba").some(r=>re.white.test(r.obs)&&/ppt|precipitat/i.test(r.obs));L.push(li(M4,"@@<b>M4</b> Ba²⁺: white precipitate.|||<b>M4</b> Ba²⁺: цагаан тунадас.@@"));
  const M5=by("acid").some(r=>re.insol.test(r.obs))||by("kmno4").some(r=>re.purpleStays.test(r.obs));
  L.push(li(M5,"@@<b>M5</b> Telling SO₄²⁻ from SO₃²⁻: precipitate insoluble in HCl/HNO₃, or KMnO₄ stays purple.|||<b>M5</b> SO₄²⁻ / SO₃²⁻ ялгах: тунадас HCl/HNO₃-т уусахгүй, эсвэл KMnO₄ ягаан хэвээр.@@"));
  m=M1+M2+M3+M4+M5;$("#q3fbA").innerHTML=fbBlock(L,m,5);setScore("q3a1",m);};
$("#q3checkA2").onclick=()=>{const ok=$("#t31a").value==="✗"&&$("#t31b").value==="✓"&&$("#t31c").value==="✓";
  $("#q3fbA2").innerHTML=fbBlock([li(ok,ok?"@@Zn²⁺ ✗, SO₄²⁻ ✓, H₂O ✓: FA 5 is not zinc sulfate (it is magnesium sulfate).|||Zn²⁺ ✗, SO₄²⁻ ✓, H₂O ✓ — FA 5 нь цайрын биш (магнийн) сульфат.@@":"@@Look at your observations again: if the precipitate did not dissolve in excess NH₃, Zn²⁺ is absent.|||Ажиглалтаа дахин хар: NH₃-ийн илүүдэлд тунадас уусаагүй бол Zn²⁺ байхгүй.@@")],ok?1:0,1);setScore("q3a2",ok?1:0);};
$("#q3checkB").onclick=()=>{const t=$("#q3bi").value;const L=[];
  const gas=/glowing/i.test(t)&&/relight|re-light|glows? (more )?bright|bursts? into flame|reignit/i.test(t);
  const pts=[/purple|violet/i.test(t),/(jump|crackl|spit|decrepitat|move|pop)/i.test(t),/black/i.test(t)&&/(residue|solid|remain|left|forms?)/i.test(t)];const n=pts.filter(Boolean).length;
  const b1=gas?1:0,b2=n>=2?1:0;
  L.push(li(gas,"@@Tested the gas with a glowing splint and recorded that it relit / glowed brightly (O₂).|||Хийг цогтой хэлтэрхийгээр шалгаж, дахин асч/тод улайсныг бичсэн (O₂).@@"));
  L.push(li(b2,\`@@Other observations (purple crystals; jumping/crackling; black residue): \${n}/3, at least 2 needed.|||Бусад ажиглалт (нил ягаан талст; үсрэх/шажигнах; хар үлдэгдэл) — \${n}/3, дор хаяж 2 хэрэгтэй.@@\`));
  const g=/green/i.test($("#q3bii").value);L.push(li(g,"@@<b>(ii)</b> (dark) green solution.|||<b>(ii)</b> (бараан) ногоон уусмал.@@"));
  const m=b1+b2+(g?1:0);$("#q3fbB").innerHTML=fbBlock(L,m,3);setScore("q3b",m);};
const NC=/(no (visible )?change|no (observable |visible )?reaction|nothing happens|no observ)/i,BUB=/(bubbl|effervesc|fizz)/i,RELIGHT=/relight|re-light|reignit|glows? (more )?bright/i;
$("#q3checkC").onclick=()=>{const v=k=>($(\`#t32 textarea[data-c="\${k}"]\`).value||"");const L=[];let stars=0;const star=(ok,txt)=>{L.push(li(ok,txt));if(ok)stars++;};
  star(BUB.test(v("7-1")),"FA 7 / Test 1: effervescence*");
  star(/colourless|decolou?ri[sz]/i.test(v("7-1")),"FA 7 / Test 1: purple → colourless*");
  star(RELIGHT.test(v("7-1")),"FA 7 / Test 1: gas relights glowing splint* (O₂)");
  star(BUB.test(v("9-1")),"FA 9 / Test 1: effervescence*");
  star(RELIGHT.test(v("9-1")),"FA 9 / Test 1: gas relights glowing splint* (O₂)");
  star(/(off.?white|white|beige|cream|pale (brown|pink))/i.test(v("8-2"))&&/(ppt|precipitat)/i.test(v("8-2")),"FA 8 / Test 2: off-white ppt*");
  star(/brown/i.test(v("8-2"))&&/(stand|air|turn|becom|darken|time)/i.test(v("8-2")),"FA 8 / Test 2: brown on standing*");
  star(/colourless|yellow|decolou?ri[sz]/i.test(v("7-3")),"FA 7 / Test 3: turns colourless / yellow*");
  const ncs=["8-1","9-2","8-3"].filter(k=>NC.test(v(k))).length;const ncStars=ncs>=3?2:ncs>=2?1:0;
  L.push(li(ncStars>0,\`@@“No change” (FA 8 T1, FA 9 T2, FA 8 T3): \${ncs}/3 correct → \${ncStars} stars|||«No change» (FA 8 T1, FA 9 T2, FA 8 T3): \${ncs}/3 зөв → \${ncStars} од@@\`));stars+=ncStars;
  const m=Math.min(4,Math.floor(stars/2));L.push(\`@@<div class="small muted">Total stars: \${stars} → 2 stars = 1 mark (max 4).</div>|||<div class="small muted">Нийт од: \${stars} → 2 од = 1 оноо (max 4).</div>@@\`);
  $("#q3fbC").innerHTML=fbBlock(L,m,4);setScore("q3c1",m);};
$("#q3checkC2").onclick=()=>{const a=/mangan|^\\s*mn\\s*$/i.test($("#q3cii").value);const o=s=>clean(s).replace(/^\\+/,"").toUpperCase();
  const b1=["7","VII"].includes(o($("#q3ciii1").value)),b2=["2","II"].includes(o($("#q3ciii2").value));const L=[li(a,"<b>(ii)</b> manganese / Mn"),li(b1&&b2,"@@<b>(iii)</b> FA 6/FA 7 = +7, FA 8 = +2 (both must be correct)|||<b>(iii)</b> FA 6/FA 7 = +7, FA 8 = +2 (хоёулаа зөв байх)@@")];
  const m=(a?1:0)+(b1&&b2?1:0);$("#q3fbC2").innerHTML=fbBlock(L,m,2);setScore("q3c2",m);};

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
{const cs=$("#wbColors");COLORS.forEach((c,i)=>{cs.insertAdjacentHTML("beforeend",\`@@<button class="sw \${i===0?"on":""}" data-col="\${c}" style="background:\${c}" aria-label="colour"></button>|||<button class="sw \${i===0?"on":""}" data-col="\${c}" style="background:\${c}" aria-label="өнгө"></button>@@ \`);});
 $$("#wbColors .sw").forEach(b=>b.onclick=()=>{WB.color=b.dataset.col;$$("#wbColors .sw").forEach(x=>x.classList.toggle("on",x===b));if(WB.tool==="eraser"){WB.tool="pen";$$(".wb-bar .tool").forEach(x=>x.classList.toggle("on",x.dataset.tool==="pen"));}});}
$("#wbSize").onchange=e=>WB.size=+e.target.value;
$("#wbGrid").onclick=()=>{WB.grid=!WB.grid;wbBg();};
$("#wbUndo").onclick=()=>{const a=WB.data[WB.page];if(a&&a.length){WB.redo[WB.page].push(a.pop());wbSave();wbDraw();}};
$("#wbRedo").onclick=()=>{const r=WB.redo[WB.page];if(r&&r.length){WB.data[WB.page].push(r.pop());wbSave();wbDraw();}};
$("#wbClear").onclick=()=>{if(!confirm("@@Clear this whole page?|||Энэ хуудсыг бүхэлд нь арилгах уу?@@"))return;WB.data[WB.page]=[];WB.redo[WB.page]=[];wbSave();wbDraw();};
$("#wbSave").onclick=()=>{const t=document.createElement("canvas");t.width=cv.width;t.height=cv.height;const c=t.getContext("2d");c.fillStyle="#fff";c.fillRect(0,0,t.width,t.height);c.drawImage(cv,0,0);
  const a=document.createElement("a");a.href=t.toDataURL("image/png");a.download=\`9701-35-w25-\${WB.page}.png\`;a.click();};
window.addEventListener("resize",()=>{if($("#wb").classList.contains("open"))wbSize();});

persistInputs();renderPicks();renderScore();
})();
<\/script>
</body>
</html>
`;export{e as default};
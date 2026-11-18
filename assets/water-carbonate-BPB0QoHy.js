var e=`<!DOCTYPE html>
<html lang="mn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ажлын хуудас: Ундны усны карбонат, гидрокарбонатыг тодорхойлох</title>
<style>
  :root{
    --ink:#1b2430; --muted:#5a6573; --line:#c9d2dc; --accent:#1f3864; --accent-soft:#e8eef8;
    --formula:#fff6d9; --formula-line:#d9b34a; --ok:#1e7a46; --ok-soft:#e5f4ea; --warn:#a4400f; --warn-soft:#fdece2;
    --paper:#ffffff; --bg:#f3f5f8;
  }
  *{box-sizing:border-box}
  html{font-size:12pt}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:Arial, Helvetica, sans-serif;font-size:12pt;line-height:1.5}
  .sheet{max-width:820px;margin:24px auto;background:var(--paper);padding:36px 44px 44px;border:1px solid var(--line);border-radius:6px}
  header.top{text-align:center;border-bottom:2px solid var(--accent);padding-bottom:14px;margin-bottom:20px}
  header.top .kicker{font-weight:bold;letter-spacing:.08em;color:var(--accent)}
  header.top h1{font-size:12pt;margin:4px 0;font-weight:bold}
  header.top .sub{font-style:italic;color:var(--muted)}
  h2{font-size:12pt;font-weight:bold;color:var(--accent);margin:28px 0 10px;padding-bottom:4px;border-bottom:1px solid var(--accent)}
  h3{font-size:12pt;font-weight:bold;margin:16px 0 6px}
  p{margin:0 0 10px}
  .note{color:var(--muted)}
  table{width:100%;border-collapse:collapse;margin:8px 0 12px;font-size:12pt}
  th,td{border:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:middle}
  th{background:var(--accent-soft);font-weight:bold}
  tr.avg td{background:#f5f7fa;font-weight:bold}
  input[type=text],input[type=number],input[type=date],textarea{
    font-family:Arial, Helvetica, sans-serif;font-size:12pt;color:var(--ink);
    width:100%;padding:6px 8px;border:1px solid #aab6c3;border-radius:4px;background:#fff}
  input:focus,textarea:focus{outline:2px solid #7fa2d9;outline-offset:0;border-color:#7fa2d9}
  input[type=number]{text-align:right}
  td input{border-color:#c4ced9}
  select{font-family:Arial, Helvetica, sans-serif;font-size:12pt;width:100%;padding:6px 8px;border:1px solid #aab6c3;border-radius:4px;background:#fff}
  textarea{min-height:64px;resize:vertical;line-height:1.5}
  .grid{display:grid;grid-template-columns:2fr 1fr 1fr 1.3fr;gap:10px}
  .grid label, .field label{display:block;font-weight:bold;margin-bottom:3px}
  .field{margin:10px 0}
  .formula{background:var(--formula);border:1px solid var(--formula-line);border-radius:4px;padding:8px 12px;text-align:center;margin:8px 0}
  ol.steps,ul.plain{margin:6px 0 10px;padding-left:26px}
  ol.steps li,ul.plain li{margin:3px 0}
  .check{display:flex;gap:8px;align-items:flex-start;margin:4px 0}
  .check input{width:18px;height:18px;margin-top:3px;flex:none}
  .inline-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .inline-row input{width:120px}
  .obs{display:grid;grid-template-columns:auto 1fr auto 1fr;gap:8px;align-items:center;margin:8px 0}
  .calc{border:1px solid var(--line);border-radius:6px;padding:12px 14px;margin:10px 0}
  .calc .result{font-weight:bold;font-size:12pt}
  .result-val{display:inline-block;min-width:80px;padding:2px 8px;border-radius:4px;background:var(--accent-soft);color:var(--accent);text-align:right}
  .msg{border-radius:4px;padding:6px 10px;margin:6px 0;display:none}
  .msg.show{display:block}
  .msg.warn{background:var(--warn-soft);color:var(--warn)}
  .msg.ok{background:var(--ok-soft);color:var(--ok)}
  .actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px;padding-top:16px;border-top:1px solid var(--line)}
  button{font-family:Arial, Helvetica, sans-serif;font-size:12pt;padding:8px 16px;border-radius:4px;border:1px solid var(--accent);background:var(--accent);color:#fff;cursor:pointer}
  button.secondary{background:#fff;color:var(--accent)}
  button.danger{background:#fff;color:var(--warn);border-color:var(--warn)}
  button:focus-visible{outline:2px solid #7fa2d9;outline-offset:2px}
  .status{color:var(--muted);align-self:center}
  .dialog-backdrop{position:fixed;inset:0;background:rgba(20,30,45,.45);display:none;align-items:center;justify-content:center;padding:16px}
  .dialog-backdrop.show{display:flex}
  .dialog{background:#fff;border-radius:6px;padding:20px 22px;max-width:420px;width:100%}
  .dialog p{margin-bottom:16px}
  .q{margin:14px 0}
  .q label{font-weight:bold;display:block;margin-bottom:4px}
  @media (max-width:640px){
    .sheet{padding:20px 16px;margin:0;border-radius:0;border-left:none;border-right:none}
    .grid{grid-template-columns:1fr 1fr}
    .obs{grid-template-columns:1fr}
    th,td{padding:5px}
  }
  @media print{
    body{background:#fff}
    .sheet{border:none;margin:0;padding:0;max-width:none}
    .actions,.dialog-backdrop{display:none!important}
    input,textarea{border:none;border-bottom:1px solid #888;border-radius:0}
    textarea{min-height:0}
    h2{break-after:avoid}
    table,.calc{break-inside:avoid}
  }
</style>
</head>
<body>
<main class="sheet" id="sheet">
  <header class="top">
    <div class="kicker">АЖЛЫН ХУУДАС</div>
    <h1>Ундны усны карбонат, гидрокарбонатыг тодорхойлох титрийн арга</h1>
    <div class="sub">Шүлтлэг чанар · HCl-ээр титрлэх · Фенолфталейн (P) ба метилоранж (M) индикатор</div>
  </header>

  <section>
    <div class="grid">
      <div><label for="name">Овог, нэр</label><input type="text" id="name" data-save></div>
      <div><label for="cls">Анги</label><input type="text" id="cls" data-save></div>
      <div><label for="date">Огноо</label><input type="date" id="date" data-save></div>
      <div><label for="sample">Дээжийн дугаар</label><input type="text" id="sample" data-save></div>
    </div>
    <div class="field"><label for="source">Дээжийн эх үүсвэр (хаанаас авсан)</label><input type="text" id="source" data-save></div>
  </section>

  <h2>1. Зорилго</h2>
  <p>Ундны усанд агуулагдах карбонат (CO<sub>3</sub><sup>2−</sup>) ба гидрокарбонат (HCO<sub>3</sub><sup>−</sup>)-ын агуулалтыг стандарт HCl-ээр хоёр шаттай титрлэж, усны P ба M шүлтлэг чанарыг (мг/л CaCO<sub>3</sub>) тодорхойлох.</p>

  <h2>2. Аргын зарчим</h2>
  <p>Дээжийг эхлээд фенолфталейнтэй, дараа нь ижил дээжийг метилоранжтэй үргэлжлүүлэн HCl-ээр титрлэнэ.</p>
  <div class="formula">1-р шат: CO<sub>3</sub><sup>2−</sup> + H<sup>+</sup> → HCO<sub>3</sub><sup>−</sup> &nbsp;(pH ≈ 8.3)</div>
  <div class="formula">2-р шат: HCO<sub>3</sub><sup>−</sup> + H<sup>+</sup> → H<sub>2</sub>O + CO<sub>2</sub>↑ &nbsp;(pH ≈ 4.5)</div>
  <table>
    <thead><tr><th>Шат</th><th>Индикатор</th><th>pH</th><th>Өнгө өөрчлөгдөлт</th><th>Зарцуулалт</th></tr></thead>
    <tbody>
      <tr><td>1-р цэг (P)</td><td>Фенолфталейн</td><td>≈ 8.3</td><td>ягаан → өнгөгүй</td><td>V<sub>P</sub></td></tr>
      <tr><td>2-р цэг (M)</td><td>Метилоранж</td><td>≈ 4.5</td><td>шар → улбар шар</td><td>V<sub>M</sub> (нийт)</td></tr>
    </tbody>
  </table>
  <p class="note">Фенолфталейнтэй ягаан өнгө үүсэхгүй бол усанд CO<sub>3</sub><sup>2−</sup> байхгүй, V<sub>P</sub> = 0 гэж тэмдэглэнэ.</p>

  <h2>3. Хэрэглэх бодис, багаж</h2>
  <p>Бодис бүрийг бэлэн эсэхийг шалгаад тэмдэглэнэ үү.</p>
  <table>
    <thead><tr><th style="width:36px">№</th><th style="width:24%">Бодис</th><th>Бэлтгэх арга</th><th style="width:70px">Бэлэн</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>0.02 М HCl (титрант)</td><td>12 М HCl-ээс 1.67 мл хэмжиж, ус хийсэн 1000 мл-ийн хэмжих колбонд хийнэ. Нэрмэл усаар тэмдэглэгээ хүртэл шингэлж, сайн сэгсэрнэ. <b>Хүчлийг усанд хийнэ.</b></td><td><input type="checkbox" id="r1" data-save aria-label="HCl бэлэн"></td></tr>
      <tr><td>2</td><td>1% фенолфталейн</td><td>1 г фенолфталейнийг 96%-ийн <b>этанолд</b> уусгаж, этанолоор 100 мл болгоно. (Усанд муу уусна.)</td><td><input type="checkbox" id="r2" data-save aria-label="Фенолфталейн бэлэн"></td></tr>
      <tr><td>3</td><td>0.1% метилоранж</td><td>0.1 г метилоранжийг 80 мл <b>нэрмэл усанд</b> уусгаж, 96%-ийн этанолоор 100 мл болгоно. (Этанолд муу уусна.)</td><td><input type="checkbox" id="r3" data-save aria-label="Метилоранж бэлэн"></td></tr>
    </tbody>
  </table>
  <p><b>Багаж:</b> 50 мл бюретка, 100 мл пипетка, 250 мл конус колбо, 100 мл хэмжүүрт цилиндр, юүлүүр, дусаагуур, штатив.</p>

  <h3>HCl бэлтгэх тооцоо</h3>
  <div class="formula">V<sub>1</sub> = C<sub>2</sub> · V<sub>2</sub> / C<sub>1</sub></div>
  <p class="note">C<sub>1</sub> — анхны хүчлийн концентраци (М), C<sub>2</sub> — бэлтгэх концентраци (М), V<sub>2</sub> — бэлтгэх эзлэхүүн (мл), V<sub>1</sub> — хэмжих хүчлийн эзлэхүүн (мл).</p>
  <div class="inline-row">
    <label for="pC1"><b>C<sub>1</sub>, М:</b></label><input type="number" id="pC1" step="0.1" min="0" value="12" data-save>
    <label for="pC2"><b>C<sub>2</sub>, М:</b></label><input type="number" id="pC2" step="0.001" min="0" value="0.02" data-save>
    <label for="pV2"><b>V<sub>2</sub>, мл:</b></label><input type="number" id="pV2" step="1" min="1" value="1000" data-save>
  </div>
  <div class="inline-row" style="margin-top:8px">
    <label for="pV1"><b>Таны бодсон V<sub>1</sub>, мл:</b></label><input type="number" id="pV1" step="0.01" min="0" data-save>
  </div>
  <div class="msg" id="msgP" role="status"></div>

  <h2>4. Тодорхойлох явц</h2>
  <ol class="steps">
    <li>100 мл ундны усны дээжийг пипеткээр хэмжиж, конус колбонд хийнэ.</li>
    <li>2–3 дусал фенолфталейн нэмнэ. Ягаан өнгө үүсвэл 0.02 М HCl-ээр өнгөгүй болтол титрлээд бюреткийн заалтыг тэмдэглэнэ (V<sub>P</sub>).</li>
    <li>Ижил дээжинд 2–3 дусал метилоранж нэмнэ. Уусмал шар өнгөтэй болно.</li>
    <li>Шар өнгө улбар шар болтол үргэлжлүүлэн титрлээд заалтыг тэмдэглэнэ. Эхнээс нь тооцсон нийт зарцуулалт = V<sub>M</sub>.</li>
    <li>Титрлэлтийг 2–3 удаа давтана. Колбыг тасралтгүй сэгсэрнэ.</li>
  </ol>
  <div class="obs">
    <label for="obs1">Фенолфталейн нэмсний дараах өнгө:</label><input type="text" id="obs1" data-save>
    <label for="obs2">1-р цэгийн (P) өнгө:</label><input type="text" id="obs2" data-save>
  </div>
  <div class="obs">
    <label for="obs3">Метилоранж нэмсний дараах өнгө:</label><input type="text" id="obs3" data-save>
    <label for="obs4">2-р цэгийн (M) өнгө:</label><input type="text" id="obs4" data-save>
  </div>
  <table id="tA">
    <thead><tr><th>Давталт</th><th>Эхний заалт (мл)</th><th>P цэгийн заалт (мл)</th><th>M цэгийн заалт (мл)</th><th>V<sub>P</sub> (мл)</th><th>V<sub>M</sub> (мл)</th></tr></thead>
    <tbody></tbody>
  </table>
  <div class="msg" id="msgA" role="status"></div>

  <h2>5. Тооцоо</h2>
  <p>Хүснэгтэд утгаа оруулахад дундаж V<sub>P</sub>, V<sub>M</sub> болон үр дүн автоматаар тооцоологдоно. Шүлтлэг чанарыг мг/л CaCO<sub>3</sub> нэгжээр илэрхийлнэ.</p>
  <div class="inline-row">
    <label for="C"><b>C (HCl), М:</b></label><input type="number" id="C" step="0.0001" min="0" value="0.02" data-save>
    <label for="V"><b>V<sub>s</sub> (дээж), мл:</b></label><input type="number" id="V" step="1" min="1" value="100" data-save>
  </div>
  <div class="calc">
    <h3>P ба M шүлтлэг чанар, мг/л CaCO<sub>3</sub></h3>
    <div class="formula">P = V<sub>P</sub> · C · 50000 / V<sub>s</sub> &nbsp;&nbsp;&nbsp; M = V<sub>M</sub> · C · 50000 / V<sub>s</sub></div>
    <p class="note">50000 — CaCO<sub>3</sub>-ийн эквивалент масс (50 г) × 1000.</p>
    <p class="result">P = <span id="pExpr">—</span> = <span class="result-val" id="pVal">—</span> мг/л</p>
    <p class="result">M = <span id="mExpr">—</span> = <span class="result-val" id="mVal">—</span> мг/л</p>
  </div>
  <div class="calc">
    <h3>P ба M-ийн харьцаанаас карбонат, гидрокарбонат</h3>
    <table>
      <thead><tr><th>Нөхцөл</th><th>Карбонат</th><th>Гидрокарбонат</th></tr></thead>
      <tbody>
        <tr id="k0"><td>P = 0</td><td>0</td><td>M</td></tr>
        <tr id="k1"><td>0 &lt; P &lt; ½M</td><td>2P</td><td>M − 2P</td></tr>
        <tr id="k2"><td>P = ½M</td><td>2P</td><td>0</td></tr>
        <tr id="k3"><td>P &gt; ½M</td><td>2(M − P)</td><td>0</td></tr>
      </tbody>
    </table>
    <p class="result">Таны нөхцөл: <span class="result-val" id="caseVal">—</span></p>
    <p class="result">Карбонат = <span id="cExpr">—</span> = <span class="result-val" id="cVal">—</span> мг/л CaCO<sub>3</sub></p>
    <p class="result">Гидрокарбонат = <span id="hExpr">—</span> = <span class="result-val" id="hVal">—</span> мг/л CaCO<sub>3</sub></p>
    <p class="note">Ион хэлбэрт шилжүүлэх: CO<sub>3</sub><sup>2−</sup> (мг/л) = карбонат × 0.60; HCO<sub>3</sub><sup>−</sup> (мг/л) = гидрокарбонат × 1.22. P &gt; ½M үед гидроксид OH<sup>−</sup> = 2P − M (ундны усанд ховор).</p>
  </div>

  <h3>Үр дүнгийн хүснэгт</h3>
  <table>
    <thead><tr><th>Үзүүлэлт</th><th>Үр дүн</th></tr></thead>
    <tbody>
      <tr><td>Усны дээж (мл)</td><td id="sVs">—</td></tr>
      <tr><td>HCl концентраци (М)</td><td id="sC">—</td></tr>
      <tr><td>Фенолфталейн титрлэлтийн эзлэхүүн V<sub>P</sub> (мл)</td><td id="sVp">—</td></tr>
      <tr><td>Метилоранж хүртэлх нийт эзлэхүүн V<sub>M</sub> (мл)</td><td id="sVm">—</td></tr>
      <tr><td>P шүлтлэг чанар (мг/л CaCO<sub>3</sub>)</td><td id="sP">—</td></tr>
      <tr><td>M шүлтлэг чанар (мг/л CaCO<sub>3</sub>)</td><td id="sM">—</td></tr>
      <tr><td>Карбонат (мг/л CaCO<sub>3</sub>) / CO<sub>3</sub><sup>2−</sup> (мг/л)</td><td id="sCO3">—</td></tr>
      <tr><td>Гидрокарбонат (мг/л CaCO<sub>3</sub>) / HCO<sub>3</sub><sup>−</sup> (мг/л)</td><td id="sHCO3">—</td></tr>
    </tbody>
  </table>

  <h2>6. Аюулгүй ажиллагаа</h2>
  <div class="check"><input type="checkbox" id="s1" data-save><label for="s1">HCl-тэй бээлий, нүдний шил, лабораторийн хувцастай ажилласан.</label></div>
  <div class="check"><input type="checkbox" id="s2" data-save><label for="s2">Этанолтой индикаторыг галаас хол байлгасан.</label></div>
  <div class="check"><input type="checkbox" id="s3" data-save><label for="s3">Бюретка, пипеткийг хэрэглэхийн өмнө уусмалаар нь зайлсан.</label></div>
  <div class="check"><input type="checkbox" id="s4" data-save><label for="s4">Дээжийг шинээр авч, CO<sub>2</sub> алдагдахаас сэргийлсэн.</label></div>
  <div class="check"><input type="checkbox" id="s5" data-save><label for="s5">Титрлэлтийг 2–3 удаа давтаж, дунджийг авсан (давталтын зөрүү ≤ 0.1 мл).</label></div>

  <h2>7. Шалгах асуултууд</h2>
  <div class="q"><label for="q1">1. Фенолфталейнтэй ягаан өнгө үүсэхгүй бол энэ нь юуг илтгэх вэ?</label><textarea id="q1" data-save></textarea></div>
  <div class="q"><label for="q2">2. Фенолфталейныг этанолд, метилоранжийг эхлээд усанд уусгадаг шалтгаан юу вэ?</label><textarea id="q2" data-save></textarea></div>
  <div class="q"><label for="q3">3. 1-р болон 2-р шатны урвалын тэгшитгэлийг бичиж, pH хэрхэн өөрчлөгдөхийг тайлбарлана уу.</label><textarea id="q3" data-save></textarea></div>
  <div class="q"><label for="q4">4. Томьёонд «50000» коэффициент яагаад орсон бэ?</label><textarea id="q4" data-save></textarea></div>
  <div class="q"><label for="q5">5. Дээжийг удаан задгай байлгавал үр дүнд ямар нөлөө үзүүлэх вэ?</label><textarea id="q5" data-save></textarea></div>

  <h2>8. Дүгнэлт</h2>
  <p>Шинжилсэн усны P шүлтлэг <b id="cP">—</b>, M шүлтлэг <b id="cM">—</b> мг/л CaCO<sub>3</sub> байна. Карбонат <b id="cC">—</b>, гидрокарбонат <b id="cH">—</b> мг/л CaCO<sub>3</sub> буюу CO<sub>3</sub><sup>2−</sup> <b id="cC2">—</b>, HCO<sub>3</sub><sup>−</sup> <b id="cH2">—</b> мг/л байна.</p>
  <p class="note">MNS 0900:2018 стандартад гидрокарбонатын зөвшөөрөгдөх хэмжээ тогтоогоогүй. Гидрокарбонат нь усны түр хатуулгийг үүсгэдэг тул нийт хатуулгийн үр дүнтэй харьцуулж дүгнэнэ.</p>
  <div class="field"><label for="concl">Дүгнэлт (аль ион давамгайлж байна, яагаад; хатуулагтай ямар холбоотой вэ)</label><textarea id="concl" data-save style="min-height:96px"></textarea></div>

  <div class="actions">
    <button type="button" id="btnCopy">Хариултыг хуулах</button>
    <button type="button" class="danger" id="btnClear">Цэвэрлэх</button>
    <span class="status" id="status" role="status" aria-live="polite"></span>
  </div>
</main>

<div class="dialog-backdrop" id="dlg" role="dialog" aria-modal="true" aria-labelledby="dlgText">
  <div class="dialog">
    <p id="dlgText">Бөглөсөн бүх мэдээллийг устгах уу?</p>
    <div class="inline-row">
      <button type="button" class="danger" id="dlgYes">Тийм, устгах</button>
      <button type="button" class="secondary" id="dlgNo">Болих</button>
    </div>
  </div>
</div>

<script>
(function(){
  var KEY='worksheet-carbonate-v1';
  var $=function(id){return document.getElementById(id)};
  var dash='—';
  (function(){var tb=$('tA').querySelector('tbody'),h='';
    for(var i=1;i<=3;i++)h+='<tr><td>'+i+'</td>'+
      '<td><input type="number" step="0.05" min="0" id="a0_'+i+'" data-save aria-label="'+i+'-р давталт, эхний заалт"></td>'+
      '<td><input type="number" step="0.05" min="0" id="aP_'+i+'" data-save aria-label="'+i+'-р давталт, P цэгийн заалт"></td>'+
      '<td><input type="number" step="0.05" min="0" id="aM_'+i+'" data-save aria-label="'+i+'-р давталт, M цэгийн заалт"></td>'+
      '<td id="vp'+i+'">—</td><td id="vm'+i+'">—</td></tr>';
    h+='<tr class="avg"><td>Дундаж</td><td>—</td><td>—</td><td>—</td><td id="vpavg">—</td><td id="vmavg">—</td></tr>';tb.innerHTML=h})();

  function num(id){var v=$(id).value.trim().replace(',','.');if(v==='')return null;var n=parseFloat(v);return isFinite(n)?n:null;}
  function f2(n){return n.toFixed(2);} function f1(n){return n.toFixed(1);}
  function msg(id,cls,text){var m=$(id);m.className=cls?'msg '+cls+' show':'msg';m.innerHTML=text||'';}
  function avg(a){return a.reduce(function(x,y){return x+y},0)/a.length;}

  function prep(){
    var C1=num('pC1'),C2=num('pC2'),V2=num('pV2'),V1=num('pV1');
    if(C1===null||C2===null||V2===null||C1<=0||C2<=0||V2<=0||V1===null){msg('msgP');return;}
    var ans=C2*V2/C1;
    if(Math.abs(V1-ans)<=Math.max(0.01,ans*0.01))msg('msgP','ok','Зөв! V<sub>1</sub> = '+C2+' · '+V2+' / '+C1+' = '+f2(ans)+' мл');
    else msg('msgP','warn','Дахин шалгаарай. Зөв хариу: V<sub>1</sub> = '+C2+' · '+V2+' / '+C1+' = '+f2(ans)+' мл');
  }

  function vols(){
    var P=[],M=[],probs=[];
    for(var i=1;i<=3;i++){
      var a=num('a0_'+i),p=num('aP_'+i),m=num('aM_'+i),cp=$('vp'+i),cm=$('vm'+i);
      cp.textContent=dash;cm.textContent=dash;
      if(a===null)continue;
      if(p!==null){if(p<a-1e-9){cp.textContent='алдаа';probs.push(i+'-р давталт: P цэгийн заалт эхний заалтаас бага байж болохгүй');}else{cp.textContent=f2(p-a);P.push(p-a);}}
      if(m!==null){var ref=p!==null?p:a;if(m<ref-1e-9){cm.textContent='алдаа';probs.push(i+'-р давталт: M цэгийн заалт P цэгийн заалтаас бага байж болохгүй');}else if(m-a<=0){cm.textContent='алдаа';probs.push(i+'-р давталт: V<sub>M</sub> 0-ээс их байх ёстой');}else{cm.textContent=f2(m-a);M.push(m-a);}}
    }
    var Vp=P.length?avg(P):null,Vm=M.length?avg(M):null;
    $('vpavg').textContent=Vp!==null?f2(Vp):dash;$('vmavg').textContent=Vm!==null?f2(Vm):dash;
    if(probs.length)msg('msgA','warn',probs.join('<br>'));
    else{var notes=[],bad=false;
      [['V<sub>P</sub>',P],['V<sub>M</sub>',M]].forEach(function(x){if(x[1].length>=2){var sp=Math.max.apply(null,x[1])-Math.min.apply(null,x[1]);if(sp>0.1+1e-9){bad=true;notes.push(x[0]+'-ийн давталтын зөрүү '+f2(sp)+' мл (≤ 0.1 мл байх ёстой)');}else notes.push(x[0]+'-ийн давталтын зөрүү '+f2(sp)+' мл — тохирч байна');}});
      if(notes.length)msg('msgA',bad?'warn':'ok',notes.join('<br>'));else msg('msgA');}
    return {Vp:Vp,Vm:Vm,Pn:P.length,Mn:M.length};
  }

  var RES=null;
  function calc(){
    prep();
    var v=vols(),C=num('C'),Vs=num('V'),ok=C!==null&&C>0&&Vs!==null&&Vs>0;
    var Vp=v.Vp,Vm=v.Vm;
    if(Vp===null&&Vm!==null&&v.Mn>0)Vp=null;
    RES=null;
    ['k0','k1','k2','k3'].forEach(function(k){$(k).style.background='';$(k).style.fontWeight='';});
    if(ok&&Vm!==null){
      var vp=Vp!==null?Vp:0;
      var P=vp*C*50000/Vs,M=Vm*C*50000/Vs;
      $('pExpr').textContent=f2(vp)+' · '+C+' · 50000 / '+Vs;$('pVal').textContent=f1(P);
      $('mExpr').textContent=f2(Vm)+' · '+C+' · 50000 / '+Vs;$('mVal').textContent=f1(M);
      var tol=Math.max(0.05,M*0.005),k,co3,hco3,oh=0,ce,he;
      if(vp>Vm+1e-9){$('caseVal').textContent='алдаа: V_P > V_M';clearOut();return;}
      if(P<=1e-9){k=0;co3=0;hco3=M;ce='0';he='M = '+f1(M);}
      else if(Math.abs(P-M/2)<=tol){k=2;co3=2*P;hco3=0;ce='2 · '+f1(P);he='0';}
      else if(P<M/2){k=1;co3=2*P;hco3=M-2*P;ce='2 · '+f1(P);he=f1(M)+' − 2 · '+f1(P);}
      else{k=3;co3=2*(M-P);hco3=0;oh=2*P-M;ce='2 · ('+f1(M)+' − '+f1(P)+')';he='0';}
      var names=['P = 0','0 < P < ½M','P = ½M','P > ½M'];
      $('caseVal').textContent=names[k]+(oh?' (OH⁻ = '+f1(oh)+')':'');
      $('k'+k).style.background='#fff6d9';$('k'+k).style.fontWeight='bold';
      $('cExpr').textContent=ce;$('cVal').textContent=f1(co3);$('hExpr').textContent=he;$('hVal').textContent=f1(hco3);
      RES={Vp:vp,Vm:Vm,C:C,Vs:Vs,P:P,M:M,co3:co3,hco3:hco3,CO3:co3*0.60,HCO3:hco3*1.22,cs:names[k]};
    } else clearOut();
    $('sVs').textContent=Vs!==null?Vs:dash;$('sC').textContent=C!==null?C:dash;
    $('sVp').textContent=RES?f2(RES.Vp):(Vp!==null?f2(Vp):dash);$('sVm').textContent=Vm!==null?f2(Vm):dash;
    $('sP').textContent=$('cP').textContent=RES?f1(RES.P):dash;
    $('sM').textContent=$('cM').textContent=RES?f1(RES.M):dash;
    $('sCO3').textContent=RES?f1(RES.co3)+' / '+f1(RES.CO3):dash;
    $('sHCO3').textContent=RES?f1(RES.hco3)+' / '+f1(RES.HCO3):dash;
    $('cC').textContent=RES?f1(RES.co3):dash;$('cH').textContent=RES?f1(RES.hco3):dash;
    $('cC2').textContent=RES?f1(RES.CO3):dash;$('cH2').textContent=RES?f1(RES.HCO3):dash;
  }
  function clearOut(){['pExpr','pVal','mExpr','mVal','cExpr','cVal','hExpr','hVal'].forEach(function(id){$(id).textContent=dash;});if($('caseVal').textContent.indexOf('алдаа')<0)$('caseVal').textContent=dash;}

  var fields=function(){return Array.prototype.slice.call(document.querySelectorAll('[data-save]'));};
  var defaults={pC1:'12',pC2:'0.02',pV2:'1000',C:'0.02',V:'100'};
  function save(){var data={};fields().forEach(function(el){data[el.id]=el.type==='checkbox'?el.checked:el.value;});try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){}}
  function load(){var data=null;try{data=JSON.parse(localStorage.getItem(KEY)||'null');}catch(e){}if(!data)return;
    fields().forEach(function(el){if(!(el.id in data))return;if(el.type==='checkbox')el.checked=!!data[el.id];else el.value=data[el.id];});}
  load();calc();
  document.addEventListener('input',function(){calc();save();});
  document.addEventListener('change',function(){calc();save();});

  var statusEl=$('status'),statusTimer;
  function status(t){statusEl.textContent=t;clearTimeout(statusTimer);statusTimer=setTimeout(function(){statusEl.textContent='';},4000);}
  function val(id){var v=$(id).value.trim();return v||dash;}
  function txt(id){return $(id).textContent;}

  function summary(){
    calc();var L=[];
    L.push('АЖЛЫН ХУУДАС: Ундны усны карбонат, гидрокарбонатыг тодорхойлох титрийн арга');
    L.push('Нэр: '+val('name')+' | Анги: '+val('cls')+' | Огноо: '+val('date')+' | Дээж: '+val('sample'));
    L.push('Эх үүсвэр: '+val('source'));L.push('');
    L.push('HCl бэлтгэх: C1 = '+val('pC1')+' М, C2 = '+val('pC2')+' М, V2 = '+val('pV2')+' мл, сурагчийн V1 = '+val('pV1')+' мл');
    L.push('Ажиглалт: фенолфталейн '+val('obs1')+' → '+val('obs2')+'; метилоранж '+val('obs3')+' → '+val('obs4'));
    for(var i=1;i<=3;i++)L.push('  '+i+': '+val('a0_'+i)+' → P '+val('aP_'+i)+' → M '+val('aM_'+i)+' мл; VP = '+txt('vp'+i)+', VM = '+txt('vm'+i));
    L.push('  Дундаж VP = '+txt('vpavg')+' мл, VM = '+txt('vmavg')+' мл');L.push('');
    L.push('C(HCl) = '+val('C')+' М, Vs = '+val('V')+' мл');
    L.push('P = '+txt('pVal')+' мг/л CaCO3; M = '+txt('mVal')+' мг/л CaCO3; нөхцөл: '+txt('caseVal'));
    L.push('Карбонат / CO3(2-) = '+txt('sCO3')+' мг/л');
    L.push('Гидрокарбонат / HCO3(-) = '+txt('sHCO3')+' мг/л');L.push('');
    var qs=['Ягаан өнгө үүсэхгүй бол юуг илтгэх вэ?','Индикаторыг яагаад этанол/усанд бэлтгэдэг вэ?','Урвалын тэгшитгэл, pH-ийн өөрчлөлт','«50000» коэффициент яагаад орсон бэ?','Дээжийг задгай байлгавал юу болох вэ?'];
    qs.forEach(function(q,k){L.push((k+1)+'. '+q);L.push('   '+val('q'+(k+1)));});
    L.push('');L.push('Дүгнэлт: '+val('concl'));
    return L.join('\\n');
  }

  $('btnCopy').addEventListener('click',function(){
    var text=summary();
    function fallback(){var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();
      var ok=false;try{ok=document.execCommand('copy');}catch(e){}document.body.removeChild(ta);status(ok?'Хариулт хуулагдлаа.':'Хуулж чадсангүй.');}
    try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){status('Хариулт хуулагдлаа.');},fallback);}else fallback();}catch(e){fallback();}
  });
  var dlg=$('dlg');
  $('btnClear').addEventListener('click',function(){dlg.classList.add('show');$('dlgNo').focus();});
  $('dlgNo').addEventListener('click',function(){dlg.classList.remove('show');});
  $('dlgYes').addEventListener('click',function(){
    fields().forEach(function(el){if(el.type==='checkbox')el.checked=false;else el.value=(el.id in defaults)?defaults[el.id]:'';});
    try{localStorage.removeItem(KEY);}catch(e){}
    calc();dlg.classList.remove('show');status('Цэвэрлэгдлээ.');
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')dlg.classList.remove('show');});
})();

<\/script>
</body>
</html>
`;export{e as default};
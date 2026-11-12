var e=`<!DOCTYPE html>
<html lang="mn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ажлын хуудас: Ундны усны хатуулаг, кальци, магнийн титрийн шинжилгээ</title>
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
    <h1>Ундны усны хатуулаг, кальци, магнийн титрийн шинжилгээ</h1>
    <div class="sub">Комплексонометрийн арга · Трилон Б (ЭДТА)-аар титрлэх</div>
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
  <p>Усны дээжийн нийт хатуулаг (мг-экв/л), кальци (Ca<sup>2+</sup>) ба магни (Mg<sup>2+</sup>)-ийн агуулалтыг (мг/л) Трилон Б-ээр комплексонометрийн аргаар тодорхойлох.</p>

  <h2>2. Аргын зарчим</h2>
  <p>Трилон Б нь Ca<sup>2+</sup> ба Mg<sup>2+</sup> ионтой 1:1 харьцаагаар бат бөх комплекс үүсгэнэ. Эквивалент цэгийг индикаторын өнгө өөрчлөгдөхөөр тогтооно.</p>
  <div class="formula">Me<sup>2+</sup> + H<sub>2</sub>Y<sup>2−</sup> → MeY<sup>2−</sup> + 2H<sup>+</sup></div>
  <table>
    <thead><tr><th>Тодорхойлолт</th><th>pH</th><th>Индикатор</th><th>Өнгө өөрчлөгдөлт</th></tr></thead>
    <tbody>
      <tr><td>Нийт хатуулаг (Ca + Mg)</td><td>≈ 10 (буфер)</td><td>Хар эриохром Т (ЭХТ)</td><td>дарс улаан → цэнхэр</td></tr>
      <tr><td>Кальци (Ca<sup>2+</sup>)</td><td>12–13 (NaOH)</td><td>Мурексид</td><td>ягаан → нил ягаан</td></tr>
    </tbody>
  </table>
  <p class="note">pH 12–13-д Mg<sup>2+</sup> нь Mg(OH)<sub>2</sub> болж тунадаг тул зөвхөн Ca<sup>2+</sup> титрлэгдэнэ. Магнийг тусад нь титрлэхгүй, зөрүүгээр (V<sub>1</sub> − V<sub>2</sub>) олно.</p>

  <h2>3. Хэрэглэх бодис, багаж</h2>
  <p>Бодис бүрийг бэлэн эсэхийг шалгаад тэмдэглэнэ үү.</p>
  <table>
    <thead><tr><th style="width:36px">№</th><th style="width:26%">Бодис</th><th>Бэлтгэх арга</th><th style="width:70px">Бэлэн</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>0.01 М Трилон Б</td><td>3.72 г Na<sub>2</sub>H<sub>2</sub>Y·2H<sub>2</sub>O-г 1 л нэрмэл усанд уусгана. Стандарт уусмалаар коэффициентийг тогтооно.</td><td><input type="checkbox" id="r1" data-save aria-label="Трилон Б бэлэн"></td></tr>
      <tr><td>2</td><td>Буфер (pH 10)</td><td>67.5 г NH<sub>4</sub>Cl-г 570 мл 25%-ийн аммиакт уусгаж, нэрмэл усаар 1 л болгоно.</td><td><input type="checkbox" id="r2" data-save aria-label="Буфер бэлэн"></td></tr>
      <tr><td>3</td><td>2 М NaOH</td><td>80 г NaOH-г 1 л нэрмэл усанд уусгана.</td><td><input type="checkbox" id="r3" data-save aria-label="NaOH бэлэн"></td></tr>
      <tr><td>4</td><td>Хар эриохром Т (ЭХТ)</td><td>0.5 г ЭХТ-г 100 г NaCl-тай нунтаглан хольно.</td><td><input type="checkbox" id="r4" data-save aria-label="ЭХТ бэлэн"></td></tr>
      <tr><td>5</td><td>Мурексид</td><td>0.2 г мурексидийг 100 г NaCl-тай нунтаглан хольно.</td><td><input type="checkbox" id="r5" data-save aria-label="Мурексид бэлэн"></td></tr>
    </tbody>
  </table>
  <p><b>Багаж:</b> бюретка (25 мл), хэмжих колбо эсвэл пипетка (100 мл), конус колбо (250 мл), пипетка (5 мл, 2 мл), шпатель, штатив.</p>

  <h2>4. А. Нийт хатуулаг (Ca + Mg) тодорхойлох</h2>
  <ol class="steps">
    <li>Дээж 100 мл-ийг конус колбонд хэмжиж авна.</li>
    <li>Буфер уусмал 5 мл нэмнэ (pH ≈ 10).</li>
    <li>ЭХТ индикатор бага зэрэг (≈ 0.1 г) нэмнэ. Уусмал дарс улаан өнгөтэй болно.</li>
    <li>0.01 М Трилон Б-ээр хутгаж байгаад дуслаар титрлэнэ.</li>
    <li>Өнгө цэнхэр болмогц зогсоож, зарцуулсан эзлэхүүн V<sub>1</sub>-ийг тэмдэглэнэ.</li>
  </ol>
  <div class="obs">
    <label for="obsA1">Титрлэхийн өмнөх өнгө:</label><input type="text" id="obsA1" data-save>
    <label for="obsA2">Эквивалент цэгийн өнгө:</label><input type="text" id="obsA2" data-save>
  </div>
  <table id="tA">
    <thead><tr><th>Давталт</th><th>Эхний заалт (мл)</th><th>Эцсийн заалт (мл)</th><th>V<sub>1</sub> (мл)</th></tr></thead>
    <tbody></tbody>
  </table>
  <div class="msg" id="msgA" role="status"></div>

  <h2>5. Б. Кальци (Ca<sup>2+</sup>) тодорхойлох</h2>
  <ol class="steps">
    <li>Дээж 100 мл-ийг конус колбонд хэмжиж авна.</li>
    <li>2 М NaOH 2 мл нэмнэ (pH 12–13).</li>
    <li>Мурексид индикатор бага зэрэг нэмнэ. Уусмал ягаан өнгөтэй болно.</li>
    <li>0.01 М Трилон Б-ээр хутгаж байгаад дуслаар титрлэнэ.</li>
    <li>Өнгө нил ягаан болмогц зогсоож, зарцуулсан эзлэхүүн V<sub>2</sub>-ийг тэмдэглэнэ.</li>
  </ol>
  <div class="obs">
    <label for="obsB1">Титрлэхийн өмнөх өнгө:</label><input type="text" id="obsB1" data-save>
    <label for="obsB2">Эквивалент цэгийн өнгө:</label><input type="text" id="obsB2" data-save>
  </div>
  <table id="tB">
    <thead><tr><th>Давталт</th><th>Эхний заалт (мл)</th><th>Эцсийн заалт (мл)</th><th>V<sub>2</sub> (мл)</th></tr></thead>
    <tbody></tbody>
  </table>
  <div class="msg" id="msgB" role="status"></div>
  <p class="note">Анхаар: NaOH нэмсний дараа шууд титрлэнэ. Удвал мурексидийн өнгө алдагдана.</p>

  <h2>6. Тооцоо</h2>
  <p>Хүснэгтэд утгаа оруулахад дундаж V<sub>1</sub>, V<sub>2</sub> болон үр дүн автоматаар тооцоологдоно. Трилон Б-ийн агуулалт яг 0.01 М биш бол жинхэнэ утгыг оруулна уу.</p>
  <div class="inline-row">
    <label for="C"><b>C (Трилон Б), М:</b></label><input type="number" id="C" step="0.0001" min="0" value="0.01" data-save>
    <label for="V"><b>V (дээж), мл:</b></label><input type="number" id="V" step="1" min="1" value="100" data-save>
  </div>

  <div class="calc">
    <h3>Нийт хатуулаг, мг-экв/л</h3>
    <div class="formula">Х = (2 · C · V<sub>1</sub> · 1000) / V</div>
    <p class="result">Х = <span id="hExpr">—</span> = <span class="result-val" id="hVal">—</span> мг-экв/л</p>
  </div>
  <div class="calc">
    <h3>Кальци, мг/л</h3>
    <div class="formula">Ca<sup>2+</sup> = (C · V<sub>2</sub> · 40.08 · 1000) / V</div>
    <p class="result">Ca<sup>2+</sup> = <span id="caExpr">—</span> = <span class="result-val" id="caVal">—</span> мг/л</p>
  </div>
  <div class="calc">
    <h3>Магни, мг/л</h3>
    <div class="formula">Mg<sup>2+</sup> = (C · (V<sub>1</sub> − V<sub>2</sub>) · 24.31 · 1000) / V</div>
    <p class="result">Mg<sup>2+</sup> = <span id="mgExpr">—</span> = <span class="result-val" id="mgVal">—</span> мг/л</p>
    <div class="msg warn" id="msgMg" role="status">V<sub>2</sub> нь V<sub>1</sub>-ээс их байж болохгүй. Хэмжилтээ шалгана уу.</div>
  </div>

  <h3>Үр дүнгийн хураангуй</h3>
  <table>
    <thead><tr><th>Үзүүлэлт</th><th>Дундаж зарцуулалт (мл)</th><th>Үр дүн</th><th>Нэгж</th></tr></thead>
    <tbody>
      <tr><td>Нийт хатуулаг</td><td>V<sub>1</sub> = <span id="sV1">—</span></td><td id="sH">—</td><td>мг-экв/л</td></tr>
      <tr><td>Кальци (Ca<sup>2+</sup>)</td><td>V<sub>2</sub> = <span id="sV2">—</span></td><td id="sCa">—</td><td>мг/л</td></tr>
      <tr><td>Магни (Mg<sup>2+</sup>)</td><td>V<sub>1</sub> − V<sub>2</sub> = <span id="sDV">—</span></td><td id="sMg">—</td><td>мг/л</td></tr>
    </tbody>
  </table>

  <h2>7. Аюулгүй ажиллагаа</h2>
  <div class="check"><input type="checkbox" id="s1" data-save><label for="s1">Аммиак, NaOH-тай бээлий, нүдний шилтэй ажилласан.</label></div>
  <div class="check"><input type="checkbox" id="s2" data-save><label for="s2">Аммиакийн уусмалтай сорох шүүгээнд ажилласан.</label></div>
  <div class="check"><input type="checkbox" id="s3" data-save><label for="s3">Титрлэлтийг 2–3 удаа давтаж, дунджийг авсан (давталтын зөрүү ≤ 0.1 мл).</label></div>

  <h2>8. Шалгах асуултууд</h2>
  <div class="q"><label for="q1">1. Нийт хатуулгийг тодорхойлохдоо яагаад pH ≈ 10-д ажилладаг вэ?</label><textarea id="q1" data-save></textarea></div>
  <div class="q"><label for="q2">2. Кальци тодорхойлохдоо NaOH нэмэхэд магни ямар болдог вэ?</label><textarea id="q2" data-save></textarea></div>
  <div class="q"><label for="q3">3. ЭХТ болон мурексидийн өнгө эквивалент цэгт яагаад өөрчлөгддөг вэ?</label><textarea id="q3" data-save></textarea></div>
  <div class="q"><label for="q4">4. Хатуулгийн томьёонд «2» коэффициент яагаад орсон бэ?</label><textarea id="q4" data-save></textarea></div>
  <div class="q"><label for="q5">5. Магнийн агуулалтыг тусад нь титрлэхгүйгээр хэрхэн олдог вэ?</label><textarea id="q5" data-save></textarea></div>

  <h2>9. Дүгнэлт</h2>
  <p>Шинжилсэн усны нийт хатуулаг <b id="cH">—</b> мг-экв/л, Ca<sup>2+</sup> <b id="cCa">—</b> мг/л, Mg<sup>2+</sup> <b id="cMg">—</b> мг/л байна.</p>
  <div class="field"><label for="std">Ундны усны стандартын зөвшөөрөх хэмжээ</label><input type="text" id="std" data-save></div>
  <div class="field"><label for="concl">Стандарттай харьцуулсан дүгнэлт</label><textarea id="concl" data-save style="min-height:96px"></textarea></div>

  <div class="actions">
    <button type="button" id="btnCopy">Хариултыг хуулах</button>
    <button type="button" class="secondary" id="btnPrint">Хэвлэх / PDF</button>
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
  var KEY='worksheet-hardness-v1';
  var $=function(id){return document.getElementById(id)};

  function buildTable(id, prefix, vLabel){
    var tb=$(id).querySelector('tbody'), html='';
    for(var i=1;i<=3;i++){
      html+='<tr><td>'+i+'</td>'+
        '<td><input type="number" step="0.01" min="0" id="'+prefix+'s'+i+'" data-save aria-label="'+i+'-р давталт, эхний заалт"></td>'+
        '<td><input type="number" step="0.01" min="0" id="'+prefix+'e'+i+'" data-save aria-label="'+i+'-р давталт, эцсийн заалт"></td>'+
        '<td id="'+prefix+'v'+i+'">—</td></tr>';
    }
    html+='<tr class="avg"><td>Дундаж '+vLabel+'</td><td>—</td><td>—</td><td id="'+prefix+'avg">—</td></tr>';
    tb.innerHTML=html;
  }
  buildTable('tA','a','V<sub>1</sub>');
  buildTable('tB','b','V<sub>2</sub>');

  function num(id){var v=$(id).value.trim().replace(',','.');if(v==='')return null;var n=parseFloat(v);return isFinite(n)?n:null;}
  function fmt(n,d){return n.toFixed(d).replace('.',',').replace(',','.');}

  function rowVolumes(prefix, msgId){
    var vals=[], bad=false;
    for(var i=1;i<=3;i++){
      var s=num(prefix+'s'+i), e=num(prefix+'e'+i), cell=$(prefix+'v'+i);
      if(s!==null && e!==null){
        var v=e-s;
        if(v<=0){cell.textContent='алдаа';bad=true;}
        else{cell.textContent=fmt(v,2);vals.push(v);}
      } else cell.textContent='—';
    }
    var msg=$(msgId); msg.className='msg';
    var avg=null;
    if(vals.length){avg=vals.reduce(function(a,b){return a+b},0)/vals.length;$(prefix+'avg').textContent=fmt(avg,2);}
    else $(prefix+'avg').textContent='—';
    if(bad){msg.className='msg warn show';msg.textContent='Эцсийн заалт эхний заалтаас их байх ёстой. Утгаа шалгана уу.';}
    else if(vals.length>=2){
      var spread=Math.max.apply(null,vals)-Math.min.apply(null,vals);
      if(spread>0.1+1e-9){msg.className='msg warn show';msg.textContent='Давталтуудын зөрүү '+fmt(spread,2)+' мл байна (≤ 0.1 мл байх ёстой). Дахин титрлэхийг зөвлөж байна.';}
      else{msg.className='msg ok show';msg.textContent='Давталтуудын зөрүү '+fmt(spread,2)+' мл. Тохирч байна.';}
    }
    return avg;
  }

  function calc(){
    var V1=rowVolumes('a','msgA'), V2=rowVolumes('b','msgB');
    var C=num('C'), V=num('V');
    var okCV=C!==null&&C>0&&V!==null&&V>0;
    var dash='—';
    var H=null,Ca=null,Mg=null;
    if(okCV&&V1!==null){H=2*C*V1*1000/V;$('hExpr').textContent='(2 · '+C+' · '+fmt(V1,2)+' · 1000) / '+V;$('hVal').textContent=fmt(H,2);}
    else{$('hExpr').textContent=dash;$('hVal').textContent=dash;}
    if(okCV&&V2!==null){Ca=C*V2*40.08*1000/V;$('caExpr').textContent='('+C+' · '+fmt(V2,2)+' · 40.08 · 1000) / '+V;$('caVal').textContent=fmt(Ca,1);}
    else{$('caExpr').textContent=dash;$('caVal').textContent=dash;}
    var mgMsg=$('msgMg');mgMsg.classList.remove('show');
    if(okCV&&V1!==null&&V2!==null){
      var dV=V1-V2;
      if(dV<0){mgMsg.classList.add('show');$('mgExpr').textContent=dash;$('mgVal').textContent=dash;}
      else{Mg=C*dV*24.31*1000/V;$('mgExpr').textContent='('+C+' · ('+fmt(V1,2)+' − '+fmt(V2,2)+') · 24.31 · 1000) / '+V;$('mgVal').textContent=fmt(Mg,1);}
      $('sDV').textContent=fmt(dV,2);
    } else {$('mgExpr').textContent=dash;$('mgVal').textContent=dash;$('sDV').textContent=dash;}
    $('sV1').textContent=V1!==null?fmt(V1,2):dash;
    $('sV2').textContent=V2!==null?fmt(V2,2):dash;
    $('sH').textContent=$('cH').textContent=H!==null?fmt(H,2):dash;
    $('sCa').textContent=$('cCa').textContent=Ca!==null?fmt(Ca,1):dash;
    $('sMg').textContent=$('cMg').textContent=Mg!==null?fmt(Mg,1):dash;
  }

  var fields=function(){return Array.prototype.slice.call(document.querySelectorAll('[data-save]'));};
  function save(){
    var data={};fields().forEach(function(el){data[el.id]=el.type==='checkbox'?el.checked:el.value;});
    try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){}
  }
  function load(){
    var data=null;try{data=JSON.parse(localStorage.getItem(KEY)||'null');}catch(e){}
    if(!data)return;
    fields().forEach(function(el){if(!(el.id in data))return;if(el.type==='checkbox')el.checked=!!data[el.id];else el.value=data[el.id];});
  }
  load();calc();
  document.addEventListener('input',function(){calc();save();});
  document.addEventListener('change',function(){calc();save();});

  var statusEl=$('status'),statusTimer;
  function status(t){statusEl.textContent=t;clearTimeout(statusTimer);statusTimer=setTimeout(function(){statusEl.textContent='';},4000);}

  function val(id){var v=$(id).value.trim();return v||'—';}
  function summary(){
    calc();
    var L=[];
    L.push('АЖЛЫН ХУУДАС: Ундны усны хатуулаг, кальци, магнийн титрийн шинжилгээ');
    L.push('Нэр: '+val('name')+' | Анги: '+val('cls')+' | Огноо: '+val('date')+' | Дээж: '+val('sample'));
    L.push('Эх үүсвэр: '+val('source'));
    L.push('');
    L.push('А. Нийт хатуулаг: өнгө '+val('obsA1')+' → '+val('obsA2'));
    for(var i=1;i<=3;i++)L.push('  '+i+': '+val('as'+i)+' → '+val('ae'+i)+' мл, V1 = '+$('av'+i).textContent);
    L.push('  Дундаж V1 = '+$('aavg').textContent+' мл');
    L.push('Б. Кальци: өнгө '+val('obsB1')+' → '+val('obsB2'));
    for(var j=1;j<=3;j++)L.push('  '+j+': '+val('bs'+j)+' → '+val('be'+j)+' мл, V2 = '+$('bv'+j).textContent);
    L.push('  Дундаж V2 = '+$('bavg').textContent+' мл');
    L.push('');
    L.push('C = '+val('C')+' М, V = '+val('V')+' мл');
    L.push('Нийт хатуулаг = '+$('sH').textContent+' мг-экв/л');
    L.push('Ca2+ = '+$('sCa').textContent+' мг/л');
    L.push('Mg2+ = '+$('sMg').textContent+' мг/л');
    L.push('');
    var qs=['Яагаад pH ≈ 10-д ажилладаг вэ?','NaOH нэмэхэд магни ямар болдог вэ?','Индикаторын өнгө яагаад өөрчлөгддөг вэ?','«2» коэффициент яагаад орсон бэ?','Магнийг хэрхэн олдог вэ?'];
    qs.forEach(function(q,k){L.push((k+1)+'. '+q);L.push('   '+val('q'+(k+1)));});
    L.push('');
    L.push('Стандартын хэмжээ: '+val('std'));
    L.push('Дүгнэлт: '+val('concl'));
    return L.join('\\n');
  }

  $('btnCopy').addEventListener('click',function(){
    var text=summary();
    function fallback(){
      var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();
      var ok=false;try{ok=document.execCommand('copy');}catch(e){}
      document.body.removeChild(ta);status(ok?'Хариулт хуулагдлаа.':'Хуулж чадсангүй. Хэвлэх товчийг ашиглана уу.');
    }
    try{
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){status('Хариулт хуулагдлаа.');},fallback);}
      else fallback();
    }catch(e){fallback();}
  });
  $('btnPrint').addEventListener('click',function(){
    try{window.print();}catch(e){status('Энэ орчинд хэвлэх боломжгүй. Вэбсайт дээрээ нээж хэвлэнэ үү.');}
  });
  var dlg=$('dlg');
  $('btnClear').addEventListener('click',function(){dlg.classList.add('show');$('dlgNo').focus();});
  $('dlgNo').addEventListener('click',function(){dlg.classList.remove('show');});
  $('dlgYes').addEventListener('click',function(){
    fields().forEach(function(el){if(el.type==='checkbox')el.checked=false;else if(el.id==='C')el.value='0.01';else if(el.id==='V')el.value='100';else el.value='';});
    try{localStorage.removeItem(KEY);}catch(e){}
    calc();dlg.classList.remove('show');status('Цэвэрлэгдлээ.');
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')dlg.classList.remove('show');});
})();
<\/script>
</body>
</html>
`;export{e as default};
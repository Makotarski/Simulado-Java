(function () {
  "use strict";
  const app = document.getElementById("app");
  const cheatScreen = document.getElementById("cheat-screen");
  const questions = window.QUESTIONS;
  let state = {screen:"start",name:"",classroom:"",index:0,answers:[],selected:null,start:0,end:0,blocked:false};

  const esc = value => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const upperName = () => state.name.trim() && state.name.trim() === state.name.trim().toUpperCase();
  const correctByLevel = level => state.answers.reduce((sum,answer,i) => sum + (questions[i].level === level && answer === questions[i].a ? 1 : 0),0);
  const correctTotal = () => [1,2,3].reduce((sum,l) => sum + correctByLevel(l),0);

  function header() {
    return `<header class="topbar"><div class="logo">T</div><div><strong>Simulado TOFAS</strong><span>1º ano • Pensamento computacional</span></div>${state.screen === "quiz" ? `<div class="counter">${state.index+1}<small>/30</small></div>`:""}</header>`;
  }
  function shell(content) { app.innerHTML = `${header()}<section class="workspace">${content}</section><footer>TOFAS • 1º ANO • 2026</footer>`; }

  function renderStart() {
    shell(`<div class="panel start"><div class="eyebrow">AVALIAÇÃO INDIVIDUAL</div><h1>Mostre o que você sabe.<br><em>Sem atalhos.</em></h1><p class="lead">São 30 questões em três níveis. Leia tudo com atenção: até a forma de escrever o nome pode valer ponto.</p><form id="start-form"><div class="fields"><label>NOME COMPLETO — EM LETRAS MAIÚSCULAS<input id="student-name" required autocomplete="off" placeholder="EX.: MARIA DA SILVA"></label><label>TURMA<input id="student-class" required autocomplete="off" placeholder="EX.: 1º A"></label></div><button class="primary" type="submit">Começar simulado <b>→</b></button></form><p class="warning">Ao iniciar, sair da tela ou usar o botão direito bloqueará a tentativa.</p></div>`);
    document.getElementById("start-form").addEventListener("submit", e => {
      e.preventDefault(); state.name=document.getElementById("student-name").value.trim(); state.classroom=document.getElementById("student-class").value.trim();
      if(!state.name||!state.classroom)return; state.start=Date.now(); state.screen="intro"; render();
    });
  }

  function renderIntro() {
    const level=questions[state.index].level;
    const text=level===1?"Começaremos pelos conceitos fundamentais dos projetos estudados.":level===2?"Agora você interpretará comandos e situações práticas.":"Desafio final: aplique lógica, coordenadas e Pitágoras.";
    shell(`<div class="panel intro"><div class="level-badge">${level}</div><div class="eyebrow">${level===1?"TUDO PRONTO":"PRÓXIMA ETAPA"}</div><h1>Nível ${level}</h1><p>${text}</p><button id="continue" class="primary">${level===1?"Iniciar nível 1":"Continuar"} <b>→</b></button></div>`);
    document.getElementById("continue").onclick=()=>{state.screen="quiz";render();};
  }

  function renderQuiz() {
    const item=questions[state.index], percent=Math.round(((state.index+1)/30)*100);
    shell(`<div class="quiz"><aside><span>NÍVEL ${item.level}</span><strong>${percent}%</strong><div class="bar"><i style="width:${percent}%"></i></div><p>${esc(item.topic)}</p></aside><div class="panel question"><div class="q-number">QUESTÃO ${state.index+1}</div><h2>${esc(item.q)}</h2><div class="answers">${item.o.map((o,i)=>`<button class="answer" data-answer="${i}"><b>${String.fromCharCode(65+i)}</b><span>${esc(o)}</span></button>`).join("")}</div><button id="next" class="primary next" disabled>${state.index===29?"Finalizar":"Confirmar e avançar"} <b>→</b></button></div></div>`);
    document.querySelectorAll(".answer").forEach(btn=>btn.onclick=()=>{state.selected=Number(btn.dataset.answer);document.querySelectorAll(".answer").forEach(x=>x.classList.remove("chosen"));btn.classList.add("chosen");document.getElementById("next").disabled=false;});
    document.getElementById("next").onclick=advance;
  }

  function advance() {
    state.answers.push(state.selected); state.selected=null;
    if(state.index===29){state.end=Date.now();state.screen="result";sendResult(false);render();return;}
    const currentLevel=questions[state.index].level; state.index++;
    state.screen=questions[state.index].level!==currentLevel?"intro":"quiz"; render();
  }

  function renderResult() {
    const bonus=upperName()?1:0,total=correctTotal()+bonus,duration=Math.max(1,Math.round((state.end-state.start)/1000));
    shell(`<div class="panel result"><div class="trophy">🏆</div><div class="eyebrow">SIMULADO CONCLUÍDO</div><h1>${total}<small>/ 31 PONTOS</small></h1><p class="student">${esc(state.name)} • ${esc(state.classroom)}</p><div class="scores">${[1,2,3].map(l=>`<div><span>Nível ${l}</span><strong>${correctByLevel(l)}/10</strong></div>`).join("")}<div class="${bonus?"bonus":"missed"}"><span>Regra do nome</span><strong>${bonus?"+1":"0"}</strong></div></div><p class="duration">Tempo: ${duration} segundos</p><div class="actions"><button id="print">Imprimir resultado</button><button id="restart">Nova tentativa</button></div></div>`);
    document.getElementById("print").onclick=()=>window.print(); document.getElementById("restart").onclick=()=>location.reload();
  }

  function resultPayload(cheated,reason) {
    const duration=state.start?Math.max(1,Math.round(((state.end||Date.now())-state.start)/1000)):0;
    return {nome:state.name,turma:state.classroom,regraNome:upperName()?"Cumpriu":"Não cumpriu",nivel1:correctByLevel(1),nivel2:correctByLevel(2),nivel3:correctByLevel(3),acertosQuestoes:correctTotal(),pontuacaoTotal:correctTotal()+(upperName()?1:0),duracaoSegundos:duration,trapaceou:cheated?"SIM":"NÃO",motivoBloqueio:reason||"",respostas:state.answers};
  }
  function sendResult(cheated,reason) {
    const url=window.RESULTS_URL;
    if(!url||url.includes("COLE_AQUI"))return;
    fetch(url,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(resultPayload(cheated,reason))}).catch(()=>{});
  }
  function cheat(reason) {
    if(state.blocked||!(state.screen==="quiz"||state.screen==="intro"))return;
    state.blocked=true;state.end=Date.now();sendResult(true,reason);cheatScreen.classList.add("show");document.body.classList.add("locked");
  }

  document.addEventListener("contextmenu",e=>{if(state.screen==="quiz"||state.screen==="intro"){e.preventDefault();cheat("Botão direito do mouse");}});
  document.addEventListener("visibilitychange",()=>{if(document.hidden)cheat("Saiu da aba ou minimizou a janela");});
  window.addEventListener("blur",()=>{window.setTimeout(()=>{if(!document.hasFocus())cheat("Saiu da tela do simulado");},120);});
  window.addEventListener("beforeunload",e=>{if(!state.blocked&&(state.screen==="quiz"||state.screen==="intro")){e.preventDefault();e.returnValue="";}});

  function render(){if(state.screen==="start")renderStart();else if(state.screen==="intro")renderIntro();else if(state.screen==="quiz")renderQuiz();else renderResult();}
  render();
})();

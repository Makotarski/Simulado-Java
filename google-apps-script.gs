function doPost(e){
  const lock=LockService.getScriptLock(); lock.waitLock(10000);
  try{
    const ss=SpreadsheetApp.getActiveSpreadsheet();
    const sh=ss.getSheetByName('Resultados')||ss.insertSheet('Resultados');
    if(sh.getLastRow()===0){
      sh.appendRow(['Data e hora','Nome','Turma','Regra do nome','Nível 1','Nível 2','Nível 3','Acertos','Pontuação total','Duração (s)','Trapaceou','Motivo do bloqueio','Respostas completas']);
      sh.getRange(1,1,1,13).setFontWeight('bold').setBackground('#10233f').setFontColor('#ffffff'); sh.setFrozenRows(1);
    }
    const d=JSON.parse(e.postData.contents);
    sh.appendRow([new Date(),d.nome,d.turma,d.regraNome,d.nivel1,d.nivel2,d.nivel3,d.acertosQuestoes,d.pontuacaoTotal,d.duracaoSegundos,d.trapaceou,d.motivoBloqueio,JSON.stringify(d.respostas)]);
    sh.autoResizeColumns(1,12);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  }finally{lock.releaseLock();}
}
function doGet(){return ContentService.createTextOutput('Coletor do Simulado TOFAS ativo.');}

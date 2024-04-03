//勞保費: 員工=級距薪資*0.12*0.2; 雇主=級距薪資*0.12*0.7

//健保費: 員工=級距薪資*0.0517*0.3*人數; 雇主=級距薪資*0.0517*0.6*1.57

//勞工退休金: 雇主:級距薪資*0.06;

function getSelectedOption() {
    // 获取select元素
    var selectElement = document.getElementById("mySelect");

    // 获取选定项的索引
    var selectedIndex = selectElement.selectedIndex;

    // 如果没有选定项，默认值为1
    var selectedValue = 1;
    if (selectedIndex !== -1) {
        // 获取选定项的值
        selectedValue = parseInt(selectElement.options[selectedIndex].value);
    }


      // 输出选定内容
      console.log("选定项的值为: " + selectedValue);

      getNumber(selectedValue);
}


function getNumber(selectedValue=1) {
    // 獲取輸入的數字
    var userInput = parseInt(document.getElementById("numberInput").value);
    

    var LBcal1 = "";
    var LBcal2 = "";

    var JBcal1 = "";
    var JBcal2 = "";

    var TScal="";

    var Total1 = "";

    var Total2 = "";

    var Final1 = "";
    var Final2 = "";


    if (userInput <= 27470) {
        LBcal1 = Math.floor(27470*0.12*0.2).toString();
        LBcal2 = Math.floor(27470*0.12*0.7).toString();

        JBcal1 = Math.floor(27470*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(27470*0.0517*0.6*1.57).toString();

        TScal = Math.floor(27470*0.06).toString();


    } else if (27471 <= userInput && userInput <= 27600) {
        LBcal1 = Math.floor(27600*0.12*0.2).toString();
        LBcal2 = Math.floor(27600*0.12*0.7).toString();

        JBcal1 = Math.floor(27600*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(27600*0.0517*0.6*1.57).toString();
        TScal = Math.floor(27600*0.06).toString();
    } else if (27601 <= userInput && userInput <= 28800) {
        LBcal1 = Math.floor(28800*0.12*0.2).toString();
        LBcal2 = Math.floor(28800*0.12*0.7).toString();

        JBcal1 = Math.floor(28800*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(28800*0.0517*0.6*1.57).toString();
        TScal = Math.floor(28800*0.06).toString();
    } else if (28801 <= userInput && userInput <= 31800) {
        LBcal1 = Math.floor(31800*0.12*0.2).toString();
        LBcal2 = Math.floor(31800*0.12*0.7).toString();

        JBcal1 = Math.floor(31800*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(31800*0.0517*0.6*1.57).toString();
        TScal = Math.floor(31800*0.06).toString();
    } else if (31801 <= userInput && userInput <= 33300) {
        LBcal1 = Math.floor(33300*0.12*0.2).toString();
        LBcal2 = Math.floor(33300*0.12*0.7).toString();

        JBcal1 = Math.floor(33300*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(33300*0.0517*0.6*1.57).toString();
        TScal = Math.floor(33300*0.06).toString();
    } else if (33301 <= userInput && userInput <= 34800) {
        LBcal1 = Math.floor(34800*0.12*0.2).toString();
        LBcal2 = Math.floor(34800*0.12*0.7).toString();

        JBcal1 = Math.floor(34800*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(34800*0.0517*0.6*1.57).toString();
        TScal = Math.floor(34800*0.06).toString();
    } else if (34801 <= userInput && userInput <= 36300) {
        LBcal1 = Math.floor(36300*0.12*0.2).toString();
        LBcal2 = Math.floor(36300*0.12*0.7).toString();

        JBcal1 = Math.floor(36300*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(36300*0.0517*0.6*1.57).toString();
        TScal = Math.floor(36300*0.06).toString();
    } else if (36301 <= userInput && userInput <= 38200) {
        LBcal1 = Math.floor(38200*0.12*0.2).toString();
        LBcal2 = Math.floor(38200*0.12*0.7).toString();

        JBcal1 = Math.floor(38200*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(38200*0.0517*0.6*1.57).toString();
        TScal = Math.floor(38200*0.06).toString();
    } else if (38201 <= userInput && userInput <= 40100) {
        LBcal1 = Math.floor(40100*0.12*0.2).toString();
        LBcal2 = Math.floor(40100*0.12*0.7).toString();

        JBcal1 = Math.floor(40100*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(40100*0.0517*0.6*1.57).toString();
        TScal = Math.floor(40100*0.06).toString();
    } else if (40101 <= userInput && userInput <= 42000) {
        LBcal1 = Math.floor(42000*0.12*0.2).toString();
        LBcal2 = Math.floor(42000*0.12*0.7).toString();

        JBcal1 = Math.floor(42000*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(42000*0.0517*0.6*1.57).toString();
        TScal = Math.floor(42000*0.06).toString();
    } else if (42001 <= userInput && userInput <= 43900) {
        LBcal1 = Math.floor(43900*0.12*0.2).toString();
        LBcal2 = Math.floor(43900*0.12*0.7).toString();

        JBcal1 = Math.floor(43900*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(43900*0.0517*0.6*1.57).toString();
        TScal = Math.floor(43900*0.06).toString();
    } else if (43901 <= userInput) {
        LBcal1 = Math.floor(45800*0.12*0.2).toString();
        LBcal2 = Math.floor(45800*0.12*0.7).toString();

        JBcal1 = Math.floor(45800*0.0517*0.3*selectedValue).toString();
        JBcal2 = Math.floor(45800*0.0517*0.6*1.57).toString();
        TScal = Math.floor(45800*0.06).toString();
    } else {
        LBcal1 = "0";
    }

    Total1 = (parseInt(LBcal1) + parseInt(JBcal1)).toString();
    Total2 = (parseInt(LBcal2) + parseInt(JBcal2)+parseInt(TScal)).toString();

    Final1 = (userInput-(parseInt(LBcal1) + parseInt(JBcal1))).toString();
    Final2 = (userInput+(parseInt(LBcal2) + parseInt(JBcal2)+parseInt(TScal))).toString();

     // 将结果填充到指定的单元格中
     var LB1 = document.getElementById("resultLB1");
     LB1.innerText = LBcal1;
     var LB2 = document.getElementById("resultLB2");
     LB2.innerText = LBcal2;


     var JB1 = document.getElementById("resultJB1");
     JB1.innerText = JBcal1;
     var JB2 = document.getElementById("resultJB2");
     JB2.innerText = JBcal2;

     var TS = document.getElementById("resultTS");
     TS.innerText = TScal;
     
     var TO1 = document.getElementById("resultTO1");
     TO1.innerText = Total1;

     var TO2 = document.getElementById("resultTO2");
     TO2.innerText = Total2;

     var F1 = document.getElementById("resultF1");
     F1.innerText = Final1;

     var F2 = document.getElementById("resultF2");
     F2.innerText = Final2;
}

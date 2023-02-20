 const bgColor = document.querySelectorAll('.bgColorBtn');
 const bgBodyColor = document.getElementById('body');
 for (let btn of bgColor) {
     btn.addEventListener('click', () => {
         const btnColor = btn.innerText;
         switch (btnColor) {
             case 'Red':
                 bgBodyColor.style.backgroundColor = 'red';
                 break;
             case 'Blue':
                 bgBodyColor.style.backgroundColor = 'blue';
                 break;
             case 'White':
                 bgBodyColor.style.backgroundColor = 'white';
                 break;
             case 'Black':
                 bgBodyColor.style.backgroundColor = 'black';
                 break;
             case 'Green':
                 bgBodyColor.style.backgroundColor = 'green';
                 break;
             default:
                 bgBodyColor.style.backgroundColor = 'white';
         }
     })
 }

 const fontColorBtn = document.querySelectorAll('.colorBtn');
 const fontColor = document.getElementById('section');
 const headerColor = document.getElementById('header');
 for (let color of fontColorBtn) {
     color.addEventListener('click', () => {
         const btnColor = color.innerText;
         switch (btnColor) {
             case 'Black':
                 fontColor.style.color = 'black';
                 headerColor.style.color = 'black';
                 break;
             case 'Red':
                 fontColor.style.color = 'red';
                 headerColor.style.color = 'red';
                 break;
             case 'White':
                 fontColor.style.color = 'white';
                 headerColor.style.color = 'white';
                 break;
             default:
                 fontColor.style.color = 'black';
                 headerColor.style.color = 'black';

         }

     })
 }

 const fontSizeBtn = document.querySelectorAll('.fontSizeBtn');
 const fontSize = document.getElementById('paragraph');
 for (let font of fontSizeBtn) {
     font.addEventListener('click', () => {
         const fontSizeValue = font.innerText;
         switch (fontSizeValue) {
             case '8pt':
                 fontSize.style.fontSize = '8pt';
                 break;
             case '10pt':
                 fontSize.style.fontSize = '10pt';
                 break;
             case '12pt':
                 fontSize.style.fontSize = '12pt';
                 break;
             case '14pt':
                 fontSize.style.fontSize = '14pt';
                 break;
             case '20pt':
                 fontSize.style.fontSize = '20pt';
                 break;
             default:
                 fontSize.style.fontSize = '20pt';
         }
     })
 }

 const lineSpacingBtn = document.querySelectorAll('.lineSpacingBtn');
 const lineSpacing = document.getElementById('paragraph');
 for (let line of lineSpacingBtn) {
     line.addEventListener('click', () => {
         const lineSpacingValue = line.innerText;
         switch (lineSpacingValue) {
             case '1':
                 lineSpacing.style.lineHeight = '1';
                 break;
             case 'Normal':
                 lineSpacing.style.lineHeight = 'Normal';
                 break;
             case '1.5':
                 lineSpacing.style.lineHeight = '1.5';
                 break;
             case '2.0':
                 lineSpacing.style.lineHeight = '2.0';
                 break;
             case '3.0':
                 lineSpacing.style.lineHeight = '3.0';
                 break;
             default:
                 lineSpacing.style.lineHeight = 'Normal';
         }
     })
 }

 const fontFamilyBtn = document.querySelectorAll('.fontFamilyBtn');
 const fontFamily = document.getElementById('paragraph');
 for (let font of fontFamilyBtn) {
     font.addEventListener('click', () => {
         const fontFamilyValue = font.innerText;
         switch (fontFamilyValue) {
             case 'Arial':
                 fontFamily.style.fontFamily = 'Arial';
                 break;
             case 'Times New Roman':
                 fontFamily.style.fontFamily = 'Times New Roman';
                 break;
         }
     })
 }
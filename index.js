import EditorJS from '@editorjs/editorjs'; 
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 


// const LinkTool = require('@editorjs/link');


// Save TextEditor Data
document.getElementById("saveButton").onclick = function() {
  editor.save().then((outputData) => {
    console.log('Article data: ', outputData)
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
};


// Show/Hide CV
// const box = document.getElementById('cvblock');
// const btn = document.getElementById('showCVbutton');

// btn.addEventListener('click', function handleClick() {
//   if (box.style.display === 'none') {
//     box.style.display = 'block';
//     btn.textContent = 'Hide CV Template';
//   } else {
//     box.style.display = 'none';
//     btn.textContent = 'Show CV Template';
//   }
// });

// Show/Hide CV Inputs
// const boxIn = document.getElementById('inputcvblock');
// const btnIn = document.getElementById('showInputCVbutton');

// btnIn.addEventListener('click', function handleClick() {
//   if (boxIn.style.display === 'none') {
//     boxIn.style.display = 'block';
//     btnIn.textContent = 'Hide CV Input Block';
//   } else {
//     boxIn.style.display = 'none';
//     btnIn.textContent = 'Show CV Input Block';
//   }
// });


const editor = new EditorJS({ 
  /** 
   * Id of Element that should contain the Editor 
   */ 
  holder: 'editorjs', 

  /** 
   * Available Tools list. 
   * Pass Tool's class or Settings object for each Tool you want to use 
   */ 
  tools: { 
    header: {
      class: Header, 
      inlineToolbar: ['link'] 
    }, 
    list: { 
      class: List, 
      inlineToolbar: true 
    },
    // linkTool: {
    //   class: LinkTool,
    //   config: {
    //     endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
    //   }
    // },
  }, 
});
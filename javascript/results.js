document.addEventListener('DOMContentLoaded', () => {

    let re_exam_button = document.querySelector("#re_exam_button");
    
    const textarea = document.querySelector("#textbox");
    const results = localStorage.getItem('results');
    let page = localStorage.getItem('page');
    console.log(results); // Output: "myValue"
    console.log(page);
  
    if (textarea !== null && results !== null) {
      textarea.innerHTML = results;
    }
    re_exam_button.addEventListener("click", (event)=>{
        event.preventDefault();
        
        window.location.href= page


    })

  });

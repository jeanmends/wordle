/*

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            
            img.onload = () => {
                //URL.revokeObjectURL(img.src);  // no longer needed, free memory
               // URL.revokeObjectURL(localStorage.getItem("bg-image"));
            }
            
            localStorage.setItem("bg-image", URL.createObjectURL(this.files[0]));
            
            
            document.body.style.backgroundImage = `url("${URL.createObjectURL(this.files[0])}")`; // set src to blob url
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = 'cover';
           
        }
    });
  });

  */
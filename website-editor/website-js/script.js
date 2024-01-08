function changeMode(themeobj) {
   if(themeobj.dataset.mode =="light") {
       document.documentElement.setAttribute("data-theme", "dark");
       themeobj.dataset.mode = "dark";
   } else {
       document.documentElement.setAttribute("data-theme", "light");
       themeobj.dataset.mode = "light";


   }
}

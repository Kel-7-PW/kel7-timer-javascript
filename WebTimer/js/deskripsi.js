      var storedItem = localStorage.getItem("storedItem");

        function handleSave(){
            var item = document.getElementsByName("inputTitle")[0].value;
            localStorage.setItem("storedItem", item);
            document.getElementsByName("title")[0].innerHTML = item;
        }

        function get(){
            localStorage.getItem("storedItem");
            document.getElementsByName("title")[0].innerHTML = storedItem ;
        } 
document.getElementById('button').addEventListener('click', function() {
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('senha').value;
    var data = {
        username: username,
        password: password
    };
    

    var textFile = readTextFile("credenciais.txt");
    var textUser = textToUser(textFile);

    if(data.username == textUser.username && data.password == textUser.password){
        alert("Login realizado com sucesso!");
    }else{
        alert("Login ou senha incorretos!");
    }
});

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

function textToUser(text){
    var user = text.split(" ")[1];
    var password = text.split(" ")[1];
    var data = {
        username: user,
        password: password
    }

    return data;
}
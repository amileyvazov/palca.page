function addPlayer(){
    fetch("https://646b5a2d7d3c1cae4ce3adf5.mockapi.io/api/JSON/player")
    .then(res=>{
        console.log(res)
        if (res.ok) {
            return res.json();
        }
        else{
            window.location.href = "adsecitem.html"
        }  
    })
    .then(data => {
        console.log(data)
        document.querySelector('#fullName').value = data.name;
        document.querySelector('#avatar').value = data.img;
        document.querySelector('#text').value = data.text;
        document.querySelector("#episode").value=data.episode
    })
    .catch(err=>console.log(err))

    const btn = document.querySelector('button');
    btn.addEventListener('click', function(){
        fetch("https://646b5a2d7d3c1cae4ce3adf5.mockapi.io/api/JSON/player", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                fullName : document.querySelector('#fullName').value,
                avatar: document.querySelector('#avatar').value,
                text: document.querySelector('#text').text,
                episode:document.querySelector("#episo  de").value
            })
        })
        .then(res=>{
            console.log(res)
            if (res.ok) {
                window.location.href = "addsecitem.html"
            }
            else{
                errorAlert('Bir xəta baş verdi!')
            }
        })
        .catch(()=>errorAlert('Bir xəta baş verdi!'))
    })
}
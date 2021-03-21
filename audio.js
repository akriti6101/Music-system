const a=['music1','music2','music3','music4','music5']
const con=document.getElementById('container')
a.forEach(element =>
    {
              const btn= document.createElement('button');
              btn.innerHTML=element
              btn.classList.add('btn')
           

              btn.addEventListener('click',()=>{
                 stop()
                  document.getElementById(element).play()
              })
              con.appendChild(btn)
              

    })
    function stop()
    {
        a.forEach(element=>
            {
                    document.getElementById(element).pause()
            })
    }

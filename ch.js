let ele_c=document.getElementById("cel");
let ele_f=document.getElementById("fah");

ele_c.addEventListener('change',function()
{
    let c=this.value;
    let d=(c*5)/9 +32;
    if(!Number.isInteger(d))
      d=d.toFixed(4);
    ele_f.value=d;
});

ele_f.addEventListener('change',function()
{
    let c=this.value;
    let d=((c-32)*9)/5;
    if(!Number.isInteger(d))
    d=d.toFixed(4);
    ele_c.value=d;
});
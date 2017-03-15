function getFirstSelector(selector)
{
  const k=document.querySelector(selector);
  return k;
}

function nestedTarget()
{
  const j=document.getElementById('nested').querySelector('div.target')
  return j;
}

function deepestChild()
{
  var str="";
  var l="div";
  while (str === "")
  {
    str=document.getElementById('grand-node').querySelector(l)
    l+=" div";
  }
  return str;
}

function increaseRankBy(n)
{
  var h=document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (var i=0; i<h.length; i++)
  {
    h[i].innerHTML=parseInt(h[i].innerHTML)+n;
  }
  return h;
}
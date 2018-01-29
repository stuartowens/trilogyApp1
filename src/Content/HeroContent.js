const heroContent = () => {
  var heroIds = [
    'Hero_code',
    'Hero_data'
  ]
  var heroContent = [
    {
      h: 'CODING',
      p:'Coding Boot Camp equips students skills for full-stack web development through <br /> dynamic, in-person classes.'
    },
    {
      h: 'DATA ANALYTICS',
      p: 'Data Boot Camp equips students with the key skills for full-stack web development <br /> through dynamic, in-person classes.'
    }
  ]
  var heroDiv = document.getElementById("Hero_code");
  var topContentH = document.getElementById("Top-Content-H");
  var bottomContentH = document.getElementById("Bottom-Content-H");
  var topContentP = document.getElementById("Top-Content-P");
  var bottomContentP = document.getElementById("Bottom-Content-P");

  var i = 0;
  setInterval(function() {
    heroDiv.id = heroIds[i];
    topContentH.innerHTML = bottomContentH.innerHTML;
    topContentP.innerHTML = bottomContentP.innerHTML;
    bottomContentH.innerHTML = heroContent[i].h;
    bottomContentP.innerHTML = heroContent[i].p;
    i = i + 1;
    if (i === heroIds.length) {
      i =  0;
    }
  }, 5000);
}

export default heroContent;

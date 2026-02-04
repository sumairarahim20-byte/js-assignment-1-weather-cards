var weather = prompt(`
    Select weather:
    1-Sunny 
    2-Rainy 
    3-Cloudy 
    4-Windy 
    5-Winter 
    6-Summer  
    7-Stormy  
    8-Snowy 
    9-Autumn  
    10-Spring  
`).toLowerCase();

if(weather === "sunny"){
document.writeln(`
   <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: cornsilk ;"><div class="card  d-flex  " style="width: 18rem;align-items-center; justify-content: center;">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXRlaHF2cnI0aGU1eG5qaTR2aWx5NW0waHU0bHh6Z24zNmh2aWIwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lI8YNZc734UH6/giphy.gif" class="card-img-top" alt="sunny gif image">
  <div class="card-body">
    <h5 class="card-title">Sunny Weather ☀️</h5>
    <p class="card-text">Sunny weather is bright and hot. <br>
The sun shines in the sky. <br>
We feel warm and happy.</p>
    
  </div>
  `)
} else if (weather === "Rainy"){
    document.writeln(` 
      <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden; background-color: rgb(96, 185, 210);">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/cf/9c/fc/cf9cfc6cdb32f5c81853eff7c7263eb3.gif" class="card-img-top" alt="rainy fig image">
  <div class="card-body">
    <h5 class="card-title">Rainy Weather 🌧️</h5>
    <p class="card-text">Rainy weather brings rain from the clouds. <br>
The weather becomes cool. <br>
We use umbrellas and raincoats.</p>
    
  </div>
</div>
</div>
     `)
} else if (weather === "Cloudy"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: darkgray;">
<div class="card" style="width: 18rem;">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUycDhoMnVhM3ZnbWF4bmQ3ZjV6YmJvdDMwd2VqcnZpeGttMmtydWoxdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yLrLQPkyz7dLYshVhO/200.gif" class="card-img-top" alt="cloudy gif image">
  <div class="card-body">
    <h5 class="card-title">Cloudy Weather ☁️</h5>
    <p class="card-text">In cloudy weather, the sky is full of clouds. <br>
The sun is not clearly seen. <br>
It may rain anytime.</p>
    
  </div>
</div>
</div>
    `)
} else if(weather === "Windy"){
  document.writeln(`  
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(161, 148, 97)">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/38/ee/3a/38ee3abe6332b9c07d15f05b3cc53f62.gif" class="card-img-top" alt="windy gif image">
  <div class="card-body">
    <h5 class="card-title">Windy Weather 🌬️</h5>
    <p class="card-text">Windy weather has strong and fast winds. <br>
Trees and leaves move a lot. <br>
Kites fly high in the sky.</p>
    
  </div>
</div>
</div>
    `)
} else if(weather === "Winter"){
  document.writeln(` 
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(206, 195, 150)">
<div class="card" style="width: 18rem;">
  <img src="https://gallery.yopriceville.com/downloadfullsize/send/11754" class="card-img-top" alt="winter gif image">
  <div class="card-body">
    <h5 class="card-title">Winter Weather ❄️</h5>
    <p class="card-text">Cold weather is very chilly. <br>
We wear warm clothes. <br>
Sometimes there is fog or snow.</p>
    
  </div>
</div>
</div>
    `)
} else if(weather === "Summer"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(208, 235, 165)">
<div class="card" style="width: 18rem;">
  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cbdc96fb-4f4c-45a9-8d25-6e8a988b5762/d66wrth-df70aa78-c842-4c4a-a006-542195293a69.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9jYmRjOTZmYi00ZjRjLTQ1YTktOGQyNS02ZThhOTg4YjU3NjIvZDY2d3J0aC1kZjcwYWE3OC1jODQyLTRjNGEtYTAwNi01NDIxOTUyOTNhNjkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uVrSr7c4DY47PlQq2_DSyrndpW9aWijl8XEwOLuAfJc" class="card-img-top" alt="summer gif imag">
  <div class="card-body">
    <h5 class="card-title">Summer Weather 🔥</h5>
    <p class="card-text">Hot weather is very warm. <br>
The sun shines very strong. <br>
We drink water and wear light clothes.</p>
    
  </div>
</div>
</div>
    `)
} else if(weather === "Stormy"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(100, 116, 99);">
<div class="card" style="width: 18rem;">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyc2l4MTZiZnpvZzRrYWs1bmQyeTFrcDZya290cDZ3NmJ3ejU1OHdseSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EVf8tbnlr77Es/source.gif" class="card-img-top" alt="stormy gif image">
  <div class="card-body">
    <h5 class="card-title">Stormy Weather ⛈️</h5>
    <p class="card-text">Stormy weather has strong winds and rain. <br>
There may be thunder and lightning. <br>
We stay safe indoors.</p>
    
  </div>
</div>
</div>
    `)
} else if(weather === "Snowy"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(160, 150, 194);">
<div class="card" style="width: 18rem;">
  <img src="https://lh6.googleusercontent.com/proxy/RTsGuLOSwxSJutqsfNt1Moa8xe5hYbSurGcgi8zNQvkmojCD25wbqZGUhaJ_skDumb5wc-RjfVyR3Yys9UKchUDSQTPDbllIoEpUC32Iwk_u" class="card-img-top" alt="snowy gif image">
  <div class="card-body">
    <h5 class="card-title">Snowy Weather ❄️</h5>
    <p class="card-text">Snowy weather is very cold. <br>
Snow falls from the sky. <br>
Everything looks white and beautiful.</p>
    
  </div>
</div>
</div>
    `)
} else if(weather === "Autumn"){
  document.writeln(`
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgba(228, 204, 109, 0.963)">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/70/e2/3b/70e23b6f69a76243f08fb412ac95a2ee.gif" class="card-img-top" alt="autumn gif image">
  <div class="card-body">
    <h5 class="card-title">Autumn Weather 🍁</h5>
    <p class="card-text">Autumn is a pleasant season.
The weather is cool and nice. <br>
Leaves change color and fall from trees.</p>
    
  </div>
</div>
</div>
    `)
} else if(weather === "Spring"){
  document.writeln(`
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: cornsilk">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/16/dc/69/16dc69a8d6e4fa402fc1cd7610d9d7dc.gif" class="card-img-top" alt="spring gif image">
  <div class="card-body">
    <h5 class="card-title">Spring Weather 🌸</h5>
    <p class="card-text">Spring is a beautiful and pleasant season. <br>
Flowers bloom and trees become green. <br>
The weather is fresh and nice.</p>
    
  </div>
</div>
</div>
    `)
} else{
 document.writeln(` <div class="d-flex align-item-center justify-content-center" style="height: 100vh; width: 100vw; background-color: brown;">
  <img src="https://i.pinimg.com/originals/37/e6/54/37e6546555565309406876ec766d5b05.gif" alt="funny image">
 </div>`)
}
  
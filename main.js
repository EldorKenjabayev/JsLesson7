let birinchi = document.getElementById('birinchi_son')
let ikkinchi = document.getElementById('ikkinchi_son')
let ozarotub = document.getElementById('ozarotub')
let ozarotub_emas = document.getElementById('ozarotub_emas')
let a = +prompt('birinchi sonni kiriting ::')
birinchi.innerHTML = a
let b = +prompt('ikkinchi sonni kiriting ::')
ikkinchi.innerHTML = b
  let NewArr = []
  let NewArr2 = []
  for(let i = 2; i<a; i++){
    if(a%i==0){
      NewArr.push(i)
    }
  }
  for(let i = 2; i<b; i++){
    if(b%i==0){
      NewArr2.push(i)
    }
  }
let is_coprime = 1
  for(let i = 0; i<NewArr.length; i++){
    for(let j = 0; j<NewArr2.length; j++){
      if(NewArr[i]== NewArr2[j]){
        is_coprime = 0
       break
      }
    }
  }
  if(is_coprime == 1){
    ozarotub.innerHTML = "Kiritilgan sonlar o`zaro tub sonlar"
  }
  else{
    ozarotub_emas.innerHTML = "Kiritilgan sonlar o`zaro tub emas sonlar"
  }
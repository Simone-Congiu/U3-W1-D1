console.log('hello world')


let controlResul=function(){
    let num : number = parseFloat((<HTMLInputElement>document.querySelector("#firstN")).value);
    console.log(num)
    let num2 : number = parseFloat((<HTMLInputElement>document.querySelector("#secondN")).value);
    console.log(num2)
    let containerNumber=<HTMLInputElement>document.querySelector(".containerRandomNumber")
    let randomNumber=Math.floor(Math.random()*101)
    console.log('il numero random è:',randomNumber)
    let firstDifference=Math.abs(randomNumber-num)
    console.log('firsstdifference è:',firstDifference)
    let secondDifference=Math.abs(randomNumber-num2)
    console.log('secondDifference è:',secondDifference)
    if(num===randomNumber){
        console.log('firstNumber ha indovinato')
        containerNumber.innerHTML='il numero estrtto è : '+ randomNumber + ' firstNumber ha indovinato'

    }else if(num2===randomNumber){
        console.log('secondNumber ha indovinato')
        containerNumber.innerHTML='il numero estrtto è :'+ randomNumber + 'secondNumber ha indovinato'
    }
    
    
    else if(firstDifference<secondDifference){
        console.log('firstNumber si è avvicinato di piu')
        containerNumber.innerHTML='il numero estrtto è: '+ randomNumber + ' firstNumber si è avvicinato di piu'
        
    }else{
        console.log('secondNumber si è avvicinato di piu')
        containerNumber.innerHTML='il numero estratto è: '+ randomNumber + ' secondNumber si è avvicinato di piu'
    }

    


    
}





let myForm=document.querySelector('form')as HTMLFormElement
console.log(myForm)
myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    controlResul()

    
})













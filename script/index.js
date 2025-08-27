
//  action of Clicking on the 💗
const heart = document.getElementsByClassName("c-heart");
for(h of heart){
    h.addEventListener('click',function(){
        const a = document.getElementById("n-heart");
        let count = parseInt(a.innerText);
        count += 1;

        a.innerText = count;
    })
}

// call history and call button

const call = document.getElementsByClassName("call-bn");
for(c of call){
    c.addEventListener('click',function(){
        
        let coin = parseInt(document.getElementById("coin").innerText);
        
        if(coin > 19){
            
            const pn = this.parentNode
            const name = pn.getElementsByClassName("num");
            let now = new Date();
            const time = now.toLocaleTimeString();
            window.alert("📞 Calling " +name[0].innerText.replace("Number", "") +" "+name[1].innerText+"...")

            const div = document.createElement("div");
            div.innerHTML = `
                <div class="flex justify-between items-center  my-2 p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <h1 class="text-[1.15rem] font-semibold">${name[0].innerText}</h1>
                            <h2>${name[1].innerText}</h2>
                        </div>
                        <div>
                            <h2>${time}</h2>
                        </div>
                    </div>
            `
            document.getElementById("history").appendChild(div);

            coin -= 20;
            document.getElementById("coin").innerText = coin;

        }

        else{
            window.alert("😥 You don't have enough coin. For one call need at least 20 coin!")
        }
        
    })
    
}

//Clear Button

document.getElementById("clear").addEventListener('click',function(){

    document.getElementById("history").innerText = "";
})
    

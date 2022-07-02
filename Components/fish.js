AFRAME.registerComponent("fish",{
    init:function(){
        for(var i=1;i<=10;i++){
            const id=`fish${i}`;

            const posX=Math.random()*100+50;
            const posY=Math.random()*5+5;
            const posZ=Math.random()*60+-40;

            const position={x:posX,y:posY,z:posZ};
            this.createFish(id,position);
        }
    },
    createFish:function(id,position){
        const fishEntity=document.querySelector("#fish");
        var fishEl=document.createElement("a-entity");

        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("material","color","#ff9100");

        fishEl.setAttribute("geometry",{primitive:"circle",radius:1});

        fishEl.setAttribute("animation",{
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            dur:1000
        });
        fishEntity.appendChild(fishEl);
    }
})
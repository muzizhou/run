/*
* 绘制人物
* */
function person(canvas,cobj,runImg,jumpImg){
    this.x=0
    this.y=420
    /*人物占的多大*/
    this.width=83
    this.height=118
    this.canvas=canvas
    this.cobj=cobj
    this.runImg=runImg
    this.jumpImg=jumpImg
    /*姿态*/
    this.state=0
    /*状态*/
    this.status="runImg";
    /*速度*/


}
person.protoyype={
    draw:function(){
        /*
        * 画人物保存好
        * */
        this.cobj.save()
        this.cobj.translate(this.x,this.y)
        this.cobj.drawImage(this[this.status][this.state],0,0,827,1181,0,0,this.width,this.height)
        /*画完人物*/
        this.cobj.restore()
    }
}

/*
 * 游戏主程序
 * */
function game(canvas,cobj,runImg,jumpImg){
    this.canvas=canvas
    this.cobj=cobj
    this.person=new person(canvas,cobj,runImg,jumpImg)
    this.speed=5
}

game.prototype={
    play:function(){
        var that=this
        var num=0
        var back=0;
        setInterval(function(){
            num++;
            back-=that.speed
            that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height)
            that.person.state=num%7;
            that.person.x+=that.speed
            if(that.person.x>that.canvas.width/3){
                that.person.x=that.canvas.width/3
            }
            that.person.draw()
            that.canvas.style.backgroundPositionX=back
        },50)


    }
}
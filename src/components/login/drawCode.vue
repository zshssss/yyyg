<template>
  <div class="myCode">
    <canvas v-if="myCodeChange"  width="100" height="40" ref="verifyCanvas" style="display:none"></canvas>
    <img  src="" alt="" ref="code_img" style="width: 100px;height: 40px;cursor: pointer;vertical-align: top;" @click="drawCode">
    <!-- $emit('rawRandomCode') -->
  </div>
</template>

<script>
export default {
  name: 'myCode',
  data () {
    return {
    nums:["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'],
        myCode:[],
    myCodeChange:true
    }
  },
    mounted(){
        this.drawCode()
    },
    methods: {
        piblishEmit(){

        },  
    // 绘制验证码
    drawCode() {
        this.myCodeChange = true
        this.$nextTick(function () {
        var canvasEle = this.$refs.verifyCanvas;  //获取HTML端画布
         if(!canvasEle) return;
       
        var context = canvasEle.getContext("2d");                 //获取画布2D上下文
        context.fillStyle = "#fb38126e";                  //画布填充色
        context.fillRect(0, 0, 100, 40);   //清空画布
        context.fillStyle = "white";                           //设置字体颜色
        context.font = "25px Arial";                           //设置字体
       
        // var rand = new Array();
        var rand = this.myCode
        // console.log(rand)
        var x = new Array();
        var y = new Array();
        for (let i = 0; i < 5; i++) {
            rand[i] = this.nums[Math.floor(Math.random() * this.nums.length)]
            x[i] = i * 16 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);
            
        }
         console.log(rand)
        //画3条随机线
        for (var i = 0; i < 3; i++) {
            this.drawline(canvasEle, context);
        }

        // 画30个随机点
        for (var i = 0; i < 30; i++) {
            this.drawDot(canvasEle, context);
        }
        this.convertCanvasToImage(canvasEle)
          })
        this.$nextTick(function(){
            const rand = this.myCode.join('');
            this.$emit('rawRandomCode',rand)
        })
       
    },

    // 随机线
    drawline(canvasEle, context) {
       
        context.beginPath();
        // 画曲线
         context.bezierCurveTo(
            5-Math.floor(Math.random() *20), 25-Math.floor(Math.random() *20),
            30-Math.floor(Math.random() *30), 45-Math.floor(Math.random() *30),
            50, 20);

        context.bezierCurveTo(
            50, 20,
            80-Math.floor(Math.random() *20),5-Math.floor(Math.random() *20), 
            105-Math.floor(Math.random() *20), 25-Math.floor(Math.random() *20));

        context.moveTo(Math.floor(Math.random() * canvasEle.width), Math.floor(Math.random() * canvasEle.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * canvasEle.width), Math.floor(Math.random() * canvasEle.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = 0.5;                                                  //随机线宽
        context.strokeStyle = 'rgba(50,50,50,0.3)';                               //随机线描边属性
        context.stroke();                                                         //描边，即起点描到终点
    },
    // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
    drawDot(canvasEle, context) {
        var px = Math.floor(Math.random() * canvasEle.width);
        var py = Math.floor(Math.random() * canvasEle.height);
        context.moveTo(px, py);
        context.lineTo(px + 1, py + 1);
        context.lineWidth = 0.2;
        context.stroke();

    },
    // 绘制图片
   convertCanvasToImage(canvasEle) {
        // this.$refs.verifyCanvas.style.display = "none";
        this.myCodeChange = false
        var image = this.$refs.code_img;
        image.src = canvasEle.toDataURL("image/png");
        return image;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

var mov, circ, pos_x=0
function animar() {
	circ.clearRect(0,0,475,475)
	circ.beginPath()
	circ.arc(pos_x, 48, 30, 0, Math.PI*2, false)
	circ.fillStyle="#c96a22"
	circ.fill()
	pos_x++
	setTimeout(animar, 50)

}

var mov2, circ2, pos_x2=0
function animar2() {
	circ2.clearRect(0,0,475,475)
	circ2.beginPath()
	circ2.arc(pos_x2, 48, 30, Math.PI*2, false)
	circ2.fillStyle="#c96a22"
	circ2.fill()
	pos_x2++
	setTimeout(animar2, 50)

}
window.onload=function(){
	mov=document.getElementById('animado')
	mov2=document.getElementById('animado2')
	circ=mov.getContext('2d')
	circ2=mov2.getContext('2d')
	animar()
	animar2()
}
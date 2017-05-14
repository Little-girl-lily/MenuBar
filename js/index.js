//--------------------//
//       By Lily      //
//                    // 
//--------------------//
var m = 2,n = 3;//m为二级子节点数，n为三级父节点数目
$(document).ready(function(){
	$("#Regional1").click(function(){
		if($('#grade-eject-1').hasClass('grade-w-roll')){
			$('#grade-eject-1').removeClass('grade-w-roll');
			$("#screening2").css("top","9%");
			
		}else{
			$('#grade-eject-1').addClass('grade-w-roll');
			$("#screening2").css("top","70%")
		}
		for(var p = 1;p<=m;p++){
				$(".grade-w-"+ p).css("left","100%")
				for(var k = 1;k<=n;k++){
					$(".grade-w-"+ p+k).css("left","100%")
				}
			}
		$('#grade-eject-2').removeClass('grade-w-roll-2');
	});

$("#Regional2").click(function(){
		if($('#grade-eject-2').hasClass('grade-w-roll-2')){
			$('#grade-eject-2').removeClass('grade-w-roll-2');
			
		}else{
			$('#grade-eject-2').addClass('grade-w-roll-2');
		}
		for(var p = 1;p<=m;p++){
				$(".grade-w-"+ p).css("left","100%")
				for(var k = 1;k<=n;k++){
					$(".grade-w-"+ p+k).css("left","100%")
				}
			}
		$('#grade-eject-1').removeClass('grade-w-roll');
		$("#screening2").css("top","9%")
	});

});
function grade1(a){
	for(var i=1;i<=m;i++){
		if(i==a){
			$(".grade-w-"+ a).css("left","33.48%")
		}
		else{
			$(".grade-w-"+ i).css("left","100%")
		}
		for(var j = 1;j<=n;j++){
			$(".grade-w-"+ i+j).css("left","100%")
		}
	}
}
function grade2(b,c){
	for(var q = 1;q<=m;q++){
		for(var t= 1;t<=n;t++){
			if(q==b && t==c){
				$(".grade-w-"+ b + c).css("left","33.48%")
			}
			else{
				$(".grade-w-"+ q+t).css("left","100%")
			}
		}
    }
}
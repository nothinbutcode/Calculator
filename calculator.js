//Calaculator

$('document').ready(function(){ 
	let characters = [9,8,7,'/',6,5,4,'*',3,2,1,'-',0,'.','=','+'];
	let value= $('input').val();
    //Creates Buttons elements to DOM  
	characters.forEach(function(element,index){	
		$('form .section1').append('<p class="btn btn-success button button'+index+'">'+element+'</p>');});
	//Functionality :Press button number enter it into textfield and do the math
	   	$(".section1").on("click",'.button', function(e){
	        let btnVal = e.target.lastChild.nodeValue;
	        //Do the Math /single out the numbers
	        if (btnVal === '=') {      
	           $('input').val(eval(value));         	
	         } 
	        else if (btnVal === '0'|| btnVal == '1'||btnVal == '2'||btnVal == '3'||btnVal == '4'||btnVal == '5'||btnVal == '6'||btnVal == '7'||btnVal == '8'||btnVal == '9'){
		    	value += parseInt(e.target.lastChild.nodeValue);
		    	 $('input').val(value);
		    	  console.log(btnVal);
				  console.log(value);
				} 
			else{
				value += btnVal;
		    	 $('input').val(value);
		    	}	
		}); 
});

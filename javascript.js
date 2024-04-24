function validate(){
	var name1 =document.getElementById('name1').value;
	var Password1=document.getElementById('Password1').value;
	var mobilenumber=document.getElementById('number').value;
	var email=document.getElementById('email').value;



    if(name1==null || name1=="") {
		
		document.getElementById('useren').innerHTML ="Input you Username";
		return false;
	}
	

     else if((name1.length<=2) || (name1.length>=20)){
		
		document.getElementById('useren').innerHTML ="Username too short"; 
		return false;
	}

	if(email==null || email==""){
		
		document.getElementById('emailid').innerHTML ="Please fill the email";
		return false;
	}

    if(email.indexOf('@') <= 0){
       
        document.getElementById('emailid').innerHTML ="@ indvalid position";
        return false;
      }


    if(mobilenumber==null || mobilenumber==""){
		
		document.getElementById('mobilenum').innerHTML ="Please fill the mobilenumber";
		return false;
	}


    if(mobilenumber.length!=10){
		
		document.getElementById('mobilenum').innerHTML ="mobile number should be of 10 number";
		return false;
	}


	  if(Password1==null || Password1==""){
		
		document.getElementById('pass1').innerHTML ="Please fill the Password";
		return false;
	}

    if(Password1.length<=5 || Password1.length>=20){
		
		document.getElementById('pass1').innerHTML ="Password lenght should be 5 and 20";
		return false;
	}
	  
	
	return true;

    }
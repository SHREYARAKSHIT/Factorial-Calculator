let string="";
let int=0;
let res1=document.getElementById("ans1");
let rst1=document.getElementById("reset1");
res1.addEventListener('click',(c) => {
	string=document.getElementById("inputari").value;
	if(string==undefined||string==""){return;}
	try{
		string=eval(string);
	}
	catch (error) {
		string="";
		document.getElementById("inputari").value="Invalid Input";
		return;
	}
	int=Number(string);
	if(int<0){
		string="";
		document.getElementById("inputari").value="Invalid Input";
		return;
	}
	else if(int==0){
		string="1";
	}
	else{
		int--;
		while(int>0){
		    string+="*"+int;
		    int--;
		}
		try{
		string=eval(string);
	    }
	    catch (error) {
		    string="";
		    document.getElementById("inputari").value="Invalid Input";
		    return;
	    }
	}
	document.getElementById("inputari").value=string;
});
rst1.addEventListener('click',(cl) => {
	string="";
	document.getElementById("inputari").value=string;
});
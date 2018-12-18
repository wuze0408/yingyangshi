function ele(selector){
	var selector = document.querySelectorAll(selector)
	if(selector.length == 1){
		return selector[0];
	}else{
		return selector;
	}
}

function z_id(n){
	return document.getElementById(n);
}
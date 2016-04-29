var a = {a:1};
(function(ac){
	// console.log(a)
	ac.b= 2
	console.log(qq())
	function qq(){
		return 0;
	}
	var module = (function(){
		// console.log(a)
		return function(){
			this.c = 1;
		}

	})
	module()
}(a))

console.log(a.b)


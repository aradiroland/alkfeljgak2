"use strict"

function kivalogat(arr)
{
	const retval = [];
	for (let i = 0; i < arr.length; ++i)
	{
		if(arr[i] < 0)
		{
			retval.push(arr[i]);
		}
	}

	return retval;
}


function kivalogat2(arr)
{
	const retval = [];
	for (let i = 0; i < arr.length; ++i)
	{
		if(arr[i] === true )
		{
			retval.push(arr[i]);
		}
	}

	return retval;
}


function kisebbMintNulla(num){
	return num < 0;
}


console.log(kivalogat([1, 2, 3, 4, 5, -6, 7, 8, 9, 10]));
console.log(kivalogat([1, 2, 3, 4, 5, -6, 7, 8, -9, 10], kisebbMintNulla));
console.log(kivalogat([1, 2, 3, 4, 5, -6, 7, 8, 9, 10], function(num) { return num < 0}));
console.log([1, 2, 3, 4, -5, -6, 7, 8, -9, 10].filter(i => i < 0));

function factorials(n) {
	let e = 1;
	for (let i = 2; i <= n; ++i ){
		e *=i;
	}

	return e;
}

console.log(factorials(5));


var alma = new Object();
alma.korte = 'fa';
alma.kertesz = 'Roland';
console.log(alma.korte);
console.log(alma.kertesz);


var barack = Object.create(alma);
barack.korte = 'nemfa'
console.log(barack.korte);

//barack őse
console.log(Object.getPrototypeOf(barack));

var alma2 = {
	korte: 'fa2',
	kertesz: 'Roland2',
	irdle: function(msg){
		console.log(msg);
	}
}

console.log(alma2);
alma2.irdle('anyad');
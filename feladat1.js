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

console.log(kivalogat([1, 2, 3, 4, 5, -6, 7, 8, 9, 10]));
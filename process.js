var args    = process.argv,
	numbers = [],
	total,
	i;

for (i = 2; i < args.length; i++) {
	numbers.push(Number(args[i]));
}

total = numbers.reduce(function(prev, curr) {
	return prev + curr;
});

console.log(total);

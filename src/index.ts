interface Num {
	value: number;
}

const t1: Num = {
	value: 200,
};

function optional(obj: Num): number | undefined | null {
	console.log(obj?.value);
	return obj?.value;
}

optional(t1);

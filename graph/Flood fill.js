var floodFill = function (image, sr, sc, color) {
	const initialSrScVal = image[sr][sc];
	function helper(sr, sc) {
		if (
			sr >= 0 &&
			sr < image.length &&
			sc >= 0 &&
			sc < image[0].length &&
			image[sr][sc] === initialSrScVal
		) {
			image[sr][sc] = color;
			helper(sr, sc - 1);
			helper(sr, sc + 1);
			helper(sr - 1, sc);
			helper(sr + 1, sc);
		} else return;
	}

	helper(sr, sc);
	return image;
};

floodFill(
	[
		[0, 0, 0],
		[0, 0, 0],
	],
	1,
	1,
	2
); //?

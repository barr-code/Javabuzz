describe('Javabuzz', function() {

	beforeEach(function () {
		javabuzz = new Javabuzz();
	});

	var javabuzz;

	describe('knows when a number is divisible', function() {

		it('by three', function() {
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('by five', function() {
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('by fifteen', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		});

	});

	describe('knows when a number is NOT divisible', function() {

		it('by 3', function(){
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('by 5', function() {
			expect(javabuzz.isDivisibleByFive(1)).toBe(false);
		});

		it('by 15', function() {
			expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
		});
	});

	describe('when playing, says', function() {

		it('"Java" when a number is divisible by 3', function() {
			expect(javabuzz.says(3)).toEqual("Java");
		});

		it('"Buzz" when a number is divisible by 5', function() {
			expect(javabuzz.says(5)).toEqual("Buzz");
		});

		it('"Javabuzz" when a number is divisible by 15', function() {
			expect(javabuzz.says(15)).toEqual("Javabuzz");
		});

		it('returns the number if not div by 3 or 5', function() {
			expect(javabuzz.says(1)).toEqual(1)
		});
	});
});
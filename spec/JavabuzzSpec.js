describe('Javabuzz', function() {

	var javabuzz;

	describe('knows when a number is divisible', function() {

		it('by three', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('by five', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('by fifteen', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		});

	});

	describe('knows when a number is NOT divisible', function() {

		it('by 3', function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('by 5', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFive(1)).toBe(false);
		});

		it('by 15', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
		});
	});
});
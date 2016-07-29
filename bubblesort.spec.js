describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('properly sorts two item arrays', function(){
  	expect( bubbleSort([5,2]) ).toEqual([2,5]);
  });
   it('properly sorts three+ item arrays', function(){
  	expect( bubbleSort([5,2,3]) ).toEqual([2,3,5]);
  }); 
   it('can deal with negative numbers', function(){
  	expect( bubbleSort([5,-1,3]) ).toEqual([-1,3,5]);
  });
    it('can handle a long list', function(){
    expect( bubbleSort([5,-1,3, 11, 20, 16, 14]) ).toEqual([-1,3,5, 11, 14, 16, 20]);
  });
});

/**


describe('compare', function(){
    beforeEach(function()

    it("compares", function() {
    expect(compare.calls()).toEqual(6);
  });
});


describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');
  });
¶
.calls.any(): returns false if the spy has not been called at all, and then true once at least one call happens.

  it("tracks if it was called at all", function() {
    expect(foo.setBar.calls.any()).toEqual(false);

    foo.setBar();

    expect(foo.setBar.calls.any()).toEqual(true);
  });

  **/
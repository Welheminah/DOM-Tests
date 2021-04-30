describe('The totalPhoneBill for the Calculate Widget factory function', function(){
    describe('using values', function(){
    
    it('should return total cost for sms and call string', function(){
        

        assert.equal(18.00, totalPhoneBill("call, call, call, call, call, sms, sms, call"))

        
    });
});

});
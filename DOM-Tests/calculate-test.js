describe('The totalPhoneBill for the Calculate Widget factory function', function(){

    //instance for call only
    it('should return total cost for one call', function(){
        let calcuBill = totalPhoneBill();

        calcuBill.billCalculate("call");

        assert.equal(2.75, calcuBill.getTotalCost())

        
    });

    //instance for the sms only
    it('should return total cost for one sms', function(){
        let calcuBill = totalPhoneBill();

        calcuBill.billCalculate("sms");

        assert.equal(0.75, calcuBill.getTotalCost())

        
    });

    //instance for both call and sms
    it('should return total cost for one sms and one call', function(){
        let calcuBill = totalPhoneBill();

        calcuBill.billCalculate("sms");
        calcuBill.billCalculate("call");

        assert.equal(3.50, calcuBill.getTotalCost())
        

        
    });
   
    
});
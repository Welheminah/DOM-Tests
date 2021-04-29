describe('The textBillTotal factory function for the Text Bill Widget', function(){

    //instance for call only
    it('should return total cost for one call', function(){
        let calcuTextBill = textBillTotal();

        calcuTextBill.textBills("call");

        assert.equal(2.75, calcuTextBill.getCallTotalCost())
        // assert.equal(2.75, calcuTextBill.getTotalCosts())

        
    });

    it('should return total cost for one sms', function(){
        let calcuTextBill = textBillTotal();

        calcuTextBill.textBills("sms");

        assert.equal(0.75, calcuTextBill.getSmsTotalCost())
        

        
    });

    it('should return total cost for two smses and one call', function(){
        let calcuTextBill = textBillTotal();

        calcuTextBill.textBills("sms");
        calcuTextBill.textBills("sms");
        calcuTextBill.textBills("call");

        assert.equal(1.50, calcuTextBill.getSmsTotalCost())
        assert.equal(2.75, calcuTextBill.getCallTotalCost())
        assert.equal(4.25, calcuTextBill.smsCallTotal())
        
    });

    describe("warning and critical level", function(){

        it("it should return a class name of 'warning' if warning level is reached(the amount is between 30 & 49)", function(){
            let calcuTextBill = textBillTotal();
    
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("call");

            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");

            
            
            assert.equal("warning", calcuTextBill.totalClassName());
        });
        it("it should return a class name of 'critical' if  critical level is reached(the amount is over 50)", function(){
            let calcuTextBill = textBillTotal();
    
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("sms");
            calcuTextBill.textBills("call");

            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");
            calcuTextBill.textBills("call");

            
            
            assert.equal("critical", calcuTextBill.totalClassName());
        });
    });
    
    
});
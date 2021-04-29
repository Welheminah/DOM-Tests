describe('The totalPhoneBill for the Radio Bill Widget factory function', function(){

    //instance for call only
    it('should return total cost for one call', function(){
        let radioWidget = textBillTotals();

        radioWidget.radioBillTotal("call");

        assert.equal(2.75, radioWidget.getCallsTotalCost())
       
    });
    //second instance for the sms
    it('should return total cost for one sms', function(){
        let radioWidget = textBillTotals();

        radioWidget.radioBillTotal("sms");

        assert.equal(0.75, radioWidget.getSmsesTotalCost())
        
    });

    it('should return total cost for two smses and two calls', function(){
        let radioWidget = textBillTotals();

        radioWidget.radioBillTotal("sms");
        radioWidget.radioBillTotal("sms");
        radioWidget.radioBillTotal("call");
        radioWidget.radioBillTotal("call");

        assert.equal(1.50, radioWidget.getSmsesTotalCost())
        assert.equal(5.50, radioWidget.getCallsTotalCost())
        assert.equal(7.00, radioWidget.totalCostings())
        
    });

    describe("warning and critical level", function(){

        it("it should return a class name of 'warning' if warning level is reached", function(){
            let radioWidget = textBillTotals();

            radioWidget.radioBillTotal("sms");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");

            assert.equal("warning", radioWidget.totalClassName());
            
        });
        it("it should return a class name of 'critical' if  critical level is reached", function(){
            let radioWidget = textBillTotals();

            radioWidget.radioBillTotal("sms");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("sms");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");
            radioWidget.radioBillTotal("call");


            assert.equal("critical", radioWidget.totalClassName())
           
        });
    });
    
    

      
});

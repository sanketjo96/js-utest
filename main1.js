// Spies, toHaveBeenCalled, toHaveBeenCalledWith

describe('calculate', function() {

    it('Should return expression not recognized', function() {
        spyOn(window, 'updateResult').and.stub()
        calculate({
            target: {
                value: 'a+3'
            }
        })
        expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
    })
})
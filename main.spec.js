// beforeAll, afterAll

describe('Update result', function () {
    let resultElement;
    let inputElement;
    beforeAll(function () {
        resultElement = document.createElement('div');
        resultElement.setAttribute('id', 'result');
        document.body.appendChild(resultElement);

        inputElement = document.createElement('input');
        inputElement.setAttribute('id', 'inputValue');
        document.body.appendChild(inputElement);
    })

    // afterAll(function () {
    //     document.body.removeChild(element)
    // })

    it('Should update result to DOM', function () {
        updateResult('This is to test');
        expect(resultElement.innerText).toBe('This is to test')
    })

    // Spies, toHaveBeenCalled, toHaveBeenCalledWith
    // it('Should return expression not recognized', function() {
    //     spyOn(window, 'updateResult').and.stub()
    //     calculate({
    //         target: {
    //             value: 'a+3'
    //         }
    //     })
    //     expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
    // })


    // How to test whether events are triggering.
    // function Trigger(element, action) {
    //     const event = new Event(action);
    //     element.dispatchEvent(event)
    // }

    // it('should trigger on change of input element', function () {
    //     const mockMethod = jasmine.createSpy('event');
    //     AddEvent(inputElement, mockMethod)
    //     Trigger(inputElement, 'change')

    //     expect(mockMethod).toHaveBeenCalled()
    // })

    // How to test async code
    // it('Should update version correctly', function(done) {
    //     GetVersion().then((version) => {
    //         expect(version).toBe('0.4')
    //         done()
    //     })
    // })
})
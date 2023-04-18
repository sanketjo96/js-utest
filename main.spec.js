describe('Update result', function() {

    let element;
    beforeAll(function () {
        element = document.createElement('div');
        element.setAttribute('id', 'result');
        document.body.appendChild(element);
    })

    // afterAll(function () {
    //     document.body.removeChild(element)
    // })

    it('Should update result to DOM', function() {
        updateResult('This is to test');
        expect(element.innerText).toBe('This is to test')
    })
})
const mockUser= jest.fn();
const mock = jest.fn().mockImplementation(function() {
    return {
        user: mockUser
    }
});

module.exports = mock;
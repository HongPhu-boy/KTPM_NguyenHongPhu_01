const { login } = require('./auth');

describe('Regression Test - Auth', () => {
    test('Đăng nhập thất bại khi sai mật khẩu -> trả về false', () => {
        expect(login('admin', 'wrongpass')).toBe(false);
    });

    test('Đăng nhập thất bại khi username rỗng -> trả về false', () => {
        expect(login('', '123')).toBe(false);
    });
    
    test('Đăng nhập thất bại khi password rỗng -> trả về false', () => {
        expect(login('admin', '')).toBe(false);
    });

    test('Ném ra lỗi khi mật khẩu chứa ký tự đặc biệt', () => {
        expect(() => login('admin', '123@')).toThrow('Password contains invalid characters');
    });

    test('Ném ra lỗi khi tài khoản bị khóa', () => {
        expect(() => login('locked_user', '123')).toThrow('Account is locked');
    });
});
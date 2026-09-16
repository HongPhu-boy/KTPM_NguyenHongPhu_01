const { login } = require('./auth');

describe('Smoke Test - Auth', () => {
    test('Đăng nhập thành công với tài khoản đúng (admin/123) -> trả về true', () => {
        expect(login('admin', '123')).toBe(true);
    });
});
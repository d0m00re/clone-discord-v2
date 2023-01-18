import comparePasswordAndHash from "./comparePasswordAndHash";
import hashPassword from "./hashPassword";

describe("bcrypt : comparePasswordAndHash", () => {
    test("valid", async () => {
        let pass = "holaChicos";
        let newHash = await hashPassword(pass);
        let valid = await comparePasswordAndHash(pass, newHash);
        expect(valid).toBe(true);
    });
    test("invalid", async () => {
        let pass = "holaChicos";
        let newHash = await hashPassword(pass);
        let valid = await comparePasswordAndHash("wrong", newHash);
        expect(valid).toBe(false);
    });
})
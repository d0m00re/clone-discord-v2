import hashPassword from "./hashPassword";

describe("bcrypt : hash password", () => {
    test("generate a valid string", async () => {
        let pass = "holaChicos";
        let newHash = hashPassword(pass);
        expect(typeof(newHash)).toBe("string");
        expect(pass).not.toBe(newHash);
    })
})
import { calculatePasswordStrength } from "../src/CalculatePasswordStrength";

describe("Calculate Password Strength tests", () => {
  test("Check for basic length requirement", () => {
    expect(calculatePasswordStrength("8!U3EuK")).toBe("Moderate"); // password.length = 7
    expect(calculatePasswordStrength("EunySrUh")).toBe("Weak"); // password.length = 8
    expect(calculatePasswordStrength("3EuoyyU53")).toBe("Moderate"); // password.length > 8 (9symbols)
    expect(calculatePasswordStrength("3EuoyyU53kT")).toBe("Moderate"); // password.length > 8 (11 symbols)
    expect(calculatePasswordStrength("3Eu8!yyU3Eu")).toBe("Strong"); // password.length = 12
    expect(calculatePasswordStrength("3Eu8!yyU.3Eu")).toBe("Strong"); // password.length = 13
    expect(calculatePasswordStrength("3Eu8!yyU3Eu7muN")).toBe("Strong"); // password.length > 12 (15 symbols)
  });
  // test("Check for empty password field", () => {
  //   expect(calculatePasswordStrength("")).toBe("Very Weak"); // if (password.length === 0) => return "Very Weak" and message "The password field cannot be empty"
  //   console.log("The password field cannot be empty");
  // });
  // test("Check password length, if it is less 8 symbols", () => {
  //   expect(calculatePasswordStrength("iKYhgi9")).toBe("Very Weak"); // if (password.length < 8) => return "Very Weak" and message "The minimum password length is 8 symbols"
  //   expect(calculatePasswordStrength("A")).toBe("Very Weak");
  //   expect(calculatePasswordStrength("AyOk")).toBe("Very Weak");
  //   console.log("The minimum password length is 8 symbols");
  // });
  test("Check for digits", () => {
    expect(calculatePasswordStrength("123456789")).toBe("Very Weak");
  });
  test("Check for lowercase letters", () => {
    expect(calculatePasswordStrength("asdfghjkl")).toBe("Very Weak");
    expect(calculatePasswordStrength("password")).toBe("Very Weak");
  });
  test("Check for uppercase letters", () => {
    expect(calculatePasswordStrength("ASDFGHJKL")).toBe("Very Weak");
  });
  test("Check for special characters", () => {
    expect(calculatePasswordStrength("h_Tmt-W/$!@t0")).toBe("Strong");
  });
  test("Determine password strength level based on strength score", () => {
    expect(calculatePasswordStrength("i")).toBe("Very Weak"); //if (strength <= 2) => return "Very Weak";
    expect(calculatePasswordStrength("5y")).toBe("Very Weak"); //if (strength <= 2) => return "Very Weak";
    expect(calculatePasswordStrength("EunySrUh")).toBe("Weak"); //if (strength === 3) => return "Weak";
    expect(calculatePasswordStrength("passwoRD1")).toBe("Moderate"); //if (strength === 4) => return "Moderate";
    expect(calculatePasswordStrength("u6_uI!.8")).toBe("Strong"); //if (strength >= 5) => return "Strong";
    expect(calculatePasswordStrength("uI!6_uI!6.8Ym")).toBe("Strong"); //if (strength >= 5) => return "Strong";
  });
});

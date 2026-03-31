(() => {
  // Type Aliases / Custom Types
  type Role = "admin" | "guest" | "teacher" | "student";

  // Complex Object Type Definition
  type User = {
    name: string;
    age: number;
    role: Role;
    permission: string[];
  };

  let userRole: Role = "admin";

  // Example user object
  let user: User = {
    name: "Elmer",
    age: 31,
    role: userRole,
    permission: ["read", "write"],
  };

  // Function using Role type
  function access(role: Role): string {
    if (role === "admin") {
      return "Full access granted";
    } else if (role === "teacher") {
      return "Access to teaching tools";
    } else if (role === "student") {
      return "Access to learning materials";
    } else {
      return "Limited access";
    }
  }

  console.log("User:", user);
  console.log("Access Level:", access(user.role));


})();
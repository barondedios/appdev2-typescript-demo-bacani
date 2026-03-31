(() => {
  // Define a reusable type (cleaner than repeating)
  type Role = "admin" | "guest" | "teacher" | "student";

  let userRole: Role = "admin";

  userRole = "guest"; // 
  function access(role: Role): string {
    if (role === "admin") {
      return "Full system access";
    } else if (role === "teacher") {
      return "Access to teaching tools";
    } else if (role === "student") {
      return "Access to learning materials";
    } else {
      return "Limited access";
    }
  }

  console.log("Role:", userRole);
  console.log("Permission:", access(userRole));


})();
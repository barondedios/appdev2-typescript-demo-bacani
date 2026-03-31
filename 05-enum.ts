(() => {
  enum Role {
    SuperAdmin = "SuperAdmin",
    Teacher = "Teacher",
    Student = "Student",
    Enforcer = "Enforcer",
    Registrar = "Registrar",
  }

  let userRole: Role = Role.SuperAdmin;

  // Function to check permissions
  function getRoleMessage(role: Role): string {
    switch (role) {
      case Role.SuperAdmin:
        return "Full access granted";
      case Role.Teacher:
        return "Access to teaching resources";
      case Role.Student:
        return "Access to learning materials";
      case Role.Enforcer:
        return "Access to enforcement tools";
      case Role.Registrar:
        return "Access to student records";
      default:
        return "Unknown role";
    }
  }

  console.log("User Role:", userRole);
  console.log("Permission:", getRoleMessage(userRole));

  // Example: changing role
  userRole = Role.Student;
  console.log("Updated Role:", userRole);
  console.log("Permission:", getRoleMessage(userRole));
})();
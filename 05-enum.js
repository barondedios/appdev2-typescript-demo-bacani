"use strict";
(() => {
    let Role;
    (function (Role) {
        Role["SuperAdmin"] = "SuperAdmin";
        Role["Teacher"] = "Teacher";
        Role["Student"] = "Student";
        Role["Enforcer"] = "Enforcer";
        Role["Registrar"] = "Registrar";
    })(Role || (Role = {}));
    let userRole = Role.SuperAdmin;
    // Function to check permissions
    function getRoleMessage(role) {
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

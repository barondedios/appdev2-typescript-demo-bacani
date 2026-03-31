"use strict";
(() => {
    let userRole = "admin";
    // Example user object
    let user = {
        name: "Elmer",
        age: 31,
        role: userRole,
        permission: ["read", "write"],
    };
    // Function using Role type
    function access(role) {
        if (role === "admin") {
            return "Full access granted";
        }
        else if (role === "teacher") {
            return "Access to teaching tools";
        }
        else if (role === "student") {
            return "Access to learning materials";
        }
        else {
            return "Limited access";
        }
    }
    console.log("User:", user);
    console.log("Access Level:", access(user.role));
})();

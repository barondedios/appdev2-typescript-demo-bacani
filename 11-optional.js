"use strict";
function generateError(msg) {
    throw new Error(msg ?? "Unknown error occurred");
}
try {
    generateError("An error occurred");
}
catch (err) {
    console.log("Caught error:", err.message);
}

function generateError(msg?: string): never {
    throw new Error(msg ?? "Unknown error occurred");
}

try {
    generateError("An error occurred");
} catch (err: any) {
    console.log("Caught error:", err.message);
}
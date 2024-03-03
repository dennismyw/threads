// Import necessary modules and objects
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Define the configuration object
const config = {
    // Add your configuration properties here
};

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
    router: ourFileRouter,
    config: config, // Pass the configuration object here
});

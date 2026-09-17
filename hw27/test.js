import {getAuthenticatedUser} from "./authService.js";
import {createBasePromptByRole} from "./promptService.js";

const user = getAuthenticatedUser();
const basePrompt = createBasePromptByRole(user);
console.log(basePrompt)
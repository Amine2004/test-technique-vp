import { defineConfig} from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import * as dotenv from "dotenv";

const env = process.env.NODE_ENV || "staging";
console.log(`Loading environment variables from .env.${env}`);
dotenv.config({ path: `./env/.env.${env}` });


const testDir = defineBddConfig({
    features: './src/features/*.feature', 
     steps: ["src/steps/*.ts", "src/fixtures/fixture.ts"],
});
export default defineConfig({
    testDir,
    timeout: 30000,
    expect: {
        timeout: 5000
    },      
    reporter: [["html", { open: "never" }]],
    use: {
        headless: false,    
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: "on-first-retry",
        screenshot: "only-on-failure",
    },      
    projects: [
        {
            name: "chromium",
            use: { browserName: "chromium" }
        }
    ]
});
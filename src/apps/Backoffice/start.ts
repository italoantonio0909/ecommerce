import { BackofficeBackendApp } from "./BackofficeBackendApp";

try {
    new BackofficeBackendApp().start().catch(handleError);
} catch (e) {
    handleError(e);
}

function handleError(e: any) {
    console.log(e);
    process.exit(1);
}
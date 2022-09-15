import { SalesBackendApp } from './SalesBackendApp';

try {
    new SalesBackendApp().start().catch(handleError);
} catch (e) {
    handleError(e);
}

function handleError(e: any) {
    console.log(e);
    process.exit(1);
}
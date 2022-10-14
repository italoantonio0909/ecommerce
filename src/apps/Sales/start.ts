import { SalesBackendApp } from './SalesBackendApp';

try {
    new SalesBackendApp().start().catch(handleError);
} catch (e) {
    handleError(e);
}

function handleError(e: any) {
    process.exit(1);
}
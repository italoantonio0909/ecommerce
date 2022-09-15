export class BackofficeSubscriberAlreadyExists extends Error {
    constructor(email: string) {
        super(`${email} not available.`)
    }
}
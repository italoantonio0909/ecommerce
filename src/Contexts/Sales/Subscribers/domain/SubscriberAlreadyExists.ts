export class SubscriberAlreadyExists extends Error {
    constructor(email: string) {
        super(`${email} it is being used by another user.`)
    }
}
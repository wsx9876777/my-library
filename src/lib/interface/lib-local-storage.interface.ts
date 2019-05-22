export abstract class ILibLocalStorage {
    abstract getApiToken(): string
    abstract setApiToken(token): void
    abstract clearApiToken(): void
}

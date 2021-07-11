export default class Logger {
    static logger: Logger = new Logger();

    static logRequest(req: any, res: any, next: any) {
        console.log(`Time: ${Date.now()} | URL: ${req.originalUrl}`);
        next();
    }
}

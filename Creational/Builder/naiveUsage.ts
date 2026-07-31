class HttpAppTelescoping {
    static main(): void {
        const req1 = new HttpRequestTelescoping("https://api.example.com/data");

        const req2 = new HttpRequestTelescoping(
            "https://api.example.com/submit",
            "POST",
            null,
            null,
            "{\"key\":\"value\"}"
        );

        const req3 = new HttpRequestTelescoping(
            "https://api.example.com/config",
            "PUT",
            new Map([["X-API-Key", "secret"]]),
            null,
            "config_data",
            5000
        );
    }
}

HttpAppTelescoping.main();
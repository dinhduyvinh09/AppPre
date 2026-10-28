// ============================================================
// Locket Remote Config – Force US Region (REQUEST)
// Endpoint: firebaseremoteconfig.googleapis.com/.../firebase:fetch
// Tác giả: @duyvinh09
// ============================================================

if ($request.method === "POST" && $request.body) {
    try {
        var body = typeof $request.body === "string" ? JSON.parse($request.body) : $request.body;

        if (body && typeof body === "object") {
            body.country_code = "us";
            body.time_zone = "America/New_York";
            // body.language_code = "en_US";
            $done({ body: JSON.stringify(body) });
        } else {
            $done({});
        }
    } catch (e) {
        $done({});
    }
} else {
    $done({});
}
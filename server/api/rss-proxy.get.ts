export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event);
        const url = query.url as string;

        if (!url) {
            throw createError({
                statusCode: 400,
                statusMessage: 'URL parameter is required'
            });
        }

        // Validate URL to prevent SSRF attacks
        const allowedDomains = [
            'tourism-review.com',
            'lonelyplanet.com',
            'travelpulse.com',
            'feeds.feedburner.com',
            'budgettravel.com',
            'travelandleisure.com',
            'rss.cnn.com',
            'cnn.com'
        ];

        const parsedUrl = new URL(decodeURIComponent(url));
        const isAllowedDomain = allowedDomains.some(domain =>
            parsedUrl.hostname.includes(domain)
        );

        if (!isAllowedDomain) {
            throw createError({
                statusCode: 403,
                statusMessage: 'Domain not allowed'
            });
        }

        console.log('🔄 Fetching RSS from:', parsedUrl.href);

        // Fetch the RSS feed with better headers
        const response = await fetch(parsedUrl.href, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml, */*',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });

        if (!response.ok) {
            console.warn(`⚠️ RSS feed returned ${response.status} for ${parsedUrl.href}`);
            throw createError({
                statusCode: response.status,
                statusMessage: `Failed to fetch RSS feed: ${response.statusText}`
            });
        }

        const rssContent = await response.text();

        // Set appropriate headers
        setHeader(event, 'Content-Type', 'application/xml');
        setHeader(event, 'Cache-Control', 'public, max-age=1800'); // Cache for 30 minutes
        setHeader(event, 'Access-Control-Allow-Origin', '*');
        setHeader(event, 'Access-Control-Allow-Methods', 'GET');

        console.log('✅ RSS feed successfully proxied');
        return rssContent;

    } catch (error) {
        console.error('❌ RSS proxy error:', error);

        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch RSS feed'
        });
    }
}); 
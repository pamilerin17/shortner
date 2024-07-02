function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    const shortUrlContainer = document.getElementById('shortUrlContainer');

    if (!longUrl) {
        alert('Please enter a URL.');
        return;
    }

    // Generate a simple random string as a mock short URL
    const shortUrl = generateShortUrl();

    // Display the short URL
    shortUrlContainer.innerHTML = `
        <p>Short URL: <a href="${longUrl}" target="_blank">${shortUrl}</a></p>
    `;
}

function generateShortUrl() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `http://short.url/${result}`;
}

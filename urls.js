async function fetchUrls() {
    // ...code to fetch the URLs...
    return {
        "nasi": ['https://tinyurl.com/2yr6vs9z', 'https://tinyurl.com/24dvcxbh', 'https://tinyurl.com/22kq2jvk', 'https://tinyurl.com/22exbrr7', 'https://tinyurl.com/25s3hjks', 'https://tinyurl.com/25qcv6au'],
        "mee": ['https://tinyurl.com/24dvcxbh', 'https://tinyurl.com/24dvcxbh', 'https://tinyurl.com/22kq2jvk', 'https://tinyurl.com/22exbrr7', 'https://tinyurl.com/25s3hjks', 'https://tinyurl.com/25qcv6au'],
        "dessert": ['https://tinyurl.com/22kq2jvk', 'https://tinyurl.com/24dvcxbh', 'https://tinyurl.com/22kq2jvk', 'https://tinyurl.com/22exbrr7', 'https://tinyurl.com/25s3hjks', 'https://tinyurl.com/25qcv6au'],
        "lauk-pauk": ['https://tinyurl.com/2yr6vs9z', 'https://tinyurl.com/24dvcxbh', 'https://tinyurl.com/22kq2jvk', 'https://tinyurl.com/22exbrr7', 'https://tinyurl.com/25s3hjks', 'https://tinyurl.com/25qcv6au'],
        "air": ['https://tinyurl.com/2yr6vs9z', 'https://tinyurl.com/24dvcxbh', 'https://tinyurl.com/22kq2jvk', 'https://tinyurl.com/22exbrr7', 'https://tinyurl.com/25s3hjks', 'https://tinyurl.com/25qcv6au']
    };
}

let urls = {};

fetchUrls().then(fetchedUrls => {
    urls = fetchedUrls;
});
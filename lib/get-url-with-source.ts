export function getUrlWithSource(source: string, url: string) {
  let urlWithSource;
  switch (source) {
    case "direct":
      urlWithSource = url;
      break;
    case "wayback":
      // Use Wayback Machine's web format with wildcard timestamp to get latest snapshot
      urlWithSource =
        `https://web.archive.org/web/*/https://` +
        url.replace(/^https?:\/\//, "");
      break;
    // case "google":
    //   const cleanUrl = url.replace(/^https?:\/+/, "");
    //   const finalUrl = `https://${cleanUrl}`;
    //   urlWithSource = `https://webcache.googleusercontent.com/search?q=cache:${encodeURIComponent(
    //     finalUrl
    //   )}`;
    //   break;
    case "jina.ai":
      urlWithSource = `https://r.jina.ai/${url}`;
      break;
    case "archive":
      urlWithSource = `http://archive.is/latest/${encodeURIComponent(url)}`;
      break;
    default:
      throw new Error(`Invalid source parameter: ${source}`);
  }
  return urlWithSource;
}

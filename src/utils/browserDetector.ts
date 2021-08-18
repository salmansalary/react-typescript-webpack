/**
 * Get the name of the current browser
 * @note The method detects the browser by features
 * @returns {string} The name of the browser
 */
export function getBrowserName(): string {
  if (isOpera()) {
    return "Opera";
  } else if (isFirefox()) {
    return "Firefox";
  } else if (isSafari()) {
    return "Safari";
  } else if (isIE()) {
    return "IE";
  } else if (isEdge()) {
    return "Edge";
  } else if (isChrome()) {
    return "Chrome";
  } else {
    return "";
  }
}

/**
 * Get the name and version of the current browser
 * @note This method detects the browser by the navigator's user agent (`navigator.userAgent`)
 * @returns {{ name: string, version: number }}
 */
export function getBrowserDetails(): { name: string; version: number } {
  const userAgent: string = navigator.userAgent;
  let temp: RegExpMatchArray;
  let match: RegExpMatchArray =
    userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
    ) || [];

  if (/trident/i.test(match[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    return { name: "IE", version: +(temp[1] || 0) };
  }

  if (match[1] === "Chrome") {
    temp = userAgent.match(/\bOPR|Edge\/(\d+)/);
    if (temp != null) {
      return { name: "Opera", version: +temp[1] };
    }
  }

  match = match[2]
    ? [match[1], match[2]]
    : [navigator.appName, navigator.appVersion, "-?"];
  temp = userAgent.match(/version\/(\d+)/i);

  if (temp != null) {
    match.splice(1, 1, temp[1]);
  }

  return { name: match[0], version: +match[1] };
}

/**
 * Check if the current browser is Opera
 * @returns {boolean} True if Opera
 */
export function isOpera(): boolean {
  return (
    (!!(window as any).opr && !!(window as any).opr.addons) ||
    !!(window as any).opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0
  );
}

/**
 * Check if the current browser is Firefox
 * @returns {boolean} True if Firefox
 */
export function isFirefox(): boolean {
  return !!(window as any).InstallTrigger;
}

/**
 * Check if the current browser is Safari
 * @returns {boolean} True if Safari
 */
export function isSafari(): boolean {
  return (
    /constructor/i.test((window as any).HTMLElement) ||
    ((p) => p.toString() === "[object SafariRemoteNotification]")(
      !(window as any)["safari"] ||
        (typeof (window as any).safari !== "undefined" &&
          (window as any).safari.pushNotification)
    )
  );
}

/**
 * Check if the current browser is IE
 * @returns {boolean} True if IE
 */
export function isIE(): boolean {
  return /*@cc_on!@*/ false || !!(document as any).documentMode;
}

/**
 * Check if the current browser is Edge
 * @returns {boolean} True if Edge
 */
export function isEdge(): boolean {
  return !(window as any).isIE && !!(window as any).StyleMedia;
}

/**
 * Check if the current browser is Chrome
 * @returns {boolean} True if Chrome
 */
export function isChrome(): boolean {
  return (
    !!(window as any).chrome &&
    (!!(window as any).chrome.webstore || !!(window as any).chrome.runtime)
  );
}

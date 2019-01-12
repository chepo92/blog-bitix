AppWhitelist whitelist = (AppWhitelist) AppWhitelist.relaxed();
whitelist.addAttribute("script", "src", "^http[s]?://speakerdeck.com/.*$");
whitelist.addAttribute("script", "src", "^http[s]?://gist.github.com/.*$");
whitelist.addAttribute("iframe", "src", "^http[s]?://www.youtube.com/embed/.*$");
whitelist.addAttribute("iframe", "src", "^http[s]?://player.vimeo.com/video/.*$");
whitelist.addAttribute("iframe", "src", "^http[s]?://rcm-eu.amazon-adsystem.com/.*$");
whitelist.addAttribute("embed", "src", "^http[s]?://www.youtube.com/v/.*$");
String content = Jsoup.clean(postContent.toString(), source.getPageUrl(), whitelist);
This branch includes Clash rules that is compatible with **nearly every version** of Clash. Obviously you'll need a Clash Premium core or anything similar for using rule-set function.**Notice: For OpenWRT, it is recommended to use OpenClash. When network is restricted, start your proxy locally(that is, on your PC or Mobile) and OpenClash uses the proxy for downloading remote rules.** It is also recommended to use GEOIP,CN,DIRECT at last before MATCH on OpenWRT. For source of GeoIP, MaxMind's GeoLite2 has its potential for you to have a try. Last but not least, it should have mentioned that you may change "tolerance" at rule-providers as half as its original when using Clash on OpenWRT.<br>
<br>
ExtensionAll includes the one possibly missing in ProxyAll & DirectAll, as well as enhancing its priority within all rules(In clash, the rule in a former position has a higher priority). Microsoft(with onedrive), Apple(AppStore, AppleDaily, AppleProxy, AppleMail, AppleNews, AppleMusic, AppleTV, iCloud, FindMy, TestFlight, iCloudPrivateRelay, FitnessPlus, Siri), Cloudflare, TeamViewer, Dell, Intel, Nvidia, Mozilla, Nike, Starbucks, Samsung, Steam.<br>
<br>
**ExtensionAll(KeyWord) can't be load as yaml rule. Please add it on manually**. Need to mention that DirectAll&DirectAll(IP) contains all services which cannot access using Not-China IPs. Services can be used with these IPs **such as Wechat(sometimes may not work)** was excluded, which means they were out.<br>
<br>
You may use template.yaml as a Clash rule's reference. **It includes ExtensionAll(KeyWord)**.<br>
<br>
It seems that SS Proxies don't work well in most region of China, therefore it's not recommended anymore. Please try using Vmess, even for games.
Currently Video calling rules supports Zoom, Matrix(Element),**VERY LITTLE part of Jitsi**. It's technically unsupportable for Skype.

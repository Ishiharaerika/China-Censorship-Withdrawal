GEOIP checker is recommended to use GeoIP2-CN by Hckl0us(https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb).You may also use MAxMind's GeoLite2 outside China.
ExtensionAll includes the one possibly missing in ProxyAll & DirectAll. Microsoft(with onedrive), Apple(AppStore, AppleDaily, AppleProxy, AppleMail, AppleNews, AppleMusic, AppleTV, iCloud, FindMy, TestFlight, iCloudPrivateRelay, FitnessPlus, Siri), Cloudflare, TeamViewer, Dell, Intel, Nvidia, Mozilla, Nike, Starbucks, Samsung, Steam.//

Customize Policy Group's Regular Expressions references.
Only include these servers "(?i)(Japan|HK)" ##this includes servers that have "Japan" or "HK". You may change it to other countries or even IPLC/IPEL. " is not needed.
Without these servers(for example IPLC) "^(?!.*?IPLC)" ##this excludes servers that have "IPLC" in its name. You may change it to country names or some other characters. Remember special characters such as "(" needs to be changed to "\(". 
Select servers both include Japan and IPLC "(Japan).*(IPLC)" ##this selects servers that have both Japan and IPLC in its name. You may change to anything you prefer. Remember special characters such as "(" needs to be changed to "\(". 
Some examples: "(Japan).*(VMess).*(IPLC)" ##servers that include Japan, VMess and IPLC in its name. "^(?!.*?IEPL).*(Japan)" ##servers exclude IEPL but include Japan in its name. "^(?!.*?IEPL).(?!.*?SS).*(Japan)" ##servers exclude both IEPL and SS while include Japan in its name.

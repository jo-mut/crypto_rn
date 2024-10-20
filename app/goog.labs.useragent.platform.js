goog.loadModule(function(exports) {
  function useUserAgentDataPlatform(ignoreClientHintsFlag) {
    ignoreClientHintsFlag = ignoreClientHintsFlag === void 0 ? false : ignoreClientHintsFlag;
    if (util.ASSUME_CLIENT_HINTS_SUPPORT) {
      return true;
    }
    if (!ignoreClientHintsFlag && !useClientHints()) {
      return false;
    }
    var userAgentData = util.getUserAgentData();
    return !!userAgentData && !!userAgentData.platform;
  }
  function isAndroid() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Android";
    }
    return util.matchUserAgent("Android");
  }
  function isIpod() {
    return util.matchUserAgent("iPod");
  }
  function isIphone() {
    return util.matchUserAgent("iPhone") && !util.matchUserAgent("iPod") && !util.matchUserAgent("iPad");
  }
  function isIpad() {
    return util.matchUserAgent("iPad");
  }
  function isIos() {
    return isIphone() || isIpad() || isIpod();
  }
  function isMacintosh() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "macOS";
    }
    return util.matchUserAgent("Macintosh");
  }
  function isLinux() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Linux";
    }
    return util.matchUserAgent("Linux");
  }
  function isWindows() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Windows";
    }
    return util.matchUserAgent("Windows");
  }
  function isChromeOS() {
    if (useUserAgentDataPlatform()) {
      return util.getUserAgentData().platform === "Chrome OS";
    }
    return util.matchUserAgent("CrOS");
  }
  function isChromecast() {
    return util.matchUserAgent("CrKey");
  }
  function isKaiOS() {
    return util.matchUserAgentIgnoreCase("KaiOS");
  }
  function getVersion() {
    var userAgentString = util.getUserAgent();
    var version = "";
    var re;
    if (isWindows()) {
      re = /Windows (?:NT|Phone) ([0-9.]+)/;
      var match = re.exec(userAgentString);
      if (match) {
        version = match[1];
      } else {
        version = "0.0";
      }
    } else if (isIos()) {
      re = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/;
      var match$jscomp$0 = re.exec(userAgentString);
      version = match$jscomp$0 && match$jscomp$0[1].replace(/_/g, ".");
    } else if (isMacintosh()) {
      re = /Mac OS X ([0-9_.]+)/;
      var match$jscomp$1 = re.exec(userAgentString);
      version = match$jscomp$1 ? match$jscomp$1[1].replace(/_/g, ".") : "10";
    } else if (isKaiOS()) {
      re = /(?:KaiOS)\/(\S+)/i;
      var match$jscomp$2 = re.exec(userAgentString);
      version = match$jscomp$2 && match$jscomp$2[1];
    } else if (isAndroid()) {
      re = /Android\s+([^\);]+)(\)|;)/;
      var match$jscomp$3 = re.exec(userAgentString);
      version = match$jscomp$3 && match$jscomp$3[1];
    } else if (isChromeOS()) {
      re = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/;
      var match$jscomp$4 = re.exec(userAgentString);
      version = match$jscomp$4 && match$jscomp$4[1];
    }
    return version || "";
  }
  function isVersionOrHigher(version) {
    return googString.compareVersions(getVersion(), version) >= 0;
  }
  "use strict";
  goog.module("goog.labs.userAgent.platform");
  goog.module.declareLegacyNamespace();
  var googString = goog.require("goog.string.internal");
  var util = goog.require("goog.labs.userAgent.util");
  var $jscomp$destructuring$var28 = goog.require("goog.labs.userAgent.highEntropy.highEntropyValue");
  var AsyncValue = $jscomp$destructuring$var28.AsyncValue;
  var Version = $jscomp$destructuring$var28.Version;
  var $jscomp$destructuring$var29 = goog.require("goog.labs.userAgent.highEntropy.highEntropyData");
  var platformVersion = $jscomp$destructuring$var29.platformVersion;
  var $jscomp$destructuring$var30 = goog.require("goog.labs.userAgent");
  var useClientHints = $jscomp$destructuring$var30.useClientHints;
  var PlatformVersion = function() {
    this.preUachHasLoaded_ = false;
  };
  PlatformVersion.prototype.getIfLoaded = function() {
    if (useUserAgentDataPlatform(true)) {
      var loadedPlatformVersion = platformVersion.getIfLoaded();
      if (loadedPlatformVersion === undefined) {
        return undefined;
      }
      return new Version(loadedPlatformVersion);
    } else if (!this.preUachHasLoaded_) {
      return undefined;
    } else {
      return new Version(getVersion());
    }
  };
  PlatformVersion.prototype.load = function() {
    var $jscomp$async$this = this;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function($jscomp$generator$context$2095170069$0) {
      if ($jscomp$generator$context$2095170069$0.nextAddress == 1) {
        if (!useUserAgentDataPlatform(true)) {
          $jscomp$async$this.preUachHasLoaded_ = true;
          return $jscomp$generator$context$2095170069$0.return(new Version(getVersion()));
          return $jscomp$generator$context$2095170069$0.jumpTo(0);
        }
        return $jscomp$generator$context$2095170069$0.yield(platformVersion.load(), 3);
      }
      return $jscomp$generator$context$2095170069$0.return(new Version($jscomp$generator$context$2095170069$0.yieldResult));
    });
  };
  PlatformVersion.prototype.resetForTesting = function() {
    platformVersion.resetForTesting();
    this.preUachHasLoaded_ = false;
  };
  var version = new PlatformVersion();
  exports = {getVersion:getVersion, isAndroid:isAndroid, isChromeOS:isChromeOS, isChromecast:isChromecast, isIos:isIos, isIpad:isIpad, isIphone:isIphone, isIpod:isIpod, isKaiOS:isKaiOS, isLinux:isLinux, isMacintosh:isMacintosh, isVersionOrHigher:isVersionOrHigher, isWindows:isWindows, version:version};
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.platform.js.map

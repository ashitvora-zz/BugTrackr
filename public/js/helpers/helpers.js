/*
	All helper functions required in the application
*/
function toQueryParams(separator) {
  var match = this.strip().match(/([^?#]*)(#.*)?$/);
  if (!match) return { };

  return match[1].split(separator || '&').inject({ }, function(hash, pair) {
    if ((pair = pair.split('='))[0]) {
      var key = decodeURIComponent(pair.shift());
      var value = pair.length > 1 ? pair.join('=') : pair[0];
      if (value != undefined) value = decodeURIComponent(value);

      if (key in hash) {
        if (!Object.isArray(hash[key])) hash[key] = [hash[key]];
        hash[key].push(value);
      }
      else hash[key] = value;
    }
    return hash;
  });
}
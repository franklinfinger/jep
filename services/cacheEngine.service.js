angular
  .module('jep')
  .service('CacheEngine',function($cacheFactory) {
    return $cacheFactory('jeopardyAPI');
});

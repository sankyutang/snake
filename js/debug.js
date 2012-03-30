window.debug = window.debug || {};

debug.info = function(msg){
        console.log("[log]" + msg);
};
debug.warn = function(msg){
        console.log("[warn]" + msg);
}
<template>
  <div class=""></div>
</template>

<script>

export default {
    mounted() {

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"2144433e4b64cb3ea28b088926d40a01d","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */


}
}
</script>

<style>

</style>
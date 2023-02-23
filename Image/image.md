<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>{{ site.title }}:Note - {{ page.title }}</title>
		<link rel="stylesheet" href="{{ site.baseurl }}/static/css/main.css"  media="screen and (min-width: 1000px)">
		<link rel="icon" href="{{ site.baseurl }}/static/favicons/favicon.svg" type="image/svg+xml">
		<script>(function() {var elms=["header","footer","section","aside","nav","article","hgroup","time","figure","figcaption"];for(var i=0;i<elms.length;i++){document.createElement(elms[i]);};	})();</script>
		<base href="https://note.idea-path.app/">
		<meta name="robots" content="noindex,nofollow,noarchive">
	</head>
<body id="T">
<div id="MAIN" class="container">

<header id="HEADER" class="header">
	<h1 id="SITETITLE"><a href="{{ site.baseurl }}" class="sitetitle">Note</a></h1>
</header>

<div id="CONTENTS" class="main">

{% assign image_files = site.static_files %}
{% for myimage in image_files %}
  {{ myimage.path }}
{% endfor %}

</div>

</div>

</div>
</body>
</html>

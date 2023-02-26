---
layout: main
title: "[A] 画像"
---

{% assign thumbnail_files = site.static_files | where: "artist", "ALNAME" | where: "extname", ".webp" %}
{% assign image_files = site.static_files | where: "artist", "ALNAME" | except: "extname", ".webp" %}
{% for thumbnail in thumbnail_files %}
  <a href="{{ image_files[forloop.length].path }}"><img src="{{ thumbnail.path }}"></a>
{% endfor %}

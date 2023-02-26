---
layout: main
title: "[A] 画像"
---

{% assign image_files = site.static_files | where: "artist", "ALNAME" | where: "extname", ".webp" %}
{% for myimage in image_files %}
  <img src="{{ myimage.path }}">
{% endfor %}

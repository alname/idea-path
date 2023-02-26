---
layout: main
title: "[A] 画像"
---

{% assign thumbnail_files = site.static_files | where: "artist", "ALNAME" | where: "extname", ".webp" %}
{% assign image_files = site.static_files | where: "artist", "ALNAME" | where_exp: "extname", "'extname' != '.webp'" %}
{% for thumbnail in thumbnail_files %}
<div class="item">
  <a href="{{ image_files[forloop.index0].path }}">
    <img src="{{ thumbnail.path }}"  height="144" loading="lazy">
  </a>
  <label for=""></label>
</div>
{% endfor %}

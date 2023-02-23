---
layout: default
title: "[A] 画像"
---

{% assign image_files = site.static_files %}
{% for myimage in image_files %}
  {% if myimage.path contains 'user0-1' %}<img src="{{ myimage.path }}"> {% endif %}
{% endfor %}

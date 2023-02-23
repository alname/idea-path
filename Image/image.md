
{% assign image_files = site.static_files %}
{% for myimage in image_files %}
  {% if myimage.path contains 'user00' %}<img src="{{ myimage.path }}"> {% endif %}
{% endfor %}
